class AdminDTO {
  constructor() {
    this._admin_id;
    this._admin_pw;
    this._admin_scope;

    this._car_number;
  }

  getAdminId() {
    return this._admin_id;
  }
  setAdminId(admin_id) {
    this._admin_id = admin_id;
  }

  getAdminPw() {
    return this._admin_pw;
  }
  setAdminPw(admin_pw) {
    this._admin_pw = admin_pw;
  }

  getAdminScope() {
    return this._admin_scope;
  }
  setAdminScope(admin_scope) {
    this._admin_scope = admin_scope;
  }

  getCarNumber() {
    return this._car_number;
  }
  setCarNumber(car_number) {
    this._car_number = car_number;
  }
}

module.exports = AdminDTO;
