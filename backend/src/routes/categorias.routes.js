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
//Delete
router.delete("/deleteCategoria", categoriaController.deleteCategoria);

/**
 * ? CRUD TIPO
 */
//Create
router.post("/newTipo", categoriaController.createTipo);
//Get
router.get("/getTipo", categoriaController.getTipo);
//Put
router.put("/updateTipo", categoriaController.updateTipo);
//Delete
router.delete("/deleteTipo", categoriaController.deleteTipo);

/**
 * ? CRUD TIPO EQUIPO
 */
//Create
router.post("/newTipoEquipo", categoriaController.createTipoEquipo);
//Get
router.get("/getTipoEquipo", categoriaController.getTipoEquipo);
//Put
router.put("/updateTipoEquipo", categoriaController.updateTipoEquipo);
//Delete
router.delete("/deleteTipoEquipo", categoriaController.deleteTipoEquipo);

/**
 * ? CRUD EQUIPO
 */
//Create
router.post("/newEquipo", categoriaController.createEquipo);
//Get
router.get("/getEquipo", categoriaController.getEquipo);
//Put
router.put("/updateEquipo", categoriaController.updateEquipo);
//Delete
router.delete("/deleteEquipo", categoriaController.deleteEquipo);

/**
 * ? CRUD TRAINER
 */
//Create
router.post("/newTrainer", categoriaController.createTrainer);
//Get
router.get("/getTrainer", categoriaController.getTrainer);
//Put
router.put("/updateTrainer", categoriaController.updateTrainer);
//Delete
router.delete("/deleteTrainer", categoriaController.deleteTrainer);

/**
 * ? CRUD INSIDENCIA
 */
//Create
router.post("/newInsidencia", categoriaController.createInsidencia);
//Get
router.get("/getInsidencia", categoriaController.getInsidencia);
//Put
router.put("/updateInsidencia", categoriaController.updateInsidencia);

export default router;