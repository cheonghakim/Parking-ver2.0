import { Ajax } from '../../Common/Lib/Ajax.js';

export class AdminApi {
  constructor() {
    this.ajax = new Ajax();
  }

  async adminLogin(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost('/zenith/admin/login', userData);
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }

  async manageUsers() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet('/admin/manage/users');
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }

  async search(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        '/zenith/admin/search',
        userData
      );
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }
}
