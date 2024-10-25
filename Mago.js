"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagoAvanzado = exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre, vida, habilidadEspecial) {
        super(nombre, vida);
        this.habilidadEspecial = habilidadEspecial;
    }
    lanzarHechizo() {
        console.log(`${this.nombre} lanzó un hechizo!`);
    }
    atacar() {
        console.log(`${this.nombre} lanzó un hechizo de ataque!`);
    }
}
exports.Mago = Mago;
class MagoAvanzado extends Mago {
    constructor(nombre, vida, habilidadEspecial) {
        super(nombre, vida, habilidadEspecial);
    }
    lanzarHechizoAvanzado() {
        console.log(`${this.nombre} lanzó un hechizo avanzado devastador!`);
    }
    atacar() {
        console.log(`${this.nombre} lanzó un hechizo de ataque avanzado!`);
    }
}
exports.MagoAvanzado = MagoAvanzado;
