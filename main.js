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
  header.style.padding = '30px 0'
  header.style.color = 'white'
  header.style.boxShadow = '2px 5px rgba(0,0,0,0.1)'

  // Contenedor del header
  const contenedorheader = document.createElement('div')
  contenedorheader.style.display = 'flex'
  contenedorheader.style.justifyContent = 'space-between'
  contenedorheader.style.alignItems = 'center'
  contenedorheader.style.maxWidth = '1200px'
  contenedorheader.style.margin = 'auto'
  contenedorheader.style.padding = '10px'

  // Logo
  const logoLink = document.createElement('a')
  logoLink.style.color = 'white'
  logoLink.style.fontWeight = 'bold'
  logoLink.style.fontSize = '60px'
  logoLink.textContent = 'PcComponentes'

  // Barra de búsqueda
  const searchContainer = document.createElement('div')
  searchContainer.style.flexGrow = '1'
  searchContainer.style.margin = '30px'
  searchContainer.style.position = 'relative'

  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.placeholder = 'Buscar productos...'
  searchInput.style.width = '100%'
  searchInput.style.padding = '8px 15px'
  searchInput.style.borderRadius = '20px'
  searchInput.style.border = 'none'

  const searchButton = document.createElement('button')
  searchButton.innerHTML = '🔍'
  searchButton.style.position = 'absolute'
  searchButton.style.right = '5px'
  searchButton.style.top = '50%'
  searchButton.style.transform = 'translateY(-50%)'
  searchButton.style.background = 'none'
  searchButton.style.border = 'none'

  searchContainer.appendChild(searchInput)
  searchContainer.appendChild(searchButton)

  // Iconos de usuario y carrito
  const iconsContainer = document.createElement('div')
  iconsContainer.style.display = 'flex'
  iconsContainer.style.gap = '40px'

  const userIcon = document.createElement('a')
  userIcon.innerHTML = '👤'
  userIcon.style.fontSize = '40px'

  const cartIcon = document.createElement('a')
  cartIcon.innerHTML = '🛒'
  cartIcon.style.fontSize = '40px'
  cartIcon.style.position = 'relative'

  const cartCount = document.createElement('span')
  cartCount.textContent = '0'
  cartCount.style.position = 'absolute'
  cartCount.style.top = '-10px'
  cartCount.style.right = '-10px'
  cartCount.style.backgroundColor = 'white'
  cartCount.style.color = '#ff6a00'
  cartCount.style.borderRadius = '50%'
  cartCount.style.width = '20px'
  cartCount.style.height = '20px'
  cartCount.style.display = 'flex'
  cartCount.style.justifyContent = 'center'
  cartCount.style.alignItems = 'center'
  cartCount.style.fontSize = '12px'

  cartIcon.appendChild(cartCount)
  iconsContainer.appendChild(userIcon)
  iconsContainer.appendChild(cartIcon)

  // Menú de navegación
  const nav = document.createElement('nav')
  nav.style.backgroundColor = ' #f9f9f9'
  nav.style.padding = '20px'

  const navContainer = document.createElement('div')
  navContainer.style.maxWidth = '1200px'
  navContainer.style.margin = 'auto'
  navContainer.style.padding = '10px'
  navContainer.style.display = 'flex'
  navContainer.style.gap = '20px'

  const navLinks = [
    'Componentes',
    'Portátiles',
    'Periféricos',
    'Smartphones',
    'Ofertas'
  ]
  navLinks.forEach((linkText) => {
    const link = document.createElement('a')
    link.href = '#'
    link.textContent = linkText
    link.style.fontSize = '20px'
    link.style.fontWeight = 'bold'
    link.style.color = '#333'
    link.style.textDecoration = 'none'
    link.style.padding = '5px 10px'
    link.style.borderRadius = '5px'
    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = '#555'
    })
    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = 'transparent'
    })
    navContainer.appendChild(link)
  })

  nav.appendChild(navContainer)

  // Ensamblar header
  contenedorheader.appendChild(logoLink)
  contenedorheader.appendChild(searchContainer)
  contenedorheader.appendChild(iconsContainer)

  header.appendChild(contenedorheader)
  header.appendChild(nav)

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
