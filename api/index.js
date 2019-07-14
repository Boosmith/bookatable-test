import userRoutes from "./user/userRoutes";
import { Router } from "express";

Router.use("/users", userRoutes);

module.exports = Router;
