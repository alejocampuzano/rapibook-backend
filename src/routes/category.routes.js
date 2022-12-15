import { Router } from "express";
import {
     delCategory,
     getCategories,
      postCategory,
      putCategory,
      patchCategory,
     } from "../controllers/category.controller.js";

const router = Router();

/*Mis rutas */
router.get("/categories", getCategories);
router.post("/categories",postCategory);
router.put("/categories:id", putCategory);
router.patch("/categories:id", patchCategory);

router.delete("/categories/:id", delCategory);

export default router;