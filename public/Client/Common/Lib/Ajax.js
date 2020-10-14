export class Ajax {
  constructor() {}
  async sendAjaxGet(url) {
    console.log('GET-INPUT-DATA:' + url);
    let httpRequest = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log('GET-res: ' + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };

      httpRequest.open('GET', url);
      httpRequest.send();
    });
  }

  async sendAjaxDelete(url) {
    console.log('DELETE-INPUT-DATA:' + url);
    let httpRequest = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log('DELETE-res: ' + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };

      httpRequest.open('DELETE', url);
      httpRequest.setRequestHeader('Content-Type', 'application/json');
      httpRequest.send();
    });
  }

  async sendAjaxPut(url, data) {
    console.log('PUT-INPUT-DATA:', data);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log('PUT-res: ' + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };
      httpRequest.open('Put', url, true);
      httpRequest.setRequestHeader('Content-Type', 'application/json');
      httpRequest.send(data);
    });
  }

  async sendAjaxPost(url, data) {
    let userData = this.convertToJson(data)//formData object convert to json
    console.log('POST-INPUT-DATA:', userData);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log('POST-res:' + httpRequest.responseText);
          // let obj = JSON.parse(httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };

      httpRequest.open('POST', url, true);
      httpRequest.setRequestHeader('Content-Type', 'application/json');
      httpRequest.send(userData);
    });
  }

  async sendAjaxPostFile(url, data) {
    console.log('POSTFILE-INPUT-DATA:' + data);
    let httpRequest = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          console.log('POSTFILE-res: ' + httpRequest.responseText);
          resolve(httpRequest.responseText);
        }
      };

      httpRequest.open('POST', url, true);
      httpRequest.setRequestHeader(
        'Content-Type',
        'multipart/form-data; boundary=' + data.uniqid + '; charset=UTF-8'
      );
      httpRequest.send(data);
    });
  }

  convertToJson(userData) {
    let object = {}
    userData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    return json
  }
}
