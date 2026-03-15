// ═══════════════════════════════════════════════════════════════
//  Human Upgrade — data/content.js
//
//  ŠIS IR VIENĪGAIS FAILS, KO VAJAG EDITĒT!
//
//  Kā mainīt tekstu:
//    - Maini tekstu starp pēdiņām: "Tavs teksts šeit"
//    - Neizdzēs komatus, kols vai citas pieturzīmes ārpus pēdiņām
//
//  Kā pievienot savu bildi kārtij:
//    1. Ieliec bildi mapē images/ (piemēram: images/spiritual.png)
//    2. Nomainī:  image: null
//       uz:       image: 'images/spiritual.png'
//
//  Kā mainīt ikoniņas (emoji) sub-kartēm:
//    - Vienkārši nomainī emoji simbolu starp pēdiņām
// ═══════════════════════════════════════════════════════════════

const CATEGORIES = [
  {
    key:   'spiritual',
    num:   '01',
    name:  'Spiritual',
    sub:   'Dvēseles attīstība',
    bg:    '#0d1428',
    image: null, // Nomainī uz: 'images/spiritual.png'
    items: [
      { icon: '🌀', title: 'Meditācija',              desc: 'Ikdienas klusuma prakse — 10–30 min, lai iepazītu sevi' },
      { icon: '🍄', title: 'Psihedēliskā pieredze',   desc: 'Apzināts brauciens ar mushroom vai citiem augiem' },
      { icon: '💬', title: 'Spirituālas sarunas',     desc: 'Dziļas pārrunas par dzīvi, dvēseli, jēgu' },
      { icon: '🎬', title: 'Izglītojošie video',      desc: 'Dokumentālfilmas un lekcijas par apziņu un dvēseli' },
      { icon: '📿', title: 'Rituāli & prakse',        desc: 'Personīgi rituāli — altāri, pateicība, enerģētiskā tīrīšana' },
      { icon: '🌿', title: 'Daba & klusums',          desc: 'Laiks dabā bez telefona, novērojot un esot klāt' },
    ]
  },
  {
    key:   'emotional',
    num:   '02',
    name:  'Emotional',
    sub:   'Emociju pasaule',
    bg:    '#1a0a2e',
    image: null, // Nomainī uz: 'images/emotional.png'
    items: [
      { icon: '🗣',  title: 'Dalīšanās',            desc: 'Runāt atklāti par savām sajūtām ar uzticamu cilvēku' },
      { icon: '📓',  title: 'Jūtu dienasgrāmata',   desc: 'Ikdienas rakstīšana — ko sajutu, kas izraisīja, kā reaģēju' },
      { icon: '🪞',  title: 'Spoguļošanās',         desc: 'Mācīties atpazīt emocijas pirms tās pārņem' },
      { icon: '🤝',  title: 'Terapija vai koučings', desc: 'Profesionāla palīdzība emocionālo bloku atrisināšanā' },
      { icon: '🎭',  title: 'Mākslas terapija',     desc: 'Gleznošana, mūzika vai kustība kā izjūtu kanāls' },
      { icon: '❤',   title: 'Ievainojamība',        desc: 'Ļaut sevi redzēt — patiesums pret sevi un citiem' },
    ]
  },
  {
    key:   'intellectual',
    num:   '03',
    name:  'Intellectual',
    sub:   'Prāta attīstība',
    bg:    '#071a0f',
    image: null, // Nomainī uz: 'images/intellectual.png'
    items: [
      { icon: '🧠', title: 'Cilvēka uzbūve',       desc: 'Kā strādā smadzenes, nervu sistēma, hormoni' },
      { icon: '🌍', title: 'Pasaules mehānismi',   desc: 'Ekonomika, politika, fizika — kā pasaule ir sakārtota' },
      { icon: '📚', title: 'Lasīšana',             desc: 'Grāmatas, raksti, zinātniski pētījumi' },
      { icon: '🎧', title: 'Podkāsti & lekcijas',  desc: 'TED, filosofija, psiholoģija, zinātne austiņās' },
      { icon: '♟',  title: 'Kritiskā domāšana',    desc: 'Argumentācija, loģika, kognitīvo aizspriedumu izpratne' },
      { icon: '✍',  title: 'Rakstīšana & sintēze', desc: 'Apstrādāt uzzināto — pieraksti, esejas, ideju kartes' },
    ]
  },
  {
    key:   'physical',
    num:   '04',
    name:  'Physical',
    sub:   'Ķermeņa iepazīšana',
    bg:    '#1c0808',
    image: 'images/physical.jpg',
    items: [
      { icon: '🔥', title: 'Kundalini & enerģija',    desc: 'Elpošanas prakse, kundalini joga, enerģijas pamošanās' },
      { icon: '🌹', title: 'Seksuālā pašizzināšana',  desc: 'Sava ķermeņa, vēlmju un enerģijas izpēte' },
      { icon: '🧘', title: 'Joga',                    desc: 'Hatha, yin vai vinyāsa — kustība kā meditācija' },
      { icon: '💪', title: 'Gym & spēks',             desc: 'Trenažieri, funkcionālais spēks, fiziskā disciplīna' },
      { icon: '🏃', title: 'Fiziskās aktivitātes',    desc: 'Skriešana, peldēšana, sports, kustība dabā' },
      { icon: '🛁', title: 'Ķermeņa rituāli',         desc: 'Aukstais duš, masāža, miega higiēna, atveseļošanās' },
    ]
  }
];
