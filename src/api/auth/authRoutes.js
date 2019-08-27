const router = require("express").Router();
const controller = require("./authController");

router.route("/register").post(controller.register);

router.route("/login").post(controller.login);

module.exports = router;
