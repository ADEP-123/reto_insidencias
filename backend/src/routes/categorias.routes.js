import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';

const router = Router();

/**
 * ? CRUD AREAS
 */
//Create
router.post("/newArea", categoriaController.createAreas);
export default router;
//Get
router.get("/getAreas", categoriaController.getAreas);
//Put
router.put("/updateAreas", categoriaController.updateAreas);
//Delete
router.put("/deleteAreas", categoriaController.deleteAreas);