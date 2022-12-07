import { Router } from "express";
import { getCategories } from "../controllers/categorycontroller.js";

const router = Router();

/*Mis rutas */
router.get("/categories", getCategories);

export default router;