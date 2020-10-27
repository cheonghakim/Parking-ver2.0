var AdminCTR = require("../Controller/AdminCTR.js");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/logout", function (req, res, next) {
  res.clearCookie("member");
});

router.post("/login", jsonParser, function (req, res, next) {
  console.log("files:" + req.body);
  let userData = req.body;
  console.log(userData);
  const ctr = new AdminCTR();

  ctr.loginAdmin(userData).then(result => {
    console.log("ADMIN-ROUTER:" + result);
    if (result === "failed") {
      res.send("failed");
    } else {
      try {
        res.cookie("admin", userData.admin_id, { maxAge: 600000 });
        res.send("successed");
      } catch (e) {
        console.log("cookie-error:" + e);
      }
    }
  });
});

router.get("/manage/users", function (req, res, next) {
  const ctr = new AdminCTR();
  let str;

  ctr.manageUsers().then(result => {
    if (result === "failed") {
      res.send("failed");
    } else {
      str = JSON.stringify(result);
      res.send(str);
    }
  });
});

router.post("/search", jsonParser, function (req, res, next) {
  console.log("files:" + req.body);
  let userData = req.body;
  console.log(userData);
  const ctr = new AdminCTR();

  ctr.search(userData).then(result => {
    console.log("ADMIN-ROUTER:" + result);
    if (result === "failed") {
      res.send("failed");
    } else {
      str = JSON.stringify(result);
      res.send(str);
    }
  });
});

module.exports = router;
