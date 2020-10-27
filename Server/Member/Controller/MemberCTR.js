const MemberDAO = require("../Model/MemberDAO");
const MemberDTO = require("../Model/MemberDTO");

class User {
  constructor() {
    this.dao = new MemberDAO();
  }

  async loginMember(userData) {
    let result;
    const dto = new MemeberDTO();
    const { user_car_number, member_pw } = userData;
    console.log(user_car_number);
    console.log(member_pw);

    dto.setUserCarNumber(user_car_number);
    dto.setMemberPw(member_pw);

    try {
      result = await this.dao.loginMember(this.dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return;
    } else {
      return result;
    }
  }

  async renewMember(userData) {
    const dto = new MemeberDTO();
    let result_update_members;
    let result_update_users;
    const user_car_number = userData.car_number;
    let { pay_date, pay_method, expire_date, left_days, user_class } = userData;

    dto.setUserCarNumber(user_car_number);
    dto.setPayDate(pay_date);
    dto.setPayMethod(pay_method);
    dto.setExpireDate(expire_date);
    dto.setLeftDays(left_days);
    dto.setUserClass(user_class);

    try {
      result_update_members = await this.dao.updateMember(dto);
      result_update_users = await this.dao.updateUser(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result_update_members[0] || !result_update_users[0]) {
      console.log("Result error");
      return;
    } else {
      return result;
    }
  }

  async postponeMember(userData) {
    let result;
    const dto = new MemeberDTO();
    const um_key = this.getUmKey(userData);
    const expire_date = this.getExpireDate(userData);
    const user_car_number = userData.car_number;
    const { user_state, postpone_date, left_days } = userData;
    const new_expire_date = expire_date + postpone_date;

    dto.setUserCarNumber(user_car_number);
    dto.setUserState(user_state);
    dto.setExpireDate(new_expire_date);
    dto.setLeftDays(left_days);
    dto.setUmKey(um_key);

    try {
      result = await this.dao.postponeMember(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return;
    } else {
      return result;
    }
  }

  async getUmKey(userData) {
    let result;
    const dto = new MemeberDTO();
    const user_car_number = userData.car_number;

    dto.setUserCarNumber(user_car_number);

    try {
      result = await this.dao.getUmKey(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return;
    } else {
      return result;
    }
  }

  async getExpireDate(userData) {
    let result;
    const dto = new MemeberDTO();
    const user_car_number = userData.car_number;

    dto.setUserCarNumber(user_car_number);

    try {
      result = await this.dao.getExpireDate(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return;
    } else {
      return result;
    }
  }

  async searchMember(userData) {
    let result;
    let calculate_left_days;
    const dto = new MemeberDTO();
    const user_car_number = userData.car_number;

    dto.setUserCarNumber(user_car_number);

    try {
      result = await this.dao.searchMember(dto);
    } catch (e) {
      console.log("error: " + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return "failed";
    } else {
      calculate_left_days = this.calculateLeftDays(result);
      if (calculate_left_days[0] === "successed") {
        return calculate_left_days[1];
      }
    }
  }

  async updateLeftDays(userData) {
    let result;
    const dto = new MemberDTO();
    let { left_days, user_car_number } = userData;

    dto.setUserCarNumber(user_car_number);
    dto.setLeftDays(left_days);

    try {
      result = await this.dao.updateLeftDays(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return "failed";
    } else {
      return "successed";
    }
  }

  async updateLeftDaysAndState(userData) {
    let result;
    const dto = new MemberDTO();
    let { left_days, user_state, user_car_number } = userData;

    dto.setUserCarNumber(user_car_number);
    dto.setLeftDays(left_days);
    dto.setUserState(user_state);

    try {
      result = await this.dao.updateLeftDaysAndState(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result error");
      return "failed";
    } else {
      return result;
    }
  }

  async calculateLeftDays(userData) {
    let now = Date.now();
    let { expired_date, left_days, user_state } = userData[0];
    let calculated_date = now - expired_date;
    let a_day = 86400000;
    let result;

    if (calculated_date >= 0) {
      left_days = Math.floor(calculated_date / a_day);
      result = await this.updateLeftDays(userData);
      if (!result[0]) {
        return ["success", result];
      }
    } else if (calculated_date < 0) {
      left_days = Math.floor(calculated_date / a_day);
      user_state = -1;
      result = await this.updateLeftDaysAndState(userData);
      if (!result[0]) {
        return ["success", result];
      }
    }
  }
}

module.exports = User;
