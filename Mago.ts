import { Personaje } from "./Personaje";


export class Mago extends Personaje {
    habilidadEspecial: number;

    constructor(nombre: string, vida: number, habilidadEspecial: number) {
        super(nombre, vida);
        this.habilidadEspecial = habilidadEspecial;
    }

    lanzarHechizo(): void {
        console.log(`${this.nombre} lanzó un hechizo!`);
    }

    atacar(): void {
        console.log(`${this.nombre} lanzó un hechizo de ataque!`);
    }
}

export class MagoAvanzado extends Mago {
    constructor(nombre: string, vida: number, habilidadEspecial: number) {
        super(nombre, vida, habilidadEspecial);
    }

    lanzarHechizoAvanzado(): void {
        console.log(`${this.nombre} lanzó un hechizo avanzado devastador!`);
    }

    atacar(): void {
        console.log(`${this.nombre} lanzó un hechizo de ataque avanzado!`);
    }
}
