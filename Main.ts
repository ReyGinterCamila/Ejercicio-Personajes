import { Mago, MagoAvanzado } from "./Mago";
import { Luchador } from "./Luchador";
import { Arquero } from "./Arquero";

    let mago = new Mago("Harry", 100, 50);   
    let luchador = new Luchador("El Santo", 150, 80);  
    let arquero = new Arquero("Legolas", 120, 2);  
    let magoAvanzado = new MagoAvanzado("Harry Potter", 200, 100);

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





