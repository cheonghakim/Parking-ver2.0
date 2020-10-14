var mysql = require('mysql2');

class DBHandler {
  constructor() {
    this.connection = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      port: '3306',
      user: 'new_user',
      password: 'password',
      database: 'parking',
    });
  }

  connect() {
    this.connection.connect();
  }

  disconnect() {
    this.connection.end();
  }

  putData(query) {
    console.log('query_put:' + query);
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, result) => {
        return err ? resolve(err) : resolve(result);
      });
    });
  }

  getData(query) {
    console.log('query_get:' + query);
    return new Promise((resolve, reject) => {
      this.connection.query(query, (err, result) => {
        return err ? resolve(err) : resolve(result);
      });
    });
  }
}

module.exports = DBHandler;
