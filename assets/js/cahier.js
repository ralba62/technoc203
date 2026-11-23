/* ==========================================================
   Mon cahier — affichage, enregistrement des réponses (sur l'appareil), PDF
   Le contenu est dans assets/js/data/cahier.js
   ========================================================== */
(function(){
  const CA = window.CAHIER, APERCU = U.apercuProf(), V = window.VISIBILITE || {};
  const CLE = "cahier-reponses-v1";

  /* ---------- enregistrement local ---------- */
  let rep = {};
  try { rep = JSON.parse(localStorage.getItem(CLE) || "{}") || {}; } catch(e){ rep = {}; }
  let tSave = null;
  const sauver = () => {
    clearTimeout(tSave);
    tSave = setTimeout(() => {
      try { localStorage.setItem(CLE, JSON.stringify(rep)); flash("✓ Enregistré sur cet appareil"); }
      catch(e){ flash("⚠ Impossible d'enregistrer sur cet appareil"); }
    }, 350);
  };
  let tFlash = null;
  function flash(txt){
    const s = U.$("#saved"); s.textContent = txt; s.classList.add("on");
    clearTimeout(tFlash); tFlash = setTimeout(() => s.classList.remove("on"), 2200);
  }

  /* ---------- icônes sobres (toujours les mêmes pour un même type de bloc) ---------- */
  const S = d => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const IC = {
    video: S('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>'),
    appli: S('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>'),
    lire:  S('<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 20a2 2 0 0 0 2 2h13v-4"/>'),
    bilan: S('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'),
    ampoule: S('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>'),
    fiche: S('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'),
    ip:      S('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
    debit:   S('<path d="M4 15a8 8 0 1 1 16 0"/><path d="m12 15 4-5"/><path d="M4 19h16"/>'),
    routage: S('<path d="M12 3v18"/><path d="M5 6h10l3 2.5L15 11H5z"/><path d="M19 13H9l-3 2.5L9 18h10z"/>'),
    routeur: S('<rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 16.5h.01M11 16.5h.01"/><path d="M8 9a6 6 0 0 1 8 0M5.5 6.5a9.5 9.5 0 0 1 13 0"/>'),
    signal:  S('<path d="M4.5 9.5a11 11 0 0 1 15 0M7.5 13a6.5 6.5 0 0 1 9 0"/><circle cx="12" cy="17" r="1.3"/>'),
  };

  /* ---------- illustrations des pages de garde (dessins originaux) ---------- */
  const icone24 = (d, x, y, k, col) => `<g transform="translate(${x - 12 * k} ${y - 12 * k}) scale(${k})" fill="none" stroke="${col}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${d}</g>`;
  const P = {
    reseau: '<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5 6.5 17M12 11.5l5.5 5.5"/>',
    zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    cube: '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 15v2"/>',
    robot: '<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4.5V8M2.5 12.5v2M21.5 12.5v2M9 16h6"/><circle cx="12" cy="3.5" r="1"/><path d="M9 12.5h.01M15 12.5h.01" stroke-width="3"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  };
  function artCouverture(){
    const sat = [
      { x:110, y:92,  c:"#0A84C6", i:P.reseau, l:"Information" },
      { x:530, y:92,  c:"#D9A400", i:P.zap,    l:"Énergie" },
      { x:110, y:272, c:"#E2600E", i:P.cube,   l:"Matière" },
      { x:530, y:272, c:"#6D4FD8", i:P.code,   l:"Programmation" },
    ];
    const piste = (x1, y1, x2, y2, c) => {
      const mx = x1 < 320 ? x1 + 70 : x1 - 70;
      return `<path d="M${x1} ${y1} H${mx} L${x2 + (x1 < 320 ? -26 : 26)} ${y2} H${x2}" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="${mx}" cy="${y1}" r="5" fill="#fff" stroke="${c}" stroke-width="3"/>`;
    };
    return `<svg viewBox="0 0 640 364" role="img" aria-label="Illustration : un robot relié à l'information, l'énergie, la matière et la programmation">
      <g stroke="#C9D3E2" stroke-width="2" fill="none" opacity=".9">
        <path d="M0 182 H60 M580 182 H640 M320 0 V60 M320 304 V364"/>
        <path d="M24 40 H70 L96 66 M616 40 H570 L544 66 M24 324 H70 L96 298 M616 324 H570 L544 298" />
      </g>
      ${sat.map(s => piste(s.x + (s.x < 320 ? 44 : -44), s.y, 320 + (s.x < 320 ? -62 : 62), s.y < 182 ? 152 : 212, s.c)).join("")}
      <g>
        <rect x="248" y="112" width="144" height="140" rx="26" fill="#0B1426"/>
        ${[0,1,2,3].map(i => `<rect x="${264 + i * 34}" y="100" width="10" height="14" rx="2" fill="#0B1426"/><rect x="${264 + i * 34}" y="250" width="10" height="14" rx="2" fill="#0B1426"/>`).join("")}
        <rect x="258" y="122" width="124" height="120" rx="20" fill="none" stroke="#2DD4FF" stroke-width="1.5" opacity=".35"/>
        ${icone24(P.robot, 320, 182, 3.6, "#2DD4FF")}
        <circle cx="304" cy="187" r="4" fill="#2DD4FF" class="anim-pulse"/><circle cx="336" cy="187" r="4" fill="#2DD4FF" class="anim-pulse"/>
      </g>
      ${sat.map(s => `<g>
        <circle cx="${s.x}" cy="${s.y}" r="46" fill="#fff" stroke="${s.c}" stroke-width="4"/>
        <circle cx="${s.x}" cy="${s.y}" r="37" fill="${s.c}" opacity=".1"/>
        ${icone24(s.i, s.x, s.y, 2.2, s.c)}
        <text x="${s.x}" y="${s.y + 70}" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12.5" font-weight="700" fill="${s.c}" letter-spacing="1.5">${s.l.toUpperCase()}</text>
      </g>`).join("")}
    </svg>`;
  }
  function artReseau(k){
    const N = { pc:[70,150], r1:[210,80], r2:[220,215], r3:[340,60], r4:[350,170], r5:[340,250], srv:[520,150] };
    const L = [["pc","r1"],["pc","r2"],["r1","r3"],["r1","r4"],["r2","r4"],["r2","r5"],["r3","srv"],["r4","srv"],["r5","srv"]];
    const lien = ([a, b]) => `<line x1="${N[a][0]}" y1="${N[a][1]}" x2="${N[b][0]}" y2="${N[b][1]}" stroke="#B7C4D8" stroke-width="3" stroke-dasharray="2 8" stroke-linecap="round"/>`;
    const routeur = id => `<g transform="translate(${N[id][0]} ${N[id][1]})"><circle r="24" fill="#fff" stroke="${k}" stroke-width="3.5"/>
        <path d="M-10 -4 H8 M3 -9 L8 -4 L3 1 M10 5 H-8 M-3 0 L-8 5 L-3 10" stroke="${k}" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    const chemin = "M70 150 L210 80 L350 170 L520 150";
    return `<svg viewBox="0 0 600 300" role="img" aria-label="Illustration : des paquets d'informations voyagent de routeur en routeur jusqu'au serveur">
      <path d="M150 260 C90 260 90 190 140 182 C130 110 220 90 250 130 C270 50 400 40 410 110 C470 90 520 140 490 190 C540 200 530 268 470 268 Z" fill="${k}" opacity=".07"/>
      ${L.map(lien).join("")}
      <path d="${chemin}" stroke="${k}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
      ${["r1","r2","r3","r4","r5"].map(routeur).join("")}
      <g transform="translate(70 150)"><rect x="-34" y="-30" width="68" height="46" rx="6" fill="#0B1426"/><rect x="-28" y="-24" width="56" height="34" rx="3" fill="${k}" opacity=".85"/><path d="M-14 26 H14 M0 16 V26" stroke="#0B1426" stroke-width="4" stroke-linecap="round"/>
        <text y="52" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="#5A6476">192.168.1.25</text></g>
      <g transform="translate(520 150)">${[0,1,2].map(i => `<rect x="-28" y="${-44 + i * 30}" width="56" height="24" rx="5" fill="#0B1426"/><circle cx="-16" cy="${-32 + i * 30}" r="3" fill="#4ADE80"/><path d="M-4 ${-32 + i * 30} H18" stroke="#3A4A66" stroke-width="3" stroke-linecap="round"/>`).join("")}
        <text y="62" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="12" fill="#5A6476">203.0.113.10</text></g>
      <g class="paquet-anim">${[0, -1.2, -2.4].map(d => `<rect x="-10" y="-7" width="20" height="14" rx="3" fill="#FFD23F" stroke="#0B1426" stroke-width="2"><animateMotion dur="3.6s" begin="${d}s" repeatCount="indefinite" path="${chemin}"/></rect>`).join("")}</g>
      <g class="paquet-fixe">${[[140, 115], [280, 125], [435, 160]].map(([x, y]) => `<rect x="${x - 10}" y="${y - 7}" width="20" height="14" rx="3" fill="#FFD23F" stroke="#0B1426" stroke-width="2"/>`).join("")}</g>
    </svg>`;
  }
  function artCyber(k){
    const bits = ["01101", "10010", "0110", "1011", "00101", "1100", "0101", "10110"];
    const pos = [[40,50],[470,40],[30,240],[490,250],[80,150],[470,150],[150,280],[400,285]];
    return `<svg viewBox="0 0 600 310" role="img" aria-label="Illustration : un bouclier et un cadenas protègent les données">
      <circle cx="300" cy="155" r="138" fill="none" stroke="${k}" stroke-width="2" stroke-dasharray="4 10" opacity=".5"/>
      <circle cx="300" cy="155" r="112" fill="${k}" opacity=".06"/>
      ${bits.map((b, i) => `<text x="${pos[i][0]}" y="${pos[i][1]}" font-family="JetBrains Mono, monospace" font-size="20" font-weight="700" fill="${k}" opacity="${i % 2 ? .25 : .4}">${b}</text>`).join("")}
      <path d="M300 48 L392 82 V150 C392 210 352 248 300 268 C248 248 208 210 208 150 V82 Z" fill="#fff" stroke="${k}" stroke-width="6" stroke-linejoin="round"/>
      <path d="M300 66 L376 94 V150 C376 200 344 232 300 250 Z" fill="${k}" opacity=".14"/>
      <rect x="266" y="146" width="68" height="58" rx="10" fill="#0B1426"/>
      <path d="M278 146 V128 a22 22 0 0 1 44 0 V146" fill="none" stroke="#0B1426" stroke-width="9" stroke-linecap="round"/>
      <circle cx="300" cy="170" r="7" fill="#FFD23F" class="anim-pulse"/><path d="M300 175 V188" stroke="#FFD23F" stroke-width="6" stroke-linecap="round"/>
      <g transform="translate(470 92)"><path d="M0 -26 L26 20 H-26 Z" fill="#FFF4E5" stroke="#E2600E" stroke-width="4" stroke-linejoin="round"/><path d="M0 -8 V6 M0 13 V14" stroke="#E2600E" stroke-width="4.5" stroke-linecap="round"/></g>
      <g transform="translate(120 96) rotate(-30)"><circle r="16" fill="none" stroke="#D9A400" stroke-width="5"/><path d="M16 0 H58 M44 0 V12 M54 0 V9" stroke="#D9A400" stroke-width="5" stroke-linecap="round"/></g>
    </svg>`;
  }
  function artRobot(k){
    return `<svg viewBox="0 0 600 300" role="img" aria-label="Illustration : le robot mBot suit une ligne noire jusqu'au drapeau d'arrivée">
      <path d="M20 250 C140 250 150 170 290 180 S470 250 580 200" fill="none" stroke="#0B1426" stroke-width="16" stroke-linecap="round"/>
      <path d="M20 250 C140 250 150 170 290 180 S470 250 580 200" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="10 12" opacity=".5"/>
      <g transform="translate(520 70)"><path d="M0 120 V0" stroke="#0B1426" stroke-width="5" stroke-linecap="round"/>
        <path d="M0 2 H54 L44 20 L54 38 H0 Z" fill="${k}"/><path d="M0 2 H18 V20 H0 Z M18 20 H36 V38 H18 Z M36 2 H54 L48 13 L36 13 Z" fill="#fff" opacity=".85"/></g>
      <g transform="translate(250 60)">
        <rect x="-20" y="118" width="58" height="58" rx="29" fill="#0B1426"/><circle cx="9" cy="147" r="13" fill="#3A4A66"/>
        <rect x="150" y="118" width="58" height="58" rx="29" fill="#0B1426"/><circle cx="179" cy="147" r="13" fill="#3A4A66"/>
        <rect x="0" y="40" width="190" height="104" rx="18" fill="#1E88E5" stroke="#0B1426" stroke-width="5"/>
        <rect x="18" y="56" width="154" height="56" rx="8" fill="#0B1426"/>
        ${[0,1,2,3,4,5].map(i => `<rect x="${30 + i * 24}" y="66" width="14" height="10" rx="2" fill="${["#E2600E","#D9A400","#4ADE80","#2DD4FF","#6D4FD8","#F472B6"][i]}"/>`).join("")}
        <circle cx="40" cy="96" r="5" fill="#4ADE80" class="anim-pulse"/><circle cx="150" cy="96" r="5" fill="#FB7185" class="anim-pulse"/>
        <g transform="translate(95 20)"><rect x="-58" y="-18" width="116" height="36" rx="8" fill="#0B1426"/>
          <circle cx="-30" cy="0" r="14" fill="#C9D3E2" stroke="#3A4A66" stroke-width="4"/><circle cx="30" cy="0" r="14" fill="#C9D3E2" stroke="#3A4A66" stroke-width="4"/>
          <circle cx="-30" cy="0" r="5" fill="#0B1426"/><circle cx="30" cy="0" r="5" fill="#0B1426"/></g>
        <g fill="none" stroke="${k}" stroke-width="4" stroke-linecap="round" opacity=".7">
          <path d="M-44 0 a26 26 0 0 0 0 40"/><path d="M-62 -10 a44 44 0 0 0 0 60"/></g>
      </g>
      <g transform="translate(90 70) scale(1.8)" fill="none" stroke="#D9A400" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6"/></g>
    </svg>`;
  }
  const ART = { reseau: artReseau, cyber: artCyber, robot: artRobot };
  const triad = `<span class="triad"><i style="background:#E2600E"></i><i style="background:#D9A400"></i><i style="background:#0A84C6"></i></span>`;
  const marque = `<span class="couv-brand"><span class="chip">${ICONS.chip}</span><span>Techno<b>C203</b></span></span>`;

  /* ---------- chapitres et activités visibles ---------- */
  const CH = U.prepChapitres();
  const chapitres = CA.chapitres.map(d => {
    const site = CH.find(c => c.id === d.id);
    if (!site) return null;
    const ouvert = site._ouvert || APERCU;
    const acts = d.activites.map((a, i) => ({ ...a, _n: a.num || String(i + 1), _ouvert: (site._ouvert && U.estOuvert(V[U.cleActivite(d.id, a.site)])) || APERCU }));
    const n = CH.indexOf(site) + 1;
    return { ...d, site, ouvert, acts, visibles: acts.filter(a => a._ouvert), n, repere: d.id.startsWith("projet") ? "BR" : String(n).padStart(2, "0"), court: d.id.startsWith("projet") ? "P" : String(n) };
  }).filter(c => c && c.ouvert);

  /* ---------- champs de réponse ---------- */
  const val = k => rep[k] ?? "";
  const ecrire = (k, n) => `<textarea class="ecrire" data-k="${k}" rows="${n}" style="min-height:${n * 32}px" aria-label="Ta réponse">${U.esc(val(k))}</textarea>`;
  const champ = (k, label, attrs = "") => `<input class="champ" data-k="${k}" value="${U.esc(val(k))}" aria-label="${U.esc(label)}" autocomplete="off" ${attrs}>`;

  function reponse(q){
    const r = q.rep, id = q.id;
    switch (r.type){
      case "lignes": return ecrire(id, r.n || 2);
      case "champs": return `<div class="champs">${r.items.map((l, i) => `<div class="lig"><span>${U.esc(l)}</span>${champ(`${id}:${i}`, l)}</div>`).join("")}</div>`;
      case "trous": { let i = 0;
        return `<p class="trous">${r.html.replace(/\{_(s?)\}/g, (m, court) => champ(`${id}:${i++}`, "À compléter", `data-trou="${court ? "court" : "1"}"`))}</p>`; }
      case "ligne":  return `<div class="tm-rep"><div class="lig"><span>${U.esc(r.avant || "")}</span>${champ(id, r.avant || "Ta réponse")}</div></div>`;
      case "cases":  return `<div class="cases">${r.options.map((o, i) => `<label><input type="checkbox" class="coche" data-k="${id}:${i}"${rep[id + ":" + i] ? " checked" : ""}> ${U.esc(o)}</label>`).join("")}</div>`;
      case "associer": {
        const L = "ABCDEFGH";
        return `<div class="assoc">${r.gauche.map((g, i) => `
          <div class="g"><b>${i + 1}.</b>${U.esc(g)}</div>
          <input class="lettre" maxlength="1" data-k="${id}:${i}" value="${U.esc(val(id + ":" + i))}" aria-label="Lettre pour ${U.esc(g)}">
          <div class="d"><b>${L[i]}.</b>${U.esc(r.droite[i])}</div>`).join("")}</div>`;
      }
      case "tableau":
        return `<table class="tab"><thead><tr>${r.entetes.map(h => `<th>${U.esc(h)}</th>`).join("")}</tr></thead><tbody>
          ${r.lignes.map((l, li) => `<tr>${l.map((c, ci) => c === null ? `<td>${champ(`${id}:${li}-${ci}`, r.entetes[ci])}</td>` : `<td class="${String(c).length <= 18 ? "fixe" : "txt"}">${U.esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
      case "table-mystere":
        return `<div class="tm"><table class="tab"><thead><tr><th>Destination</th><th>Prochain saut</th></tr></thead><tbody>
          ${r.lignes.map(l => `<tr><td class="fixe">${U.esc(l[0])}</td><td class="fixe">${U.esc(l[1])}</td></tr>`).join("")}</tbody></table>
          <div class="tm-rep"><div class="lig"><span>Réponse : chemin</span>${champ(id + ":chemin", "Chemin", 'style="max-width:90px"')}</div>
          ${ecrire(id + ":justif", 2).replace('aria-label="Ta réponse"', 'aria-label="Justification" placeholder="Justification…"')}</div></div>`;
    }
    return "";
  }

  function bloc(b){
    switch (b.t){
      case "p": return `<p>${b.html}</p>`;
      case "probleme": return `<p class="b-probleme">${b.html}</p>`;
      case "img": return `<figure class="b-img"><img src="${U.esc(b.src)}" alt="${U.esc(b.alt || "")}" loading="lazy">${b.legende ? `<figcaption>${U.esc(b.legende)}</figcaption>` : ""}</figure>`;
      case "consigne": return `<div class="b-consigne">${IC[b.icone] || IC.lire}<div>${b.html}</div></div>`;
      case "partie": return `<div class="b-partie"><span class="pn">${U.esc(b.n)}</span><h3>${U.esc(b.titre)}</h3></div>`;
      case "liste": return `<ul class="b-liste">${b.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
      case "q": return b.html
        ? `<div class="q"><div class="q-enonce"><span class="q-num">${U.esc(b.num)}</span><span class="q-txt">${b.html}</span></div>${reponse(b)}</div>`
        : `<div class="q q-inline"><span class="q-num">${U.esc(b.num)}</span><div class="q-body">${reponse(b)}</div></div>`;
    }
    return "";
  }

  const bilan = bl => `<section class="bilan"><div class="bilan-head">${IC.bilan}<h3>${U.esc(bl.titre)}</h3></div><div class="bilan-body">
    ${bl.points ? `<ul class="bpoints">${bl.points.map(x => `<li>${x}</li>`).join("")}</ul>` : ""}
    ${bl.retenir ? `<div class="retenir seul">${IC.ampoule}<div><em>À retenir :</em> ${bl.retenir}</div></div>` : ""}
    ${(bl.notions || []).map(n => `<div class="notion"><span class="ni">${IC[n.icone] || IC.bilan}</span><h4>${U.esc(n.titre)}</h4>
      <div class="nt">${n.html}</div>${n.retenir ? `<div class="retenir">${IC.ampoule}<div><em>À retenir :</em> ${n.retenir}</div></div>` : ""}</div>`).join("")}
  </div></section>`;

  /* ---------- feuilles ---------- */
  const style = c => `style="--k:${c.couleur}"`;

  function couvertureGenerale(){
    const id = k => "identite:" + k;
    return `<article class="feuille couv">
      <div class="couv-top">${marque}<span>Année ${U.esc(CA.annee)}</span></div>
      <div class="couv-titre"><div class="sur">Mon cahier de</div><h1>TECHNOLOGIE <sup>3e</sup></h1></div>
      <div class="couv-art">${artCouverture()}</div>
      <div class="ident">
        <div class="lig"><span>Nom</span>${champ(id("nom"), "Nom")}</div>
        <div class="lig"><span>Prénom</span>${champ(id("prenom"), "Prénom")}</div>
        <div class="lig"><span>Classe</span><select class="champ" data-k="${id("classe")}" aria-label="Classe"><option value="">—</option>${CA.classes.map(c => `<option${val(id("classe")) === c ? " selected" : ""}>${c}</option>`).join("")}</select></div>
      </div>
      <div class="couv-pied"><div>Professeur : <b>${U.esc(CA.professeur)}</b><br>${U.esc(SITE.etablissement)}</div>${triad}</div>
    </article>`;
  }

  function sommaire(){
    return `<article class="feuille som"><h2>Sommaire</h2>
      ${chapitres.map(c => `<section class="som-chap" ${style(c)}><header><span class="n">${c.repere}</span><b>${U.esc(c.site.titre)}</b></header>
        ${c.visibles.length ? `<ol>${c.visibles.map(a => `<li>Activité ${a._n} — ${U.esc(a.titre)}</li>`).join("")}${c.fiches && c.fiches.length ? `<li style="list-style:none; margin-left:-18px">＋ Fiches connaissances</li>` : ""}</ol>` : `<p class="vide">Les activités arriveront au fil des séances.</p>`}
      </section>`).join("")}
    </article>`;
  }

  function couvertureChapitre(c){
    const art = ART[c.illustration] ? ART[c.illustration](c.couleur) : "";
    return `<article class="feuille couv couv-chap" ${style(c)}><span class="bande"></span>
      <div class="couv-top">${marque}<span>${U.esc(c.site.num)}</span></div>
      <div class="cc-num"><span class="big">${c.repere}</span><span class="lab">${U.esc(c.site.num)}</span></div>
      <h2 class="cc-titre">${U.esc(c.site.titre)}</h2>
      ${c.site.problematique ? `<div class="cc-pb"><small>La question du chapitre</small>${U.esc(c.site.problematique)}</div>` : ""}
      <div class="cc-art">${art}</div>
      <div class="cc-sommaire"><h4>Dans ce chapitre</h4>
        ${c.visibles.length ? (c.visibles.some(a => a.partie)
          ? `<ol>${[...new Set(c.visibles.map(a => a.partie))].map(pt => { const l = c.visibles.filter(a => a.partie === pt);
              return `<li><span class="n">${U.esc(pt.match(/\d+/) ? pt.match(/\d+/)[0] : "•")}</span><span><b>${U.esc(pt.replace(/^Partie \d+ · /, ""))}</b><br><small>${l.length > 1 ? `Activités ${l[0]._n} à ${l[l.length - 1]._n}` : `Activité ${l[0]._n}`}</small></span></li>`; }).join("")}</ol>`
          : `<ol>${c.visibles.map(a => `<li><span class="n">${a._n}</span>${U.esc(a.titre)}</li>`).join("")}</ol>`) : `<p class="vide">Les activités arriveront au fil des séances.</p>`}
      </div>
    </article>`;
  }

  function feuillesChapitre(c){
    let h = couvertureChapitre(c);
    h += `<article class="feuille" ${style(c)}>
      <div class="act-band"><div class="n">Situation<b>?</b></div><div class="t"><small>${U.esc(c.site.num)}</small><h2>La situation de départ</h2></div></div>
      ${c.situation.map(bloc).join("")}</article>`;
    c.visibles.forEach(a => {
      h += `<article class="feuille" ${style(c)}>
        <div class="act-band"><div class="n">Activité<b>${a._n}</b></div><div class="t"><small>${U.esc(c.site.num)} · ${U.esc(a.partie || c.site.titre)}</small><h2>${U.esc(a.titre)}</h2></div></div>
        ${a.blocs.map(bloc).join("")}
        ${a.bilan ? bilan(a.bilan) : ""}
      </article>`;
    });
    if (c.fiches && c.fiches.length && c.visibles.length){
      h += `<article class="feuille" ${style(c)}><div class="fiches-titre">${IC.fiche}<h2>Fiches connaissances</h2></div>
        ${c.fiches.map(f => `<figure class="fiche"><img src="${U.esc(f.img)}" alt="Fiche : ${U.esc(f.titre)}" loading="lazy"><figcaption><span>${U.esc(f.titre)}</span><a href="${U.esc(f.pdf)}">Ouvrir la fiche (PDF) ↗</a></figcaption></figure>`).join("")}
      </article>`;
    }
    return h;
  }

  /* ---------- progression (questions commencées / total) ---------- */
  function progression(c){
    const ids = c.visibles.flatMap(a => a.blocs.filter(b => b.t === "q").map(b => b.id));
    const fait = ids.filter(id => Object.keys(rep).some(k => (k === id || k.startsWith(id + ":")) && rep[k] !== "" && rep[k] !== false)).length;
    return { fait, total: ids.length };
  }

  /* ---------- PDF : numéro de page à la couleur du chapitre ---------- */
  const stylePages = document.createElement("style");
  stylePages.textContent = chapitres.map(c => `@page ch-${c.id}{ @bottom-right{ background:${c.couleur}; } }
    @media print{ #p-${c.id} .feuille:not(.couv){ page:ch-${c.id} } }`).join("\n");
  document.head.append(stylePages);

  /* ---------- rendu ---------- */
  const root = U.$("#cahier"), tabs = U.$("#tabs");
  root.innerHTML = `<section class="panel" id="p-couverture" data-p="couverture">${couvertureGenerale()}${sommaire()}</section>`
    + chapitres.map(c => `<section class="panel" id="p-${c.id}" data-p="${c.id}">${feuillesChapitre(c)}</section>`).join("");

  function dessinerOnglets(){
    tabs.innerHTML = `<button role="tab" type="button" data-p="couverture" style="--k:#0B1426"><span class="num">★</span><b>Couverture</b></button>`
      + chapitres.map(c => { const p = progression(c);
          return `<button role="tab" type="button" data-p="${c.id}" style="--k:${c.couleur}"><span class="num">${c.court}</span><span><b>${U.esc(c.site.titre)}</b><br><span class="prog" data-prog="${c.id}">${p.total ? `${p.fait} / ${p.total} questions` : "à venir"}</span></span></button>`; }).join("");
  }
  function majProgression(){
    chapitres.forEach(c => { const el = U.$(`[data-prog="${c.id}"]`), p = progression(c); if (el && p.total) el.textContent = `${p.fait} / ${p.total} questions`; });
  }

  let actif = null;
  function montrer(p, scroll){
    if (!U.$(`.panel[data-p="${p}"]`)) p = "couverture";
    actif = p;
    U.$$(".panel").forEach(el => el.classList.toggle("actif", el.dataset.p === p));
    U.$$("#tabs [data-p]").forEach(b => b.setAttribute("aria-selected", b.dataset.p === p));
    U.$("#pdfChap").textContent = p === "couverture" ? "PDF de la couverture" : "PDF de ce chapitre";
    history.replaceState(null, "", "#" + p);
    ajusterTout();
    if (scroll) U.$(".cahier-bar").scrollIntoView({ behavior:"smooth", block:"start" });
  }

  /* zones d'écriture : la hauteur suit le texte (pour l'écran et pour le PDF) */
  const ajuster = t => { const min = parseInt(t.style.minHeight) || 32; t.style.height = "auto"; t.style.height = Math.max(min, Math.ceil(t.scrollHeight / 32) * 32) + "px"; };
  const ajusterTout = () => U.$$(".panel.actif .ecrire, .impression-tout .ecrire").forEach(ajuster);

  dessinerOnglets();
  const depart = (location.hash || "").slice(1);
  montrer(depart || (chapitres.find(c => c.site.statut === "en-cours") || chapitres[0] || { id:"couverture" }).id);

  tabs.addEventListener("click", e => { const b = e.target.closest("[data-p]"); if (b) montrer(b.dataset.p, true); });

  root.addEventListener("input", e => {
    const el = e.target, k = el.dataset && el.dataset.k;
    if (!k) return;
    if (el.classList.contains("ecrire")) ajuster(el);
    if (el.classList.contains("lettre")) el.value = el.value.toUpperCase();
    const v = el.type === "checkbox" ? el.checked : el.value;
    if (v === "" || v === false) delete rep[k]; else rep[k] = v;
    sauver(); majProgression();
  });
  root.addEventListener("change", e => { if (e.target.tagName === "SELECT") e.target.dispatchEvent(new Event("input", { bubbles:true })); });
  window.addEventListener("resize", ajusterTout);
  document.fonts && document.fonts.ready.then(ajusterTout);

  /* ---------- PDF (impression du navigateur) ---------- */
  function imprimer(mode){
    document.body.dataset.print = mode;
    if (mode === "tout") document.body.classList.add("impression-tout");
    U.$$(".ecrire").forEach(ajuster);
    U.$$("img[loading=lazy]").forEach(i => i.loading = "eager");
    const titre = document.title;
    const nom = [val("identite:prenom"), val("identite:nom")].filter(Boolean).join(" ");
    const c = chapitres.find(x => x.id === actif);
    document.title = `Cahier techno${mode === "chap" && c ? " - " + c.site.num : ""}${nom ? " - " + nom : ""}`;
    // on laisse le temps aux images de se charger avant d'ouvrir l'impression
    const imgs = U.$$(mode === "tout" ? ".panel img" : ".panel.actif img").filter(i => !i.complete);
    Promise.all(imgs.map(i => new Promise(r => { i.onload = i.onerror = r; }))).then(() => {
      setTimeout(() => {
        window.print();
        setTimeout(() => { document.title = titre; document.body.classList.remove("impression-tout"); delete document.body.dataset.print; ajusterTout(); }, 300);
      }, 80);
    });
  }
  U.$("#pdfChap").onclick = () => imprimer("chap");
  U.$("#pdfTout").onclick = () => imprimer("tout");

  /* ---------- sauvegarde dans un fichier / reprise / effacement ---------- */
  U.$("#exporter").onclick = () => {
    const blob = new Blob([JSON.stringify({ cahier:"TechnoC203", date:new Date().toISOString(), reponses:rep }, null, 1)], { type:"application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "mon-cahier-techno.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    U.$(".more").open = false;
  };
  U.$("#importer").onchange = e => {
    const f = e.target.files[0]; if (!f) return;
    f.text().then(t => {
      const d = JSON.parse(t);
      if (!d || typeof d.reponses !== "object") throw new Error("format");
      if (!confirm("Remplacer les réponses de cet appareil par celles du fichier ?")) return;
      rep = d.reponses; localStorage.setItem(CLE, JSON.stringify(rep)); location.reload();
    }).catch(() => alert("Ce fichier n'est pas une sauvegarde du cahier."));
  };
  U.$("#effacer").onclick = () => {
    if (!confirm("Effacer toutes tes réponses du cahier sur cet appareil ? Cette action est définitive.")) return;
    rep = {}; try { localStorage.removeItem(CLE); } catch(e){}
    location.reload();
  };
  document.addEventListener("click", e => { const m = U.$(".more"); if (m.open && !m.contains(e.target)) m.open = false; });
})();
