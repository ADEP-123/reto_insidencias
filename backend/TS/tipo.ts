import { Expose, Type, Transform } from "class-transformer";

export class tipo {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;


    @Expose({ name: "nombre" })
    @Type(() => String)
    nombre: string;

    constructor(tip_id: number, tip_nombre: string) {
        this.id = tip_id;
        this.nombre = tip_nombre;
    }
}