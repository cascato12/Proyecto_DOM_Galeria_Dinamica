// Función principal que se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  const cargando = document.getElementById('cargando')
  if (cargando) {
    cargando.remove()
  }
  buildPage(app)
})

function buildPage(container) {
  const header = createHeader()
  const mainContent = createMainContent()
  const footer = createFooter()

  container.appendChild(header)
  container.appendChild(mainContent)
  container.appendChild(footer)
}

function createHeader() {
  const header = document.createElement('header')
  header.style.backgroundColor = '#ff6a00'
  header.style.padding = '10px 0'
  header.style.color = 'white'
  header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'

  return header
}

function createMainContent() {
  const main = document.createElement('main')
  main.style.maxWidth = '1200px'
  main.style.margin = '20px auto'
  main.style.padding = '0 15px'

  return main
}

function createFooter() {
  const footer = document.createElement('footer')
  footer.style.backgroundColor = '#333'
  footer.style.color = 'white'
  footer.style.padding = '30px 0'
  footer.style.marginTop = '50px'

  const footerContainer = document.createElement('div')
  footerContainer.style.maxWidth = '1200px'
  footerContainer.style.margin = '0 auto'
  footerContainer.style.padding = '0 15px'
  footerContainer.style.display = 'grid'
  footerContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
  footerContainer.style.gap = '30px'

  return footer
}
