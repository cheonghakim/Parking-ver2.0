export class Validation {
  checkCarNumber(userData, code) {
    if (code === 'member') {
      var car = userData.get('user_car_number');
    } else if (code === 'guest') {
      var car = userData.get('car_number');
    }

    let str = String(car);
    const pattern1 = /\d{2,3}[가|나|다|라|마|거|너|더|러|머|버|서|어|저|고|노|도|로|모|보|소|오|조|구|누|두|루|무|부|수|우|주|바|사|아|자|허|배|호|하]\d{4}/;
    const pattern2 = /[서울|부산|대구|인천|대전|광주|울산|제주|경기|강원|충남|전남|전북|경남|경북|세종]{2}\d{2}[가|나|다|라|마|거|너|더|러|머|버|서|어|저|고|노|도|로|모|보|소|오|조|구|누|두|루|무|부|수|우|주|바|사|아|자|허|배|호|하]\d{4}/;
    if (pattern1.test(str) === true || pattern2.test(str) === true) {
      console.log('normal');
      return 1;
    } else {
      alert('잘못된 차량 번호 형식 입니다.');
      return;
    }
  }

  checkNumber(userData) {
    for (let value of userData.value) {
      if (
        isNaN(value) === true ||
        value === '' ||
        value === undefined ||
        value === null
      ) {
        alert('올바른 입력이 아닙니다.');
        return;
      } else {
        return 1;
      }
    }
  }

  checkId(userData) {
    let admin_id = userData.get('admin_id');
    let pattern = /[a-z0-9]{3,12}/;
    if (pattern.test(admin_id) === false) {
      alert('잘못된 아이디 형식입니다.');
      return;
    } else {
      return 1;
    }
  }

  checkPw(userData, code) {
    var pw;

    if (code === 'member') {
      pw = userData.get('member_pw');
    } else {
      pw = userData.get('admin_pw');
    }

    console.log('pw:' + pw);
    let pattern = /[a-z0-9]{8,12}/;
    if (pattern.test(pw) === false) {
      alert('잘못된 비밀번호 형식입니다.');
      return;
    } else {
      return 1;
    }
  }

  checkDate(userData) {
    let date = userData.get('postpone_date');
    let now = new Date();
    if (date > now || date === '' || date === undefined || date === null) {
      alert('잘못된 날짜 선택입니다.');
      return;
    } else {
      return 1;
    }
  }
}
