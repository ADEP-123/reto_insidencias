import { Router } from 'express';
import { methodsHTTP as categoriaController } from '../controller/categoria.controllers.js';
import proxyTipoEquipo from '../middlewares/proxyTipoEquipo.js';
import proxyAreas from '../middlewares/proxyAreas.js';
import proxyLugares from '../middlewares/proxyLugares.js';
import proxyCategoria from '../middlewares/proxyCategoria.js';
import proxyTipo from '../middlewares/proxyTipo.js';
import proxyEquipo from '../middlewares/proxyEquipo.js';
import proxyTrainer from '../middlewares/proxyTrainer.js';
import proxyInsidencias from '../middlewares/proxyInsidencias.js';

const router = Router();

/**
 * ? CRUD AREAS
 */
//Create
router.post("/newArea", proxyAreas, categoriaController.createAreas);
//Get
router.get("/getAreas", proxyAreas, categoriaController.getAreas);
//Put
router.put("/updateAreas", proxyAreas, categoriaController.updateAreas);
//Delete
router.delete("/deleteAreas", proxyAreas, categoriaController.deleteAreas);

/**
 * ? CRUD Lugares
 */
//Create
router.post("/newLugar", proxyLugares, categoriaController.createLugar);
//Get
router.get("/getLugar", proxyLugares, categoriaController.getLugar);
//Put
router.put("/updateLugar", proxyLugares, categoriaController.updateLugar);
//Delete
router.delete("/deleteLugar", proxyLugares, categoriaController.deleteLugar);

/**
 * ? CRUD CATEGORIA
 */
//Create
router.post("/newCategoria", proxyCategoria, categoriaController.createCategoria);
//Get
router.get("/getCategoria", proxyCategoria, categoriaController.getCategoria);
//Put
router.put("/updateCategoria", proxyCategoria, categoriaController.updateCategoria);
//Delete
router.delete("/deleteCategoria", proxyCategoria, categoriaController.deleteCategoria);

/**
 * ? CRUD TIPO
 */
//Create
router.post("/newTipo", proxyTipo, categoriaController.createTipo);
//Get
router.get("/getTipo", proxyTipo, categoriaController.getTipo);
//Put
router.put("/updateTipo", proxyTipo, categoriaController.updateTipo);
//Delete
router.delete("/deleteTipo", proxyTipo, categoriaController.deleteTipo);

/**
 * ? CRUD TIPO EQUIPO
 */
//Create
router.post("/newTipoEquipo", proxyTipoEquipo, categoriaController.createTipoEquipo);
//Get
router.get("/getTipoEquipo", proxyTipoEquipo, categoriaController.getTipoEquipo);
//Put
router.put("/updateTipoEquipo", proxyTipoEquipo, categoriaController.updateTipoEquipo);
//Delete
router.delete("/deleteTipoEquipo", proxyTipoEquipo, categoriaController.deleteTipoEquipo);

/**
 * ? CRUD EQUIPO
 */
//Create
router.post("/newEquipo", proxyEquipo, categoriaController.createEquipo);
//Get
router.get("/getEquipo", proxyEquipo, categoriaController.getEquipo);
//Put
router.put("/updateEquipo", proxyEquipo, categoriaController.updateEquipo);
//Delete
router.delete("/deleteEquipo", proxyEquipo, categoriaController.deleteEquipo);

/**
 * ? CRUD TRAINER
 */
//Create
router.post("/newTrainer", proxyTrainer, categoriaController.createTrainer);
//Get
router.get("/getTrainer", proxyTrainer, categoriaController.getTrainer);
//Put
router.put("/updateTrainer", proxyTrainer, categoriaController.updateTrainer);
//Delete
router.delete("/deleteTrainer", proxyTrainer, categoriaController.deleteTrainer);

/**
 * ? CRUD INSIDENCIA
 */
//Create
router.post("/newInsidencia", proxyInsidencias, categoriaController.createInsidencia);
//Get
router.get("/getInsidencia", proxyInsidencias, categoriaController.getInsidencia);
//Put
router.put("/updateInsidencia", proxyInsidencias, categoriaController.updateInsidencia);
//Delete
router.delete("/deleteInsidencia", proxyInsidencias, categoriaController.deleteInsidencia);
export default router;