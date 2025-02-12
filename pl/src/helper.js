const descContainerHTML = document.getElementById('descContainerHTML');

const hints = [
    {
        "desc": "",
        "title": "1. ¿Cómo puede definirse la siguiente figura?",
        "hints": `<li>Dos círculos unidos por una recta. </li> 
        <li>Una recta con un círculo en cada extremo.</li>
        <li>Dos pares de semicircunferencias unidas por una recta y dispuestas una sobre otra de forma que coincidan. </li>
        <li>Dos canalones de desagüe superpuestos.</li>`,
        "img": "./images/ejercicio1.png"
    },
    {
        "desc": "",
        "title": "2. ¿Cómo puede definirse la siguiente figura?",
        "hints": `<li>Forma en L. </li> 
        <li>Una escuadra.</li>
        <li>Una horca al revés. </li>
        <li>Medio marco.</li>
        <li>Dos rectángulos adosados uno al otro.</li>
        <li>Un rectángulo grande del que se ha recortado un rectángulo pequeño.</li>`,
        "img": "./images/ejercicio2.png"
        

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

const hintList = (hintArr) => { 
    hintArr.map((hint) => {
        return `<li>${hint}</li>`
    })
}

const arrayDesc = hints.map((hint, index) => {
    const hintId = `hint-${index}`;
    const logId = `log-${index}`
    return `
        <div>
            <h3> ${hint.title} </h3>
            <img style="height: 300px;" src=${hint.img} />
            <button class="hint-button" data-hint-id="${hintId}">
            <h5 class="title row">Ver alternativas </h5>
            </button>
            <ul id="${hintId}" style="display: none;">${hint.hints}</ul>
        </div>
        <ul id="${logId}"></ul>
        <input data-log-id="${logId}" class="hint-input" type="text" > 
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

