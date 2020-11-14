import { CommonApi } from "../Api/CommonApi.js";
import { CarDTO } from "../Model/CarDTO.js";
import { MemberDTO } from "../../Member/Model/MemberDTO.js";

export class CommonService {
  constructor() {
    this.api = new CommonApi();
  }

  async inCar(userData) {
    let result;

    try {
      result = await this.api.inCar(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async outCar(userData) {
    let is_member_result;

    try {
      is_member_result = await this.api.checkOutCarIsMember(userData);
    } catch (e) {
      console.log("error:" + e);
    }
    return is_member_result;
  }

  async getMemberInfo(userData) {
    let result;
    let member_dto = new MemberDTO();

    try {
      result = await this.api.getMemberInfo(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("서버 통신 중 오류가 발생했습니다.");
      return;
    } else {
      member_dto.setUserCarNumber(result[0].user_car_number);
      member_dto.setUserClass(result[0].user_class);
      member_dto.setUserState(result[0].user_state);
      member_dto.setPayDate(result[0].pay_date);
      member_dto.setPayMethod(result[0].pay_method);
      member_dto.setExpireDate(result[0].expire_date);
      member_dto.setLeftDays(result[0].left_days);

      return member_dto;
    }
  }

  async writeOutLog(userData) {
    let result;

    try {
      result = await this.api.writeOutLog(userData);
    } catch (e) {
      console.log("error: " + e);
    }

    return result;
  }

  async getLog(userData) {
    let result;
    let dto = new CarDTO();

    try {
      result = await this.api.getLog(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      console.log("서버 통신 중 오류가 발생했습니다.");
      return;
    } else {
      dto.setCarNumber(result[0].car_number);
      dto.setInDate(result[0].in_date);
      return dto;
    }
  }

  async registerMember(userData) {
    let result;

    try {
      result = await this.api.registerMember(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
}
