import { CommonView } from "../../Common/View/CommonView.js";
import { MemberView } from "../View/MemberView.js";

export class MemberComponent {
  constructor() {
    this.member_view = new MemberView();
    this.common_view = new CommonView();

    // //btn
    // this.renew_btn = document.querySelector('.js-renew-btn');
    // this.postpone_btn = document.querySelector('.js-postpone-btn');
    // this.member_login_btn = document.querySelector('.js-member-login-btn');
    // this.member_search_btn = document.querySelector('.js-member-search-btn');

    // //form
    // this.renew_form = document.querySelector('.js-renew-form');
    // this.postpone_form = document.querySelector('.js-postpone-form');
    // this.member_login_form = document.querySelector('js-member-login-form');
    // this.search_form = document.querySelector('.js-member-search-form');

    // //event delegation
    // this.member_main_buttons = document.querySelectorAll(
    //   '.js-member-main-buttons'
    // );

    // //dynamic tags
    // this.member_search_result = document.querySelectorAll(
    //   '.js-member-search-result'
    // );
    // this.member_info = document.querySelectorAll('.js-member-info');
  }

  memberLogin(callback, context) {
    if (document.querySelector(".js-member-login-btn") !== undefined) {
      let member_login = document.querySelector(".js-member-login-btn");
      member_login.addEventListener("click", e => {
        e.preventDefault();
        let member_login_form = document.querySelector(".js-member-login-form");
        let userData = new FormData(member_login_form);

        for (let value of userData.values()) {
          console.log("value:" + value);
        }

        if (typeof callback === "string") {
          callback = context[callback(userdata)];
        } else if (typeof callback === "function") {
          callback.call(context, userData);
        }
      });
    }
  }

  renew(callback, context) {
    if (document.querySelector(".js-renew-btn") !== undefined) {
      let renew_btn = document.querySelector(".js-renew-btn");
      renew_btn.addEventListener("click", e => {
        e.preventDefault();
        let renew_form = document.querySelector(".js-renew-form");

        let userData = new FormData(renew_form);

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

  postpone(callback, context) {
    if (document.querySelector(".js-postpone-btn") !== undefined) {
      let postpone_btn = document.querySelector(".js-postpone-btn");
      postpone_btn.addEventListener("click", e => {
        e.preventDefault();
        let postpone_form = document.querySelector(".js-postpone-form");

        let userData = new FormData(postpone_form);

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

  memberSearch(callback, context) {
    if (document.querySelector(".js-member-search-btn") !== undefined) {
      let member_search_btn = document.querySelector(".js-member-search-btn");
      member_search_btn.addEventListener("click", e => {
        e.preventDefault();
        let member_search_form = document.querySelector(
          ".js-member-search-form"
        );
        let userData = new FormData(member_search_form);

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

  payCash(callback, context) {
    if (document.querySelector(".js-cash-pay-btn") !== undefined) {
      let pay_cash_btn = document.querySelector(".js-cash-pay-btn");
      pay_cash_btn.addEventListener("click", e => {
        e.preventDefault();
        let pay_cash_form = document.querySelector(".js-pay-cash-form");
        let userData = new FormData(pay_cash_form);

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

  payCard(callback, context) {
    if (document.querySelector(".js-pay-card-btn") !== undefined) {
      let pay_card_btn = document.querySelector(".js-pay-card-btn");
      pay_card_btn.addEventListener("click", e => {
        e.preventDefault();
        let pay_card_form = document.querySelector(".js-pay-card-form");
        let userData = new FormData(pay_card_form);

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

  //event delegation
  eventMemberMain(callback, context) {
    //web
    if (document.querySelectorAll(".js-member-main-buttons") !== undefined) {
      let member_buttons = document.querySelectorAll(".js-member-main-buttons");
      member_buttons[0].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "postpone":
            clicked = "postpone";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "renew":
            clicked = "renew";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "member_info":
            clicked = "member_info";
            this.pushState(clicked);
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

      //query
      member_buttons[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "postpone":
            clicked = "postpone";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "renew":
            clicked = "renew";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "member_info":
            clicked = "member_info";
            this.pushState(clicked);
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

  eventPayMethod(callback, context, user_input_data) {
    if (document.querySelectorAll(".js-select-pay-method") !== null) {
      let pay_method = document.querySelectorAll(".js-select-pay-method");
      pay_method[0].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "card":
            clicked = "card";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked, user_input_data)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked, user_input_data);
            }
            break;

          case "cash":
            clicked = "cash";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked, user_input_data)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked, user_input_data);
            }
            break;

          default:
            console.log("You clicked invalid area!");
            break;
        }
      });

      pay_method[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "card":
            clicked = "card";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked, user_input_data)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked, user_input_data);
            }
            break;

          case "cash":
            clicked = "cash";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked, user_input_data)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked, user_input_data);
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
    if (document.querySelector(".js-member-back-page") !== undefined) {
      let back = document.querySelector(".js-member-back-page");
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

  headerMenu(callback, context) {
    if (document.querySelector(".js-header-menu") !== null) {
      const header_menu = document.querySelector(".js-header-menu");
      header_menu.addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        if (e.target.tagName === "LI" || e.target.tagName === "A") {
          if (e.target.innerHTML.includes("로그아웃")) {
            clicked = "logout";
            this.pushState(logout);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
          }
        }
      });
    }
  }

  //make display
  makeRenew(result) {
    window.document.body.innerHTML = "";
    let header = this.member_view.makeMemberHeader();
    let main = this.member_view.makeRenew();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makePostpone() {
    window.document.body.innerHTML = "";
    let header = this.member_view.makeMemberHeader();
    let main = this.member_view.makePostpone();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeMemberInfo(result) {
    window.document.body.innerHTML = "";
    let header = this.member_view.makeMemberHeader();
    let main = this.member_view.makeMemberInfo();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeSearchResult(result) {
    console.log("SEARCH-RESULT:" + result);
    let div = document.createElement("div");
    div.innerHTML = result;

    if (document.querySelectorAll(".js-search-result") !== null) {
      const result_input = document.querySelectorAll(".js-search-result"); //차량번호, 멤버상태, 등록일자, 만료일자
      result_input[0] = result.getUserCarNumber();
      result_inpit[1] = result.getUserState();
      result_input[2] = result.getPayDate();
      result_input[3] = result.getExpireDate();
    }
  }

  makeMemberMain() {
    window.document.body.innerHTML = "";
    let header = this.member_view.makeMemberHeader();
    let main = this.member_view.makeMemberMain();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeMemberLogin() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.member_view.makeMemberLogin();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeSelectPayMethod(bill, action) {
    localStorage.setItem("action", action);
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeSelectPayMethod(bill);
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makePayWithCard() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makePayWithCard();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makePayWithCash() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makePayWithCash();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeMain(result) {
    window.document.body.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = result;

    window.document.body.appendChild(div);
  }

  pushState(clicked) {
    const title = clicked;
    const main = "/zenith";
    const member_main = "/zenith/member";
    const pay_method = "/zenith/pay/method";
    let url;
    let data;
    switch (clicked) {
      case "renew":
        url = "/zenith/member/renew";
        data = { page: member_main };
        window.history.pushState(data, title, url);
        break;
      case "postpone":
        url = "/zenith/member/postpone";
        data = { page: member_main };
        window.history.pushState(data, title, url);
        break;
      case "member_info":
        url = "/zenith/member/search";
        data = { page: member_main };
        window.history.pushState(data, title, url);
        break;
      case "cash":
        url = "/zenith/cash";
        data = { page: pay_method };
        window.history.pushState(data, title, url);
        break;
      case "card":
        url = "/zenith/card";
        data = { page: pay_method };
        window.history.pushState(data, title, url);
        break;
      case "logout":
        url = "/zenith/log/out";
        data = { page: main };
        window.history.pushState(data, title, url);
        break;
    }
  }
}
