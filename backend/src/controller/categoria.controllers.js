import { query } from "express";
import getConnection from "../db/database.js";
const connection = getConnection();

/**
 * ? CRUD AREAS
 */

//Create
const createAreas = (req, res) => {
    const { area_name } = req.query
    connection.query(/*sql*/`INSERT INTO areas (area_nombre) VALUES (${name_area});
    `, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Area creada con exito`, data });
        }
    });
}

//Read
const getAreas = (req, res) => {
    const { id } = req.query
    if (id) {
        connection.query(/*sql*/`SELECT area_id AS id, area_nombre AS name_area FROM areas WHERE area_id = ${id};`, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            else {
                res.json({ message: `${data.length} registros encontrados`, data });
            }
        });
    } else {
        connection.query(/*sql*/`SELECT area_id AS id, area_nombre AS name_area FROM areas;`, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            else {
                res.json({ message: `${data.length} registros encontrados`, data });
            }
        });
    }
}

//Update




export const methodsHTTP = {
    createAreas,
    getAreas
}