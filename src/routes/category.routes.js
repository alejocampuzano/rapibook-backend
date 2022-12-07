import { Router } from "express";
import {
     getCategories,
      postCategory
     } from "../controllers/category.controller.js";

const router = Router();

/*Mis rutas */
router.get("/categories", getCategories);
router.post("/categories",postCategory);

export default router;