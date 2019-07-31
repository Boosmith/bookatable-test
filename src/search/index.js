const searchRoutes = require("./searchRoutes");
const router = require("express").Router();

router.use("/users", searchRoutes);

module.exports = router;
