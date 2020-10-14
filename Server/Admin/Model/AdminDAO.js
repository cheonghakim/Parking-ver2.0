const DBHandler = require("../../Common/Lib/DBhandler");
const AdminDTO = require("./AdminDTO.js");

class AdminDAO {
  constructor() {
    this.db = new DBHandler();
  }

  async loginAdmin(AdminDTO) {
    let result;
    // let query = `SELECT * from admins, users where (admin_id = '${AdminDTO.getAdminId()}') and(admin_password = '${AdminDTO.getAdminPassword()}') and (users.user_code='${UserDTO.getUserCode()}')`;
    let query = `SELECT * from admins where (admin_id = '${AdminDTO.getAdminId()}') and (admin_password = '${AdminDTO.getAdminPw()}');`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error: " + e);
    }

    console.log("DAO:" + typeof result);
    return result;
  }

  //로그
  async getAllLog(AdminDTO) {
    let result;

    let query = `Select * from guests where user_car_number = '${AdminDTO.getCarNumber()}';`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async getAllMember() {
    let result;

    let query = `select * from Members;`;

    try {
      result = await this.db.getData(query);
    } catch {
      return 0;
    }
    return 1;
  }

  //추가될 기능
  async addAdmin(AdminDTO) {
    let result;
    let ua_key = this.getUaKey();

    let query = `INSERT into values admins(ua_key,admin_id, admin_password, admin_scope) values('${ua_key}','${AdminDTO.getAdminId()}','${AdminDTO.getAdminPassword()}','${AdminDTO.getAdminScope()}');`;

    try {
      result = await this.db.putData(query);
    } catch {
      console.log("error:" + e);
    }
    return result;
  }

  async getUaKey() {
    let result;
    let ua_key;

    let query = `select ua_key from admins order by ua_key desc limit 1;`;

    try {
      result = await this.db.getData(query);
    } catch (e) {
      console.log("error:" + e);
    }

    ua_key = parseInt(result) + 1;
    return ua_key;
  }
}

module.exports = AdminDAO;
