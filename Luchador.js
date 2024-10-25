"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre, vida, fuerza) {
        super(nombre, vida);
        this.fuerza = fuerza;
    }
    atacar() {
        console.log(`${this.nombre} lanzó un ataque de su fuerza!`);
    }
}
exports.Luchador = Luchador;
