import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { categoria } from '../controllerTS/categoria.js';

const proxyCategoria = express();
proxyCategoria.use((req, res, next) => {
    let objeto;
    if (req.query) {
        objeto = req.query
    } else { objeto = req.body }
    try {
        let data = plainToClass(categoria, objeto, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyCategoria;