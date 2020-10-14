const CommonDTO = require("../Model/CommonDTO.js");
const CommonDAO = require("../Model/CommonDAO.js");

class CommonCTR {
  constructor() {
    this.dto = new CommonDTO();
    this.dao = new CommonDAO();
  }

  async getLog(userData) {
    let result;
    let { car_number } = userData;

    this.dto.setCarNumber(car_number);

    try {
      result = await this.dao.getLog(this.dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      return "failed";
    } else {
      return result;
    }
  }

  async wirteOutLog(userData) {
    let result;
    let { car_number, out_date } = userData;

    this.dto.setCarNumber(car_number);
    this.dto.setOutDate(out_date);

    try {
      result = await this.dao.writeOutLog(this.dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      return "failed";
    } else {
      return result;
    }
  }

  async checkIsMember(userData) {
    let result_check_member;
    let { car_number } = userData;

    this.dto.setCarNumber(car_number);

    try {
      result_check_member = await this.dao.checkIsMember(this.dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (result_check_member[0].user_state === "1") {
      return ["member"];
    } else if (result_check_member[0].user_state === "-1") {
      let um_key = result_check_member[0].u_key;
      let member_data = this.getMemberData(um_key);
      let log = this.getLog(userData);
      return ["expired_member", log, member_data];
    } else if (!result_check_member[0]) {
      let log = this.getLog(userData);
      return ["guest", log];
    }
  }

  async getMemberData(userData) {
    let result;
    let { um_key } = userData;

    this.dto.setUmKey(um_key);

    try {
      result = await this.dao.getMemberData(userData);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0]) {
      console.log("Result is undefined");
    } else {
      return result;
    }
  }

  async inCar(userData) {
    let result;
    let check_is_car;
    let { car_number } = userData;

    this.dto.setCarNumber(car_number);

    try {
      check_is_car = await this.dao.checkIsCar(this.dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (check_is_car === "none") {
      try {
        result = await this.dao.inCar(this.dto);
      } catch (e) {
        console.log("error:" + e);
      }

      if (!result[0]) {
        return "failed";
      } else {
        return result;
      }
    } else {
      return "already";
    }
  }
}

module.exports = CommonCTR;
