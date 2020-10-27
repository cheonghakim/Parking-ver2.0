var MemberCTR = require("../controller/MemberCTR");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

router.get("/logout", function (req, res, next) {
  res.clearCookie("member");
});

router.post("/login", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new MemberCTR();

  ctr.loginMember(userData).then(result => {
    console.log("router: " + result);
    if (result === undefined || result === null) {
      res.send("failed");
    } else {
      try {
        res.cookie("member", user_car_number, { maxAge: 600000 });
        res.send("success");
      } catch (e) {
        console.log("cookie-error:" + e);
      }
    }
  });
});

router.post("/renew", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;

  let ctr = new MemberCTR();
  ctr.renew(userData).then(result => {
    console.log("router: " + result);
    if (result === undefined || result === null) {
      res.send("failed");
    } else {
      res.send("success");
    }
  });
});

router.post("/postpone", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new MemberCTR();

  ctr.postpone(userData).then(result => {
    console.log("router: " + result);
    if (result === undefined || result === null) {
      res.send("failed");
    } else {
      res.send("success");
    }
  });
});

router.post("/search", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new MemberCTR();
  let str;
  ctr.search(userData).then(result => {
    console.log("router: " + result);
    if (result === undefined || result === null) {
      res.send("failed");
    } else {
      str = JSON.stringify(result);
      res.send(str);
    }
  });
});

module.exports = router;
