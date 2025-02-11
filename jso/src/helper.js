const descContainerHTML = document.getElementById('descContainerHTML');

const hints = [
    {
        "title": "Hint Ejercicio 1",
        "hints": "Podes acceder al valor de un array haciendo uso de su indice, primero debes escribir el nombre del array en cuestión seguido de corchetes [] que encierran el deseado índice. Sabiendo esto podes ejecutar un if utlizando los valores del array",
    },
    {
        "title": "Hint Ejercicio 2",
        "hints": "Así como los arrays, los valores de los objetos pueden ser accedidos de la misma manera.",
        

    },
    {
    "title": "Hint Ejercicio 3",
    "hints": "Como vimos en el punto dos podemos acceder a los valores de un objeto de manera similar que en los array. Pero no es lo mismo que un array, mientras que el valor de un elemento de un array es referenciado por su indice, el elemento del objeto es referenciado por su valor, (Array[indice] != Objecto[indice]) es dcir, son estructura de datos de clave/valor, donde hay una clave que sirve para referenciar un valor. Por ejemplo, el objeto elemento es así, {'clave': valor }, accedemos al valor de elemento utilizando su clave, así: elemento['clave'], o mediante el uso del punto, elemento.clave",
    },
    {

        "title": "Hint Ejercicio 4",
        "hints": "Accedemos a los elementos de un objeto mediante LA CLAVE (key) y obtenemos su valor. El punto cuarto se puede resolver en una sola línea",
    }
]

const showHint = (hintId) => {
    const hintElement = document.getElementById(hintId);
    if (hintElement) {
        // Toggle the hint's visibility (or add your desired behavior here)
        hintElement.style.display = hintElement.style.display === 'none' ? 'block' : 'none';
    }
};

const arrayDesc = hints.map((hint, index) => {
    const hintId = `hint-${index}`; // Unique ID for each hint
    return `
        <div>
            <button class="hint-button" data-hint-id="${hintId}">
                <h3 class="title row">${hint.title}</h3>
            </button>
            <p id="${hintId}" style="display: none;">${hint.hints}</p>
        </div>
    `;
});

descContainerHTML.innerHTML = arrayDesc.join('');

// Attach event listeners to each button
document.querySelectorAll('.hint-button').forEach(button => {
    button.addEventListener('click', () => {
        const hintId = button.getAttribute('data-hint-id');
        showHint(hintId);
    });
});

