const express = require("express");
const router = express.Router();
const controllersUser = require("../controllers/User");

//router.get("/user/:id", controllersUser.UserId);

router.post("/user/add", controllersUser.addUser);

router.post("/user/login", controllersUser.login);
router.post("/user/logout", controllersUser.logout);

router.get("/user/me", controllersUser.getUser);

module.exports = router;
