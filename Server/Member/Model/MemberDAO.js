const MemberDTO = require("./MemberDTO");
const DBHandler = require("../../Common/Lib/DBhandler");

class UserDAO {
  constructor() {
    this.db = new DBHandler();
  }

  //검색후 업데이트 기능을 추가해야 한다.
  async loginMember(MemberDTO) {
    let result;
    const query = `SELECT * from members, users where (users.user_car_number = '${MemberDTO.getUserCarNumber()}') and (members.member_pw = '${MemberDTO.getMemberPw()}');`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async searchMember(MemberDTO) {
    let result;
    let query = `SELECT * from members,users where users.user_car_number = '${MemberDTO.getUserCarNumber()}'; `;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("fail: " + e);
    }
    return result;
  }

  //갱신
  async updateMember(MemberDTO) {
    let result;
    let query = `UPDATE members set pay_date = '${MemberDTO.getPayDate()}', pay_method = '${MemberDTO.getPayMethod()}', expire_date = '${MemberDTO.getExpireDate()}', left_days = '${MemberDTO.getLeftDays()}';`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error: " + e);
    }

    return result;
  }

  async updateUser(MemberDTO) {
    let result;
    let query = `UPDATE users set user_class = '${MemberDTO.getUserClass()}' where user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  //연기
  async postponeMember(MemberDTO) {
    let result;
    let query = `UPDATE members set user_state = '${MemberDTO.getUserState()}', pay_date = '${MemberDTO.getPayDate()}', expire_date = '${MemberDTO.getExpireDate()}', pay_method = '${MemberDTO.getPayMethod()}', verification_code = '${
      MemberDTO.getVerificatioCode
    }', left_days = '${
      MemberDTO.left_days
    }' where um_key = ${MemberDTO.getUmkey()};`; //where 구문 확인

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("fail: " + e);
    }
    return result;
  }

  async getExpireDate(MemberDTO) {
    let result;
    let query = `SELECT members.expire_date from members,users where users.user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async getUmKey(MemberDTO) {
    let result;
    let query = `SELECT u_id from users where user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
}

module.exports = UserDAO;
