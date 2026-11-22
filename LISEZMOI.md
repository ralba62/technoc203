# Site TechnoC203 — mode d'emploi

Site statique (HTML/CSS/JS), sans installation ni base de données.
Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

## Organisation

| Dossier / fichier | Contenu |
|---|---|
| `index.html`, `chapitre.html`, `connaissances.html`, `glossaire.html`, `dnb.html`, `logiciels.html`, `concours.html` | Les pages (pas besoin d'y toucher pour ajouter du contenu) |
| `assets/js/data/chapitres/` | **Un fichier par chapitre** + `liste.js` (ordre des chapitres) |
| `assets/js/data/*.js` | **Le contenu du site** : c'est là que vous modifiez |
| `assets/js/site.js` | Nom du site, enseignant, collège, année (en haut du fichier) |
| `applis/` | Vos applis HTML (ex. Découverte du mBot) |
| `docs/` | Vos PDF, fiches, images |
| `assets/css/style.css` | L'apparence |

## Modifier le contenu

Ouvrez le fichier voulu dans `assets/js/data/` avec un éditeur de texte
(TextEdit en mode texte brut, ou mieux : VS Code / Notepad++).
Chaque élément est un bloc `{ … },` : copiez un bloc existant, collez-le et changez les textes.

- **chapitres/chap1.js, chap2.js, projet-br.js** — un chapitre complet : situation, problématique, logiciels, activités
  (fiches, outils, étapes « chez moi », bilan « Je retiens », correction), vocabulaire, entraînement.
  Nouveau chapitre : copiez `chap1.js`, changez `id` et le contenu, puis ajoutez son nom dans `chapitres/liste.js`.
  `statut` ("termine", "en-cours", "a-venir") met en avant le chapitre en cours sur l'accueil.
  `programme` relie le chapitre aux connaissances du programme (champ `chap` de connaissances.js).
- **connaissances.js** — les connaissances de 3e du programme, par thème.
- **glossaire.js** — les mots (tri alphabétique automatique).
- **dnb.js** — sujets interactifs (types : `qcm`, `vf`, `associer`, `ouvert`).
- **logiciels.js** — logiciels et plateformes.
- **concours.js** — Blaise Robotics : date de la finale (active le compte à rebours), épreuves, règlement, équipes, palmarès.

Attention aux guillemets et aux virgules : si une page devient vide après une modification,
c'est souvent une virgule ou un guillemet oublié dans le fichier modifié.
Pour mettre une apostrophe dans un texte entre guillemets `"…"`, aucun souci : `"l'énergie"`.

## Mettre le site en ligne (gratuit)

- **GitHub Pages** : créez un dépôt, déposez le contenu du dossier, activez Pages dans les réglages.
- **Netlify Drop** (app.netlify.com/drop) : glissez-déposez le dossier, le site est en ligne en une minute.
- **ENT / serveur de l'académie** : déposez le dossier tel quel si votre ENT permet d'héberger des pages HTML.

Évitez d'y mettre des données personnelles d'élèves (noms complets, photos) sans l'accord des familles :
pour les équipes du concours, préférez les prénoms ou un nom d'équipe.

## Corrections protégées par un code

- Dans chaque chapitre, la correction d'une activité est verrouillée : l'élève tape le code
  que vous lui donnez (majuscules, tirets et espaces ignorés). Une fois débloquée, elle reste
  ouverte sur son appareil.
- Les liens des corrections sont **chiffrés** dans `assets/js/data/corrections.js` et les fichiers
  sont rangés dans `docs/corrections/` avec un début de nom au hasard, impossible à deviner.
- **Page enseignant** : `prof.html` (aucun lien ne mène vers elle). Elle s'ouvre avec le mot de passe
  enseignant et permet de voir et imprimer les codes, d'en changer, d'ajouter une correction,
  de changer le mot de passe enseignant, puis de générer un nouveau `corrections.js`
  à mettre à la place de l'ancien.
- Limites : un élève peut transmettre un code à un camarade ; et si votre hébergeur affiche la liste
  des fichiers d'un dossier, `docs/corrections/` serait visible (ce n'est pas le cas sur GitHub Pages ni Netlify).

## Ouvrir les chapitres et les activités au fur et à mesure

- Dans `prof.html` (après le mot de passe enseignant), la partie « Ouverture des chapitres et des activités »
  permet, pour chaque chapitre et chaque activité : Visible, Masqué, ou « À partir du » une date (ouverture automatique).
- Cliquez ensuite sur « Générer le fichier visibilite.js » et remplacez `assets/js/data/visibilite.js` sur le site.
- « Voir le site en aperçu enseignant » montre tout le site (bandeau jaune) sur votre navigateur, pour vérifier.
- Un chapitre masqué n'apparaît nulle part (accueil, liste des chapitres, page Connaissances).
- Limite : le contenu masqué est caché, pas secret. Un élève curieux pourrait le retrouver dans les fichiers
  du site. Les corrections, elles, restent protégées par leur code.

## Site en ligne (GitHub Pages)

- Adresse du site : https://ralba62.github.io/technoc203/  —  page enseignant : https://ralba62.github.io/technoc203/prof.html
- Dépôt : https://github.com/ralba62/technoc203
- Dans la page enseignant, **« Publier en ligne »** envoie directement les réglages (ouverture des chapitres,
  codes des corrections, mot de passe enseignant) sur GitHub : visible par les élèves en 1 à 2 minutes.
  La première fois sur un appareil, la page demande la **clé d'accès GitHub** (github_pat_…) et la garde
  dans ce navigateur uniquement. Bouton « Clé GitHub » pour la changer ou l'effacer.
- La clé expire au bout d'un an : en recréer une sur github.com (droits : dépôt technoc203, Contents en lecture/écriture).
