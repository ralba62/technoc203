/* ==========================================================
   ✎ LISTE DES CHAPITRES
   Un chapitre = un fichier dans ce dossier (copiez chap1.js pour en créer un).
   Ajoutez ici le nom du fichier (sans .js), dans l'ordre de l'année.
   ========================================================== */
window.CHAPITRES = [];
[
  "chap1",
  "chap2",
  "projet-br",
].forEach(f => document.write(`<script src="assets/js/data/chapitres/${f}.js?v=20261122194659"><\/script>`));
