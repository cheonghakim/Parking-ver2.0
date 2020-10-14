export class CommonView {
  constructor() {
    this.path = this.getContextPath();
  }
  getContextPath() {
    var hostIndex = location.href.indexOf(location.host) + location.host.length;
    return location.href.substring(
      hostIndex,
      location.href.indexOf("/", hostIndex + 1)
    );
  }

  makeCommonHeader() {
    return `
          <header>
          <div class="header-container">
            <div class="logo">
              <h1>제니스 주차 타워</h1>
            </div>
            <nav class="header-menu js-header-menu">로그아웃</nav>
          </div>
        </header>`;
  }

  makeCommonFooter() {
    return `<footer class="footer-container">
      <h1>Copyright ⓒ SINCE 1999 ZENITH PARKING TOWER. All rights reserved</h1>
  </footer>`;
  }

  makeCheck() {
    return `     
      <main>
          <div class="main-container-no-img row-align">
              <div class="main-container-stretch">
                  <div class="common-title-container">
                      <div class="common-title-item">
                          <div class="title-box js-back-page">
                              <i class="fas fa-arrow-left">
                                  <h1>뒤로</h1>
                              </i>
                              <p class="title-text">진입 전 점검</p>
                          </div>
                      </div>
                  </div>
                  <div class="main-center">
                      <div class="check-form">
                          <form class="form-align js-check-car-form">
                              <div class="check-parking-input"><label> 주차중인 차 수: <input type="text" readonly="readonly"
                                          class="js-current-parking-cars"></label></div>
                              <div class="check-weight-input"><label>차량 무게: <input type="text" name="car_weight"
                                          placeholder="단위: Kg"></label></div>
                              <div><label>차량 높이: <input type="text" name="car_height" placeholder="단위: m"></label>
                                  <button type="submit" class="js-check-car-btn">검사</button></div>
                          </form>
                      </div>
                  </div>
  
              </div>
          </div>
      </main>
  
  `;
  } //js-current-parking-cars

  makeInCar() {
    return `      <main>
          <div class="main-container-no-img row-align">
              <div class="main-container-stretch">
                  <div class="common-title-container">
                      <div class="common-title-item">
                          <div class="title-box js-back-page">
                              <i class="fas fa-arrow-left">
                                  <h1>뒤로</h1>
                              </i>
                              <p class="title-text">입차</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="center-align">
                      <form class="js-in-car-form">
                          <label>차량 번호: <input type="text" name="car_number"></label>
                          <button type="submit" class="js-in-car-btn">입차</button>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  
  `;
  }

  makeOutCar() {
    return ` 
      <main>
          <div class="main-container-no-img row-align">
              <div class="main-container-stretch">
                  <div class="common-title-container">
                      <div class="common-title-item">
                          <div class="title-box js-back-page">
                              <i class="fas fa-arrow-left">
                                  <h1>뒤로</h1>
                              </i>
                              <p class="title-text">출차</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="center-align">
                      <form class="js-out-car-form">
                          <label>차량 번호: <input type="text" name="car_number"></label>
                          <button type="submit" class="js-out-car-btn">출차</button>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  `;
  }

  makeSelectPayMethod() {
    return `
      <main>
          <div class="select-main">
              <div class="select-pay-method-container ">
                  <div class="wrapper">
                      <div class="select-button-sec js-select-pay-method">
                          <div class="select-button-sec-item">
                              <button class="admin-main-btn" value="card">
                                  <i class="fas fa-credit-card"></i>
                                  <span class="button-text">카드 결제</span>
                              </button>
                          </div>
                          <div class="select-button-sec-item">
                              <button class="admin-main-btn" value="cash">
                                  <i class="fas fa-money-bill-alt"></i>
                                  <span class="button-text">현금 결제</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  
      <!-- 반응형 -->
      <div class="query-select-pay-method-container ">
          <div class="query-admin-wrapper">
              <div class="query-admin-button-sec js-select-pay-method">
                  <div class="admin-button-sec-item">
                      <button class="admin-main-btn" value="card">
                          <i class="fas fa-credit-card"></i>
                          <span class="admin-button-text">카드 결제</span>
                      </button>
                  </div>
                  <div class="admin-button-sec-item">
                      <button class="admin-main-btn" value="cash">
                          <i class="fas fa-money-bill-alt"></i>
                          <span class="admin-button-text">현금 결제</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>`;
  }

  makePayWithCash() {
    return `
      <main>
          <div class="main-container-no-img row-align">
              <div class="main-container-stretch">
                  <div class="common-title-container">
                      <div class="common-title-item">
                          <div class="title-box js-back-page">
                              <i class="fas fa-arrow-left">
                                  <h1>뒤로</h1>
                              </i>
                              <p class="title-text">현금 결제</p>
                          </div>
                      </div>
                  </div>
  
                  <div class="center-align">
                      <form class="js-pay-cash-form">
                          <label class="input-block">총 금액: <input class="js-bill" name="bill" readonly="readonly"></label>
                          <label>지불 금액: <input type="text" name="input_money"></label>
                          <button type="submit" class="js-pay-cash-btn">결제</button>
                      </form>
                  </div>
              </div>
          </div>
      </main>
  
      `;
  }

  makePayWithCard() {
    return ` 
  <main>
      <div class="main-container-no-img row-align">
          <div class="main-container-stretch">
              <div class="common-title-container">
                  <div class="common-title-item">
                      <div class="title-box js-back-page">
                          <i class="fas fa-arrow-left">
                              <h1>뒤로</h1>
                          </i>
                          <p class="title-text">카드 결제</p>
                      </div>
                  </div>
              </div>
  
              <div class="center-align">
                  <form class="js-pay-card-form">
                      <label class="input-block">총 금액: <input class="js-bill" name="bill" readonly="readonly"></label>
                      <label>할부: <select name="monthly_pay" class="select-box">
                              <option value="1">일시불</option>
                              <option value="2">3개월</option>
                              <option value="3">6개월</option>
                              <option value="4">12개월</option>
                          </select></label>
                      <button type="submit" class="js-pay-card-btn">결제</button>
                  </form>
              </div>
          </div>
      </div>
  </main>
  
      `;
  }

  makeRegister() {
    return `  
      <main>
          <div class="main-container-no-img row-align">
              <div class="main-container-stretch">
                  <div class="common-title-container">
                      <div class="common-title-item">
                          <div class="title-box js-back-page">
                              <i class="fas fa-arrow-left">
                                  <h1>뒤로</h1>
                              </i>
                              <p class="title-text">등록</p>
                          </div>
                      </div>
                  </div>
                  <div class="main-center">
                      <div class="margin-top">
                          <form class="js-register-form">
                              <div class="block-form">
                                  <label>차량 번호: <input type="text" name="car_number"></label>
                              </div>
  
                              <label>기간: <select name="register_class" class="select-box" required>
                                      <option value="">선택</option>
                                      <option value="1">1주일</option>
                                      <option value="2">2주일</option>
                                      <option value="3">3주일</option>
                                      <option value="4">1개월</option>
                                      <option value="5">3개월</option>
                                      <option value="6">6개월</option>
                                  </select></label>
  
                              <button type="submit" class="margin-btn js-register-btn">등록</button>
                          </form>
                      </div>
                  </div>
  
              </div>
          </div>
      </main>
    
  `;
  }

  makeMain() {
    return `     <main>
          <div class="main">
              <div class="main-container">
                  <div class="wrapper">
                      <div class="js-main-buttons button-sec">
                          <div class="button-sec-item">
                              <button class="main-btn" value="guest">
                                  <i class="fas fa-car"></i>
                                  <span class="button-text">방문자</span>
                              </button>
                          </div>
                          <div class="button-sec-item">
                              <button class="main-btn" value="member">
                                  <i class="fas fa-user-check"></i>
                                  <span class="button-text">멤버</span>
                              </button>
                          </div>
                          <div class="button-sec-item">
                              <button class="main-btn" value="admin">
                                  <i class="fas fa-users-cog"></i>
                                  <span class="button-text">관리자</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
  
      <div class="query-main-container">
          <div class="query-wrapper">
              <div class="js-main-buttons query-button-sec">
                  <div class="query-button-sec-item">
                      <button class="main-btn" value="guest">
                          <i class="fas fa-car"></i>
                          <span class="query-button-text">방문자</span>
                      </button>
                  </div>
                  <div class="query-button-sec-item">
                      <button class="main-btn" value="member">
                          <i class="fas fa-user-check"></i>
                          <span class="query-button-text">멤버</span>
                      </button>
                  </div>
                  <div class="query-button-sec-item">
                      <button class="main-btn" value="admin">
                          <i class="fas fa-users-cog"></i>
                          <span class="query-button-text">관리자</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
  `;
  }

  makeGuestMain() {
    return `    
      <main>
      <div class="main">
          <div class="main-container">
              <div class="wrapper">
                  <div class="js-guest-main-buttons button-sec">
                      <div class="button-sec-item">
                          <button class="main-btn" value="in_car">
                              <i class="fas fa-parking"></i>
                              <span class="button-text">입차</span>
                          </button>
                      </div>
                      <div class="button-sec-item">
                          <button class="main-btn" value="out_car">
                              <i class="fas fa-sign-out-alt"></i>
                              <span class="button-text">출차</span>
                          </button>
                      </div>
                      <div class="button-sec-item">
                          <button class="main-btn" value="register">
                              <i class="fas fa-user-plus"></i>
                              <span class="button-text">등록</span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
  <div class="query-main-container">
      <div class="query-wrapper">
          <div class="js-guest-main-buttons query-button-sec">
              <div class="query-button-sec-item">
                  <button class="main-btn" value="in_car">
                      <i class="fas fa-parking"></i>
                      <span class="query-button-text">입차</span>
                  </button>
              </div>
              <div class="query-button-sec-item">
                  <button class="main-btn" value="out_car">
                      <i class="fas fa-sign-out-alt"></i>
                      <span class="query-button-text">출차</span>
                  </button>
              </div>
              <div class="query-button-sec-item">
                  <button class="main-btn" value="register">
                      <i class="fas fa-user-plus"></i>
                      <span class="query-button-text">등록</span>
                  </button>
              </div>
          </div>
      </div>
  </div>
  `;
  }
}
