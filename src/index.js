// ALT + Z elimina la barra horizontal

// EJERCICIO 1
// ACCEDER MEDIANTE CLAVE/INDICE 

// hay una lista de permisos, 
// no queremos menores de edad, ni viejos en nuestro boliches, 
// ejecuta las validaciones necesaria para que no entre cualquiera!

const listEdades = [
    "menor de edad",         // indice: 0
    "media edad",            // indice: 1
    "mucha edad"             // indice: 2
]

const entraBoliche = () => { 

    console.log(Object.keys(listaCampeones).length)
    for (let i = 0; i < listEdades.length; i++){
        return listaCampeones
    }

}

//

// EJERCICIO 2
// finaLISTAs

// Hay una competencia de los mejores compositores clasicos, 
// pero la función no está diciendo los nombres uno por uno, 
// repara el bug

const listaCampeones = {
    0: "bach",         // indice: 0
    1: "Mozzart",      // indice: 1
    2: "Stratvisky"    // indice: 2
}

const mejoresPianistats = () => { 

    console.log(Object.keys(listaCampeones).length)
    for (let i = 0; i < Object.keys(listaCampeones).length; i++){
        return listaCampeones
    }

}

// console.log(mejoresPianistats())

// EJERCICIO 3
// tomaste la pastilla? MATRIX

// hay una funcion que recibe pastilla roja o azul,
// roja y azul son las claves (keys) de un objeto
// llama a la función con un console log
// pasale la pastilla y morfeo te respondera aleatoriamente

const pastillas = {
    "roja": "You are seeing the thruth.",
    "azul": "You are in the bliss of ignorance."
}

const estasEnLaRealidad = (pill) => { 
    if (0.5 < Math.random()) {
        console.log("No me quiere?")
        console.log("Morfeo: ", pill)
    } else {
        console.log("Me quiere?")
        console.log("Morfeo: ", pill)
    }
}

// EJERCICIO 4
// SUMA CON LETRAS

// crea una funcion en donde le pases letras
// y retorne su suma

const numeros = {
    "uno": 1,
    "dos": 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis" : 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9,
    "cero": 0
}


const sumaLetras = (a,b) => { 

}

// EJEMPLO DE USO
// console.log(sumaLetras("uno", "dos"))