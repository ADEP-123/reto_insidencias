import { query } from "express";
import getConnection from "../db/database.js";
const connection = getConnection();

/**
 * ? CRUD AREAS
 */

//Create
const createAreas = (req, res) => {
    const { nombre } = req.body
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
    const { id, nombre } = req.body
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
    const { id } = req.query
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
    const { area, nombre } = req.body
    connection.query(/*sql*/`INSERT INTO lugares (area_lugar, lugar_nombre) VALUES (${area}, ${nombre});`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Lugar creado con exito`, data });
        }
    });
}
//Get
const getLugar = (req, res) => {
    const { id } = req.query
    if (id) {
        connection.query(/*sql*/`SELECT lugar_id AS id, area_lugar AS area, lugar_nombre AS nombre FROM lugares WHERE lugar_id = ${id};`, (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            }
            else {
                res.json({ message: `${data.length} registros encontrados`, data });
            }
        });
    } else {
        connection.query(/*sql*/`SELECT lugar_id AS id, area_lugar AS area, lugar_nombre AS nombre FROM lugares;`, (err, data) => {
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
const updateLugar = (req, res) => {
    const { id, area, nombre } = req.body
    connection.query(/*sql*/`UPDATE lugares SET area_lugar = ?, lugar_nombre = ? WHERE lugar_id = ${id};`, [area, nombre], (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Lugar actualizado con exito`, data });
        }
    });
}
//Delete
const deleteLugar = (req, res) => {
    const { id } = req.query
    connection.query(/*sql*/`DELETE FROM lugares WHERE lugar_id = ${id};`, (err, data) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.json({ message: `Lugar eliminado con exito`, data });
        }
    });
}

/**
 * ? CRUD CATEGORIA
 */

// Create
const createCategoria = (req, res) => {
    const { nombre } = req.body;
    connection.query(
      /*sql*/ `INSERT INTO categoria (cat_nombre) VALUES (${nombre})`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Categoría creada con éxito`, data });
            }
        }
    );
};
// Get
const getCategoria = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
        /*sql*/ `SELECT cat_id AS id, cat_nombre AS nombre FROM categoria WHERE cat_id = ${id}`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    } else {
        connection.query(
        /*sql*/ `SELECT cat_id AS id, cat_nombre AS nombre FROM categoria`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    }
};
// Update
const updateCategoria = (req, res) => {
    const { id, nombre } = req.body;
    connection.query(
      /*sql*/ `UPDATE categoria SET cat_nombre = '${nombre}' WHERE cat_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Categoría actualizada con éxito`, data });
            }
        }
    );
};
// Delete
const deleteCategoria = (req, res) => {
    const { id } = req.query;
    connection.query(
      /*sql*/ `DELETE FROM categoria WHERE cat_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Categoría eliminada con éxito`, data });
            }
        }
    );
};

/**
 * ? CRUD TIPO
 */
// Create
const createTipo = (req, res) => {
    const { nombre } = req.body;
    connection.query(
      /*sql*/ `INSERT INTO tipo (tip_nombre) VALUES ('${nombre}')`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo creado con éxito`, data });
            }
        }
    );
};
// Get
const getTipo = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
        /*sql*/ `SELECT tip_id AS id, tip_nombre AS nombre FROM tipo WHERE tip_id = ${id}`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    } else {
        connection.query(
        /*sql*/ `SELECT tip_id AS id, tip_nombre AS nombre FROM tipo`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    }
};
// Update
const updateTipo = (req, res) => {
    const { id, nombre } = req.body;
    connection.query(
      /*sql*/ `UPDATE tipo SET tip_nombre = '${nombre}' WHERE tip_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo actualizado con éxito`, data });
            }
        }
    );
};
// Delete
const deleteTipo = (req, res) => {
    const { id } = req.query;
    connection.query(
      /*sql*/ `DELETE FROM tipo WHERE tip_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo eliminado con éxito`, data });
            }
        }
    );
};

/**
 * ? CRUD TIPO EQUIPO
 */
// Create
const createTipoEquipo = (req, res) => {
    const { nombre } = req.body;
    connection.query(
      /*sql*/ `INSERT INTO tipo_equipo (tip_equip_nombre) VALUES ('${nombre}')`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo de equipo creado con éxito`, data });
            }
        }
    );
};
// Get
const getTipoEquipo = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
        /*sql*/ `SELECT tip_equip_id AS id, tip_equip_nombre AS nombre FROM tipo_equipo WHERE tip_equip_id = ${id}`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    } else {
        connection.query(
        /*sql*/ `SELECT tip_equip_id AS id, tip_equip_nombre AS nombre FROM tipo_equipo`,
            (err, data) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.json({ message: `${data.length} registros encontrados`, data });
                }
            }
        );
    }
};
// Update
const updateTipoEquipo = (req, res) => {
    const { id, nombre } = req.body;
    connection.query(
      /*sql*/ `UPDATE tipo_equipo SET tip_equip_nombre = '${nombre}' WHERE tip_equip_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo de equipo actualizado con éxito`, data });
            }
        }
    );
};


export const methodsHTTP = {
    createAreas,
    getAreas,
    updateAreas,
    deleteAreas,
    createLugar,
    getLugar,
    updateLugar,
    deleteLugar,
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria,
    createTipo,
    getTipo,
    updateTipo,
    deleteTipo,
    createTipoEquipo,
    getTipoEquipo,
    updateTipoEquipo,

}