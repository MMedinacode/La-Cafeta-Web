/* ---------- LOGO ORIGINAL DEL NEGOCIO ---------- */
const LOGO_FULL_SRC = 'data:image/png;base64,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';
const LOGO_ICON_SRC = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgAgMAAAD2oY++AAAADFBMVEX////o6OgcHBwAAADS06deAAADh0lEQVR42u2YvY7jVBSAv5uNPUjbRNp4JXYK9gGQ4A24b4CLZIWWFgkhIbGPsI8w1dRbrAQikXAJBcp9BCpqihFoJy5cocnY5FLYccaO7/HZZSs0p4v15fzf43MN9wKASYeeTk4fffipElw4neX4V6WL5zt0phdbHTgc81By/G86jRFOByYUOnDulRqtttKbPSqNBq/Nzk6rER041YLowOlRp7ESmB69TMSQXxP7fa3qG8l09HFr03wugYkDmLX/Ccp3FuP9FcD5H4LGxlwCsMik87cHs6mj2VxIGj14h0nBkAngtAIKSMF8JlVmBpDBfKjkk35DVBANNdGJxi1EVtM9ZWAGTE6a0YE9bZ4uaCz4Opraj9Ac8xfAufc3xHUhg+AVEHu/Iw6dMQAe+htg4v0/mENbDvpYElEX0eKMCB6iwWf9aDpRO5MCDgOORRj0GSmQgyXvn66OxjXTun9g2++LDliQ1EWcNf6GwPL4D5wRNJYuqhsNfIagsZ3KDta9/HTbrMDCdHCWdsE7cz4XwQIHEUMvhoH5OKvDEcFZ7d0WmPZeTF3QVsCcHJj17Pc0bgFbTwkJNLYCUu+AeSX5aF+BYesAu5XG2S0w8RcMjbO7cnYFxHsLmF+k9DxaA9GfDjCS5bqpn6QQmD8D9L287Z4KJGJyV8exvRTBrWvBZCmBl/9p+bgHe/IAsGJlHi74XVoDW1lC7jQgPCud0selVYJxqo1aDc61YKQBL59lTDXgarXGWJXp77W19s5oQW33FO+1H/27dHjx3o7CTAvaBpTv067ejHU++hqsJKZs3mK69Hg3btpDQqUwDSwOPoqX0AqTkis0FkT2YFrUmLOErIlayrhLvsI3oJfA6NLiD7NHys/jBdwcfnzkZbk4VGYkkb69qJ3JCt+0jeu1A6AUO/I6O2qUwHLljnf+cH42+fW3nbtRQPbLZedzQxy6ON2edY9rGdwTeufavwyA6/6DTwIu2tOb3qDsTkbKX2MuHsD9C52LAdv7gfdzPAReDYy98oXOMjwZiHlwMzCbE/D1cCq+7HO3gVUj+kmnEB53jb+xJ+tMI3/fPnp6pyhf/xz6quVXd0v2YyZ9J4vS3sL6Tlvz5IcxZv8FYMLnpZXdB8BkdIK/xbuwqsHx741Fo3E0EXmjMRsD3dg86RwIw2h+6rEyGZuO7T0FeC5avrZt96zK0T3qfyb/Alz0QNbbjSW9AAAAAElFTkSuQmCC';
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
      { n: 'Cappuccino', p: 3000 },
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
      { n: 'Bobba Tea', p: 3200 },
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
        { n: 'Trozo de Torta', p: 3900 },
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
      { n: 'Aliado Jamón Queso', p: 3000 },
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
      { n: 'Tostadas', p: 3000, v: 1, d: 'Palta, hummus o mixta' },
      { n: 'Paila de Huevo', p: 3500, d: 'Lleva 3 huevos. Agrega jamón o queso por $600' },
      { n: 'Paila Campestre', p: 4700, d: '3 huevos revueltos, jamón, queso y tomate en cubos' },
      { n: 'Paila Gringa', p: 5200, d: '3 huevos revueltos con tocino + 2 dips a elección: palta, queso crema, miel, rollito jamón queso' },
    ]}]
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
