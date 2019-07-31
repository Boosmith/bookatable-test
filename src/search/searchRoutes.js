import { Router } from "express";
import controller from "./searchController";

Router.route("/").get(controller.get);

export default Router;
