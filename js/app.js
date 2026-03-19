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
let lastOpenedCard = null;
let activePortalClone = null; // keep clone as bg until going home

// ── Build home screen cards ──
function buildCards() {
  const grid = document.getElementById('cardGrid');
  CATEGORIES.forEach((cat, idx) => {
    const card = document.createElement('div');
    card.className = 'card' + (cat.image ? ' has-image' : '');
    card.style.background = cat.bg;
    card.dataset.key = cat.key;
    card.addEventListener('click', () => openCat(cat.key, card));

    const artHTML = cat.image
      ? '' // image cards use full-bleed background instead
      : (SVG_ART[cat.key] || '');

    const bgImgHTML = cat.image
      ? `<div class="card-bg-img"><img src="${cat.image}" alt="${cat.name}"></div>`
      : '';

    card.innerHTML = `
      ${bgImgHTML}
      <div class="card-texture"></div>
      <div class="card-particles"></div>
      <div class="card-shimmer"></div>
      <div class="card-inner">
        <div class="card-art">${artHTML}</div>
        <div class="card-footer">
          <span class="card-name">${cat.name}</span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

// ── PORTAL DIVE OPEN — CINEMATIC ──
function openCat(key, cardEl) {
  if (isAnimating) return;
  isAnimating = true;
  lastOpenedCard = cardEl;

  const cat = CATEGORIES.find(c => c.key === key);
  if (!cat) { isAnimating = false; return; }

  const rect = cardEl.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // ─── 1. Create backdrop blur ───
  const backdrop = document.createElement('div');
  backdrop.className = 'zoom-backdrop';
  document.body.appendChild(backdrop);

  // ─── 2. Clone the card visually ───
  const clone = document.createElement('div');
  clone.className = 'portal-clone';
  clone.style.top = rect.top + 'px';
  clone.style.left = rect.left + 'px';
  clone.style.width = rect.width + 'px';
  clone.style.height = rect.height + 'px';

  if (cat.image) {
    clone.innerHTML = `<img src="${cat.image}" alt="${cat.name}">`;
  } else {
    // For non-image cards, capture background style
    clone.style.background = cat.bg;
    const textures = {
      spiritual:    'radial-gradient(ellipse at 30% 80%, rgba(30,80,180,0.4), transparent 55%), radial-gradient(ellipse at 70% 20%, rgba(100,160,255,0.2), transparent 45%)',
      emotional:    'radial-gradient(ellipse at 60% 30%, rgba(140,50,200,0.4), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(200,100,255,0.15), transparent 45%)',
      intellectual: 'radial-gradient(ellipse at 40% 70%, rgba(30,160,80,0.35), transparent 55%), radial-gradient(ellipse at 70% 20%, rgba(80,200,120,0.15), transparent 45%)',
      physical:     'radial-gradient(ellipse at 50% 50%, rgba(180,40,40,0.4), transparent 55%), radial-gradient(ellipse at 30% 80%, rgba(255,100,60,0.15), transparent 45%)'
    };
    clone.style.backgroundImage = textures[cat.key] || '';
    clone.innerHTML = `<div class="portal-clone-bg" style="display:flex;align-items:center;justify-content:center;">${SVG_ART[cat.key] || ''}</div>`;
  }

  document.body.appendChild(clone);
  activePortalClone = clone; // may get replaced by fullBg later

  // ─── 3. Calculate FLIP transform ───
  // We want the clone to fill the viewport
  const scaleX = vw / rect.width;
  const scaleY = vh / rect.height;
  const scale = Math.max(scaleX, scaleY); // cover, not contain
  const endX = (vw / 2) - (rect.left + rect.width / 2);
  const endY = (vh / 2) - (rect.top + rect.height / 2);

  // ─── 4. Hide original card ───
  cardEl.style.opacity = '0';

  // ─── 5. Prepare category content (overlay is hidden via visibility) ───
  populateCatScreen(cat);
  spawnCatParticles(cat.key);
  const catScreen = document.getElementById('catScreen');
  catScreen.classList.remove('visible');
  catScreen.scrollTop = 0;
  catScreen.querySelectorAll('.sub-card').forEach(sc => {
    sc.classList.remove('sub-card-in');
    sc.classList.remove('sub-card-out');
    sc.classList.remove('floating');
  });

  // Force reflow
  clone.offsetHeight;

  // ─── 6. Start the portal dive ───
  backdrop.classList.add('active');
  document.querySelector('.home-wrap').classList.add('fading-out');

  // ─── 6a. Pre-set bgFixed image (hidden) so it's ready for crossfade ───
  const bgFixed = document.getElementById('catBgFixed');
  const bgSrc = cat.bgImage || cat.image;
  if (bgSrc) {
    bgFixed.style.transition = 'none';
    bgFixed.style.opacity = '0';
    bgFixed.style.backgroundImage = `url('${bgSrc}')`;
    bgFixed.style.backgroundColor = '';
  } else {
    bgFixed.style.transition = 'none';
    bgFixed.style.opacity = '0';
    bgFixed.style.backgroundImage = '';
    bgFixed.style.backgroundColor = cat.bg;
  }
  bgFixed.offsetHeight; // force reflow

  // Animate clone with CSS transition (GPU accelerated transform) — SLOWER
  clone.style.transition = `
    transform 1.4s cubic-bezier(0.4, 0, 0.12, 1),
    border-radius 1.1s cubic-bezier(0.4, 0, 0.15, 1)`;

  requestAnimationFrame(() => {
    clone.style.transform = `translate(${endX}px, ${endY}px) scale(${scale})`;
    clone.style.borderRadius = '0px';
  });

  // ─── 7. Flash of light at card center ───
  setTimeout(() => {
    const flash = document.createElement('div');
    flash.className = 'portal-flash';
    const flashX = ((rect.left + rect.width / 2) / vw * 100);
    const flashY = ((rect.top + rect.height / 2) / vh * 100);
    flash.style.setProperty('--flash-x', flashX + '%');
    flash.style.setProperty('--flash-y', flashY + '%');
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 1100);
  }, 400);

  // ─── 8. Spawn floating dust particles ───
  setTimeout(() => {
    const dust = document.createElement('div');
    dust.className = 'portal-dust';
    for (let i = 0; i < 20; i++) {
      const pd = document.createElement('div');
      pd.className = 'pd';
      const size = 1 + Math.random() * 3;
      pd.style.width = size + 'px';
      pd.style.height = size + 'px';
      pd.style.left = (10 + Math.random() * 80) + '%';
      pd.style.top = (30 + Math.random() * 50) + '%';
      pd.style.animationDelay = (Math.random() * 0.8) + 's';
      if (Math.random() > 0.5) pd.style.background = 'rgba(255,255,255,0.3)';
      dust.appendChild(pd);
    }
    document.body.appendChild(dust);
    setTimeout(() => dust.remove(), 4000);
  }, 500);

  // ─── 9. Begin crossfade: bgFixed fades IN while clone fades OUT ───
  // Start crossfade DURING the zoom (at ~70% of zoom duration) for seamless blend
  setTimeout(() => {
    // Fade in the fixed background layer
    bgFixed.style.transition = 'opacity 0.9s ease';
    bgFixed.style.opacity = '1';

    // Fade out clone simultaneously — long overlap = no flash
    clone.style.transition = 'opacity 0.9s ease';
    clone.style.opacity = '0';
  }, 900); // starts while zoom (1.4s) is still running

  // ─── 10. After crossfade settles, show catScreen overlay ───
  setTimeout(() => {
    activePortalClone = null;
    catScreen.classList.add('visible');

    // Remove clone
    setTimeout(() => clone.remove(), 400);

    // Stagger bubble pop-in
    const subCards = catScreen.querySelectorAll('.sub-card');
    const baseDelay = 0.8;
    const stagger = 0.12;
    subCards.forEach((sc, i) => {
      sc.style.setProperty('--reveal-delay', (baseDelay + i * stagger) + 's');
      sc.classList.add('sub-card-in');

      // Add floating class after pop-in completes
      const popDone = (baseDelay + i * stagger + 0.7) * 1000;
      setTimeout(() => sc.classList.add('floating'), popDone);
    });

    // Clean up
    const totalAnimTime = (baseDelay + subCards.length * stagger + 0.9) * 1000;
    setTimeout(() => {
      backdrop.remove();
      document.getElementById('home').classList.add('off');
      isAnimating = false;
    }, totalAnimTime);

  }, 1500); // after crossfade (0.9s starting at 0.9s = done ~1.8s, show at 1.5s for overlap)
}

// ── REVERSE — GO HOME ──
function goHome() {
  if (isAnimating) return;
  isAnimating = true;

  const catScreen = document.getElementById('catScreen');
  const homeScreen = document.getElementById('home');
  const homeWrap = document.querySelector('.home-wrap');

  // 1. Fade out bubbles in reverse with exit animation
  const subCards = [...catScreen.querySelectorAll('.sub-card')].reverse();
  subCards.forEach((sc, i) => {
    sc.classList.remove('sub-card-in');
    sc.classList.remove('floating');
    sc.style.setProperty('--exit-delay', (i * 0.06) + 's');
    sc.classList.add('sub-card-out');
  });

  // 2. After sub-cards gone, fade out hero text + whole overlay
  const subFadeTime = subCards.length * 70 + 350 + 200;
  setTimeout(() => {
    catScreen.classList.remove('visible');
  }, subFadeTime);

  // 3. After catScreen is hidden, restore home screen
  setTimeout(() => {
    catScreen.scrollTop = 0;

    // Clear ambient particles
    document.getElementById('catParticles').innerHTML = '';

    // Clear fixed background layer
    const bgFixed = document.getElementById('catBgFixed');
    bgFixed.style.transition = '';
    bgFixed.style.opacity = '';
    bgFixed.style.backgroundImage = '';
    bgFixed.style.backgroundColor = '';

    homeScreen.classList.remove('off');

    // Restore the card that was hidden
    if (lastOpenedCard) {
      lastOpenedCard.style.opacity = '0';
      lastOpenedCard.style.transform = 'scale(0.85)';
      lastOpenedCard.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)';

      // Remove fading-out class on home
      homeWrap.classList.remove('fading-out');
      homeWrap.style.opacity = '1';
      homeWrap.style.transition = 'opacity 0.5s ease';

      requestAnimationFrame(() => {
        lastOpenedCard.style.opacity = '1';
        lastOpenedCard.style.transform = '';
      });
    } else {
      homeWrap.classList.remove('fading-out');
      homeWrap.style.opacity = '1';
    }

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

  }, subFadeTime + 500);
}

// ── Populate category screen ──
function populateCatScreen(cat) {
  document.getElementById('catEyebrow').textContent = cat.num + ' — Human Upgrade';
  document.getElementById('catTitleLarge').textContent = cat.name;
  document.getElementById('catDescLine').textContent = cat.sub;

  const heroBg = document.getElementById('catHeroBg');
  // For image cards: portal clone IS the background — hero-bg is just a subtle overlay
  // For non-image cards: use a gradient as bg
  heroBg.style.backgroundImage = '';
  heroBg.style.background = '';
  if (!cat.image) {
    heroBg.style.background =
      `radial-gradient(ellipse at 30% 60%, ${cat.bg}ff 0%, transparent 75%)`;
  }

  const grid = document.getElementById('subGrid');
  grid.innerHTML = '';

  const count = cat.items.length;
  const radius = 130; // px from center — fits mobile nicely
  const angleOffset = -90; // start from top

  cat.items.forEach((item, i) => {
    const sc = document.createElement('div');
    sc.className = 'sub-card';

    // ── Circular positioning ──
    const angle = angleOffset + (i * 360 / count);
    const rad = angle * Math.PI / 180;
    const bx = Math.cos(rad) * radius;
    const by = Math.sin(rad) * radius;
    sc.style.setProperty('--bx', bx + 'px');
    sc.style.setProperty('--by', by + 'px');

    // Vary sizes slightly
    const sizes = [110, 105, 115, 108, 112, 100];
    sc.style.setProperty('--bubble-size', (sizes[i % sizes.length]) + 'px');

    // Category-themed glow color — visible but soft
    const glowColors = {
      spiritual:    'rgba(60,120,220,0.35)',
      emotional:    'rgba(160,80,220,0.35)',
      intellectual: 'rgba(50,180,100,0.35)',
      physical:     'rgba(200,60,60,0.35)'
    };
    const glow = glowColors[cat.key] || 'rgba(255,255,255,0.1)';
    sc.style.setProperty('--bubble-glow', glow);

    // ── Floating animation params (each bubble unique) ──
    sc.style.setProperty('--float-dur', (4 + Math.random() * 3) + 's');
    sc.style.setProperty('--float-delay', (2 + i * 0.3) + 's');
    sc.style.setProperty('--float-y', (-5 - Math.random() * 8) + 'px');

    // Icon can be emoji OR image path (starts with "images/")
    const iconHTML = item.icon && item.icon.startsWith('images/')
      ? `<img class="sub-icon-img" src="${item.icon}" alt="${item.title}">`
      : item.icon || '✨';
    sc.innerHTML = `
      <span class="sub-icon">${iconHTML}</span>
      <div class="sub-title">${item.title}</div>`;
    grid.appendChild(sc);
  });
}

// ── Ambient particles for category screen (infinite loop) ──
function spawnCatParticles(catKey) {
  const container = document.getElementById('catParticles');
  container.innerHTML = '';

  // Category glow colors for some particles
  const glowColors = {
    spiritual:    'rgba(80,140,240,0.2)',
    emotional:    'rgba(180,100,240,0.2)',
    intellectual: 'rgba(70,200,120,0.2)',
    physical:     'rgba(220,80,80,0.2)'
  };
  container.style.setProperty('--cat-glow-color', glowColors[catKey] || 'rgba(255,255,255,0.15)');

  const count = 45; // dense ambient field
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');

    // Mix of types: plain white, gold, and category-colored
    const roll = Math.random();
    if (roll > 0.75) {
      p.className = 'cp cp-gold';
    } else if (roll > 0.5) {
      p.className = 'cp cp-glow';
    } else {
      p.className = 'cp';
    }

    // Bigger particles — mix of tiny sparkles and larger orbs
    const size = 1.5 + Math.random() * 4.5; // up to 6px
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = (Math.random() * 100) + '%';
    p.style.bottom = (-10 - Math.random() * 30) + '%';

    // Each particle has unique timing — staggered start creates endless stream
    const duration = 8 + Math.random() * 14; // 8-22s — slightly faster
    p.style.animationDuration = duration + 's';
    p.style.animationDelay = (Math.random() * duration) + 's';

    // Horizontal drift — some go left, some right
    const drift = -50 + Math.random() * 100;
    p.style.setProperty('--cp-drift', drift + 'px');

    container.appendChild(p);
  }
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

// ── Preload card images for smooth portal transitions ──
function preloadImages() {
  CATEGORIES.forEach(cat => {
    if (cat.image) {
      const img = new Image();
      img.src = cat.image;
    }
    if (cat.bgImage) {
      const bg = new Image();
      bg.src = cat.bgImage;
    }
  });
}

// ── Init ──
buildCards();
spawnParticles();
preloadImages();
document.getElementById('backBtn').addEventListener('click', goHome);
