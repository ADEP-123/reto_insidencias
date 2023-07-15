import { Expose, Type, Transform } from "class-transformer";

export class insidencias {

    @Expose({ name: "id" })
    @Type(() => Number)
    id: number;

    @Expose({ name: "categoria" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en tipo de parametro de la categoria` } }, { toClassOnly: true })
    categoria: number;

    @Expose({ name: "tipo" })
    @Transform(({ value, key }) => { if (Math.floor(value)) return Math.floor(value); else throw { status: 400, message: `Error en el id de tipo de insidencia` } }, { toClassOnly: true })
    tipo: number;

    @Expose({ name: "descripcion" })
    @Type(() => String)
    descripcion: string;

    @Expose({ name: "trainer" })
    @Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value)) return value; else throw { status: 400, message: `Error en ecritura del documento de identificacion del trainer` } }, { toClassOnly: true })
    trainer: string;

    @Expose({ name: "equipo" })
    @Type(() => String)
    equipo: string;

    constructor(id_insi: number, categoria_insi: number, tipo_insi: number, descr_insi: string, trainer_insi: string, equipo_insi: string) {
        this.id = id_insi;
        this.categoria = categoria_insi;
        this.tipo = tipo_insi;
        this.descripcion = descr_insi;
        this.trainer = trainer_insi;
        this.equipo = equipo_insi;
    }
}