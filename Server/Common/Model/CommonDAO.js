const CommonDTO = require("./CommonDTO");
const DBHandler = require("../Lib/DBhandler");

class CommonDAO {
  constructor() {
    this.db = new DBHandler();
  }

  async getLog(CommonDTO) {
    let result;
    let query = `Select * from guests where (car_number = "${CommonDTO.getCarNumber()}") and (out_date is null) order by g_id desc limit 1;`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }
  }

  async writeOutLog(CommonDTO) {
    let result;
    let query = `UPDATE guests set out_date = '${CommonDTO.out_date()}' where (car_number = '${CommonDTO.getCarNumber()}') and (out_date is null) order by g_id desc limit 1;`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async checkIsMember(CommonDTO) {
    let result;
    let query = `SELECT * from users where user_car_number = '${CommonDTO.getCarNumber()}';`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async getMemberData(CommonDTO) {
    let result;
    let query = `SELECT * from Members where um_key = '${CommonDTO.getUmKey()}';`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
  async checkIsCar(CommonDTO) {
    let result;
    const query = `SELECT * from guests where (car_number = '${CommonDTO.getCarNumber()}') and (out_date = null);`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      return "none";
    } else {
      return "being";
    }
  }
  async inCar(CommonDTO) {
    let result;
    let in_date = Date.now();
    let query = `INSERT into guests(car_number, in_date,out_date) values('${CommonDTO.getCarNumber()}','${in_date}',null); `;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async register(CommonDTO) {
    let result;
    let um_key = this.getUmKey();

    let query = `INSERT INTO members (um_key, user_state, pay_date, expire_date, pay_method, verification_code) Values('${um_key}','${CommonDTO.getUserState()}','${CommonDTO.getPayDate()}','${CommonDTO.getExpireDate()}', '${CommonDTO.getPayMethod()}', '${CommonDTO.getVerificationCode()}','${CommonDTO.left_days()}' );`;

    try {
      result = await this.db.putData(query);
    } catch (e) {
      console.log("error: " + e);
    }
    return result;
  }

  async getUmKey() {
    let result;
    let um_key;

    let query = `SELECT um_key from members order by um_key desc limit 1;`;
    try {
      result = await this.db.putData(query);
      um_key = parseInt(result) + 1;
    } catch (e) {
      console.log("error: " + e);
    }
    return um_key;
  }
}

module.exports = CommonDAO;
