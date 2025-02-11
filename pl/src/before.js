const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
    if (e.key === 'Enter') {
        log.innerHTML    += `<li>${e.target.value} </li>`;
    }
}
