export class MemberView {
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
  makeMemberMain() {
    return ` 
<main>
    <div class="main">
        <div class="main-container">
            <div class="wrapper">
                <div class="js-member-main-buttons button-sec">
                    <div class="button-sec-item">
                        <button class="main-btn" value="postpone">
                            <i class="fas fa-pause-circle"></i>
                            <span class="button-text">연기</span>
                        </button>
                    </div>
                    <div class="button-sec-item">
                        <button class="main-btn" value="renew">
                            <i class="fas fa-registered"></i>
                            <span class="button-text">갱신</span>
                        </button>
                    </div>
                    <div class="button-sec-item">
                        <button class="main-btn" value="member_info">
                            <i class="fas fa-user-circle"></i>
                            <span class="button-text">멤버정보</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<div class="query-main-container">
    <div class="query-wrapper">
        <div class="js-member-main-buttons query-button-sec">
            <div class="query-button-sec-item">
                <button class="main-btn" value="postpone">
                    <i class="fas fa-pause-circle"></i>
                    <span class="query-button-text">연기</span>
                </button>
            </div>
            <div class="query-button-sec-item">
                <button class="main-btn" value="renew">
                    <i class="fas fa-registered"></i>
                    <span class="query-button-text">갱신</span>
                </button>
            </div>
            <div class="query-button-sec-item">
                <button class="main-btn" value="member_info">
                    <i class="fas fa-user-circle"></i>
                    <span class="query-button-text">멤버정보</span>
                </button>
            </div>
        </div>
    </div>
</div>
`;
  }

  makeRenew(user_car_number, pay_date, expire_date) {
    return `    <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-member-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">갱신</p>
                    </div>
                </div>
            </div>

            <div class="main-center">
                <div class="column-align">
                    <form class="js-member-search-form">
                        <label>차량 번호: <input type="text" name="car_number" required></label>
                        <button type="submit" class="js-member-search-btn">검색</button>
                    </form>

                    <div class="search-result-container">
                        <label>차량번호: <h3 class="dynamic-data search-result-item js-member-search-result">${user_car_number}</h3></label>
                        <label>등록일자: <h3 class="dynamic-data search-result-item js-member-search-result">${pay_date}</h3></label>
                        <label>만료일자: <h3 class="dynamic-data search-result-item js-member-search-result">${expire_date}</h3></label>
                    </div>

                    <form class="postpone-form js-renew-form">
                        <hidden name="user_car_number" value="${user_car_number}"></hidden>
                        <label>갱신할 기간: <select name="renew_class" class="select-box" required>
                                <option value="">선택</option>
                                <option value="1">1주일</option>
                                <option value="2">2주일</option>
                                <option value="3">3주일</option>
                                <option value="4">1개월</option>
                                <option value="5">3개월</option>
                                <option value="6">6개월</option>

                            </select></label>
                        <button type="submit" class="js-renew-btn">갱신</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>`;
  }

  makePostpone(user_car_number, pay_date, expire_date) {
    return `  <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-member-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">연기</p>
                    </div>
                </div>
            </div>

            <div class="postpone-column-align">
                <form class="js-member-search-form">
                    <label>차량 번호: <input type="text" name="user_car_number" required></label>
                    <button type="submit" class="js-member-search-btn">검색</button>
                </form>

                <div class="search-result-container">
                    <label>차량번호: <h3 class="dynamic-data search-result-item js-member-search-result">${user_car_number}</h3></label>
                    <label>등록일자: <h3 class="dynamic-data search-result-item js-member-search-result">${pay_date}</h3></label>
                    <label>만료일자: <h3 class="dynamic-data search-result-item js-member-search-result">${expire_date}</h3></label>
                </div>

                <form class="postpone-form js-postpone-form">
                    <hidden name="user_car_number" value="${user_car_number}"></hidden>
                    <label>연기할 날짜: <input type="date" name="postpone_date" required></label>
                    <button type="submit" class="js-postpone-btn">연기</button>
                </form>
            </div>
        </div>
    </div>
</main>
`;
  }

  makeMemberInfo(
    user_car_number,
    pay_date,
    expire_date,
    user_state,
    pay_method,
    left_days
  ) {
    return `    <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-member-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">멤버 정보</p>
                    </div>
                </div>
            </div>

            <div class="main-center">
                <div class="column-align">
                    <div class="search-result-container">
                        <label>차량 번호: <h3 class="dynamic-data search-result-item js-member-search-result">${user_car_number}</h3></label>
                        <label>등록 일자: <h3 class="dynamic-data search-result-item js-member-search-result">${pay_date}</h3></label>
                        <label>만료 일자: <h3 class="dynamic-data search-result-item js-member-search-result">${expire_date}</h3></label>
                        <label>멤버 상태: <h3 class="dynamic-data search-result-item js-member-search-result">${user_state}</h3></label>
                        <label>결제 수단: <h3 class="dynamic-data search-result-item js-member-search-result">${pay_method}</h3></label>
                        <label>남은 기간: <h3 class="dynamic-data search-result-item js-member-search-result">${left_days}</h3></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`;
  }

  makeMemberLogin() {
    return `    <main>
    <div class="main-container-no-img row-align">
        <div class="main-container-stretch">
            <div class="common-title-container">
                <div class="common-title-item">
                    <div class="title-box js-back-page">
                        <i class="fas fa-arrow-left">
                            <h1>뒤로</h1>
                        </i>
                        <p class="title-text">멤버 로그인</p>
                    </div>
                </div>
            </div>

            <div class="center-align">
                <form class="form-align js-member-login-form">
                    <div>
                        <label class="admin-login-id">차량 번호: <input type="text" name="user_car_number" required></label>
                    </div>
                    <div><label>Password: <input type="password" name="member_pw" required></label>
                        <button type="submit" class="js-member-login-btn">로그인</button></div>
                </form>
            </div>
        </div>
    </div>
</main>`;
  }
}
