import { MemberApi } from "../Api/MemberApi.js";
import { MemberDTO } from "../Model/MemberDTO.js";

export class MemberService {
  constructor() {
    this.api = new MemberApi();
  }
  async logout() {
    let result;

    try {
      result = await this.api.logout();
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
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

  async memberLogin(userData) {
    let result;

    try {
      result = await this.api.memberLogin(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async renew(userData) {
    let result;

    try {
      result = await this.api.renew(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      alert("통신 중 오류가 발생했습니다.");
      return;
    } else if (result === "success") {
      alert("성공적으로 갱신되었습니다.");
      return result;
    } else {
      console.log("예상치 못한 오류가 발생했습니다.");
      return;
    }
  }

  async postpone(userData) {
    let result;

    try {
      result = await this.api.postpone(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      alert("통신 중 오류가 발생했습니다.");
      return;
    } else if (result === "success") {
      alert("성공적으로 연기 되었습니다.");
      return;
    } else {
      console.log("예상치 못한 오류가 발생되었습니다.");
      return;
    }
  }

  async memberSearch(userData) {
    let result;
    let dto = new MemberDTO();

    try {
      result = await this.api.memberSearch(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result === "failed") {
      alert("통신 중 오류가 발생했습니다.");
      return;
    } else {
      alert("성공적으로 연기 되었습니다.");
      dto.setUserCarNumber(result[0].user_car_number);
      dto.setExpireDate(result[0].expire_date);
      dto.setPayDate(result[0].pay_date);
      dto.setPayMethod(result[0].pay_method);
      dto.setLeftDays(result[0].left_days);
      dto.setUserState(result[0].user_state);
      return dto;
    }
  }
}
