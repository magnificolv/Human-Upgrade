// ═══════════════════════════════════════════════════════════════
//  Human Upgrade — js/app.js
//  Zoom-in immersive transitions
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

// ── State ──
let isAnimating = false;
let lastOpenedCard = null; // store ref for reverse animation

// ── Build home screen cards ──
function buildCards() {
  const grid = document.getElementById('cardGrid');
  CATEGORIES.forEach((cat, idx) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.background = cat.bg; // base fallback, texture layer overrides visually
    card.dataset.key = cat.key;
    card.addEventListener('click', () => openCat(cat.key, card));

    const artHTML = cat.image
      ? `<img class="art-img" src="${cat.image}" alt="${cat.name}">`
      : (SVG_ART[cat.key] || '');

    card.innerHTML = `
      <div class="card-texture"></div>
      <div class="card-particles"></div>
      <div class="card-shimmer"></div>
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

// ── ZOOM-IN IMMERSIVE OPEN — CINEMATIC ──
function openCat(key, cardEl) {
  if (isAnimating) return;
  isAnimating = true;
  lastOpenedCard = cardEl;

  const cat = CATEGORIES.find(c => c.key === key);
  if (!cat) { isAnimating = false; return; }

  // 1. Get card position
  const rect = cardEl.getBoundingClientRect();

  // 2. Create backdrop blur
  const backdrop = document.createElement('div');
  backdrop.className = 'zoom-backdrop';
  document.body.appendChild(backdrop);

  // 3. Create zoom overlay at card position
  const overlay = document.createElement('div');
  overlay.className = 'zoom-overlay';
  overlay.style.top = rect.top + 'px';
  overlay.style.left = rect.left + 'px';
  overlay.style.width = rect.width + 'px';
  overlay.style.height = rect.height + 'px';
  overlay.style.background = cat.bg;

  // Texture gradients per category
  const textures = {
    spiritual:    'radial-gradient(ellipse at 30% 80%, rgba(30,80,180,0.4), transparent 55%), radial-gradient(ellipse at 70% 20%, rgba(100,160,255,0.2), transparent 45%)',
    emotional:    'radial-gradient(ellipse at 60% 30%, rgba(140,50,200,0.4), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(200,100,255,0.15), transparent 45%)',
    intellectual: 'radial-gradient(ellipse at 40% 70%, rgba(30,160,80,0.35), transparent 55%), radial-gradient(ellipse at 70% 20%, rgba(80,200,120,0.15), transparent 45%)',
    physical:     'radial-gradient(ellipse at 50% 50%, rgba(180,40,40,0.4), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(255,100,60,0.15), transparent 45%)'
  };
  overlay.style.backgroundImage = textures[cat.key] || '';

  // Art content inside overlay
  const artHTML = cat.image
    ? `<img src="${cat.image}" style="width:60%;max-width:130px;border-radius:6px;object-fit:cover;">`
    : (SVG_ART[cat.key] || '');

  // Build overlay with glow rings + particles
  overlay.innerHTML = `
    <div class="zoom-inner-art">${artHTML}</div>
    <div class="zoom-glow-ring"></div>
    <div class="zoom-glow-ring ring-2"></div>
    <div class="zoom-particles"></div>`;

  // Generate burst particles
  const particleContainer = overlay.querySelector('.zoom-particles');
  for (let i = 0; i < 15; i++) {
    const zp = document.createElement('div');
    zp.className = 'zp';
    const size = 1 + Math.random() * 3;
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 200;
    const endX = Math.cos(angle) * dist;
    const endY = Math.sin(angle) * dist;
    zp.style.cssText = `
      width:${size}px; height:${size}px;
      top:50%; left:50%;
      --zp-end: translate(${endX}px, ${endY}px) scale(${0.2 + Math.random() * 0.5});
      animation-delay: ${0.1 + Math.random() * 0.4}s;
    `;
    if (Math.random() > 0.5) zp.style.background = 'rgba(255,255,255,0.3)';
    particleContainer.appendChild(zp);
  }

  document.body.appendChild(overlay);

  // 4. Hide original card
  cardEl.style.opacity = '0';

  // 5. Prepare category content (hidden)
  populateCatScreen(cat);
  const catScreen = document.getElementById('catScreen');
  catScreen.classList.remove('off');
  catScreen.classList.remove('visible');
  // Remove any lingering sub-card-in classes
  catScreen.querySelectorAll('.sub-card').forEach(sc => sc.classList.remove('sub-card-in'));

  // Force reflow
  overlay.offsetHeight;

  // 6. Activate backdrop
  backdrop.classList.add('active');

  // 7. Fade out home
  document.querySelector('.home-wrap').classList.add('fading-out');

  // 8. Expand overlay — slower, cinematic
  requestAnimationFrame(() => {
    overlay.style.top = '0px';
    overlay.style.left = '0px';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.borderRadius = '0px';
    overlay.classList.add('expanded');
  });

  // 9. After expansion, reveal category content
  setTimeout(() => {
    document.getElementById('home').classList.add('off');
    catScreen.classList.add('visible');

    // Stagger sub-cards one by one
    const subCards = catScreen.querySelectorAll('.sub-card');
    subCards.forEach((sc, i) => {
      setTimeout(() => sc.classList.add('sub-card-in'), i * 180);
    });

    // Clean up overlay after everything settles
    setTimeout(() => {
      overlay.remove();
      backdrop.remove();
      isAnimating = false;
    }, subCards.length * 180 + 600);

  }, 1100); // wait for the slower zoom to finish
}

// ── REVERSE ZOOM-OUT (GO HOME) ──
function goHome() {
  if (isAnimating) return;
  isAnimating = true;

  const catScreen = document.getElementById('catScreen');
  const homeScreen = document.getElementById('home');
  const homeWrap = document.querySelector('.home-wrap');

  // 1. Fade out sub-cards in reverse, one by one
  const subCards = [...catScreen.querySelectorAll('.sub-card')].reverse();
  subCards.forEach((sc, i) => {
    setTimeout(() => sc.classList.remove('sub-card-in'), i * 80);
  });

  // 2. After sub-cards gone, fade out hero text
  const subFadeTime = subCards.length * 80 + 200;
  setTimeout(() => {
    catScreen.classList.remove('visible');
  }, subFadeTime);

  // 3. Switch screens
  setTimeout(() => {
    catScreen.classList.add('off');
    homeScreen.classList.remove('off');
    homeWrap.classList.add('fading-out');

    // Restore card
    if (lastOpenedCard) {
      lastOpenedCard.style.opacity = '0';
      lastOpenedCard.style.transform = 'scale(0.85)';
      lastOpenedCard.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';
    }

    // Force reflow then fade in
    homeWrap.offsetHeight;
    homeWrap.classList.remove('fading-out');
    homeWrap.style.transition = 'opacity 0.6s ease';
    homeWrap.style.opacity = '1';

    requestAnimationFrame(() => {
      if (lastOpenedCard) {
        lastOpenedCard.style.opacity = '1';
        lastOpenedCard.style.transform = '';
      }
    });

    setTimeout(() => {
      homeWrap.style.transition = '';
      homeWrap.style.opacity = '';
      if (lastOpenedCard) {
        lastOpenedCard.style.transition = '';
        lastOpenedCard.style.transform = '';
      }
      isAnimating = false;
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 650);

  }, subFadeTime + 450);
}

// ── Populate category screen ──
function populateCatScreen(cat) {
  document.getElementById('catEyebrow').textContent = cat.num + ' — Human Upgrade';
  document.getElementById('catTitleLarge').textContent = cat.name;
  document.getElementById('catDescLine').textContent = cat.sub;
  document.getElementById('catHeroBg').style.background =
    `radial-gradient(ellipse at 30% 60%, ${cat.bg}ff 0%, transparent 75%)`;

  const grid = document.getElementById('subGrid');
  grid.innerHTML = '';
  cat.items.forEach((item, i) => {
    const sc = document.createElement('div');
    sc.className = 'sub-card';
    sc.style.background = cat.bg + 'bb';
    sc.innerHTML = `
      <span class="sub-icon">${item.icon}</span>
      <div class="sub-title">${item.title}</div>
      <div class="sub-text">${item.desc}</div>`;
    grid.appendChild(sc);
  });
}

// ── Floating particles for cards ──
function spawnParticles() {
  document.querySelectorAll('.card-particles').forEach(container => {
    // Create 5-7 particles per card
    const count = 5 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const isGold = Math.random() > 0.6;
      p.className = 'p' + (isGold ? ' p-gold' : '');
      const size = 1.5 + Math.random() * 2.5;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = (10 + Math.random() * 80) + '%';
      p.style.bottom = (-10 + Math.random() * 20) + '%';
      p.style.animationDuration = (6 + Math.random() * 8) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      container.appendChild(p);
    }
  });
}

// ── Init ──
buildCards();
spawnParticles();
document.getElementById('backBtn').addEventListener('click', goHome);
