import userRoutes from "./user/userRoutes";
import express from "express";

const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;
