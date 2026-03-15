// ═══════════════════════════════════════════════════════════════
//  Human Upgrade — js/app.js
//  Nav vajadzīgs šo failu editēt.
//  Visu saturu mainī failā: data/content.js
// ═══════════════════════════════════════════════════════════════

// SVG illustrations — shown until you replace with real images
const SVG_ART = {
  spiritual: `<svg class="art-svg" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="65" r="42" stroke="rgba(255,255,255,0.07)" stroke-width="0.5"/>
    <circle cx="50" cy="65" r="32" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" stroke-dasharray="3 5"/>
    <circle cx="50" cy="65" r="22" stroke="rgba(200,169,110,0.1)" stroke-width="0.5"/>
    <g stroke="rgba(200,169,110,0.45)" stroke-width="0.6">
      <line x1="50" y1="17" x2="50" y2="8"/><line x1="50" y1="113" x2="50" y2="122"/>
      <line x1="8" y1="65" x2="17" y2="65"/><line x1="83" y1="65" x2="92" y2="65"/>
      <line x1="20" y1="30" x2="27" y2="37"/><line x1="73" y1="93" x2="80" y2="100"/>
      <line x1="80" y1="30" x2="73" y2="37"/><line x1="27" y1="93" x2="20" y2="100"/>
    </g>
    <path d="M50 90 C38 80 31 68 35 54 C37 47 41 43 45 47 C44 39 47 29 50 22 C53 29 56 39 55 47 C59 43 63 47 65 54 C69 68 62 80 50 90Z" fill="rgba(255,255,255,0.5)"/>
    <path d="M50 83 C44 75 41 66 44 57 C46 51 48 49 50 52 C52 49 54 51 56 57 C59 66 56 75 50 83Z" fill="rgba(200,169,110,0.55)"/>
  </svg>`,

  emotional: `<svg class="art-svg" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 112 L50 28" stroke="rgba(255,255,255,0.25)" stroke-width="0.8"/>
    <path d="M50 38 C43 34 35 32 26 34" stroke="rgba(255,255,255,0.5)" stroke-width="0.75" fill="none" stroke-linecap="round"/>
    <path d="M50 48 C42 44 32 40 21 41" stroke="rgba(255,255,255,0.45)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 58 C41 54 30 50 18 50" stroke="rgba(255,255,255,0.4)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 68 C41 64 30 61 20 61" stroke="rgba(255,255,255,0.35)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 78 C43 75 35 72 27 72" stroke="rgba(255,255,255,0.28)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 38 C57 34 65 32 74 34" stroke="rgba(255,255,255,0.5)" stroke-width="0.75" fill="none" stroke-linecap="round"/>
    <path d="M50 48 C58 44 68 40 79 41" stroke="rgba(255,255,255,0.45)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 58 C59 54 70 50 82 50" stroke="rgba(255,255,255,0.4)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 68 C59 64 70 61 80 61" stroke="rgba(255,255,255,0.35)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 78 C57 75 65 72 73 72" stroke="rgba(255,255,255,0.28)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M50 28 C48 20 50 14 50 10 C50 14 52 20 50 28Z" fill="rgba(200,169,110,0.7)"/>
    <circle cx="50" cy="112" r="2.5" fill="rgba(200,169,110,0.4)"/>
  </svg>`,

  intellectual: `<svg class="art-svg" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="50" cy="56" rx="29" ry="27" stroke="rgba(255,255,255,0.2)" stroke-width="0.7"/>
    <path d="M50 29 L50 83" stroke="rgba(255,255,255,0.1)" stroke-width="0.6" stroke-dasharray="2 4"/>
    <path d="M34 40 C29 44 27 52 31 58" stroke="rgba(255,255,255,0.45)" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <path d="M31 58 C29 64 31 70 37 72" stroke="rgba(255,255,255,0.38)" stroke-width="0.8" fill="none" stroke-linecap="round"/>
    <path d="M21 53 C23 46 28 42 34 40" stroke="rgba(255,255,255,0.3)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M38 32 C42 28 46 29 48 33" stroke="rgba(255,255,255,0.35)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M66 40 C71 44 73 52 69 58" stroke="rgba(255,255,255,0.45)" stroke-width="0.9" fill="none" stroke-linecap="round"/>
    <path d="M69 58 C71 64 69 70 63 72" stroke="rgba(255,255,255,0.38)" stroke-width="0.8" fill="none" stroke-linecap="round"/>
    <path d="M79 53 C77 46 72 42 66 40" stroke="rgba(255,255,255,0.3)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M62 32 C58 28 54 29 52 33" stroke="rgba(255,255,255,0.35)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <rect x="44" y="83" width="12" height="7" rx="3.5" fill="rgba(255,255,255,0.1)"/>
    <circle cx="39" cy="50" r="2" fill="rgba(200,169,110,0.7)"/>
    <circle cx="61" cy="50" r="2" fill="rgba(200,169,110,0.7)"/>
    <circle cx="50" cy="64" r="1.5" fill="rgba(200,169,110,0.45)"/>
    <line x1="39" y1="50" x2="61" y2="50" stroke="rgba(200,169,110,0.2)" stroke-width="0.5"/>
  </svg>`,

  physical: `<svg class="art-svg" viewBox="0 0 100 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 90 C31 76 17 63 17 47 C17 35 25 27 35 27 C41 27 46 30 50 35 C54 30 59 27 65 27 C75 27 83 35 83 47 C83 63 69 76 50 90Z" stroke="rgba(255,255,255,0.22)" stroke-width="0.7" fill="rgba(255,255,255,0.03)"/>
    <path d="M50 35 L50 20 C50 16 54 14 58 16 L67 20" stroke="rgba(255,255,255,0.3)" stroke-width="0.8" fill="none" stroke-linecap="round"/>
    <path d="M50 20 L41 16" stroke="rgba(255,255,255,0.22)" stroke-width="0.7" fill="none" stroke-linecap="round"/>
    <path d="M29 44 C33 41 39 43 43 47 C47 51 45 57 50 60 C55 57 53 51 57 47 C61 43 67 41 71 44" stroke="rgba(200,169,110,0.38)" stroke-width="0.7" fill="none"/>
    <path d="M14 104 L24 104 L29 95 L33 112 L37 99 L41 104 L59 104 L63 99 L67 112 L71 95 L76 104 L86 104" stroke="rgba(200,169,110,0.55)" stroke-width="0.9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="50" cy="54" r="6" fill="rgba(180,60,60,0.12)"/>
  </svg>`
};

// Build the home screen cards
function buildCards() {
  const grid = document.getElementById('cardGrid');
  CATEGORIES.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = cat.bg;
    card.setAttribute('onclick', `openCat('${cat.key}')`);

    const artHTML = cat.image
      ? `<img class="art-img" src="${cat.image}" alt="${cat.name}">`
      : (SVG_ART[cat.key] || '');

    card.innerHTML = `
      <div class="card-inner">
        <span class="card-label">${cat.num}</span>
        <div class="card-art">${artHTML}</div>
        <div class="card-footer">
          <span class="card-name">${cat.name}</span>
          <span class="card-arrow">→</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// Open a category detail screen
function openCat(key) {
  const cat = CATEGORIES.find(c => c.key === key);
  if (!cat) return;

  document.getElementById('catEyebrow').textContent    = cat.num + ' — Human Upgrade';
  document.getElementById('catTitleLarge').textContent = cat.name;
  document.getElementById('catDescLine').textContent   = cat.sub;
  document.getElementById('catHeroBg').style.background =
    `radial-gradient(ellipse at 30% 60%, ${cat.bg}ff 0%, transparent 75%)`;

  const grid = document.getElementById('subGrid');
  grid.innerHTML = '';
  cat.items.forEach((item, i) => {
    const sc = document.createElement('div');
    sc.className = 'sub-card';
    sc.style.background      = cat.bg + 'bb';
    sc.style.animationDelay  = (i * 0.07) + 's';
    sc.innerHTML = `
      <span class="sub-icon">${item.icon}</span>
      <div class="sub-title">${item.title}</div>
      <div class="sub-text">${item.desc}</div>`;
    grid.appendChild(sc);
  });

  document.getElementById('home').classList.add('off');
  document.getElementById('catScreen').classList.remove('off');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Go back to home
function goHome() {
  document.getElementById('catScreen').classList.add('off');
  document.getElementById('home').classList.remove('off');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Init
buildCards();
