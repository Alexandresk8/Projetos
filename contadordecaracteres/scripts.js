const input = document.querySelector("#input")
const counter = document.querySelector(".counter")
const toggleButton = document.querySelector("#toggle")

let mode = "characters"

toggleButton.addEventListener("click", () => {

    if (mode === "characters") {
        mode = "words"
        toggleButton.textContent = "Contar caracteres"
    } else {
        mode = "characters"
        toggleButton.textContent = "Contar palavras"
    }

    input.dispatchEvent(new Event("input"))
})

input.addEventListener("input", () => {
    let count = 0;

    if (mode === "characters") {
        count = input.value.length
        counter.textContent = `${count} caractere(s)`
    } else {
        const words = input.value.trim().split(/\s+/)
        count = words.filter(word => word !== "").length
        counter.textContent = `${count} palavra(s)`
    }
})
