export class AdminView {
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

  makeAdminHeader() {
    return ` <header>
        <div class="header-container">
            <div class="logo">
                <h1>제니스 주차 타워-관리자</h1>
            </div>
            <nav class="header-menu js-header-menu">로그아웃</nav>
        </div>
    </header>`;
  }

  makeAdminMainHeader(admin_id) {
    return `<header>
        <div class="header-container">
          <div class="admin-logo">
            <h1>제니스 주차 타워 - ${admin_id} 관리자님 어서오세요.</h1>
          </div>
          <nav class="header-menu js-header-menu">로그아웃</nav>
        </div>
      </header>`;
  }

  makeAdminMain() {
    return `
    <main>
      <div class="admin-main">
        <div class="admin-main-container">
          <div class="wrapper">
            <div class="admin-button-sec js-admin-main-buttons">
              <div class="button-sec-item">
                <button class="main-btn" value="change_charge">
                  <i class="fas fa-dollar-sign"></i>
                  <span class="button-text">요금수정</span>
                </button>
              </div>
              <div class="button-sec-item">
                <button class="main-btn" value="manage_users">
                  <i class="fas fa-user-cog"></i>
                  <span class="button-text">유저 관리</span>
                </button>
              </div>
              <div class="button-sec-item">
                <button class="main-btn" value="search">
                  <i class="fas fa-search"></i>
                  <span class="button-text">유저 검색</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- 반응형 메인 -->
    <div class="query-admin-main-container">
      <div class="query-admin-wrapper">
        <div class="query-admin-button-sec js-admin-main-buttons">
          <div class="query-button-sec-item">
            <button class="query-admin-main-btn" value="change_charge">
              <i class="fas fa-dollar-sign"></i>
              <span class="admin-button-text">요금 수정</span>
            </button>
          </div>
          <div class="query-button-sec-item">
            <button class="query-admin-main-btn" value="manage_users">
              <i class="fas fa-user-cog"></i>
              <span class="admin-button-text">유저 관리</span>
            </button>
          </div>
          <div class="query-button-sec-item">
            <button class="query-admin-main-btn" value="search">
              <i class="fas fa-search"></i>
              <span class="admin-button-text">유저 검색</span>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  }

  makeChangeCharge(
    current_base_time,
    current_time_charge,
    current_base_charge
  ) {
    return `    <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-admin-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">요금 및 시간 변경</p>
                    </div>
                </div>
            </div>

            <div class="center-align">
                <div class="column-align">
                    <div class="change-form-align-container">
                    <div class="change-form-align-item minus-margin-right">
                        <form class="js-change-time-form">
                            <label>현재 기준 시간: <h3 class="dynamic-data js-current_standard_time">${current_base_time}</h3></label>
                            <label class="change-label-margin">변경할 기준 시간: <input type="text"
                                    name="changed_time" required placeholder="단위: 밀리초"></label>
                            <button type="submit" class="js-change-time-btn">변경</button>
                        </form>
                    </div>
                    <div class="change-form-align-item minus-margin">
                        <form class="js-change-charge-form">
                            <label>현재 시간당 요금: <h3 class="dynamic-data js-current_standard_time">${current_time_charge}</h3></label>
                            <label class=" change-label-margin">변경할 시간당 요금: <input type="text"
                                    name="changed_time_charge"  required placeholder="단위: 원"></label>
                            </div>
                                    <div class="change-form-align-item">
                            <label >현재 기준 요금: <h3 class="dynamic-data js-current_standard_time">${current_base_charge}</h3></label>
                            <label class="change-label-margin">변경할 기준 요금: <input type="text"
                                    name="changed_charge" required placeholder="단위: 원"></label>
                            <button type="submit" class="js-change-charge-btn">변경</button>
                        </form>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</main>`;
  }

  makeManageUsers() {
    return `
    <main>
        <div class="main-container-no-img">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-admin-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">유저관리</p>
                    </div>
                </div>
            </div>
            <table class="manage-list-container js-manage-users-list">
                <tr class="manage-list-item-row">
                    <td>차량 번호</td>
                    <td>등록일</td>
                    <td>만료일</td>
                </tr>
            </table>
        </div>
    </main>

    <div class="black_bg"></div>
    <div class="modal_wrap">
        <div class="modal_close js-modal-close">close</div>
        <div>
            <div class="main-container-stretch">
                <div class="common-title-container">
                    <div class="common-title-item">
                        <div class="title-box js-admin-back-page">
                            <p class="modal-title">유저 로그</p>
                        </div>
                    </div>
                </div>

                <table class="manage-list-container js-user-log-list">
                    <tr class="modal-manage-list-item-row">
                        <td>차량 번호</td>
                        <td>입차</td>
                        <td>출차</td>
                    </tr>                    
                </table>
            </div>
        </div>
    </div>

        `;
  } //modal open은 js-manage-user-log

  makeManageUsersItem(car_number, pay_date, expire_date) {
    return ` <tr class="manage-list-item-row js-manage-users-log">
        <td>${car_number}</td>
        <td>${pay_date}</td>
        <td>${expire_date}</td>
    </tr>`;
  } //js-list-car-number,js-list-pay-date, js-list-expire-date, js-manage-users-log

  makeUserLogItem() {
    return `
        <td><input type="text" class="list-input js-list-car-number-log"></td>
        <td><input type="text" class="list-input js-list-in-date"></td>
        <td><input type="text" class="list-input js-list-out-date"></td>`;
  } //js-log-car-number, js-log-in-date, js-log-out-date

  makeSearch(car_number, member_state, pay_date, expire_date) {
    return `    <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-admin-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">검색</p>
                    </div>
                </div>
            </div>
            <div class="main-center">
                <div class="margin-top">
                    <form class="js-search-form">
                        <label>차량 번호: <input type="text" name="car_number" required></label>
                        <button type="submit" class="js-search-btn">검색</button>
                    </form>
                    <div class="search-result-container">
                        <label>차량 번호: <h3 class="dynamic-data search-result-item js-search-result">${car_number}</h3></label>
                        <label>멤버 상태: <h3 class="dynamic-data search-result-item js-search-result">${member_state}</h3></label>
                        <label>등록 일자: <h3 class="dynamic-data search-result-item js-search-result">${pay_date}</h3></label>
                        <label>만료 일자: <h3 class="dynamic-data search-result-item js-search-result">${expire_date}</h3></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
  }

  makeAdminLogin() {
    return `    <main>
    <div class="main-container-no-img row-align">
      <div class="main-container-stretch">
        <div class="common-title-container">
          <div class="common-title-item">
            <div class="title-box js-back-page">
              <i class="fas fa-arrow-left">
                <h1>뒤로</h1>
              </i>
              <p class="title-text">관리자 로그인</p>
            </div>
          </div>
        </div>

        <div class="center-align">
          <form class="form-align js-admin-login-form">
            <div>
              <label class="admin-login-id"
                >ID: <input type="text" name="admin_id" required placeholder="영문, 숫자 3글자 이상 12자 이하"
              /></label>
            </div>
            <div>
              <label class="admin-login-password"
                >Password: <input type="password" name="admin_pw" required placeholder="영문, 숫자 8글자 이상 12자 이하"
              /></label>
              <button type="submit" class="js-admin-login-btn">로그인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>`;
  }
}
