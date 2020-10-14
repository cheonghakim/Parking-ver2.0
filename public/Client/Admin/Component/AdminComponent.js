import { AdminView } from "../View/AdminView.js";
import { CommonView } from "../../Common/View/CommonView.js";

export class AdminComponent {
  constructor() {
    this.admin_view = new AdminView();
    this.common_view = new CommonView();

    // //btn
    // this.change_time = document.querySelector('.js-change-time-btn');
    // this.change_charge = document.querySelector('.js-change-charge-btn');
    // this.admin_login_btn = document.querySelector('.js-admin-login-btn');

    // //form
    // this.change_time = document.querySelector('.js-change-time-form');
    // this.change_charge = document.querySelector('.js-change-charge-form');
    // this.admin_login_form = document.querySelector('.js-admin-login-form');

    // //event delegation
    // this.admin_buttons = document.querySelector('.js-admin-main-buttons');

    // //dynamic add
    // this.user_list = document.querySelector('.js-manage-users-list');
    // this.user_log = document.querySelector('js-manage-users-log');
    // this.search_result = document.querySelectorAll('js-search-result');
  }

  adminLogin(callback, context) {
    if (document.querySelector(".js-admin-login-btn") !== undefined) {
      let admin_login_btn = document.querySelector(".js-admin-login-btn");
      admin_login_btn.addEventListener("click", e => {
        e.preventDefault();
        let admin_login_form = document.querySelector(".js-admin-login-form");
        let userData = new FormData(admin_login_form);
        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  changeTime(callback, context) {
    if (document.querySelector(".js-change-time-btn") !== undefined) {
      let change_time_btn = document.querySelector(".js-change-time-btn");
      change_time_btn.addEventListener("click", e => {
        e.preventDefault();
        let change_time_form = document.querySelector(".js-change-time-form");
        let userData = new FormData(change_time_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }
        if (typeof callback === "stirng") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  changeCharge(callback, context) {
    if (document.querySelector(".js-change-charge-btn") !== undefined) {
      let change_charge_btn = document.querySelector(".js-change-charge-btn");
      change_charge_btn.addEventListener("click", e => {
        e.preventDefault();
        let change_charge_form = document.querySelector(
          ".js-change-charge-form"
        );
        let userData = new FormData(change_charge_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }
        if (typeof callback === "stirng") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  search(callback, context) {
    if (document.querySelector(".js-search-btn") !== undefined) {
      let search_btn = document.querySelector(".js-search-btn");
      search_btn.addEventListener("click", e => {
        e.preventDefault();
        let search_form = document.querySelector(".js-search-form");
        let userData = new FormData(search_form);

        for (let value of userData.values()) {
          console.log("value: " + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userData)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  getLog(callback, context) {
    if (document.querySelector(".js-manage-users-list") !== undefined) {
      let log_list = document.querySelector(".js-manage-users-list");
      log_list.addEventListener("click", e => {
        e.preventDefault();
        console.log("e.target.tagName:" + e.target.tagName.tagName);
      });
    }
  } //구현 예정

  //event delegation
  eventAdminMain(callback, context) {
    if (document.querySelectorAll("js-admin-main-buttons") !== undefined) {
      let admin_main_buttons = document.querySelectorAll(
        ".js-admin-main-buttons"
      );
      admin_main_buttons[0].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "change_charge":
            clicked = "change_charge";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "manage_users":
            clicked = "manage_users";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "search":
            clicked = "search";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          default:
            console.log("You clicked invalid area!");
            break;
        }
      });

      admin_main_buttons[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "change_charge":
            clicked = "change_charge";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "manage_users":
            clicked = "manage_users";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "search":
            clicked = "search";
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          default:
            console.log("You clicked invalid area!");
            break;
        }
      });
    }
  }

  eventBack(callback, context) {
    if (document.querySelector(".js-admin-back-page") !== undefined) {
      let back = document.querySelector(".js-admin-back-page");
      back.addEventListener("click", e => {
        e.preventDefault();
        console.log("Event back:" + e.target.tagName);
        if (e.target.tagName === "I" || e.target.tagName === "H1") {
          if (typeof callback === "string") {
            callback = context[callback()];
          } else if (typeof callback === "function") {
            callback.call(context);
          }
        } else {
          console.log("You clicked invalid area!");
        }
      });
    }
  }

  //make display
  makeAdminMain() {
    window.document.body.innerHTML = "";
    let admin_id = localStorage.getItem("admin_id");
    let header = this.admin_view.makeAdminMainHeader(admin_id);
    let main = this.admin_view.makeAdminMain();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;
    window.document.body.append(div);
  }

  makeAdminLogin() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.admin_view.makeAdminLogin();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeSearch(result) {
    window.document.body.innerHTML = "";
    let header = this.admin_view.makeAdminHeader();
    let main = this.admin_view.makeSearch();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeChangeCharge(result) {
    window.document.body.innerHTML = "";
    let header = this.admin_view.makeAdminHeader();
    let main = this.admin_view.makeChangeCharge(
      result[0],
      result[1],
      result[2]
    );
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeManageUsers(result) {
    window.document.body.innerHTML = "";
    let header = this.admin_view.makeAdminHeader();
    let main = this.admin_view.makeManageUsers();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);

    if (result !== undefined || result !== null) {
      for (let i = 0, max = result.length; i < max; i++) {
        let item = this.admin_view.makeManageUsersItem(
          result[i].car_number,
          result[i].pay_date,
          result[i].expire_date
        );
        let tr = document.createElement("tr");
        let list = document.querySelector(".js-manage-users-list");
        tr.setAttribute("class", "manage-list-item-row js-manage-users-log");
        tr.append(item);

        list.append(tr);
      }
    }
  }
}
