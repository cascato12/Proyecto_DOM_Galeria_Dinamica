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
  header.className = 'main-header'

  // Contenedor del header
  const headerContainer = document.createElement('div')
  headerContainer.className = 'header-container'

  // Logo
  const logoLink = document.createElement('a')
  logoLink.className = 'logo'
  logoLink.textContent = 'PcComponentes'
  logoLink.href = '#'

  // Barra de búsqueda
  const searchContainer = document.createElement('div')
  searchContainer.className = 'search-container'

  const searchInput = document.createElement('input')
  searchInput.type = 'text'
  searchInput.placeholder = 'Buscar productos...'
  searchInput.className = 'search-input'

  const searchButton = document.createElement('button')
  searchButton.className = 'search-button'
  searchButton.innerHTML = '🔍'

  searchContainer.appendChild(searchInput)
  searchContainer.appendChild(searchButton)

  // Iconos de usuario y carrito
  const iconsContainer = document.createElement('div')
  iconsContainer.className = 'icons-container'

  const userIcon = document.createElement('a')
  userIcon.className = 'icon user-icon'
  userIcon.innerHTML = '👤'
  userIcon.href = '#'

  const cartIcon = document.createElement('a')
  cartIcon.className = 'icon cart-icon'
  cartIcon.innerHTML = '🛒'
  cartIcon.href = '#'

  const cartCount = document.createElement('span')
  cartCount.className = 'cart-count'
  cartCount.textContent = '0'

  cartIcon.appendChild(cartCount)
  iconsContainer.appendChild(userIcon)
  iconsContainer.appendChild(cartIcon)

  // Menú de navegación
  const nav = document.createElement('nav')
  nav.className = 'main-nav'

  const navContainer = document.createElement('div')
  navContainer.className = 'nav-container'

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
    link.className = 'nav-link'
    navContainer.appendChild(link)
  })

  // Menú hamburguesa para móviles
  const mobileMenuButton = document.createElement('button')
  mobileMenuButton.className = 'mobile-menu-button'
  mobileMenuButton.innerHTML = '☰'

  nav.appendChild(navContainer)

  // Ensamblar header
  headerContainer.appendChild(logoLink)
  headerContainer.appendChild(searchContainer)
  headerContainer.appendChild(iconsContainer)
  headerContainer.appendChild(mobileMenuButton)

  header.appendChild(headerContainer)
  header.appendChild(nav)

  // Evento para mostrar/ocultar menú en móviles
  mobileMenuButton.addEventListener('click', () => {
    nav.classList.toggle('show-mobile-menu')
  })

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
  columnmaincontainer.className = 'column-main-container'
  columnmaincontainer.style.display = 'flex'
  columnmaincontainer.style.width = '100%'
  columnmaincontainer.style.gap = '20px'

  // Columna izquierda (filtros)
  const filtersColumn = document.createElement('aside')
  filtersColumn.className = 'filters-column'

  // Sección de filtros
  const filtersSection = document.createElement('section')
  filtersSection.classname = '.filters-section'
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
  priceFilter.className = 'price-filter'
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
  applyButton.className = 'apply-button'
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
  contentColumn.className = 'content-column'

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
  productsContainer.className = 'product-container'

  const products = [
    {
      name: 'Tarjeta Gráfica ASUS TUF Gaming GeForce RTX 5070 OC 12GB GDDR7 Reflex 2 RTX AI DLSS4',
      price: '743,85 €',
      stars: '4',
      reviews: '500',
      seller: 'PcComponentes',
      image:
        './assets/1587-asus-tuf-gaming-geforce-rtx-5070-oc-12gb-gddr7-reflex-2-rtx-ai-dlss4.webp'
    },
    {
      name: 'Tarjeta Gráfica Gigabyte Radeon RX 7600 XT GAMING OC 16GB GDDR6',
      price: '333,98 €',
      stars: '4',
      reviews: '750',
      seller: 'PcComponentes',
      image:
        './assets/1249-gigabyte-radeon-rx-7600-xt-gaming-oc-16gb-gddr6x.webp'
    },
    {
      name: 'Memoria RAM Corsair Vengeance DDR5 6000MHz 32GB 2x16GB CL30 Memoria Dual AMD EXPO e Intel XMP',
      price: '114,99 €',
      stars: '5',
      reviews: '1131',
      seller: 'PcComponentes',
      image:
        './assets/1517-corsair-vengeance-ddr5-6000mhz-32gb-2x16gb-cl30.webp'
    },
    {
      name: 'Procesador AMD Ryzen 7 7800X3D 4.2 GHz/5 GHz',
      price: '448,00 €',
      stars: '5',
      reviews: '1571',
      seller: 'PcComponentes',
      image: './assets/1498-amd-ryzen-7-7800x3d-42-ghz-5-ghz-opiniones.webp'
    },
    {
      name: 'Portátil Alurin Go Start Intel Celeron N4020/8GB/256GB SSD/15.6"',
      price: '189,99 €',
      stars: '2',
      reviews: '300',
      seller: 'PcComponentes',
      image:
        './assets/1710-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-156-comprar.webp'
    },
    {
      name: 'Ordenador Sobremesa PcCom Ready Intel Core i5-12400F / 32 GB / 1TB SSD / RTX 4060',
      price: '869,00 €',
      stars: '3',
      reviews: '450',
      seller: 'PcComponentes',
      image:
        './assets/1348-pccom-ready-intel-core-i5-12400f-32-gb-1tb-ssd-rtx-4060-opiniones.webp'
    },
    {
      name: 'Monitor Samsung S27D302GAU 27" LED IPS FullHD 100Hz',
      stars: '2',
      reviews: '1115',
      seller: 'PcComponentes',
      image: './assets/1357-samsung-s27d302gau-27-led-ips-fullhd-100hz.webp'
    },
    {
      name: 'Monitor LG 32UR550-B 31.5" LED VA UltraHD 4K FreeSync',
      price: '289,99 €',
      stars: '3',
      reviews: '483',
      seller: 'PcComponentes',
      image: './assets/1292-lg-32ur550-b-315-led-va-ultrahd-4k-freesync.webp'
    },
    {
      name: 'Logitech G Pro X Auriculares Gaming Inalámbricos con Lightspeed Negros',
      price: '109,99 €',
      stars: '4',
      reviews: '250',
      reviews: '1093',
      seller: 'PcComponentes',
      image:
        './assets/1256-logitech-pro-x-auriculares-gaming-inalambricos-con-lightspeed-negros-foto.webp'
    },
    {
      name: 'ASUS ROG Destrier Ergo Silla Gaming Negra',
      price: '919,99 €',
      stars: '5',
      reviews: '41',
      seller: 'PcComponentes',
      image: './assets/172-asus-rog-destrier-ergo-silla-gaming-negra.webp'
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
    productName.style.margin = '10px'
    productName.style.fontSize = '16px'
    productName.style.height = '50px'
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
  footerContainer.className = 'footer-container'

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
