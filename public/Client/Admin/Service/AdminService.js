import { AdminApi } from "../Api/AdminApi.js";
import { CarDTO } from "../../Common/Model/CarDTO.js";
import { MemberDTO } from "../../Member/Model/MemberDTO.js";

export class AdminService {
  constructor() {
    this.api = new AdminApi();
  }

  async callMain() {
    let result;

    try {
      result = await this.api.callMain();
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async logout() {
    let result;

    try {
      result = await this.api.logout();
    } catch (e) {
      console.log("error: " + e);
    }
    console.log("result:" + result);
    return result;
  }

  async adminLogin(userData) {
    let result;

    try {
      result = await this.api.adminLogin(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async manageUsers() {
    let result;
    let result_arr = [];
    let dto = new MemberDTO();

    try {
      result = await this.api.manageUsers();
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("Result is fail!" + result);
      return;
    } else {
      for (let i = 0, max = result.length; i < max; i++) {
        dto.setUserCarNumber(result[i].user_car_number);
        dto.setPayDate(result[i].pay_date);
        dto.setExpireDate(result[i].expire_date);
        result_arr.push(dto);
      }
      return result_arr;
    }
  }

  async search(userData) {
    let result;
    let result_arr = [];
    let dto = new MemberDTO();

    try {
      result = await this.api.search(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("Result is fail:" + result);
      return;
    } else {
      for (let i = 0, max = result.length; i < max; i++) {
        dto.setUserCarNumber(result[i].user_car_number);
        dto.setPayDate(result[i].pay_date);
        dto.setExpireDate(result[i].expire_date);
        dto.setUserState(result[i].user_state);
        result_arr.push(dto);
      }
      return result_arr;
    }
  }
}
