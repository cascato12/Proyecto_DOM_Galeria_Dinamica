// Función  que se ejecuta cuando el DOM está listo
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

// EL MAIN
function createMainContent() {
  const main = document.createElement('main')
  main.style.maxWidth = '1200px'
  main.style.margin = 'auto'
  main.style.padding = '15px'
  main.style.display = 'flex'

  // Contenedor principal con dos columnas
  const columnmaincontainer = document.createElement('div')
  columnmaincontainer.style.display = 'flex'
  columnmaincontainer.style.width = '100%'
  columnmaincontainer.style.gap = '20px'

  // Columna izquierda (filtros)
  const filtersColumn = document.createElement('aside')
  filtersColumn.style.width = '25%'
  filtersColumn.style.minWidth = '250px'

  // Sección de filtros
  const filtersSection = document.createElement('section')
  filtersSection.style.backgroundColor = '#f9f9f9'
  filtersSection.style.padding = '20px'
  filtersSection.style.borderRadius = '8px'
  filtersSection.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)'

  // Título de filtros
  const filtersTitle = document.createElement('h2')
  filtersTitle.textContent = 'Filtrar productos'
  filtersTitle.style.marginTop = '0'
  filtersTitle.style.marginBottom = '20px'
  filtersTitle.style.color = '#333'

  // Filtro por precio
  const priceFilter = document.createElement('div')
  priceFilter.style.marginBottom = '25px'

  const priceTitle = document.createElement('h3')
  priceTitle.textContent = 'Rango de precios'
  priceTitle.style.marginBottom = '10px'
  priceTitle.style.fontSize = '16px'

  const priceRange = document.createElement('div')
  priceRange.style.display = 'flex'
  priceRange.style.justifyContent = 'space-between'
  priceRange.style.marginBottom = '10px'

  const minPrice = document.createElement('span')
  minPrice.textContent = '0 €'
  const maxPrice = document.createElement('span')
  maxPrice.textContent = '1000 €'

  priceRange.appendChild(minPrice)
  priceRange.appendChild(maxPrice)

  const priceSlider = document.createElement('input')
  priceSlider.type = 'range'
  priceSlider.min = '0'
  priceSlider.max = '1000'
  priceSlider.style.width = '100%'

  priceFilter.appendChild(priceTitle)
  priceFilter.appendChild(priceRange)
  priceFilter.appendChild(priceSlider)

  // Filtro por categoría
  const categoryFilter = document.createElement('div')
  categoryFilter.style.marginBottom = '25px'

  const categoryTitle = document.createElement('h3')
  categoryTitle.textContent = 'Categorías'
  categoryTitle.style.marginBottom = '10px'
  categoryTitle.style.fontSize = '16px'

  const categoriesList = [
    'Procesadores',
    'Tarjetas gráficas',
    'Memoria RAM',
    'Almacenamiento',
    'Placas base',
    'Fuentes de alimentación',
    'Cajas y torres'
  ]

  categoriesList.forEach((category) => {
    const categoryItem = document.createElement('div')
    categoryItem.style.marginBottom = '8px'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = `category-${category.toLowerCase().replace(' ', '-')}`
    checkbox.style.marginRight = '10px'

    const label = document.createElement('label')
    label.htmlFor = checkbox.id
    label.textContent = category
    label.style.fontSize = '14px'

    categoryItem.appendChild(checkbox)
    categoryItem.appendChild(label)
    categoryFilter.appendChild(categoryItem)
  })

  categoryFilter.appendChild(categoryTitle)

  // Filtro por marca
  const brandFilter = document.createElement('div')
  brandFilter.style.marginBottom = '25px'

  const brandTitle = document.createElement('h3')
  brandTitle.textContent = 'Marcas'
  brandTitle.style.marginBottom = '10px'
  brandTitle.style.fontSize = '16px'

  const brandsList = [
    'AMD',
    'Intel',
    'NVIDIA',
    'Corsair',
    'Samsung',
    'Western Digital',
    'ASUS',
    'MSI'
  ]

  brandsList.forEach((brand) => {
    const brandItem = document.createElement('div')
    brandItem.style.marginBottom = '8px'

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = `brand-${brand.toLowerCase()}`
    checkbox.style.marginRight = '10px'

    const label = document.createElement('label')
    label.htmlFor = checkbox.id
    label.textContent = brand
    label.style.fontSize = '14px'

    brandItem.appendChild(checkbox)
    brandItem.appendChild(label)
    brandFilter.appendChild(brandItem)
  })

  brandFilter.appendChild(brandTitle)

  // Botón de aplicar filtros
  const applyButton = document.createElement('button')
  applyButton.textContent = 'Aplicar filtros'
  applyButton.style.width = '100%'
  applyButton.style.padding = '10px'
  applyButton.style.backgroundColor = '#ff6a00'
  applyButton.style.color = 'white'
  applyButton.style.border = 'none'
  applyButton.style.borderRadius = '4px'
  applyButton.style.cursor = 'pointer'
  applyButton.style.fontWeight = 'bold'
  applyButton.style.transition = 'background-color 0.3s'

  applyButton.addEventListener('mouseover', () => {
    applyButton.style.backgroundColor = '#e05d00'
  })

  applyButton.addEventListener('mouseout', () => {
    applyButton.style.backgroundColor = '#ff6a00'
  })

  // Ensamblar sección de filtros
  filtersSection.appendChild(filtersTitle)
  filtersSection.appendChild(priceFilter)
  filtersSection.appendChild(categoryFilter)
  filtersSection.appendChild(brandFilter)
  filtersSection.appendChild(applyButton)
  filtersColumn.appendChild(filtersSection)

  // Columna derecha (contenido principal)
  const contentColumn = document.createElement('div')
  contentColumn.style.width = '75%'

  // Banner principal
  const banner = document.createElement('div')
  banner.style.backgroundColor = '#f5f5f5'
  banner.style.height = '300px'
  banner.style.borderRadius = '8px'
  banner.style.marginBottom = '20px'
  banner.style.display = 'flex'
  banner.style.justifyContent = 'center'
  banner.style.alignItems = 'center'
  banner.style.backgroundImage =
    'url("https://img.pccomponentes.com/pcblog/1702940400000/head-ordenadores-1.jpg")'
  banner.style.backgroundSize = 'contain'

  const bannerContent = document.createElement('div')
  bannerContent.style.textAlign = 'center'
  bannerContent.style.color = 'white'
  bannerContent.style.textShadow = '1px 1px 3px rgba(0,0,0,0.8)'

  const bannerTitle = document.createElement('h1')
  bannerTitle.textContent = 'Las mejores ofertas en componentes'
  bannerTitle.style.fontSize = '2.5em'
  bannerTitle.style.marginBottom = '10px'

  const bannerSubtitle = document.createElement('p')
  bannerSubtitle.textContent =
    'Hasta un 50% de descuento en productos seleccionados'
  bannerSubtitle.style.fontSize = '1.2em'

  bannerContent.appendChild(bannerTitle)
  bannerContent.appendChild(bannerSubtitle)
  banner.appendChild(bannerContent)

  // Sección de productos destacados
  const featuredTitle = document.createElement('h2')
  featuredTitle.textContent = 'Productos destacados'
  featuredTitle.style.marginBottom = '20px'

  const productsContainer = document.createElement('div')
  productsContainer.style.display = 'grid'
  productsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
  productsContainer.style.gap = '20px'

  const products = [
    {
      name: 'Procesador AMD Ryzen 7 5800X',
      price: '329,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=Ryzen+7+5800X'
    },
    {
      name: 'Tarjeta Gráfica NVIDIA RTX 3080',
      price: '799,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RTX+3080'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    },
    {
      name: 'Memoria RAM Corsair 32GB DDR4',
      price: '129,99 €',
      stars: '4',
      reviews: '250',
      seller: 'PcComponentes',
      image: 'https://via.placeholder.com/200x200?text=RAM+32GB'
    }
  ]

  // Función para crear las estrellas de valoración
  function createStarRating(rating) {
    const starContainer = document.createElement('div')
    starContainer.style.display = 'flex'
    starContainer.style.margin = '5px 0'

    // Estrellas llenas
    for (let i = 0; i < rating; i++) {
      const star = document.createElement('span')
      star.innerHTML = '★'
      star.style.color = '#FFD700'
      star.style.marginRight = '2px'
      starContainer.appendChild(star)
    }

    // Estrellas vacías
    for (let i = rating; i < 5; i++) {
      const star = document.createElement('span')
      star.innerHTML = '☆'
      star.style.color = '#CCCCCC'
      star.style.marginRight = '2px'
      starContainer.appendChild(star)
    }

    return starContainer
  }

  products.forEach((product) => {
    const productCard = document.createElement('div')
    productCard.style.border = '1px solid #ddd'
    productCard.style.borderRadius = '8px'
    productCard.style.padding = '15px'
    productCard.style.transition = 'transform 0.3s'
    productCard.style.backgroundColor = 'white'

    productCard.addEventListener('mouseover', () => {
      productCard.style.transform = 'translateY(-5px)'
      productCard.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)'
    })

    productCard.addEventListener('mouseout', () => {
      productCard.style.transform = 'none'
      productCard.style.boxShadow = 'none'
    })

    // Imagen del producto
    const productImage = document.createElement('img')
    productImage.src = product.image
    productImage.alt = product.name
    productImage.style.width = '100%'
    productImage.style.height = '180px'
    productImage.style.objectFit = 'contain'
    productImage.style.marginBottom = '15px'

    // Nombre del producto
    const productName = document.createElement('h3')
    productName.textContent = product.name
    productName.style.margin = '0 0 10px 0'
    productName.style.fontSize = '16px'
    productName.style.height = '40px'
    productName.style.overflow = 'hidden'

    // Vendido por
    const sellername = document.createElement('span')
    sellername.textContent = 'Vendedor: ' + product.seller
    sellername.style.marginLeft = '5px'
    sellername.style.fontSize = '12px'

    // Valoración con estrellas
    const ratingContainer = document.createElement('div')
    ratingContainer.style.display = 'flex'
    ratingContainer.style.alignItems = 'center'
    ratingContainer.style.marginBottom = '10px'

    const stars = createStarRating(parseInt(product.stars))
    const reviews = document.createElement('span')
    reviews.textContent = `(${product.reviews})`
    reviews.style.marginLeft = '5px'
    reviews.style.fontSize = '12px'
    reviews.style.color = '#666'

    ratingContainer.appendChild(stars)
    ratingContainer.appendChild(reviews)

    // Precio
    const priceContainer = document.createElement('div')
    priceContainer.style.marginBottom = '10px'

    const currentPrice = document.createElement('div')
    currentPrice.textContent = product.price
    currentPrice.style.fontSize = '20px'
    currentPrice.style.fontWeight = 'bold'
    currentPrice.style.color = '#ff6a00'

    priceContainer.appendChild(currentPrice)

    // Botón de añadir al carrito
    const addButton = document.createElement('button')
    addButton.textContent = 'Añadir al carrito'
    addButton.style.width = '100%'
    addButton.style.padding = '8px'
    addButton.style.backgroundColor = '#ff6a00'
    addButton.style.color = 'white'
    addButton.style.border = 'none'
    addButton.style.borderRadius = '4px'
    addButton.style.cursor = 'pointer'
    addButton.style.transition = 'background-color 0.3s'

    addButton.addEventListener('mouseover', () => {
      addButton.style.backgroundColor = '#e05d00'
    })

    addButton.addEventListener('mouseout', () => {
      addButton.style.backgroundColor = '#ff6a00'
    })

    // Ensamblar tarjeta de producto
    productCard.appendChild(productImage)
    productCard.appendChild(productName)
    productCard.appendChild(sellername)
    productCard.appendChild(ratingContainer)
    productCard.appendChild(priceContainer)
    productCard.appendChild(addButton)

    productsContainer.appendChild(productCard)
  })

  // Ensamblar contenido principal
  contentColumn.appendChild(banner)
  contentColumn.appendChild(featuredTitle)
  contentColumn.appendChild(productsContainer)

  columnmaincontainer.appendChild(filtersColumn)
  columnmaincontainer.appendChild(contentColumn)

  main.appendChild(columnmaincontainer)

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
  footerContainer.style.margin = 'auto'
  footerContainer.style.padding = '15px'
  footerContainer.style.display = 'grid'
  footerContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'
  footerContainer.style.gap = '30px'

  // Columna 1: Información
  const infoColumn = document.createElement('div')
  const infoTitle = document.createElement('h3')
  infoTitle.textContent = 'PcComponentes'
  infoTitle.style.marginBottom = '15px'
  infoTitle.style.fontSize = '18px'

  const infoText = document.createElement('p')
  infoText.textContent =
    'La mejor tienda de componentes informáticos y electrónica. Los mejores precios y servicio.'
  infoText.style.fontSize = '15px'
  infoText.style.lineHeight = '1.5'

  infoColumn.appendChild(infoTitle)
  infoColumn.appendChild(infoText)

  // Columna 2: Enlaces rápidos
  const linksColumn = document.createElement('div')
  const linksTitle = document.createElement('h3')
  linksTitle.textContent = 'Enlaces rápidos'
  linksTitle.style.marginBottom = '15px'
  linksTitle.style.fontSize = '20px'

  const linksList = document.createElement('ul')
  linksList.style.listStyle = 'none'
  linksList.style.padding = '0'

  const quickLinks = [
    'Inicio',
    'Productos',
    'Ofertas',
    'Contacto',
    'Sobre nosotros'
  ]
  quickLinks.forEach((linkText) => {
    const linkItem = document.createElement('li')
    linkItem.style.marginBottom = '8px'

    const link = document.createElement('a')
    link.textContent = linkText
    link.style.color = 'white'
    link.style.textDecoration = 'none'
    link.style.fontSize = '20px'

    link.addEventListener('mouseover', () => {
      link.style.textDecoration = 'underline'
    })

    link.addEventListener('mouseout', () => {
      link.style.textDecoration = 'none'
    })

    linkItem.appendChild(link)
    linksList.appendChild(linkItem)
  })

  linksColumn.appendChild(linksTitle)
  linksColumn.appendChild(linksList)

  // Columna 3: Contacto
  const contactColumn = document.createElement('div')
  const contactTitle = document.createElement('h3')
  contactTitle.textContent = 'Contacto'
  contactTitle.style.marginBottom = '15px'
  contactTitle.style.fontSize = '18px'

  const contactInfo = document.createElement('div')
  contactInfo.style.fontSize = '15px'
  contactInfo.style.lineHeight = '1.5'

  const address = document.createElement('p')
  address.textContent = 'Calle Hardware 123, 08005 Barcelona, España'

  const phone = document.createElement('p')
  phone.textContent = 'Teléfono: +34 935 555 555'

  const email = document.createElement('p')
  email.textContent = 'Email: info@PcComponentes.com'

  contactInfo.appendChild(address)
  contactInfo.appendChild(phone)
  contactInfo.appendChild(email)
  contactColumn.appendChild(contactTitle)
  contactColumn.appendChild(contactInfo)

  // Columna 4: Newsletter
  const newsletterColumn = document.createElement('div')
  const newsletterTitle = document.createElement('h3')
  newsletterTitle.textContent = 'Newsletter'
  newsletterTitle.style.marginBottom = '15px'
  newsletterTitle.style.fontSize = '18px'

  const newsletterText = document.createElement('p')
  newsletterText.textContent = 'Suscríbete para recibir nuestras ofertas'
  newsletterText.style.fontSize = '15px'
  newsletterText.style.marginBottom = '15px'

  const newsletterForm = document.createElement('form')
  const emailInput = document.createElement('input')
  emailInput.type = 'email'
  emailInput.placeholder = 'Tu email'
  emailInput.style.width = '100%'
  emailInput.style.padding = '8px'
  emailInput.style.marginBottom = '10px'
  emailInput.style.borderRadius = '4px'
  emailInput.style.border = '1px solid #555'

  const subscribeButton = document.createElement('button')
  subscribeButton.type = 'submit'
  subscribeButton.textContent = 'Suscribirse'
  subscribeButton.style.width = '100%'
  subscribeButton.style.padding = '8px'
  subscribeButton.style.backgroundColor = '#ff6a00'
  subscribeButton.style.color = 'white'
  subscribeButton.style.border = 'none'
  subscribeButton.style.borderRadius = '4px'
  subscribeButton.style.cursor = 'pointer'

  newsletterForm.appendChild(emailInput)
  newsletterForm.appendChild(subscribeButton)

  newsletterColumn.appendChild(newsletterTitle)
  newsletterColumn.appendChild(newsletterText)
  newsletterColumn.appendChild(newsletterForm)

  // Añadir columnas al footer
  footerContainer.appendChild(infoColumn)
  footerContainer.appendChild(linksColumn)
  footerContainer.appendChild(contactColumn)
  footerContainer.appendChild(newsletterColumn)

  footer.appendChild(footerContainer)

  // Copyright
  const copyright = document.createElement('div')
  copyright.style.textAlign = 'center'
  copyright.style.marginTop = '30px'
  copyright.style.paddingTop = '20px'
  copyright.style.borderTop = '1px solid #555'
  copyright.style.fontSize = '12px'
  copyright.textContent = '© 2025 PcComponentes. Todos los derechos reservados.'

  footer.appendChild(copyright)

  return footer
}
