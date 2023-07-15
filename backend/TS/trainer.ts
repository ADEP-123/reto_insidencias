import { Expose, Type, Transform } from "class-transformer";

export class trainer {

    @Expose({ name: "id" })
    @Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value)) return value; else throw { status: 400, message: `Error en ecritura del documento de identificacion` } }, { toClassOnly: true })
    id: string;

    @Expose({ name: "nombre" })
    @Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == null) return value; else throw { status: 400, message: `Error de escritura del nombre` } }, { toClassOnly: true })
    nombre: string;

    @Expose({ name: "email1" })
    @Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en escritura de correo personal`, value: value } }, { toClassOnly: true })
    email1: string;

    @Expose({ name: "email2" })
    @Transform(({ value, key }) => { if (/\S+@campuslands.com/.test(value) || value == null) return value; else throw { status: 400, message: `Error en escritura del correo profesional, recuerde que es dominio @campuslands.com`, value: value } }, { toClassOnly: true })
    email2: string;

    @Expose({ name: "tefMov" })
    @Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del telefono movil, recuerde digitar unicamente los numeros` } }, { toClassOnly: true })
    tefMov: string;

    @Expose({ name: "tefRes" })
    @Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del telefono residencial, recuerde digitar el codigo de area sin signos` } }, { toClassOnly: true })
    tefRes: string;

    @Expose({ name: "tefEmpresa" })
    @Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del telefono empresarial, recuerde digitar el codigo de area sin signos` } }, { toClassOnly: true })
    tefEmpresa: string;

    @Expose({ name: "tefMovEmpres" })
    @Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null) return value; else throw { status: 400, message: `Error en ecritura del telefono movil empresarial, recuerde digitar unicamente los numeros` } }, { toClassOnly: true })
    tefMovEmpres: string;


    constructor(train_id: string, train_nombre: string, email_personal: string, email_corporativo: string, telefono_movil: string, telefono_residencia: string, telefono_empresa: string, telefono_movil_empresarial: string) {
        this.id = train_id;
        this.nombre = train_nombre;
        this.email1 = email_personal;
        this.email2 = email_corporativo;
        this.tefMov = telefono_movil;
        this.tefRes = telefono_residencia;
        this.tefEmpresa = telefono_empresa,
        this.tefMovEmpres = telefono_movil_empresarial;
    }
}