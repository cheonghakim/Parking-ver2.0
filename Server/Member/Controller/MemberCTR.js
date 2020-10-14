const MemberDAO = require('../Model/MemberDAO');
const MemberDTO = require('../Model/MemberDTO');

class User {
  constructor() {
    this.dao = new MemberDAO();
    this.dto = new MemberDTO();
  }

  async loginMember(userData) {
    let result;
    const { user_car_number, member_pw } = userData;
    console.log(user_car_number);
    console.log(member_pw);

    this.dto.setUserCarNumber(user_car_number);
    this.dto.setMemberPw(member_pw);

    try {
      result = await this.dao.loginMember(this.dto);
    } catch (e) {
      console.log('error:' + e);
    }

    if (!result[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }

  async renewMember(userData) {
    let result_update_members;
    let result_update_users;
    const user_car_number = userData.car_number;
    let { pay_date, pay_method, expire_date, left_days, user_class } = userData;

    this.dto.setUserCarNumber(user_car_number);
    this.dto.setPayDate(pay_date);
    this.dto.setPayMethod(pay_method);
    this.dto.setExpireDate(expire_date);
    this.dto.setLeftDays(left_days);
    this.dto.setUserClass(user_class);

    try {
      result_update_members = await this.dao.updateMember(this.dto);
      result_update_users = await this.dao.updateUser(this.dto);
    } catch (e) {
      console.log('error:' + e);
    }

    if (!result_update_members[0] || !result_update_users[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }

  async postponeMember(userData) {
    let result;
    const um_key = this.getUmKey(userData);
    const expire_date = this.getExpireDate(userData);
    const user_car_number = userData.car_number;
    const { user_state, postpone_date, left_days } = userData;
    const new_expire_date = expire_date + postpone_date;

    this.dto.setUserCarNumber(user_car_number);
    this.dto.setUserState(user_state);
    this.dto.setExpireDate(new_expire_date);
    this.dto.setLeftDays(left_days);
    this.dto.setUmKey(um_key);

    try {
      result = await this.dao.postponeMember(this.dto);
    } catch (e) {
      console.log('error:' + e);
    }

    if (!result[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }

  async getUmKey(userData) {
    let result;
    const user_car_number = userData.car_number;

    this.dto.setUserCarNumber(user_car_number);
    try {
      result = await this.dao.getUmKey(this.dto);
    } catch (e) {
      console.log('error:' + e);
    }

    if (!result[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }

  async getExpireDate(userData) {
    let result;
    const user_car_number = userData.car_number;

    this.dto.setUserCarNumber(user_car_number);

    try {
      result = await this.dao.getExpireDate(this.dto);
    } catch (e) {
      console.log('error:' + e);
    }

    if (!result[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }

  async searchMember(userData) {
    let result;
    const user_car_number = userData.car_number;

    this.dto.setUserCarNumber(user_car_number);

    try {
      result = await this.dao.searchMember(this.dto);
    } catch (e) {
      console.log('error: ' + e);
    }

    if (!result[0]) {
      console.log('Result error');
      return;
    } else {
      return result;
    }
  }
}

module.exports = User;
