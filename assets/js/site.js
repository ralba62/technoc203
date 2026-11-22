/* ==========================================================
   Technologie 3° — script commun à toutes les pages
   (en-tête, menu, pied de page, thème clair/sombre, outils)
   ========================================================== */

/* ✎ Réglages généraux du site : modifiez ces valeurs */
window.SITE = {
  titre: "TechnoC203",
  sousTitre: "Technologie - 3°",
  enseignant: "R. ALBA",
  etablissement: "Collège Jean Jaurès - Aire sur la Lys",
  anneeScolaire: "2026-2027",
};

const NAV = [
  { href: "index.html",      label: "Accueil" },
  { href: "chapitre.html",   label: "Chapitres" },
  { href: "glossaire.html",  label: "Glossaire" },
  { href: "dnb.html",        label: "DNB" },
  { href: "logiciels.html",  label: "Logiciels" },
  { href: "concours.html",   label: "Blaise Robotics" },
];

/* ---------- Thème (appliqué au plus tôt pour éviter le flash) ---------- */
(function initTheme(){
  let t = null;
  try { t = localStorage.getItem("theme"); } catch(e){}
  if (!t) t = "dark"; // le site est pensé en sombre ; le bouton permet de passer en clair
  document.documentElement.dataset.theme = t;
})();

/* ---------- Outils partagés ---------- */
window.U = {
  esc(s){ return String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); },
  /* minuscules sans accents, pour la recherche */
  norm(s){ return String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); },
  /* surligne q dans un texte déjà échappé */
  highlight(text, q){
    const safe = U.esc(text);
    if (!q) return safe;
    const nt = U.norm(safe), nq = U.norm(q);
    let out = "", i = 0, k;
    while ((k = nt.indexOf(nq, i)) !== -1){
      out += safe.slice(i, k) + "<mark>" + safe.slice(k, k + nq.length) + "</mark>";
      i = k + nq.length;
    }
    return out + safe.slice(i);
  },
  $(sel, root = document){ return root.querySelector(sel); },
  $$(sel, root = document){ return [...root.querySelectorAll(sel)]; },
  /* lien externe ou "bientôt" si l'URL est vide */
  linkBtn(url, label = "Ouvrir", cls = "btn small"){
    if (!url) return `<span class="tag soon">Lien à venir</span>`;
    const ext = /^https?:/.test(url);
    return `<a class="${cls}" href="${U.esc(url)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${U.esc(label)}${ext ? " ↗" : ""}</a>`;
  },
  frDate(iso){
    if (!iso) return "";
    const d = new Date(iso + "T12:00:00");
    return d.toLocaleDateString("fr-FR", { day:"numeric", month:"short", year:"numeric" });
  },
};

/* Icônes vectorielles (trait, 24×24) — utilisables dans les données via leur nom */
const I = (d) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
window.ICONS = {
  sun: I('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  moon: I('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'),
  menu: I('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  arrow: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  chip: I('<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'),
  grid: I('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 17.5h7M17.5 14v7"/>'),
  book: I('<path d="M4 5a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2z"/><path d="M4 20a2 2 0 0 0 2 2h13v-4"/><path d="m10 8-2 2 2 2M13 8l2 2-2 2"/>'),
  text: I('<path d="M3 18 8 6l5 12M5 14h6"/><path d="M15 11.5a2.5 2.5 0 0 1 5 0V18M20 14h-3a2 2 0 0 0 0 4h3"/>'),
  target: I('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>'),
  terminal: I('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>'),
  robot: I('<rect x="4.5" y="8" width="15" height="11" rx="3"/><path d="M12 4.5V8M2.5 12.5v2M21.5 12.5v2M9 16h6"/><circle cx="12" cy="3.5" r="1"/><path d="M9 12.5h.01M15 12.5h.01" stroke-width="3"/>'),
  trophy: I('<path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6"/>'),
  lock: I('<rect x="4.5" y="10.5" width="15" height="10.5" rx="2"/><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3M12 15v2"/>'),
  doc: I('<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>'),
  play: I('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>'),
  link: I('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
  code: I('<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'),
  cube: I('<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="m3 7 9 5 9-5M12 12v10"/>'),
  image: I('<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>'),
  network: I('<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v4M12 11.5 6.5 17M12 11.5l5.5 5.5"/>'),
  wrench: I('<path d="M14.5 6.5a4 4 0 0 0 5 5l-9 9a2.1 2.1 0 0 1-3-3l9-9a4 4 0 0 1 5-5l-2.5 2.5.5 2 2 .5z"/>'),
  flag: I('<path d="M5 21V4M5 4h12l-2.5 4L17 12H5"/>'),
  maze: I('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 3v9h5M16 8v8h-5M8 16v5"/>'),
  zap: I('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>'),
  mic: I('<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'),
  signal: I('<path d="M4.5 9.5a11 11 0 0 1 15 0M7.5 13a6.5 6.5 0 0 1 9 0"/><circle cx="12" cy="17" r="1.3"/>'),
  // pictogramme « étoiles » couramment utilisé pour signaler l'IA
  ia: `<svg class="ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10 2.5c.4 3.9 2.6 6.1 6.5 6.5-3.9.4-6.1 2.6-6.5 6.5-.4-3.9-2.6-6.1-6.5-6.5 3.9-.4 6.1-2.6 6.5-6.5z"/><path d="M18 13c.25 2.3 1.45 3.5 3.75 3.75-2.3.25-3.5 1.45-3.75 3.75-.25-2.3-1.45-3.5-3.75-3.75 2.3-.25 3.5-1.45 3.75-3.75z"/><path d="M18.5 2c.15 1.3.85 2 2.15 2.15-1.3.15-2 .85-2.15 2.15-.15-1.3-.85-2-2.15-2.15 1.3-.15 2-.85 2.15-2.15z"/></svg>`,
  leaf: I('<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19 13 11"/>'),
};
/* logo officiel d'un logiciel (image du site de l'éditeur) ; si l'image ne charge pas,
   on affiche l'icône de secours du site à la place */
U.logo = (url, fallback = "terminal") => `<span class="logo-box${url ? "" : " no-logo"}">${url ? `<img src="${U.esc(url)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('no-logo');this.remove()">` : ""}${ICONS[fallback] || ICONS.terminal}</span>`;
/* renvoie l'icône si le nom existe, sinon le texte tel quel (emoji…) */
U.icon = name => ICONS[name] || U.esc(name || "");

/* ---------- En-tête et pied de page ---------- */
function buildChrome(){
  const here = location.pathname.split("/").pop() || "index.html";
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="bar">
      <a class="brand" href="index.html" aria-label="${U.esc(SITE.titre)} — ${U.esc(SITE.sousTitre)}"><span class="brand-logo">${ICONS.chip}</span><span class="brand-txt"><span class="brand-name">Techno<b>C203</b></span><span class="brand-sub">${U.esc(SITE.sousTitre)}</span></span></a>
      <button class="icon-btn menu-btn" aria-label="Ouvrir le menu" aria-expanded="false">${ICONS.menu}</button>
      <nav class="nav" aria-label="Navigation principale">
        ${NAV.map(n => `<a href="${n.href}"${n.href === here ? ' aria-current="page"' : ""}>${n.label}</a>`).join("")}
      </nav>
      <button class="icon-btn theme-btn" aria-label="Changer de thème"></button>
    </div>`;
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="bar">
      <span class="triad-dots" title="Matière · Énergie · Information"><i style="background:var(--matiere)"></i><i style="background:var(--energie)"></i><i style="background:var(--information)"></i>&nbsp; ${U.esc(SITE.titre)} · ${U.esc(SITE.enseignant)} · ${U.esc(SITE.etablissement)}</span>
      <a class="ia-badge" href="https://claude.ai" target="_blank" rel="noopener" title="Ce site a été conçu avec l'aide de Claude, une intelligence artificielle d'Anthropic">${ICONS.ia} Site réalisé avec l'aide de Claude ↗</a>
      <span>année ${U.esc(SITE.anneeScolaire)}</span>
    </div>`;
  document.body.append(footer);

  if (U.apercuProf()){
    const bar = document.createElement("div");
    bar.className = "apercu-bar";
    bar.innerHTML = `Aperçu enseignant : vous voyez aussi les chapitres et activités masqués aux élèves. <button type="button">Quitter l'aperçu</button>`;
    bar.querySelector("button").onclick = () => { try { sessionStorage.removeItem("apercu-prof"); } catch(e){} location.reload(); };
    header.after(bar);
  }

  const menuBtn = U.$(".menu-btn", header), nav = U.$(".nav", header);
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  const themeBtn = U.$(".theme-btn", header);
  const paint = () => { themeBtn.innerHTML = document.documentElement.dataset.theme === "dark" ? ICONS.sun : ICONS.moon; };
  paint();
  themeBtn.addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch(e){}
    paint();
  });
}

/* Thèmes du programme : libellé + couleur (classe .t1 … .t6) */
window.THEMES = {
  info:    { label: "Informatique & programmation", cls: "t1", icon: "code" },
  energie: { label: "Énergie",                       cls: "t2", icon: "zap" },
  objets:  { label: "Objets & systèmes",             cls: "t3", icon: "robot" },
  matiere: { label: "Matériaux & conception",        cls: "t4", icon: "cube" },
  durable: { label: "Développement durable",         cls: "t5", icon: "leaf" },
  reseau:  { label: "Réseaux & communication",       cls: "t6", icon: "network" },
};
U.themeColor = key => THEMES[key] ? `var(--${THEMES[key].cls})` : "var(--accent)";
U.themeTag = key => {
  const t = THEMES[key];
  return t ? `<span class="tag ${t.cls}">${t.label}</span>` : "";
};

/* ---------- Liens : fichiers, applis et autres sites dans un nouvel onglet ----------
   Les pages du site (chapitre.html, glossaire.html…) restent dans le même onglet. */
U.nouvelOnglet = href => {
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) return false;
  if (/^https?:\/\//i.test(href)) return new URL(href, location.href).origin !== location.origin;
  return /^(\.\/)?(docs|applis|assets)\//.test(href) || /\.(pdf|fls|zip|png|jpe?g|mblock|docx?|odt)(\?|#|$)/i.test(href);
};
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest("a[href]");
  if (a && U.nouvelOnglet(a.getAttribute("href"))){ a.target = "_blank"; a.rel = "noopener"; }
}, true);

/* Chapitres découpés en parties : on reconstruit la liste des activités */
/* ---------- Visibilité : chapitres et activités ouverts au fur et à mesure ----------
   window.VISIBILITE (assets/js/data/visibilite.js) : "visible" | "masque" | "AAAA-MM-JJ"
   L'enseignant peut tout voir en « aperçu enseignant » (activé depuis prof.html). */
U.cleActivite = (chapitreId, titre) => chapitreId + "/" + String(titre).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
U.estOuvert = valeur => {
  if (valeur === undefined || valeur === true || valeur === "visible") return true;
  if (/^\d{4}-\d{2}-\d{2}$/.test(valeur)){
    const d = new Date(); const auj = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    return auj >= valeur;
  }
  return false;
};
U.apercuProf = () => { try { return sessionStorage.getItem("apercu-prof") === "1"; } catch(e){ return false; } };

U.prepChapitres = () => {
  const V = window.VISIBILITE || {};
  (window.CHAPITRES || []).forEach(ch => {
    if (ch.parties) ch.activites = ch.parties.flatMap((p, pi) => p.activites.map((a, ai) => ({ ...a, _partie: pi, _num: ai + 1 })));
    ch._ouvert = U.estOuvert(V[ch.id]);
    ch.activites.forEach(a => { a._cle = U.cleActivite(ch.id, a.titre); a._ouvert = ch._ouvert && U.estOuvert(V[a._cle]); });
  });
  return window.CHAPITRES || [];
};
/* ce que l'élève voit (l'aperçu enseignant montre tout) */
U.chapitresVisibles = () => U.prepChapitres().filter(ch => ch._ouvert || U.apercuProf());
U.activitesVisibles = ch => ch.activites.filter(a => a._ouvert || U.apercuProf());

document.addEventListener("DOMContentLoaded", buildChrome);
