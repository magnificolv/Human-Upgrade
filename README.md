# Human Upgrade — Izaugšanas ceļš

Interaktīva prezentācija par cilvēka izaugsmes ceļiem.

## Failu struktūra

```
human-upgrade/
├── index.html          ← Galvenā lapa (nemaini)
├── css/
│   └── style.css       ← Dizains (nemaini)
├── js/
│   └── app.js          ← Loģika (nemaini)
├── data/
│   └── content.js      ← ⭐ TIKAI ŠO FAILU MAINI
└── images/
    └── README.txt      ← Instrukcijas bildēm
```

## Ko editēt

**Vienīgais fails, ko vajag mainīt: `data/content.js`**

Tur ir viss teksts, ikoniņas un bilžu ceļi.

## Kā pievienot bildes

1. Ieliec bildi mapē `images/` (piemēram `images/spiritual.png`)
2. Atver `data/content.js`
3. Nomainī `image: null` uz `image: 'images/spiritual.png'`
4. Saglabā un atsvaidzini

## GitHub Pages

1. Push visu mapi uz savu GitHub repo
2. Repo Settings → Pages → Source: `main` branch, `/ (root)`
3. Lapa būs pieejama: `https://tavs-username.github.io/repo-nosaukums`
