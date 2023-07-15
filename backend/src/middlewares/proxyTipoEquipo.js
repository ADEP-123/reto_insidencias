import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { tipo_equipo } from '../controllerTS/tipo_equipo.js';

const proxyTipoEquipo = express();
proxyTipoEquipo.use((req, res, next) => {
    let objeto;
    if (req.body.length == 0) {
        objeto = req.query
    } else { objeto = req.body }
    try {
        let data = plainToClass(tipo_equipo, objeto, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyTipoEquipo;