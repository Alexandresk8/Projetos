const horas = document.getElementById('hour')
const minutos = document.getElementById('minute')
const segundos = document.getElementById('second')
const day = document.getElementById('day')

const monthName = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    horas.textContent = h.toString().padStart(2, '0')
    minutos.textContent = min.toString().padStart(2, '0')
    segundos.textContent = sec.toString().padStart(2, '0')
})
