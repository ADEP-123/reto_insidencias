import { query } from "express";
import getConnection from "../db/database.js";
const connection = getConnection();

/**
 * ? CRUD AREAS
 */

//Create
const createAreas = (req, res) => {
    const { nombre } = req.query
    connection.query(/*sql*/`INSERT INTO areas (area_nombre) VALUES (${nombre});
    `, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Area creada con exito`, data });
        }
    });
}

//Get
const getAreas = (req, res) => {
    const { id } = req.query
    if (id) {
        connection.query(/*sql*/`SELECT area_id AS id, area_nombre AS nombre FROM areas WHERE area_id = ${id};`, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            else {
                res.json({ message: `${data.length} registros encontrados`, data });
            }
        });
    } else {
        connection.query(/*sql*/`SELECT area_id AS id, area_nombre AS nombre FROM areas;`, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            else {
                res.json({ message: `${data.length} registros encontrados`, data });
            }
        });
    }
}

//Put
const updateAreas = (req, res) => {
    const { id, nombre} = req.body
    connection.query(/*sql*/`UPDATE areas SET area_nombre = ${nombre} WHERE area_id = ${id};`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Area actualizada con exito`, data });
        }
    });
}

//Delete
const deleteAreas = (req, res) => {
    const {id} = req.body
    connection.query(/*sql*/`DELETE FROM areas WHERE area_id = ${id};`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Area eliminada con exito`, data });
        }
    });
}

/**
 * ? CRUD LUGARES
 */

//Create
const createLugar = (req, res) => {
    const { area, nombre } = req.query
    connection.query(/*sql*/`INSERT INTO lugares (area_lugar, lugar_nombre) VALUES (${area}, ${nombre});`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Lugar creado con exito`, data });
        }
    });
}



export const methodsHTTP = {
    createAreas,
    getAreas,
    updateAreas,
    deleteAreas,
    createLugar
}