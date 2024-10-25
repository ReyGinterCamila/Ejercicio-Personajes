"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mago_1 = require("./Mago");
const Luchador_1 = require("./Luchador");
const Arquero_1 = require("./Arquero");
let mago = new Mago_1.Mago("Harry", 100, 50);
let luchador = new Luchador_1.Luchador("El Santo", 150, 80);
let arquero = new Arquero_1.Arquero("Legolas", 120, 2);
let magoAvanzado = new Mago_1.MagoAvanzado("Harry Potter", 200, 100);
//Prueba de código del Mago
mago.atacar();
mago.lanzarHechizo();
magoAvanzado.atacar();
magoAvanzado.lanzarHechizoAvanzado();
//Prueba de código del Luchador
luchador.atacar();
luchador.defender();
//Prueba de código del Arquero
arquero.atacar();
arquero.atacar();
arquero.atacar();
arquero.atacar();
arquero.recargarFlechas(5);
arquero.atacar();
mago.subirNivel();
mago.aprenderNuevoAtaque();
luchador.subirNivel();
arquero.subirNivel();
console.log(`${mago.nombre} tiene ${mago.vida} puntos de vida.`);
console.log(`${luchador.nombre} tiene ${luchador.vida} puntos de vida.`);
console.log(`${arquero.nombre} tiene ${arquero.vida} puntos de vida.`);
