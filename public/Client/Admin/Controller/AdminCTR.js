import { Validation } from "../../Common/Lib/Validation.js";
import { AdminComponent } from "../Component/AdminComponent.js";
import { AdminEvent } from "../Service/AdminEvent.js";

export class AdminCTR {
  constructor() {
    this.event = new AdminEvent();
    this.comp = new AdminComponent();
    this.validation = new Validation();
    this.self = this;
  }
  //callback
  async logout() {
    let result;

    try {
      result = await this.event.logout();
    } catch (e) {
      console.log("error: " + e);
    }

    console.log("result:" + result);
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

  async adminLogin(userData) {
    let result;
    let admin_id = this.validation.checkId(userData);
    let admin_pw = this.validation.checkPw(userData, "admin");

    if (admin_id === 1 && admin_pw === 1) {
      try {
        result = await this.event.adminLogin(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      if (result !== undefined) {
        this.executeAdminMain();
        console.log("CTR-RESULT:" + result);
      }
    }
  }

  changeTime(userData) {
    let result;
    let check_input = this.validation.checkNumber(userData);

    if (check_input === 1) {
      try {
        result = this.event.changeTime(userData);
      } catch (e) {
        console.log("error: " + e);
      }

      console.log("CTR-RESULT:" + result);
    }
  }

  changeCharge(userData) {
    let result;
    let check_input = this.validation.checkNumber(userData);

    if (check_input === 1) {
      try {
        result = this.event.changeCharge(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      console.log("CTR-RESULT:" + result);
    }
  }

  async manageUsers() {
    let result;

    try {
      result = await this.event.manageUsers();
    } catch (e) {
      console.log("error:" + e);
    }
    if (result !== undefined) {
      this.executeAdminManageUsers(result);
    }
  }

  async getLog(userData) {
    let result;
    let check_car = this.validation.checkCarNumber(userData);

    if (check_car === 1) {
      try {
        result = await this.event.getLog(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      console.log("CTR-RESULT:" + result);
    }
  }

  async search(userData) {
    let result;
    let check_car = this.validation.checkCarNumber(userData, "member");

    if (check_car === 1) {
      try {
        result = await this.event.search(userData);
      } catch (e) {
        console.log("error:" + e);
      }

      this.executeAdminSearch(result);
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

    if (url === "/zenith/admin") {
      data = { page: "/zenith/admin" };
      window.history.pushState(data, "admin_main", url);
      this.executeAdminMain();
    } else {
      console.log("invalid url");
    }
  }

  //event delegation
  async eventAdminMain(clicked_by_user) {
    switch (clicked_by_user) {
      case "change_charge":
        this.executeAdminChangeCharge();
        break;
      case "manage_users":
        this.manageUsers();
        break;
      case "search":
        this.executeAdminSearch();
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
        console.log("You clicked invalid area!");
        break;
    }
  }
  //화면을 구성하고 리스너를 추가한다
  executeAdminLogin() {
    this.comp.makeAdminLogin();
    this.comp.adminLogin(this.adminLogin, this, self);
  }

  executeAdminMain() {
    this.comp.makeAdminMain();
    this.comp.eventAdminMain(this.eventAdminMain, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeAdminChangeCharge() {
    let current_charge_arr = this.event.getCurrentCharge();
    this.comp.makeChangeCharge(current_charge_arr);
    this.comp.changeCharge(this.changeCharge, this.self);
    this.comp.changeTime(this.changeTime, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeAdminManageUsers() {
    this.comp.makeManageUsers();
    this.comp.getLog(this.getLog, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }

  executeAdminSearch(result) {
    this.comp.makeSearch(result);
    this.comp.search(this.search, this.self);
    this.comp.eventBack(this.eventBack, this.self);
    this.comp.eventHeaderMenu(this.eventHeaderMenu, this.self);
  }
}
