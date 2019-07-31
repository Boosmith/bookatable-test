import searchRoutes from "./searchRoutes";
import { Router } from "express";

const router = Router();

router.use("/users", searchRoutes);

export default router;
