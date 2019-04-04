const express = require("express");
const router = express.Router();

router.use("/user", require("./api/userRoutes"));
router.use("/userInfo", require("./api/userInfoRoutes"));
router.use("/userPay", require("./api/userPayRoutes"));
router.use("/homes", require("./api/homesRoutes"));
//add more api routes here

module.exports = router;