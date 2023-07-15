import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';

const router = Router();

/**
 * ? CRUD AREAS
 */
//Create
router.post("/newArea", categoriaController.createAreas);
//Get
router.get("/getAreas", categoriaController.getAreas);
//Put
router.put("/updateAreas", categoriaController.updateAreas);
//Delete
router.put("/deleteAreas", categoriaController.deleteAreas);

/**
 * ? CRUD Lugares
 */
//Create
router.post("/newLugar", categoriaController.createLugar);
//Get
router.get("/getAreas", categoriaController.getAreas);
//Put
router.put("/updateAreas", categoriaController.updateAreas);
//Delete
router.put("/deleteAreas", categoriaController.deleteAreas);

export default router;