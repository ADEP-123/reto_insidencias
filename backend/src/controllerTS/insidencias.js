var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Type, Transform } from "class-transformer";
export class insidencias {
    constructor(id_insi, categoria_insi, tipo_insi, descr_insi, trainer_insi, equipo_insi) {
        this.id = id_insi;
        this.categoria = categoria_insi;
        this.tipo = tipo_insi;
        this.descripcion = descr_insi;
        this.trainer = trainer_insi;
        this.equipo = equipo_insi;
    }
}
__decorate([
    Expose({ name: "id" }),
    Type(() => Number),
    __metadata("design:type", Number)
], insidencias.prototype, "id", void 0);
__decorate([
    Expose({ name: "categoria" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en tipo de parametro de la categoria` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "categoria", void 0);
__decorate([
    Expose({ name: "tipo" }),
    Transform(({ value, key }) => { if (Math.floor(value))
        return Math.floor(value);
    else
        throw { status: 400, message: `Error en el id de tipo de insidencia` }; }, { toClassOnly: true }),
    __metadata("design:type", Number)
], insidencias.prototype, "tipo", void 0);
__decorate([
    Expose({ name: "descripcion" }),
    Type(() => String),
    __metadata("design:type", String)
], insidencias.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: "trainer" }),
    Transform(({ value, key }) => { if (/^[0-9]{10,12}$/.test(value))
        return value;
    else
        throw { status: 400, message: `Error en ecritura del documento de identificacion del trainer` }; }, { toClassOnly: true }),
    __metadata("design:type", String)
], insidencias.prototype, "trainer", void 0);
__decorate([
    Expose({ name: "equipo" }),
    Type(() => String),
    __metadata("design:type", String)
], insidencias.prototype, "equipo", void 0);
