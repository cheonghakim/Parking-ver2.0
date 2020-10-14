import { Ajax } from '../Lib/Ajax.js';

export class CommonApi {
  constructor() {
    this.ajax = new Ajax();
  }
  async callMain() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet('/zenith');
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }

  async getLog(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost('/zenith/get/log', userData);
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }

  async writeOutLog(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        '/zenith/write/outlog',
        userData
      );
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }

  async checkOutCarIsMember(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        '/zenith/check/is/member',
        userData
      );
    } catch (e) {
      console.log('error: ' + e);
    }

    return result;
  }

  async inCar(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost('/zenith/in/car', userData);
    } catch (e) {
      console.log('error: ' + e);
    }

    return result;
  }

  async registerMember(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        'zenith/register/member',
        userData
      );
    } catch (e) {
      console.log('error:' + e);
    }

    return result;
  }
}
