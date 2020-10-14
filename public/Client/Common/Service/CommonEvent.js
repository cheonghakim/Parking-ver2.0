import { CommonService } from "./CommonService.js";
import { Calculation } from "../../Common/Lib/Calculation.js";

export class CommonEvent {
  constructor() {
    this.service = new CommonService();
    this.calculation = new Calculation();
  }

  async inCar(userData) {
    let result;

    try {
      result = await this.service.inCar(userData);
    } catch (e) {
      console.log("error: " + e);
    }
    if (result === "failed") {
      alert("서버 통신 중 오류가 발생했습니다.");
      return;
    } else if (result === "already") {
      alert("이미 입차한 차량입니다.");
      return;
    } else if (result === "succssed") {
      alert("어서오세요.");
      return "succssed";
    }
  }

  async outCar(userData) {
    let result;
    let bill;
    let car_number = userData.get("car_number");
    console.log("car_number_for_localStorage:" + car_number);
    localStorage.clear();
    localStorage.setItem("car_number", car_number);

    try {
      result = await this.service.outCar(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result[0] === "guest") {
      bill = this.calculation.calculateGuestCharge(result[1]);
      return ["guest", bill];
    } else if (result[0] === "expired") {
      bill = this.calculation.calculateExpiredMemberCharge(
        result[1],
        result[2]
      );
      return ["expired", bill];
    } else {
      return ["member"];
    }
  }

  async writeOutLog(userData) {
    let result;

    try {
      result = await this.service.writeOutLog(userData);
    } catch (e) {
      console.log("error: " + e);
    }

    if (result === "failed") {
      alert("통신 중 문제가 발생했습니다.");
      return;
    } else if (result === "success") {
      alert("안녕히 가세요.");
    } else {
      console.log("예기치 못한 오류가 발생했습니다.");
    }
  }

  async registerMember(userData) {
    let result;

    try {
      result = await this.service.registerMember(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      alert("통신 중 문제가 발생했습니다.");
      return;
    } else if (result === "success") {
      alert("안녕히 가세요.");
    } else {
      console.log("예기치 못한 오류가 발생했습니다.");
    }
  }

  checkCar(userData) {
    let car_weight = parseInt(userData.get("car_weight"));
    let car_height = parseInt(userData.get("car_height"));
    console.log("car_weight:" + car_weight);
    console.log("car_height:" + car_height);

    if (car_weight < 2000 || car_height < 2.4) {
      alert("입차 가능");
      return "can_come_in";
    } else {
      alert("입차 불가");
      return "can't_come_in";
    }
  }

  getRegisterBill(userData) {
    let selected = userData.get("register_class");
    let bill = this.calculation.autoSelectClass(selected);
    return bill;
  }

  payCash(userData) {
    let bill = parseInt(userData.get("bill"), 10);
    let input_money = parseInt(userData.get("input_money"), 10);

    let handle_change = this.calculation.handleChange(bill, input_money);
    if (handle_change === "ok") {
      return "pay_success";
    } else {
      return handle_change;
    }
  }

  payCard(userData) {
    return "pay_success";
  }
}
