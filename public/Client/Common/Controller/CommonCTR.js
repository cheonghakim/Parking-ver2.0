import { Validation } from "../../Common/Lib/Validation.js";
import { CommonComponent } from "../Component/CommonComponent.js";
import { CommonEvent } from "../Service/CommonEvent.js";
import { AdminCTR } from "../../Admin/Controller/AdminCTR.js";
import { MemberCTR } from "../../Member/Controller/MemberCTR.js";

export class CommonCTR {
  constructor() {
    this.validation = new Validation();
    this.event = new CommonEvent();
    this.comp = new CommonComponent();
    this.admin = new AdminCTR();
    this.member = new MemberCTR();
    this.self = this;

    //to save temporaily
    this.register_data;
    this.out_car_data;
    this.bill;
    this.action;

    //event delegation
    this.comp.eventMainButtons(this.eventMainButtons, this.self);
    this.executeCheckCar();
  }

  checkCar(userData) {
    let result;

    try {
      result = this.event.checkCar(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "can_come_in") {
      this.executeInCar();
      this.comp.pushState("in_car");
    } else if (result === "can't_come_in") {
      this.executeMain();
    }
  }

  payCash(userData) {
    let pay_check = this.event.payCash(userData);
    let action = localStorage.getItem("action");

    if (pay_check === "pay_success" && action === "out_car") {
      let user_input_data = localStorage.getItem("out_car_data");
      this.writeOutLog(user_input_data);
    } else if (pay_check === "pay_success" && action === "register") {
      let user_input_data = localStorage.getItem("regiter_data");
      this.registerMember(user_input_data);
    } else {
      console.log("bill" + pay_check);
      this.executeBillAgain(pay_check);
    }
  }

  payCard(userData) {
    let pay_check = this.event.payCard(userData);
    let action = localStorage.getItem("action");
    // this.event.payCard(userData);

    if (pay_check === "pay_success" && action === "out_car") {
      let user_input_data = localStorage.getItem("out_car_data");
      this.writeOutLog(user_input_data);
    } else if (pay_check === "pay_success" && action === "register") {
      let user_input_data = localStorage.getItem("register_data");
      this.registerMember(user_input_data);
    } else {
      alert("계산이나 액션값이 올바르지 않습니다. 관리자를 호출하세요.");
      return;
    }
  }

  async inCar(userData) {
    let result;
    let check_car = this.validation.checkCarNumber(userData, "guest");

    if (check_car === 1) {
      try {
        result = await this.event.inCar(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      console.log("CTR-RESULT:" + result);
      if (result === "succssed") {
        this.executeMain();
      } else {
        console.log("문제가 발생했습니다. 관리자를 호출해 주세요.");
      }
    }
  }

  async outCar(userData) {
    let result;

    let check_car = this.validation.checkCarNumber(userData, "guest");

    if (check_car === 1) {
      try {
        result = await this.event.outCar(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      console.log("CTR-RESULT:" + result);
      switch (result[0]) {
        case "guest":
          this.action = "out_car";
          this.executeSelectPayMethod(result[1], this.action);
          break;
        case "expired":
          this.executeSelectPayMethod(result[1], this.action);
        case "member":
          alert(`안녕히 가세요.`);
          this.executeMain();
        default:
          alert("데이터 처리중 문제가 발생했습니다. 관리자를 호출해 주세요.");
          this.executeMain();
          break;
      }
    }
  }

  async writeOutLog(userData) {
    let result;

    try {
      result = await this.event.writeOutLog(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    this.out_car_data = result;
    console.log("CTR-RESULT:" + result);
  }

  async register(userData) {
    let check_car = this.validation.checkCarNumber(userData, "guest");
    let bill = this.event.getRegisterBill(userData);
    this.bill = bill;
    this.action = "register";
    this.register_data = userData;

    if (check_car === 1) {
      this.executeSelectPayMethod(this.bill, this.action);
      this.comp.pushState("pay_method");
    }
  }

  async registerMember(userData) {
    let result;

    try {
      result = await this.event.registerMember(userData);
    } catch (e) {
      console.log("erroe:" + e);
    }

    console.log("CTR-RESULT:" + result);
  }

  async logout() {
    let result;

    try {
      result = await this.event.logout();
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("CTR-RESULT:" + result);
    this.executeMain();
  }

  //callbacks of the event delegation
  eventMainButtons(clicked_by_user) {
    console.log("CTR:" + clicked_by_user);

    switch (clicked_by_user) {
      case "guest":
        this.executeGuestMain();
        break;
      case "member":
        this.member.executeMemberLogin();
        this.comp.eventBack(this.eventBack, this.self);
        break;
      case "admin":
        this.admin.executeAdminLogin();
        this.comp.eventBack(this.eventBack, this.self);
        break;
      default:
        console.log("Invalid area!");
        break;
    }
  } //don't need to communicate with the server

  eventPayMethod(clicked_by_user) {
    switch (clicked_by_user) {
      case "cash":
        this.executePayCash();
        break;
      case "card":
        this.executePayCard();
        break;
      default:
        console.log("Invalid area!");
        break;
    }
  }

  eventGuestButtons(clicked_by_user) {
    switch (clicked_by_user) {
      case "check_car":
        this.executeCheckCar();
        break;
      case "out_car":
        this.executeOutCar();
        break;
      case "register":
        this.executeRegister();
        break;
      default:
        console.log("Invalid area!");
        break;
    }
  }

  eventBack() {
    // window.history.back();
    console.log("current-url: " + window.history.state.page);
    this.checkAndAddEventListener();
  }

  checkAndAddEventListener() {
    let url = window.history.state.page;
    console.log("back-url: " + url);

    if (url === "/zenith") {
      this.comp.pushState("main");
      this.executeMain();
    } else if (url === "/zenith/guest") {
      this.comp.pushState("guest");
      this.executeGuestMain();
    } else if (url === "/zenith/check/car") {
      this.comp.pushState("check_car");
      this.executeCheckCar();
    } else if (url === "/zenith/pay/method") {
      console.log("working well");
      this.comp.pushState("pay_method");
      this.executeSelectPayMethod(this.bill, this.action);
    }
  }

  //화면과 리스너를 구성
  executeMain() {
    this.comp.makeMain();
    this.comp.eventMainButtons(this.eventMainButtons, this.self);
  }

  executeCheckCar() {
    this.comp.makeCheck();
    this.comp.checkCar(this.checkCar, this.self);
    this.comp.eventBack(this.eventBack, this.self);
  }

  executeInCar() {
    this.comp.makeInCar();
    this.comp.inCar(this.inCar, this.self);
    this.comp.eventBack(this.eventBack, this.self);
  }

  executeOutCar() {
    this.comp.makeOutCar();
    this.comp.outCar(this.outCar, this.self);
    this.comp.eventBack(this.eventBack, this.self);
  }

  executeRegister() {
    this.comp.makeRegister();
    this.comp.register(this.register, this.self);
    this.comp.eventBack(this.eventBack, this.self);
  }

  executeSelectPayMethod(bill, action) {
    console.log("normally working");
    console.log("bill:" + bill);
    this.comp.makeSelectPayMethod(bill, action);
    this.comp.eventPayMethod(this.eventPayMethod, this.self);
  }

  executePayCash(bill) {
    this.comp.makePayWithCash(bill);
    this.comp.payCash(this.payCash, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    localStorage.setItem("pay_method", "cash");
  }

  executePayCard(bill) {
    this.comp.makePayWithCard(bill);
    this.comp.payCard(this.payCard, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    localStorage.setItem("pay_method", "card");
  }

  executeBillAgain(bill) {
    this.comp.makePayWithCash(bill);
    this.comp.payCash(this.payCash, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    localStorage.setItem("pay_method", "cash");
  }

  executeGuestMain() {
    this.comp.makeGuestMain();
    this.comp.eventGuestButtons(this.eventGuestButtons, this.self);
  }
}
