"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    constructor(nombre, vida) {
        this.nivel = 1;
        this.nombre = nombre;
        this.vida = vida;
    }
    atacar() {
        console.log(`${this.nombre} está atacando!`);
    }
    defender() {
        console.log(`${this.nombre} está defendiendo!`);
    }
    subirNivel() {
        this.nivel += 1;
        console.log(`${this.nombre} subió al nivel ${this.nivel}!`);
    }
    aprenderNuevoAtaque() {
        console.log(`${this.nombre} aprendió un nuevo ataque especial!`);
    }
}
exports.Personaje = Personaje;
