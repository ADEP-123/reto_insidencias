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
// Delete
const deleteTipoEquipo = (req, res) => {
    const { id } = req.query;
    connection.query(
      /*sql*/ `DELETE FROM tipo_equipo WHERE tip_equip_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Tipo de equipo eliminado con éxito`, data });
            }
        }
    );
};

/**
 * ? CRUD Equipo
 */
// Create
const createEquipo = (req, res) => {
    const { id, tipo_id, cantidad, lugar_id } = req.body;
    connection.query(
      /*sql*/ `INSERT INTO equipo (id_equipo, tipo, cantidad, lugar) VALUES ('${id}', ${tipo_id}, ${cantidad}, ${lugar_id})`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Equipo creado con éxito`, data });
            }
        }
    );
};
// Get
const getEquipo = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
        /*sql*/ `SELECT id_equipo AS id, tipo AS tipo_id, cantidad, lugar AS lugar_id FROM equipo WHERE id_equipo = '${id}'`,
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
        /*sql*/ `SELECT id_equipo AS id, tipo AS tipo_id, cantidad, lugar AS lugar_id FROM equipo`,
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
const updateEquipo = (req, res) => {
    const { id, tipo_id, cantidad, lugar_id } = req.body;
    connection.query(
      /*sql*/ `UPDATE equipo SET tipo = ${tipo_id}, cantidad = ${cantidad}, lugar = ${lugar_id} WHERE id_equipo = '${id}'`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Equipo actualizado con éxito`, data });
            }
        }
    );
};
// Delete
const deleteEquipo = (req, res) => {
    const { id } = req.query;
    connection.query(
      /*sql*/ `DELETE FROM equipo WHERE id_equipo = '${id}'`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Equipo eliminado con éxito`, data });
            }
        }
    );
};

/**
 * ? CRUD TRAINER
 */
// Create
const createTrainer = (req, res) => {
    const { id, nombre, email1, email2, tefMov, tefRes, tefEmpresa, tefMovEmpres } = req.body;
    connection.query(
      /*sql*/ `INSERT INTO trainer (train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_residencia, telefono_empresa, telefono_movil_empresarial)
      VALUES ('${id}','${nombre}', '${email1}', '${email2}', '${tefMov}', '${tefRes}', '${tefEmpresa}', '${tefMovEmpres}')`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Trainer creado con éxito`, data });
            }
        }
    );
};
// Get
const getTrainer = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
        /*sql*/ `SELECT train_id AS id, train_nombre AS nombre, email_personal AS email1, email_corporativo AS email2, telefono_movil AS tefMov, telefono_residencia AS tefRes, telefono_empresa AS tefEmpresa, telefono_movil_empresarial AS tefMovEmpres
        FROM trainer
        WHERE train_id = ${id}`,
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
        /*sql*/ `SELECT train_id AS id, train_nombre AS nombre, email_personal AS email1, email_corporativo AS email2, telefono_movil AS tefMov, telefono_residencia AS tefRes, telefono_empresa AS tefEmpresa, telefono_movil_empresarial AS tefMovEmpres
        FROM trainer`,
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
const updateTrainer = (req, res) => {
    const { id, nombre, email1, email2, tefMov, tefRes, tefEmpresa, tefMovEmpres } = req.body;
    connection.query(
      /*sql*/ `UPDATE trainer
      SET train_nombre = '${nombre}', email_personal = '${email1}', email_corporativo = '${email2}', telefono_movil = '${tefMov}', telefono_residencia = '${tefRes}', telefono_empresa = '${tefEmpresa}', telefono_movil_empresarial = '${tefMovEmpres}'
      WHERE train_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Trainer actualizado con éxito`, data });
            }
        }
    );
};
// Delete
const deleteTrainer = (req, res) => {
    const { id } = req.query;
    connection.query(
      /*sql*/ `DELETE FROM trainer WHERE train_id = ${id}`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Trainer eliminado con éxito`, data });
            }
        }
    );
};

/**
 * ? CRUD INSIDENCIA
 */
// Create
const createInsidencia = (req, res) => {
    const { categoria, tipo, descripcion, trainer, equipo } = req.body;
    connection.query(
        /*sql*/ `INSERT INTO insidencias (categoria_insi, tipo_insi, descr_insi, trainer_insi, equipo_insi)
        VALUES ('${categoria}', '${tipo}', '${descripcion}', '${trainer}', '${equipo}')`,
        (err, data) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: `Incidencia creada con éxito`, data });
            }
        }
    );
};
// Get
const getInsidencia = (req, res) => {
    const { id } = req.query;
    if (id) {
        connection.query(
            /*sql*/ `SELECT id_insi AS id, categoria_insi AS categoria, tipo_insi AS tipo, descr_insi AS descripcion, fecha_insi AS fecha, trainer_insi AS trainer, equipo_insi AS equipo
            FROM insidencias
            WHERE id_insi = ${id}`,
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
            /*sql*/ `SELECT id_insi AS id, categoria_insi AS categoria, tipo_insi AS tipo, descr_insi AS descripcion, fecha_insi AS fecha, trainer_insi AS trainer, equipo_insi AS equipo
            FROM insidencias`,
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
    deleteTipoEquipo,
    createEquipo,
    getEquipo,
    updateEquipo,
    deleteEquipo,
    createTrainer,
    getTrainer,
    updateTrainer,
    deleteTrainer,
    createInsidencia,
    getInsidencia
}