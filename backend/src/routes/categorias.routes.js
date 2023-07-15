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
router.delete("/deleteAreas", categoriaController.deleteAreas);

/**
 * ? CRUD Lugares
 */
//Create
router.post("/newLugar", categoriaController.createLugar);
//Get
router.get("/getLugar", categoriaController.getLugar);
//Put
router.put("/updateLugar", categoriaController.updateLugar);
//Delete
router.delete("/deleteLugar", categoriaController.deleteLugar);

/**
 * ? CRUD CATEGORIA
 */
//Create
router.post("/newCategoria", categoriaController.createCategoria);
//Get
router.get("/getCategoria", categoriaController.getCategoria);
//Put
router.put("/updateCategoria", categoriaController.updateCategoria);
//DELETE
router.delete("/deleteCategoria", categoriaController.deleteCategoria);


export default router;