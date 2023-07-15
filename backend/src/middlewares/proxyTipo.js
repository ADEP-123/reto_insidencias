import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { tipo } from '../controllerTS/tipo.js';

const proxyTipo = express();
proxyTipo.use((req, res, next) => {
    let objeto;
    if (req.query) {
        objeto = req.query
    } else { objeto = req.body }
    try {
        let data = plainToClass(tipo, objeto, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyTipo;