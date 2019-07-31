import { Router } from "express";
import controller from "./userController";

Router.param("id", controller.params);

Router.route("/")
  .get(controller.get)
  .post(controller.post);

Router.route("/:id")
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

export default Router;
