const CommonCTR = require("../Controller/CommonCTR.js");
var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

//client에서 index요청시
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/main", function (req, res, next) {
  res.redirect("/");
});

router.post("/get/log", function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new CommonCTR();

  ctr.getLog(userData).then(result => {
    if (result === "failed") {
      res.send("failed");
    } else {
      console.log("Router-result:" + result);
      let str = JSON.stringify(result);
      res.send(str);
    }
  });
});

router.post("/write/outlog", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new CommonCTR();

  ctr.writeOutLog(userData).then(result => {
    if (result === "failed") {
      res.send("failed");
    } else {
      console.log("Router-result:" + result);
      let str = JSON.stringify(result);
      res.send(str);
    }
  });
});

router.post("/check/is/member", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new CommonCTR();

  ctr.checkIsMember(userData).then(result => {
    if (result === "failed") {
      res.send("failed");
    } else {
      console.log("Router-result:" + result);
      let str = JSON.stringify(result);
      res.send(str);
    }
  });
});

router.post("/in/car", jsonParser, function (req, res, next) {
  console.log("req-body:" + req.body);
  let userData = req.body;
  let ctr = new CommonCTR();

  ctr.inCar(userData).then(result => {
    if (result === "failed") {
      res.send("failed");
    } else if (result === "already") {
      res.send("already");
    } else {
      console.log("Router-result:" + result);
      let str = JSON.stringify(result);
      res.send(str);
    }
  });
});

module.exports = router;
