const rotas = document.getElementsByClassName("rota")
const tabelasHorarios = document.getElementsByClassName("horarios")
const selectedRouteIcons = document.getElementsByClassName("selected-route-icon")
const nonSelectedRouteIcons = document.getElementsByClassName("non-selected-route-icon")

// Iniciar com o primeiro horário selecionado
setSelectedTable(0)
setSelectedRoute(0)

function handleRouteClick(routeIndex) {
    setSelectedRoute(routeIndex)
    setSelectedTable(routeIndex)
}

function setSelectedRoute(routeIndex) {
    Array.from(rotas).forEach((rota, index) => {
        if (routeIndex === index) {
            rota.style.backgroundColor = '#fcfcfc'
            selectedRouteIcons[index].style.display = 'block'
            nonSelectedRouteIcons[index].style.display = 'none'
        } else {
            rota.style.backgroundColor = '#f5f5f5'
            selectedRouteIcons[index].style.display = 'none'
            nonSelectedRouteIcons[index].style.display = 'block'
        }
    })
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

