const AdminDAO = require("../Model/AdminDAO.js");
const AdminDTO = require("../Model/AdminDTO.js");

class Admin {
  async loginAdmin(userData) {
    let result;
    const dao = new AdminDAO();
    const dto = new AdminDTO();

    let { admin_id, admin_pw } = userData;

    dto.setAdminId(admin_id);
    dto.setAdminPw(admin_pw);

    try {
      result = await dao.loginAdmin(dto);
    } catch (e) {
      console.log("error: " + result);
    }

    console.log("CTR:" + result);
    console.log("CTR:" + typeof result);

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
      return;
    }
  }

  async getLog(userData) {
    let result;
    const dao = new AdminDAO();
    const dto = new AdminDTO();

    let { car_number } = userData;

    dto.setCarNumber(car_number);

    try {
      result = await dao.searchLog(car_number);
    } catch (e) {
      console.log("error: " + e);
    }

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
    }
  }

  async getAllMember() {
    let result;
    const dao = new AdminDAO();

    try {
      result = await dao.searchAllLog();
    } catch (e) {
      console.log("error:" + e);
    }

    if (result[0]) {
      return result;
    } else {
      console.log("result is undefined!" + result);
    }
  }
}

module.exports = Admin;