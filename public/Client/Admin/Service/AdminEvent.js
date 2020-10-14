import { Calculation } from "../../Common/Lib/Calculation.js";
import { AdminService } from "./AdminService.js";

export class AdminEvent {
  constructor() {
    this.service = new AdminService();
    this.calculation = new Calculation();
  }

  async adminLogin(userData) {
    let result;

    try {
      result = await this.service.adminLogin(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    console.log("EVENT_RESULT:" + result);
    if (result === "failed") {
      alert("로그인 정보를 확인하세요.");
      return;
    } else if (result === "successed") {
      alert("어서오세요.");
      let admin_id = userData.get("admin_id");
      localStorage.setItem("admin_id", admin_id);
      return result;
    }
  }

  async manageUsers() {
    let result;

    try {
      result = await this.service.manageUsers();
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("통신 중 오류가 발생했습니다.");
      return;
    } else {
      return result;
    }
  }

  async search(userData) {
    let result;

    try {
      result = await this.service.search(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("통신 중 오류가 발생했습니다.");
    } else {
      return result;
    }
  }

  changeCharge(userData) {
    let changed_time_charge = (this.calculation.ten_minutes_charge = userData.get(
      "changed_time_charge"
    ));
    let changed_charge = (this.calculation.base_charge = userData.get(
      "changed_charge"
    ));

    return [changed_time_charge, changed_charge];
  }

  chageTime(userData) {
    let changed_time = (this.calculation.base_time = userData.get(
      "changed_time"
    ));
    return changed_time;
  }

  getCurrentCharge() {
    return [
      this.calculation.base_time,
      this.calculation.base_time_charge,
      this.calculation.base_charge,
    ];
  }
}
