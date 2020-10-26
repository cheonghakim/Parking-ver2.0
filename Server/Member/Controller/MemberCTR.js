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
      return;
    } else {
      return result;
    }
  }
}

module.exports = User;
