import express from "express";
/*Rutas importadas */
import category from "./routes/category.routes.js";

/*Definimos Express */
const app = express();

/*Middleware */
app.use(express.json());

/*Rutas en uso */
app.use(category);

export default app;