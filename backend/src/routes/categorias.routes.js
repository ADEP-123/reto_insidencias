import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';

const router = Router();

/**
 * ? CRUD AREAS
 */
//Create
router.post("/newArea", categoriaController.createAreas);
export default router;
//Read
router.get("/getAreas", categoriaController.getAreas);
