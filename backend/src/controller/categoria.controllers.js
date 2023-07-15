import { query } from "express";
import getConnection from "../db/database.js";
const connection = getConnection();

/**
 * ? CRUD AREAS
 */

//Create
const createAreas = (req, res) => {
    const { name_area } = req.query
    connection.query(/*sql*/`INSERT INTO areas (area_nombre) VALUES (${name_area});
    `, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({message:`Area creada con exito`,data});
        }
    });
}

//



export const methodsHTTP = {
    createAreas
}