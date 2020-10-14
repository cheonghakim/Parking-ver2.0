export class MemberDTO {
  constructor() {
    this._member_pw;
    this._user_code;
    this._user_class;
    this._user_car_number;

    this._um_key;
    this._user_state;
    this._pay_date;
    this._expire_date;
    this._pay_method;
    this._verification_code;
    this._left_days;
  }

  getMemberPw() {
    return this._member_pw;
  }
  setMemberPw(member_pw) {
    this._member_pw = member_pw;
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

  getVerification() {
    return this._verification_code;
  }
  setVerification(verification_code) {
    this._verification_code = verification_code;
  }

  getLeftDays() {
    return this._left_days;
  }
  setLeftDays(left_days) {
    this._left_days = left_days;
  }
}
