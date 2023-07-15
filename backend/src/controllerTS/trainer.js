var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from "class-transformer";
export class trainer {
    constructor(train_id, train_nombre, email_personal, email_corporativo, telefono_movil, telefono_residencia, telefono_empresa, telefono_movil_empresarial) {
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
__decorate([
    Expose({ name: "id" }),
    Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en ecritura del documento de identificacion` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "id", void 0);
__decorate([
    Expose({ name: "nombre" }),
    Transform(({ value, key }) => { if (/^[a-z A-Z]+$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error de escritura del nombre` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "nombre", void 0);
__decorate([
    Expose({ name: "email1" }),
    Transform(({ value, key }) => { if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en escritura de correo personal`, value: value }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "email1", void 0);
__decorate([
    Expose({ name: "email2" }),
    Transform(({ value, key }) => { if (/\S+@campuslands.com/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en escritura del correo profesional, recuerde que es dominio @campuslands.com`, value: value }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "email2", void 0);
__decorate([
    Expose({ name: "tefMov" }),
    Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del telefono movil, recuerde digitar unicamente los numeros` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "tefMov", void 0);
__decorate([
    Expose({ name: "tefRes" }),
    Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del telefono residencial, recuerde digitar el codigo de area sin signos` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "tefRes", void 0);
__decorate([
    Expose({ name: "tefEmpresa" }),
    Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del telefono empresarial, recuerde digitar el codigo de area sin signos` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "tefEmpresa", void 0);
__decorate([
    Expose({ name: "tefMovEmpres" }),
    Transform(({ value, key }) => { if (/^[0-9]{10}$/.test(value) || value == null)
        return value;
    else
        throw { status: 400, message: `Error en ecritura del telefono movil empresarial, recuerde digitar unicamente los numeros` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], trainer.prototype, "tefMovEmpres", void 0);
