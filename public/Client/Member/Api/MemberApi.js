import { Ajax } from "../../Common/Lib/Ajax.js";

export class MemberApi {
  constructor() {
    this.ajax = new Ajax();
  }

  async logout() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet("/zenith/member/logout");
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }
  async callMain() {
    let result;

    try {
      result = await this.ajax.sendAjaxGet("/zenith");
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async memberLogin(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost("/zenith/member/login", userData);
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async renew(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost("/zenith/member/renew", userData);
    } catch (e) {
      console.log("error:" + e);
    }
    return result;
  }

  async postpone(userData) {
    let result;

    try {
      result = await this.ajax.sendAjaxPost(
        "/zenith/member/postpone",
        userData
      );
    } catch (e) {
      console.log("error:" + e);
    }

    return result;
  }

  async memberSearch(userData) {
    let result;

    try {
      result = await this.sendAjaxPost("/zenith/member/search", userData);
    } catch (e) {
      console.log("error: " + e);
    }

    return result;
  }
}
