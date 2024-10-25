export abstract class Personaje {
    nombre: string;
    nivel: number = 1;
    vida: number;

    constructor(nombre: string, vida: number) {
        this.nombre = nombre;
        this.vida = vida;
    }

    public atacar(): void {
        console.log(`${this.nombre} está atacando!`);
    }

    public defender(): void {
        console.log(`${this.nombre} está defendiendo!`);
    }

    public subirNivel(): void {
        this.nivel += 1;
        console.log(`${this.nombre} subió al nivel ${this.nivel}!`);
    }

    aprenderNuevoAtaque(): void {
        console.log(`${this.nombre} aprendió un nuevo ataque especial!`);
    }
}
