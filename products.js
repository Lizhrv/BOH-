const products = [
  {
    name: "Jabón Artesanal de Rosa",
    desc: "Aroma floral suave con pétalos de rosa natural.",
    price: "85.00",
    img: "images/rosa.jpg",
    aroma: "floral"
  },
  {
    name: "Jabón Artesanal de Lavanda",
    desc: "Aroma relajante con flores de lavanda.",
    price: "85.00",
    img: "images/lavanda.jpg",
    aroma: "relajante"
  },
  {
    name: "Jabón Artesanal de Caléndula",
    desc: "Ideal para piel sensible con flores de caléndula.",
    price: "85.00",
    img: "images/calendula.jpg",
    aroma: "sensible"
  },
  {
    name: "Jabón Artesanal de Manzanilla",
    desc: "Limpieza suave con extractos de manzanilla.",
    price: "85.00",
    img: "images/manzanilla.jpg",
    aroma: "sensible"
  },
  {
    name: "Jabón Artesanal de Miel & Glicerina",
    desc: "Hidratación natural con miel y glicerina vegetal.",
    price: "85.00",
    img: "images/miel-glicerina.jpg",
    aroma: "hidratante"
  },
  {
    name: "Jabón Decorativo Premium",
    desc: "Mezcla de flores naturales premium, ideal para regalo.",
    price: "85.00",
    img: "images/decorativo-premium.jpg",
    aroma: "floral"
  },
];

const grid = document.getElementById("productGrid");

grid.innerHTML = products.map(p => `
  <article class="product-card" data-stock="${p.soldOut ? 'out' : 'in'}" data-aroma="${p.aroma}">
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

const cards = [...document.querySelectorAll(".product-card")];
const filterBoxes = [...document.querySelectorAll(".filters input[type=checkbox]")];
const countLabel = document.querySelector(".count");

function applyFilters() {
  const active = { stock: [], aroma: [] };
  filterBoxes.forEach(b => {
    if (b.checked) active[b.dataset.group].push(b.dataset.value);
  });

  let visible = 0;
  cards.forEach(card => {
    const okStock = active.stock.length === 0 || active.stock.includes(card.dataset.stock);
    const okAroma = active.aroma.length === 0 || active.aroma.includes(card.dataset.aroma);
    const show = okStock && okAroma;
    card.style.display = show ? "" : "none";
    if (show) visible++;
  });

  countLabel.textContent = `${visible} ${visible === 1 ? "producto" : "productos"}`;
}

filterBoxes.forEach(b => b.addEventListener("change", applyFilters));
applyFilters();

let cartCount = 0;
document.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn") && !e.target.disabled) {
    cartCount++;
    document.querySelector(".cart-count").textContent = cartCount;
  }
});
