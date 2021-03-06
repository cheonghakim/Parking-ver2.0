class UserDTO {
  constructor() {
    //guests table
    this._car_number;
    this._in_date;
    this._out_date;

    //users table
    this._user_code;
    this._user_class;
    this._user_car_number;

    //members table
    this._member_pw;
    this._um_key;
    this._user_state;
    this._pay_date;
    this._expire_date;
    this._pay_method;
    this._verification_code;
    this._left_days;

    //연기일정 계산을 위한 변수
    this._postpone_date;
  }

  getCarNumber() {
    return this._car_number;
  }
  setCarNumber(car_number) {
    this._car_number = car_number;
  }

  getInDate() {
    return this._in_date;
  }
  setInDate(in_date) {
    this._in_date = in_date;
  }

  getOutDate() {
    return this._out_date;
  }
  setOutDate(out_date) {
    this._out_date = out_date;
  }

  getUserCode() {
    return this._user_code;
  }
  setUserCode(user_code) {
    this._user_code = user_code;
  }

  getUserClass() {
    return this._user_class;
  }
  setUserClass(user_class) {
    this._user_class = user_class;
  }

  getUserCarNumber() {
    return this._user_car_number;
  }
  setUserCarNumber(user_car_number) {
    this._user_car_number = user_car_number;
  }

  getUmKey() {
    return this._um_key;
  }
  setUmKey(um_key) {
    this._um_key = um_key;
  }

  getMemberPw() {
    return this._member_pw;
  }
  setMemberPw(member_pw) {
    this._member_pw = member_pw;
  }

  getUserState() {
    return this._user_state;
  }
  setUserState(user_state) {
    this._user_state = user_state;
  }

  getPayDate() {
    return this._pay_date;
  }
  setPayDate(pay_date) {
    this._pay_date = pay_date;
  }

  getExpireDate() {
    return this._expire_date;
  }
  setExpireDate(expire_date) {
    this._expire_date = expire_date;
  }

  getPayMethod() {
    return this._pay_method;
  }
  setPayMethod(pay_method) {
    this._pay_method = pay_method;
  }

  getVerificationCode() {
    return this._verification_code;
  }
  setVerificationCode(verification_code) {
    this._verification_code = verification_code;
  }

  getLeftDays() {
    return this._left_days;
  }
  setLeftDays(left_days) {
    this._left_days = left_days;
  }

  getPostponeDate() {
    return this._postpone_date;
  }
  setPostponeDate(postpone_date) {
    this._postpone_date = postpone_date;
  }
}

module.exports = UserDTO;
