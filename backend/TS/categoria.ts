import { Expose, Type, Transform } from "class-transformer";

export class categoria {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;


    @Expose({ name: "nombre" })
    @Type(() => String)
    nombre: string;

    constructor(cat_id: number, cat_nombre: string) {
        this.id = cat_id;
        this.nombre = cat_nombre;
    }
}