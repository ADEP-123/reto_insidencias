import { Expose, Type, Transform } from "class-transformer";

export class tipo_equipo {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (Math.floor(value) || value == null) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro` } }, { toClassOnly: true })
    id: number;

    @Expose({ name: "nombre" })
    @Type(() => String)
    nombre: string;

    constructor(tip_equip_id: number, tip_equip_nombre: string) {
        this.id = tip_equip_id;
        this.nombre = tip_equip_nombre;
    }
}