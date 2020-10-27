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
    let query = `UPDATE users, members set members.pay_date = '${MemberDTO.getPayDate()}', members.pay_method = '${MemberDTO.getPayMethod()}', members.expire_date = '${MemberDTO.getExpireDate()}', members.left_days = '${MemberDTO.getLeftDays()}', users.user_class = '${MemberDTO.getUserClass()}' where users.user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error: " + e);
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

  async updateLeftDays(MemberDTO) {
    let result;

    const query = `UPDATE members,users set members.left_days = '${MemberDTO.getLeftDays()}' where users.user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async updateLeftDaysAndState(MemberDTO) {
    let result;
    const query = `UPDATE members, users set members.left_days = '${MemberDTO.getLeftDays()}', members.user_state = '${MemberDTO.getUserState()}' where users.user_car_number = '${MemberDTO.getUserCarNumber()}';`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error: " + e);
    }

    return result;
  }
}

module.exports = UserDAO;
