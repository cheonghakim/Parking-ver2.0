export class CarDTO {
  constructor() {
    this._car_number;
    this._in_date;
    this._out_date;
    this._charge;
    this._is_member;
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

  getCharge() {
    return this._charge;
  }
  setCharge(charge) {
    this._charge = charge;
  }

  getIsMember() {
    return this._is_member;
  }
  setIsMember(is_member) {
    this._is_member = is_member;
  }
}
