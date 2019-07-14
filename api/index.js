import userRoutes from "./user/userRoutes";

const router = require("express").Router();

router.use("/users", userRoutes);

module.exports = router;
