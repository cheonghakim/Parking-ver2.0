export class Calculation {
  constructor() {
    //for calculating
    this.base_charge = 2000;
    this.base_time_charge = 1500;
    this.base_time = 864000;
    this.parking_charge;

    //subscription price
    this.a_week = 100000;
    this.two_weeks = 150000;
    this.three_weeks = 200000;
    this.a_month = 250000;
    this.three_months = 600000;
    this.half_year = 900000;
  }
  //service logic
  calculateGuestCharge(log) {
    let out_date = log.out_date;
    let in_date = log.in_date;
    parking_charge =
      parseInt(this.base_charge, 10) +
      [
        parseInt(this.base_time_charge) *
          [parseInt(this.base_time, 10) / parseInt(out_date - in_date, 10)],
      ]; //방문자

    parking_charge = Math.floor(parking_charge);

    return parking_charge;
  }

  calculateExpiredMemberCharge(log, member_data) {
    let expire_date = member_data.expired_date;
    let out_date = log.out_date;

    parking_charge =
      parseInt(this.base_charge, 10) +
      [
        parseInt(this.base_time_charge, 10) *
          [parseInt(this.base_time, 10) / parseInt(expire_date - out_date, 10)],
      ];

    parking_charge = Math.floor(parking_charge);
    return parking_charge;
  }

  handleChange(bill, input_money) {
    console.log(bill);
    console.log(input_money);
    if (bill === input_money) {
      return "ok";
    } else if (bill > input_money) {
      let remain = bill - input_money;
      alert(`${remain}원 부족합니다.`);
      return remain;
    } else if (bill < input_money) {
      let remain = input_money - bill;
      alert(`${remain}원 반환합니다.`);
      return "ok";
    }
  }

  autoSelectClass(selected) {
    let bill;
    switch (selected) {
      case "1":
        bill = this.a_week;
        break;
      case "2":
        bill = this.two_weeks;
        break;
      case "3":
        bill = this.three_weeks;
        break;
      case "4":
        bill = this.a_month;
        break;
      case "5":
        bill = this.three_months;
        break;
      case "6":
        bill = this.half_year;
        break;
      default:
        console.log("Wrong value is detected!");
        break;
    }
    return bill;
  }

  getPostponeDate(userData) {
    let now = Date.now();
    let postpone = userData.get("postpone_date");

    let result = Number(postpone) - now;
    return result;
  } //서버의 만료일에 더하면 된다.
}
