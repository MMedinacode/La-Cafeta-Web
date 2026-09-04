/* ---------- LOGO ORIGINAL DEL NEGOCIO ---------- */
const LOGO_FULL_SRC = 'data:image/png;base64,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';
const LOGO_ICON_SRC = 'data:image/png;base64,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';
document.getElementById('heroLogo').src = LOGO_FULL_SRC;
document.getElementById('footerLogo').src = LOGO_FULL_SRC;
document.getElementById('navIcon').src = LOGO_ICON_SRC;
document.getElementById('dividerIcon').src = LOGO_ICON_SRC;

/* ============================================================
   NAVEGACIÓN SPA POR PESTAÑAS
   ============================================================ */
const panels = document.querySelectorAll('.tab-panel');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.15 });

function goToTab(tabId) {
  panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('main-nav').classList.remove('open');
  const activePanel = document.querySelector('.tab-panel.active');
  if (activePanel) activePanel.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

document.querySelectorAll('.tab-panel.active .reveal').forEach(el => revealObserver.observe(el));

/* ---------- DATOS DE LA CARTA (Menú oficial de La Cafeta) ---------- */
const MENU = {
  cafe: {
    label: 'Café y bebidas calientes',
    groups: [{ title: 'Bebestibles', items: [
      { n: 'Espresso', p: 2600 },
      { n: 'Americano', p: 2600 },
      { n: 'Americano XL', p: 2700 },
      { n: 'Cappuccino', p: 3000, img: 'Fotos/sandwich-cappuccino.jpg' },
      { n: 'Flat White', p: 3100 },
      { n: 'Latte', p: 3400 },
      { n: 'Latte XL', p: 3900 },
      { n: 'Mokaccino', p: 3800 },
      { n: 'Dirty Chai', p: 3800 },
      { n: 'Cold Brew', p: 3500 },
      { n: 'Filtrado', p: 3500 },
      { n: 'Affogato', p: 3500 },
      { n: 'Espresso Tonic', p: 3800 },
      { n: 'Cold Brew Tonic', p: 4000 },
      { n: 'Café Helado', p: 5000 },
      { n: 'Golden Milk', p: 3000 },
      { n: 'Chocolate Caliente', p: 3000 },
      { n: 'Chai Latte', p: 3200 },
      { n: 'Matcha Latte', p: 3500 },
    ]}]
  },
  especiales: {
    label: 'Bebestibles de la casa',
    groups: [{ title: 'Bebestibles de la casa', items: [
      { n: 'Ice Tea', p: 2800 },
      { n: 'Bobba Tea', p: 3200, img: 'Fotos/matcha-boba.jpg' },
      { n: 'Espresso Ginger', p: 4000 },
      { n: 'Cold Brew Ginger', p: 4200 },
      { n: 'Esprejito', p: 4500 },
      { n: 'Matcha Latte Frutas', p: 4500, d: 'Con base de mango o frambuesa' },
      { n: 'Whitemoka Pistacho', p: 5500 },
    ]}]
  },
  pasteleria: {
    label: 'Pastelería',
    groups: [
      { title: 'Pastelería (sujeto a disponibilidad)', items: [
        { n: 'Macaron', p: 1500, v: 1 },
        { n: 'Alfajor', p: 1500, v: 1 },
        { n: 'Muffin', p: 1800, v: 1 },
        { n: 'Galletas 100 gramos', p: 2500, v: 1 },
        { n: 'Croissant', p: 2500, v: 1 },
        { n: 'Croissant Relleno', p: 3800, v: 1, d: 'Manjar o nutella' },
        { n: 'Trozo de Torta', p: 3900, img: 'Fotos/vitrina.jpg' },
        { n: 'Trozo de Pastel', p: 3000 },
        { n: 'Pastel sin Azúcar', p: 4200 },
      ]},
      { title: 'Otras bebidas', items: [
        { n: 'Teteras Adagio', p: 3500, d: '500 ml perfectos para compartir, consulta las opciones disponibles' },
        { n: 'Jugos Naturales', p: 3000, d: 'De frutas de la estación, consulta sabores disponibles' },
        { n: 'Limonada', p: 3000 },
        { n: 'Bebidas en Lata', p: 1500 },
        { n: 'Agua Mineral', p: 1200 },
      ]}
    ]
  },
  sandwiches: {
    label: 'Sándwiches',
    groups: [{ title: 'Sándwiches', items: [
      { n: 'Aliado Jamón Queso', p: 3000, img: 'Fotos/sandwiches-jugo.jpg' },
      { n: 'Veggie', p: 4500, v: 1, d: 'Queso, tomate, palta, lechuga' },
      { n: 'Not Veggie', p: 4500, d: 'Jamón, tomate, palta, lechuga' },
      { n: 'Ave', p: 4500, d: 'Ave pimentón o ave mayo' },
      { n: 'Vegan', p: 5200, v: 1, d: 'Hummus, tomate, palta, rúcula' },
      { n: 'Mechada Queso', p: 5200 },
      { n: 'Serrana', p: 5500, d: 'Jamón serrano, queso amarillo, tomate, rúcula, aceite de oliva' },
      { n: 'Veggie Acaramelado', p: 5000, v: 1, d: 'Queso, palta, tomate, cebolla caramelizada, rúcula' },
      { n: 'Mechada Italiana', p: 6000, d: 'Mechada, tomate, palta, mayonesa' },
      { n: 'Jamón Caramelo', p: 5000, d: 'Jamón, cebolla caramelizada, queso, tomate, rúcula, orégano' },
      { n: 'Serrana Ibérica', p: 5300, d: 'Jamón serrano, queso crema, tomate, aceitunas en rodajas' },
      { n: 'Vegetal Mediterráneo', p: 5700, v: 1, d: 'Hummus, pimentón asado, tomate, rúcula, aceitunas en rodajas, aceite de oliva' },
      { n: 'Mechada Oliva', p: 5700, d: 'Mechada, queso, tomate, aceitunas en rodajas' },
      { n: 'Ave Provenzal', p: 6000, d: 'Pollo desmenuzado, pimentón asado, cebolla caramelizada, queso crema, tomate' },
    ]}]
  },
  tostadas: {
    label: 'Con tostadas',
    groups: [{ title: 'Con tostadas', items: [
      { n: 'Tostadas', p: 3000, v: 1, d: 'Palta, hummus o mixta', img: 'Fotos/brunch.jpg' },
      { n: 'Paila de Huevo', p: 3500, d: 'Lleva 3 huevos. Agrega jamón o queso por $600' },
      { n: 'Paila Campestre', p: 4700, d: '3 huevos revueltos, jamón, queso y tomate en cubos' },
      { n: 'Paila Gringa', p: 5200, d: '3 huevos revueltos con tocino + 2 dips a elección: palta, queso crema, miel, rollito jamón queso' },
    ]}]
  },
  agregados: {
    label: 'Agregados',
    groups: [
      { title: 'Para bebidas', items: [
        { n: 'Haz tu bebida fría', p: 400 },
        { n: 'Cambia a bebida vegetal', p: 500 },
        { n: 'Agrega syrup o crema', p: 400 },
      ]},
      { title: 'Para sándwiches', items: [
        { n: 'Cambia a croissant', p: 1200 },
        { n: 'Ingrediente extra', p: 600 },
      ]}
    ]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
const catKeys = Object.keys(MENU);

catKeys.forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.textContent = MENU[key].label;
  tab.addEventListener('click', () => showMenuTab(key));
  tab.dataset.key = key;
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;

  MENU[key].groups.forEach(group => {
    if (group.title && MENU[key].groups.length > 1) {
      const h = document.createElement('div');
      h.className = 'menu-group-title';
      h.textContent = group.title;
      panel.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.addEventListener('click', () => openModal(item));

      if (item.img) {
        const photo = document.createElement('div');
        photo.className = 'menu-item-photo';
        const photoImg = document.createElement('img');
        photoImg.src = item.img;
        photoImg.alt = item.n;
        photo.appendChild(photoImg);
        row.appendChild(photo);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if (item.v) {
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if (item.d) {
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = money(item.p);

      row.appendChild(textWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  });
  panelsEl.appendChild(panel);
});

function showMenuTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + key));
}

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item) {
  currentItem = item;
  document.getElementById('modalName').textContent = item.n + (item.v ? ' (vegano/vegetariano)' : '');
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado del día en La Cafeta.';
  const photoWrap = document.getElementById('modalPhoto');
  if (item.img) {
    photoWrap.innerHTML = '';
    const photoImg = document.createElement('img');
    photoImg.src = item.img;
    photoImg.alt = item.n;
    photoWrap.appendChild(photoImg);
    photoWrap.style.display = 'block';
  } else {
    photoWrap.style.display = 'none';
  }
  toggleModal(true);
}
document.getElementById('modalAddBtn').addEventListener('click', () => {
  addToCart(currentItem);
  toggleModal(false);
  toggleCart(true);
});
function toggleModal(open) { document.getElementById('modalOverlay').classList.toggle('open', open); }

/* ---------- CARRITO ---------- */
let cart = [];
function addToCart(item) {
  const existing = cart.find(c => c.n === item.n);
  if (existing) { existing.qty++; } else { cart.push({ ...item, qty: 1 }); }
  renderCart();
}
function changeQty(name, delta) {
  const line = cart.find(c => c.n === name);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(c => c.n !== name);
  renderCart();
}
function renderCart() {
  const linesEl = document.getElementById('cartLines');
  const count = cart.reduce((a, c) => a + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  linesEl.innerHTML = '';
  if (cart.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'cart-empty';
    empty.textContent = 'Todavía no agregaste nada.';
    linesEl.appendChild(empty);
  } else {
    cart.forEach(c => {
      const line = document.createElement('div');
      line.className = 'cart-line';

      const left = document.createElement('div');
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = c.n;

      const qtyCtrl = document.createElement('div');
      qtyCtrl.className = 'qty-ctrl';

      const minusBtn = document.createElement('button');
      minusBtn.className = 'qty-btn';
      minusBtn.type = 'button';
      minusBtn.textContent = '–';
      minusBtn.addEventListener('click', () => changeQty(c.n, -1));

      const qtySpan = document.createElement('span');
      qtySpan.className = 'mono';
      qtySpan.textContent = c.qty;

      const plusBtn = document.createElement('button');
      plusBtn.className = 'qty-btn';
      plusBtn.type = 'button';
      plusBtn.textContent = '+';
      plusBtn.addEventListener('click', () => changeQty(c.n, 1));

      qtyCtrl.appendChild(minusBtn);
      qtyCtrl.appendChild(qtySpan);
      qtyCtrl.appendChild(plusBtn);
      left.appendChild(name);
      left.appendChild(qtyCtrl);

      const lineTotal = document.createElement('div');
      lineTotal.className = 'mono';
      lineTotal.textContent = money(c.p * c.qty);

      line.appendChild(left);
      line.appendChild(lineTotal);
      linesEl.appendChild(line);
    });
  }
  const total = cart.reduce((a, c) => a + c.p * c.qty, 0);
  document.getElementById('cartTotal').textContent = money(total);
  updateCheckoutLink(total);
}
function updateCheckoutLink(total) {
  let msg = 'Hola! Quiero hacer este pedido en La Cafeta:%0A%0A';
  cart.forEach(c => { msg += '• ' + c.n + ' x' + c.qty + ' — ' + money(c.p * c.qty) + '%0A'; });
  msg += '%0ATotal: ' + money(total);
  document.getElementById('checkoutBtn').href = 'https://wa.me/56948961990?text=' + msg;
}
function toggleCart(open) { document.getElementById('cartOverlay').classList.toggle('open', open); }
document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
document.getElementById('cartCloseBtn').addEventListener('click', () => toggleCart(false));
document.getElementById('modalCloseBtn').addEventListener('click', () => toggleModal(false));
renderCart();

/* ---------- INDICADOR ABIERTO/CERRADO EN VIVO (Lun-Sáb 10-21, Dom 11-21) ---------- */
(function () {
  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');
  const now = new Date();
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openMin = (day === 0) ? 11 * 60 : 10 * 60;
  const closeMin = 21 * 60;
  const isOpen = minutes >= openMin && minutes < closeMin;
  const label = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  text.textContent = label;
  dot.classList.toggle('closed', !isOpen);
  if (visitStatus) {
    visitStatus.textContent = label;
    visitStatus.className = 'mono';
    visitStatus.style.cssText = 'font-size:0.7rem; letter-spacing:0.08em; text-transform:uppercase; color:' + (isOpen ? '#8fe0a8' : '#f0a898') + ';';
  }
})();
