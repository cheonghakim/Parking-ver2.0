import { MemberService } from '../Service/MemberService.js';
import { Calculation } from '../../Common/Lib/Calculation.js';

export class MemberEvent {
  constructor() {
    this.service = new MemberService();
    this.calculation = new Calculation();
  }

  async callMain() {
    let result

    try {
      result = await this.service.callMain()
    } catch (e) {
      console.log("error:" +e)
    }
    return result;
  }

  calculateRenew(userData) {
    let class_value = userData.get('renew_class');
    let bill = this.calculation.autoSelectClass(class_value);

    return bill;
  }

  calculatePostpone(userData) {
    let postpone_date = this.calculation.getPostponeDate(userData);

    return postpone_date;
  }

  async memberLogin(userData) {
    let result;

    try {
      result = await this.service.memberLogin(userData);
    } catch (e) {
      console.log('error:' + e);
    }

    if (result === 'failed') {
      alert('로그인 정보를 확인하세요.');
      return;
    } else if (result === 'success') {
      alert('어서오세요.');
      let user_car_number = userData.get('user_car_number');
      localStorage.setItem('user_car_number', user_car_number);
      return result;
    } else {
      alert('로그인 중 문제가 발생했습니다. 관리자를 호출하세요.');
      return;
    }
  }

  async renew(userData) {
    let result;

    try {
      result = await this.service.renew(userData);
    } catch (e) {
      console.log('error:' + e);
    }

    if (result === 'failed') {
      alert('서버 오류가 발생했습니다. 관리자를 호출해 주세요');
      return;
    } else if (result === 'success') {
      alert('성공적으로 갱신했습니다.');
      return result;
    }
  }

  async postpone(userData) {
    let result;

    try {
      result = await this.service.postpone(userData);
    } catch (e) {
      console.log('error:' + e);
    }

    if (result === 'failed') {
      alert('서버 오류가 발생했습니다. 관리자를 호출해 주세요');
      return;
    } else if (result === 'success') {
      alert('성공적으로 연기했습니다.');
      return result;
    }
  }

  async memberSearch(userData) {
    let result;

    try {
      result = await this.service.memberSearch(userData);
    } catch (e) {
      console.log('error:' + e);
    }

    if (result === 'failed') {
      alert('서버 통신 중 오류가 발생했습니다.');
    } else {
      return result;
    }
  }

  payCash(userData) {
    var status = true;
    let bill = userData.get('bill');
    let input_money = userData.get('input_money');

    while (status) {
      let change = this.calculation.handleChange(bill, input_money);
      if (change[0] === 'ok') {
        status = false;
      } else if (change[0] === 'more') {
        alert(`${change[1]}원을 반환 합니다.`);
        status = false;
      } else if (change[0] === 'short') {
        alert(`${change[1]}원 부족합니다.`);
        status = true;
      }
    }

    return 'pay_success';
  }

  payCard(userData) {
    return 'pay_success';
  }
}
