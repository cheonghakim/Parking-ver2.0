import { Validation } from "../../Common/Lib/Validation.js";
import { MemberComponent } from "../Component/MemberComponent.js";
import { MemberEvent } from "../Service/MemberEvent.js";

export class MemberCTR {
  constructor() {
    this.comp = new MemberComponent();
    this.event = new MemberEvent();
    this.validation = new Validation();
    this.self = this;
  }
  //callback
  async logout() {
    let result;
    try {
      result = await this.event.logout();
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("result: " + result);
    this.callMain();
  }

  async callMain() {
    let result;

    try {
      result = await this.event.callMain();
    } catch (e) {
      console.log("error:" + e);
    }

    this.comp.makeMain(result);
  }

  async memberLogin(userData) {
    let result;
    let check_car = this.validation.checkCarNumber(userData, "member");
    let check_pw = this.validation.checkPw(userData, "member");

    if (check_car === 1 && check_pw === 1) {
      try {
        result = await this.event.memberLogin(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      if (result !== undefined) {
        this.executeMemberMain();
        console.log("CTR-RESULT:" + result);
      }
    }
  }

  renew(userData) {
    let check_pay = this.event.calculateRenew(userData);
    this.executeSelectPayMethod(check_pay, "renew", userData);
  } //계산만 실행하고 실제 통신은 renewMember에서 실행

  async renewMember(userData) {
    let result;

    try {
      result = await this.event.renew(userData);
    } catch (e) {
      console.log("error: " + e);
    }
  }

  async postpone(userData) {
    let result;
    let check_date = this.validation.checkDate(userData);

    if (check_date === 1) {
      try {
        result = await this.event.postpone(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      console.log("CTR-RESULT:" + result);
    }
  }

  async memberSearch(userData) {
    let result;
    let check_car = this.validation.checkCarNumber(userData, "member");

    if (check_car === 1) {
      try {
        result = await this.event.memberSearch(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      this.comp.makeSearchResult(result);
    }
  }

  payCash(userData, user_input_data) {
    let pay_check = this.event.payCash(userData);
    let action = localStorage.getItem("action");

    if (pay_check === "pay_success" && action === "renew") {
      this.renewMember(user_input_data);
    } else {
      alert("계산이나 액션값이 올바르지 않습니다. 관리자를 호출하세요.");
      return;
    }
  }

  payCard(userData, user_input_data) {
    let pay_check = this.event.payCard(userData);
    let action = localStorage.getItem("action");

    try {
      result = this.event.payCard(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (pay_check === "pay_success" && action === "renew") {
      this.renewMember(user_input_data);
    } else {
      alert("계산이나 액션값이 올바르지 않습니다. 관리자를 호출하세요.");
      return;
    }
  }

  eventBack() {
    // window.history.back();
    console.log("current-url" + window.history.state.page);
    this.checkAndAddEventListener();
  }

  checkAndAddEventListener() {
    let url = window.history.state.page;
    console.log("back-url " + url);
    let data;

    if (url === "/zenith/member") {
      data = { page: "/zenith/member" };
      window.history.pushState(data, "member_main", url);
      this.executeMemberMain();
    } else {
      console.log("invalid url");
    }
  }

  //event delegation
  eventMemberMain(clicked_by_user) {
    switch (clicked_by_user) {
      case "postpone":
        this.executePostpone();
        break;
      case "renew":
        this.executeRenew();
        break;
      case "member_info":
        this.executeMemberInfo();
        break;
      default:
        console.log("You clicked invalid area!");
        break;
    }
  }

  async eventHeaderMenu(clicked) {
    switch (clicked) {
      case "logout":
        this.logout();
        break;
      default:
        console.log("You clicked invalid area");
        break;
    }
  }

  //connect with other controller
  executeMemberMain() {
    this.comp.makeMemberMain();
    this.comp.eventMemberMain(this.eventMemberMain, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeMemberLogin() {
    this.comp.makeMemberLogin();
    this.comp.memberLogin(this.memberLogin, this.self);
  }

  executeRenew() {
    this.comp.makeRenew();
    this.comp.renew(this.renew, this.self);
    this.comp.memberSearch(this.memberSearch, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executePostpone() {
    this.comp.makePostpone();
    this.comp.postpone(this.postpone, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeMemberInfo(info_result) {
    this.comp.makeMemberInfo(info_result);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeSelectPayMethod(bill, action, userData) {
    this.comp.makeSelectPayMethod(bill, action);
    this.comp.eventPayMethod(this.eventPayMethod, this.self, userData);
    this.comp.eventBack(this.eventBack, this.self);
  }

  executePayCash(bill) {
    this.comp.makePayWithCash(bill);
    this.comp.payCash(this.payCash, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    localStorage.setItem("pay_method", "cash");
    this.comp.eventBack(this.eventBack, this.self);
  }

  executePayCard(bill) {
    this.comp.makePayWithCard(bill);
    this.comp.payCard(this.payCard, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    localStorage.setItem("pay_method", "card");
    this.comp.eventBack(this.eventBack, this.self);
  }
}
