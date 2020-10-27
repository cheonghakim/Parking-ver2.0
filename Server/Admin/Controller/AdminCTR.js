const AdminDAO = require("../Model/AdminDAO.js");
const AdminDTO = require("../Model/AdminDTO.js");

class Admin {
  constructor() {
    this.dao = new AdminDAO();
  }
  async loginAdmin(userData) {
    let result;
    const dto = new AdminDTO();

    let { admin_id, admin_pw } = userData;

    dto.setAdminId(admin_id);
    dto.setAdminPw(admin_pw);

    try {
      result = await this.dao.loginAdmin(dto);
    } catch (e) {
      console.log("error: " + result);
    }

    console.log("CTR:" + result);
    console.log("CTR:" + typeof result);

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
      return "failed";
    }
  }

  async getLog(userData) {
    let result;
    const dto = new AdminDTO();

    let { car_number } = userData;

    dto.setCarNumber(car_number);

    try {
      result = await this.dao.searchLog(car_number);
    } catch (e) {
      console.log("error: " + e);
    }

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
      return "failed";
    }
  }

  async getAllMember() {
    let result;

    try {
      result = await this.dao.searchAllLog();
    } catch (e) {
      console.log("error:" + e);
    }

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
      return "failed";
    }
  }
}

module.exports = Admin;
