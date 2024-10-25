"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre, vida, flechas) {
        super(nombre, vida);
        this.flechas = flechas;
    }
    atacar() {
        if (this.flechas > 0) {
            console.log(`${this.nombre} dispara una flecha!`);
            this.flechas -= 1;
        }
        else {
            console.log(`${this.nombre} no tiene flechas!`);
        }
    }
    recargarFlechas(cantidad) {
        this.flechas += cantidad;
        console.log(`${this.nombre} recargó ${cantidad} flechas. Ahora tiene ${this.flechas} flechas.`);
    }
}
exports.Arquero = Arquero;
