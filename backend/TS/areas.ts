import { Expose, Type, Transform } from "class-transformer";

export class areas {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Type(() => String)
    nombre: string;

    constructor(area_id: number, area_nombre: string) {
        this.id = area_id;
        this.nombre = area_nombre;
    }
}