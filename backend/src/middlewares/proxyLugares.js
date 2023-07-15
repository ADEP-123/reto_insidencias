import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { lugares } from '../controllerTS/lugares.js';

const proxyLugares = express();
proxyLugares.use((req, res, next) => {
    let objeto;
    if (Object.values(req.body).length == 0) {
        objeto = req.query
    } else { objeto = req.body }
    try {
        let data = plainToClass(lugares, objeto, { excludeExtraneousValues: true });
        req.query = JSON.parse(JSON.stringify(data));
        next()
    } catch (err) {
        res.status(err.status).send(err)
    }
})
export default proxyLugares;