import { Expose, Type, Transform } from "class-transformer";

export class equipo {

    @Expose({ name: "id" })
    @Type(() => String)
    id: string;

    @Expose({ name: "tipo_id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    tipo_id: number;

    @Expose({ name: "cantidad" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro ` } }, { toClassOnly: true })
    cantidad: number;

    @Expose({ name: "lugar_id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    lugar_id: number;


    constructor(id_equipo: string, tipo: number, cantidad: number, lugar: number) {
        this.id = id_equipo;
        this.tipo_id = tipo;
        this.cantidad = cantidad;
        this.lugar_id = lugar;
    }
}