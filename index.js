const rotas = document.getElementsByClassName("rota")
const tabelasHorarios = document.getElementsByClassName("horarios")

// Iniciar com o primeiro horário selectionado
setSelectedTable(0)

function handleRouteClick(routeIndex) {
    setSelectedTable(routeIndex)
}

function setSelectedTable(routeIndex) {
    Array.from(tabelasHorarios).forEach((tabela, tableIndex) => {
        if (tableIndex === routeIndex) {
            tabela.style.display = 'table'
        } else {
            tabela.style.display = 'none'
        }
    })
}

Array.from(rotas).forEach((rota, index) => {
    rota.addEventListener('click', () => handleRouteClick(index))
})

