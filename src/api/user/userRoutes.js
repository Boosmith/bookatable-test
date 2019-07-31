import { Router } from "express";
import { params, get, getOne } from "./userController";

const router = Router();

router.param("id", params);

router.route("/").get(get);

router.route("/:id").get(getOne);

export default router;
