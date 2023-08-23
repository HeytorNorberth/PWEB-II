const rotas = document.getElementsByClassName("rota")
const tabelasHorarios = document.getElementsByClassName("horarios")

// Iniciar com o primeiro horário selecionado
setSelectedTable(0)

function handleRouteClick(routeIndex) {
    setSelectedTable(routeIndex)
}

function setSelectedTable(routeIndex) {
    Array.from(tabelasHorarios).forEach((tabela, tableIndex) => {
        if (tableIndex === routeIndex) {
            tabela.style.display = 'table'
            rotas[routeIndex].style.backgroundColor = 'red'
        } else {
            tabela.style.display = 'none'
            rotas[routeIndex].style.backgroundColor = 'white'
        }
    })
}

Array.from(rotas).forEach((rota, index) => {
    rota.addEventListener('click', () => handleRouteClick(index))
})

