import searchRoutes from "./searchRoutes";
import { Router } from "express";

Router.use("/users", searchRoutes);

module.exports = Router;
