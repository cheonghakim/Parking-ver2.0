const CommonDTO = require("../Model/CommonDTO.js");
const CommonDAO = require("../Model/CommonDAO.js");

class CommonCTR {
  constructor() {
    this.dao = new CommonDAO();
  }

  async getLog(userData) {
    let result;
    const dto = new CommonDTO();
    let { car_number } = userData;

    dto.setCarNumber(car_number);

    try {
      result = await this.dao.getLog(dto);
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
    const dto = new CommonDTO();
    let { car_number, out_date } = userData;

    dto.setCarNumber(car_number);
    dto.setOutDate(out_date);

    try {
      result = await this.dao.writeOutLog(dto);
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
    const dto = new CommonDTO();
    let result_check_member;
    let member_data;
    let log;
    let { car_number } = userData;

    dto.setCarNumber(car_number);

    try {
      result_check_member = await this.dao.checkIsMember(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result_check_member[0]) {
      if (result_check_member[0].user_state == 1) {
        return ["member"];
      } else if (result_check_member[0].user_state == -1) {
        member_data = await this.getMemberData(userData);
        log = await this.getLog(userData);
        return ["expired_member", log, member_data];
      }
    } else {
      log = await this.getLog(userData);
      return ["guest", log];
    }
  }

  async getMemberData(userData) {
    let result;
    const dto = new CommonDTO();
    let { um_key } = userData;

    dto.setUmKey(um_key);

    try {
      result = await this.dao.getMemberData(dto);
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
    const dto = new CommonDTO();
    let { car_number } = userData;
    let check_is_car = await this.checkIsCar(userData);

    dto.setCarNumber(car_number);

    if (check_is_car === "none") {
      try {
        result = await this.dao.inCar(dto);
      } catch (e) {
        console.log("error:" + e);
      }

      if (!result[0]) {
        return "failed";
      } else {
        return result;
      }
    } else if (check_is_car === "being") {
      return "already";
    } else {
      return "failed";
    }
  }

  async checkIsCar(userData) {
    let result;
    const dto = new CommonDTO();
    let { car_number } = userData;

    dto.setCarNumber(car_number);

    try {
      result = await this.dao.checkIsCar(dto);
    } catch (e) {
      console.log("error:" + e);
    }

    if (!result[0] || result === "none") {
      return "none";
    } else {
      console.log("???" + result);
      return "being";
    }
  }
}

module.exports = CommonCTR;
