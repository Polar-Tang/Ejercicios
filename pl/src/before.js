const input = document.querySelectorAll("input")

input.forEach(input => {
    input.addEventListener("keydown",logKey)
})

function logKey(e) {
    if (e.key === 'Enter') {
        const inputField = e.target
        const logId = inputField.dataset.logId
        const log = document.getElementById(logId)
        
        if (log) {
            log.innerHTML += `<li>${inputField.value}</li>`
            inputField.value = ""
        }
    }
}
