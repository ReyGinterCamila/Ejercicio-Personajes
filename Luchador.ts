import { Personaje } from "./Personaje";

export class Luchador extends Personaje {
    fuerza: number;

    constructor(nombre: string, vida: number, fuerza: number) {
        super(nombre, vida);
        this.fuerza = fuerza;
    }

    atacar(): void {
        console.log(`${this.nombre} lanzó un ataque de su fuerza!`);
    }
}

