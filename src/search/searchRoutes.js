import { Router } from "express";
import { getSearchResults } from "./searchController";

const router = Router();

router.route("/").get(getSearchResults);

export default router;
