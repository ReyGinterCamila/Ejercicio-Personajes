import { Personaje } from "./Personaje";


export class Arquero extends Personaje {
    flechas: number;

    constructor(nombre: string, vida: number, flechas: number) {
        super(nombre, vida);
        this.flechas = flechas;
    }

    atacar(): void {
        if (this.flechas > 0) {
            console.log(`${this.nombre} dispara una flecha!`);
            this.flechas -= 1;
        } else {
            console.log(`${this.nombre} no tiene flechas!`);
        }
    }
    recargarFlechas(cantidad: number): void {
        this.flechas += cantidad;
        console.log(`${this.nombre} recargó ${cantidad} flechas. Ahora tiene ${this.flechas} flechas.`);
    }
}
