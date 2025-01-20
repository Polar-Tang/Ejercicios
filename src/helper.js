console.log("Helllo")

const descContainerHTML = document.getElementById('descContainerHTML');

const hints = [
    {
        // "anchor": "./blogs/XSSportswigger/XSSportswigger.html",
        "title": "Hint Ejercicio 1",
        "hints": "Podes acceder al valor de un array haciendo uso de su indice, primero debes escribir el nombre del array en cuestión seguido de corchetes [] que encierran el deseado índice. Sabiendo esto podes ejecutar un if utlizando los valores del array",
    },
    {
        "title": "Hint Ejercicio 2",
        "hints": "Así como los arrays, los valores de los objetos pueden ser accedidos de la misma manera",
        

    },
    {
    "title": "Hint Ejercicio 3",
    "hints": "Los objetos son estructura de datos de clave/valor, podemos acceder a un elemento utilizando su clave, ejemplo: el objeto elemento es así: {'clave': valor } elemento['clave'], o mediante el uso de su valor, elemento.valor",
    },
    {

        "title": "Hint Ejercicio 4",
        "hints": "Accedemos a los elementos de un objeto mediante LA CLAVE (key) y obtenemos su valor",
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

