import { Expose, Type, Transform } from "class-transformer";

export class lugares {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "area" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    area: number;

    @Expose({ name: "nombre" })
    @Type(() => String)
    nombre: string;

    constructor(lugar_id: number, area_lugar: number, lugar_nombre: string) {
        this.id = lugar_id;
        this.area = area_lugar;
        this.nombre = lugar_nombre;
    }
}