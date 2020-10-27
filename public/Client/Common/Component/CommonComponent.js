import { CommonView } from "../View/CommonView.js";
import { MemberView } from "../../Member/View/MemberView.js";
import { AdminView } from "../../Admin/View/AdminView.js";

export class CommonComponent {
  constructor() {
    this.common_view = new CommonView();
    this.member_view = new MemberView();
    this.admin_view = new AdminView();

    // //btn
    // this.check_car_btn = document.querySelector('.js-check-car-btn');
    // this.in_car_btn = document.querySelector('.js-in-car-btn');
    // this.out_car_btn = document.querySelector('.js-out-car-btn');
    // this.pay_cash_btn = document.querySelector('.js-cash-pay-btn');
    // this.pay_card_btn = document.querySelector('.js-pay-card-btn');
    // this.register_btn = document.querySelector('.js-register-btn');
    // this.logout_btn = document.querySelector('.js-logout-btn');

    // //form
    // this.check_car_form = document.querySelector('.js-check-car-form');
    // this.in_car_form = document.querySelector('.js-in-car-form');
    // this.out_car_form = document.querySelector('.js-out-car-form');
    // this.pay_cash_form = document.querySelector('.js-pay-cash-form');
    // this.pay_card_form = document.querySelector('.js-pay-card-form');
    // this.register_form = document.querySelector('.js-register-form');

    // //doms for event delegation
    // this.main_buttons = document.querySelectorAll('.js-main-buttons')[0];
    // this.q_main_buttons = document.querySelectorAll('.js-main-buttons')[1];
    // this.pay_method = document.querySelectorAll('.js-select-pay-method')[0];
    // this.q_pay_method = document.querySelectorAll('.js-select-pay-method')[1];
    // this.back_page = document.querySelector('.js-back-page');
  }
  //event listeners
  checkCar(callback, context) {
    if (document.querySelector(".js-check-car-btn") !== undefined) {
      let check_car_btn = document.querySelector(".js-check-car-btn");
      check_car_btn.addEventListener("click", e => {
        e.preventDefault();
        let check_car_form = document.querySelector(".js-check-car-form");
        let userData = new FormData(check_car_form);

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

  inCar(callback, context) {
    if (document.querySelector(".js-in-car-btn") !== undefined) {
      let in_car_btn = document.querySelector(".js-in-car-btn");
      in_car_btn.addEventListener("click", e => {
        e.preventDefault();
        let in_car_form = document.querySelector(".js-in-car-form");
        let userData = new FormData(in_car_form);

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

  outCar(callback, context) {
    if (document.querySelector(".js-out-car-btn") !== undefined) {
      let out_car_btn = document.querySelector(".js-out-car-btn");
      out_car_btn.addEventListener("click", e => {
        e.preventDefault();
        let out_car_form = document.querySelector(".js-out-car-form");
        let userData = new FormData(out_car_form);

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
    if (document.querySelector(".js-pay-cash-btn") !== undefined) {
      let pay_cash_btn = document.querySelector(".js-pay-cash-btn");
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

  register(callback, context) {
    if (document.querySelector(".js-register-btn") !== undefined) {
      let register_btn = document.querySelector(".js-register-btn");
      register_btn.addEventListener("click", e => {
        e.preventDefault();
        let register_form = document.querySelector(".js-register-form");
        let userData = new FormData(register_form);

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

  logout(callback, context) {
    if (document.querySelector(".js-logout-btn") !== undefined) {
      let logout = document.querySelector(".js-logout-btn");
      logout.addEventListener("click", e => {
        e.preventDefault();
        if (typeof callback === "string") {
          callback = context[callback()];
        } else if (typeof callback === "function") {
          callback.call(context);
        }
      });
    }
  }

  //event delegation
  eventMainButtons(callback, context) {
    if (document.querySelectorAll(".js-main-buttons") !== null) {
      let main = document.querySelectorAll(".js-main-buttons");
      main[0].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;
        console.log("main clicked");

        switch (value) {
          case "guest":
            clicked = "guest";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "member":
            clicked = "member";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;
          case "admin":
            clicked = "admin";
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

      main[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;
        console.log("q_main clicked");

        switch (value) {
          case "guest":
            clicked = "guest";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "member":
            clicked = "member";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "admin":
            clicked = "admin";
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

  eventGuestButtons(callback, context) {
    if (document.querySelectorAll(".js-guest-main-buttons") !== undefined) {
      let guest_buttons = document.querySelectorAll(".js-guest-main-buttons");
      guest_buttons[0].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;
        console.log("guest main clicked");

        switch (value) {
          case "in_car":
            clicked = "check_car";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "out_car":
            clicked = "out_car";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "register":
            clicked = "register";
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

      guest_buttons[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;
        console.log("q_guest main clicked");

        switch (value) {
          case "in_car":
            clicked = "check_car";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "out_car":
            clicked = "out_car";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "register":
            clicked = "register";
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

  eventPayMethod(callback, context) {
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
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "cash":
            clicked = "cash";
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

      pay_method[1].addEventListener("click", e => {
        e.preventDefault();
        let clicked;
        let value = e.target.value;

        switch (value) {
          case "card":
            clicked = "card";
            this.pushState(clicked);
            if (typeof callback === "string") {
              callback = context[callback(clicked)];
            } else if (typeof callback === "function") {
              callback.call(context, clicked);
            }
            break;

          case "cash":
            clicked = "cash";
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

  eventBack(callback, context) {
    if (document.querySelector(".js-back-page") !== undefined) {
      console.log("event-back-listening");
      let back = document.querySelector(".js-back-page");
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

  //화면 구성
  makeMain() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeMain();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeCheck() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeCheck();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeInCar() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeInCar();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeOutCar() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeOutCar();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeSelectPayMethod(bill, action) {
    localStorage.setItem("action", action);
    localStorage.setItem("bill", bill);
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeSelectPayMethod();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makePayWithCash(result) {
    let bill = localStorage.getItem("bill");

    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makePayWithCash();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);

    let bill_input = document.querySelector(".js-bill");
    bill_input.value = bill;
  }

  makeBillAgain(bill) {
    window.document.body.innerHTML = "";

    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makePayWithCash(bill);
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);

    let bill_input = document.querySelector(".js-bill");
    bill_input.value = bill;
  }

  makePayWithCard(result) {
    let bill = localStorage.getItem("bill");
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makePayWithCard(bill);
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
    let bill_input = document.querySelector(".js-bill");
    bill_input.value = bill;
  }

  makeRegister() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeRegister();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeGuestMain() {
    window.document.body.innerHTML = "";
    let header = this.common_view.makeCommonHeader();
    let main = this.common_view.makeGuestMain();
    let footer = this.common_view.makeCommonFooter();
    let div = document.createElement("div");
    div.innerHTML = header + main + footer;

    document.body.appendChild(div);
  }

  makeBackEvent(result) {
    window.document.body.innerHTML = "";
    let div = document.createElement("div");
    div.innerHTML = result;
    document.body.appendChild(div);
  }

  pushState(clicked) {
    const title = clicked;
    const guest = "/zenith/guest";
    const select_pay_method = "/zenith/pay/method";
    const check_car = "/zenith/check/car";
    const main = "/zenith";
    let data;
    let url;

    switch (clicked) {
      case "check_car":
        url = "/zenith/check/car";
        data = { page: guest };
        window.history.pushState(data, title, url);
        break;
      case "in_car":
        url = "/zenith/in/car";
        data = { page: check_car };
        window.history.pushState(data, title, url);
        break;
      case "out_car":
        url = "/zenith/out/car";
        data = { page: guest };
        window.history.pushState(data, title, url);
        break;

      case "register":
        url = "/zenith/register";
        data = { page: guest };
        window.history.pushState(data, title, url);
        break;
      case "guest":
        url = "/zenith/guest";
        data = { page: guest };
        window.history.pushState(data, title, url);
        break;
      case "pay_cash":
        url = "/zenith/pay/cash";
        data = { page: select_pay_method };
        window.history.pushState(data, title, url);
        break;
      case "pay_card":
        url = "/zenith/pay/card";
        data = { page: select_pay_method };
        window.history.pushState(data, title, url);
        break;
      case "member":
        url = "/zenith/member/login";
        data = { page: main };
        window.history.pushState(data, title, url);
        break;
      case "admin":
        url = "/zenith/admin/login";
        data = { page: main };
        window.history.pushState(data, title, url);
        break;
      case "pay_method":
        url = "/zenith/pay/method";
        data = { page: select_pay_method };
        window.history.pushState(data, title, url);
        break;
      case "main":
        url = "/zenith";
        break;
    }
  }
}
