const products = [
  {
    name: "Jabón Artesanal de Rosa",
    desc: "Aroma floral suave con pétalos de rosa natural.",
    price: "85.00",
    img: "images/rosa.jpg"
  },
  {
    name: "Jabón Artesanal de Lavanda",
    desc: "Aroma relajante con flores de lavanda.",
    price: "85.00",
    img: "images/lavanda.jpg"
  },
  {
    name: "Jabón Artesanal de Caléndula",
    desc: "Ideal para piel sensible con flores de caléndula.",
    price: "85.00",
    img: "images/calendula.jpg"
  },
  {
    name: "Jabón Artesanal de Manzanilla",
    desc: "Limpieza suave con extractos de manzanilla.",
    price: "85.00",
    img: "images/manzanilla.jpg"
  },
  {
    name: "Jabón Artesanal de Miel & Glicerina",
    desc: "Hidratación natural con miel y glicerina vegetal.",
    price: "85.00",
    img: "images/miel-glicerina.jpg"
  },
  {
    name: "Jabón Decorativo Premium",
    desc: "Mezcla de flores naturales premium, ideal para regalo.",
    price: "85.00",
    img: "images/decorativo-premium.jpg"
  },
];

const grid = document.getElementById("productGrid");

grid.innerHTML = products.map(p => `
  <article class="product-card">
    <div class="card-media">
      ${p.soldOut ? '<span class="badge">Agotado</span>' : ''}
      <img src="${p.img}" alt="${p.name}"
           onerror="this.outerHTML='<div class=&quot;placeholder&quot;>Imagen del producto</div>'">
      <button class="add-btn" ${p.soldOut ? 'disabled' : ''}>
        ${p.soldOut ? 'Agotado' : 'Agregar al carrito'}
      </button>
    </div>
    <h2 class="product-title">${p.name}</h2>
    <p class="product-desc">${p.desc}</p>
    <p class="product-price">$${p.price} MXN</p>
  </article>
`).join("");

let cartCount = 0;
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn") && !e.target.disabled) {
    cartCount++;
    document.querySelector(".cart-count").textContent = cartCount;
  }
});
