/* ==========================================================
   ✎ CHAPITRE — modèle à copier pour un nouveau chapitre
   id         : identifiant court, utilisé dans l'adresse (chapitre.html?c=chap1)
   statut     : "termine" | "en-cours" | "a-venir"
   programme  : étiquette « chap » utilisée dans connaissances.js
                (les connaissances du programme liées s'affichent toutes seules)
   logiciels  : outils à installer ou à ouvrir pour faire le chapitre
                { nom, url, note, icone, logo (adresse de l'icône officielle, facultatif) }
   activites  : pour chaque activité
       docs      : fiches à télécharger [{ label, url }]
       outils    : applis / logiciels à ouvrir [{ label, url }]
       chezMoi   : étapes pour un élève absent (HTML autorisé)
       retenir   : le bilan (affiché après l'activité)
       corrections: [{ label, url }] facultatif — affichées en fin d'activité, repliées
   mots       : mots du glossaire du chapitre
   entrainement : liens pour s'entraîner [{ label, url }]
   ========================================================== */
CHAPITRES.push({
  id: "chap1",
  num: "Chapitre 1",
  titre: "Sur les chemins de l'info",
  theme: "reseau",
  icone: "network",
  statut: "termine",
  programme: "Chapitre 1",
  situation: "Un collège vient de recevoir une nouvelle salle informatique et tous les ordinateurs sont bien reliés au réseau. Pourtant, certains élèves arrivent à ouvrir Pronote, leur espace de travail ou le serveur vidéo, alors que d'autres obtiennent un message d'erreur. Parfois, Internet fonctionne mais les pages mettent beaucoup de temps à s'afficher. Le chef d'établissement demande au professeur de Technologie et à ses élèves de comprendre pourquoi.",
  problematique: "Comment une information circule-t-elle dans un réseau, et comment se déterminent le chemin et la vitesse de son trajet ?",

  logiciels: [
    { nom:"Filius", logo:"https://lernsoftware-filius.de/.cm4all/sysdb/favicon/icon-180x180_dc632e2.png", icone:"network", url:"https://lernsoftware-filius.de/Herunterladen",
      note:"Simulateur de réseau gratuit. Sous Windows, prends l'installateur « with JRE » (Java inclus). Sur Mac, il faut d'abord installer Java." },
    { nom:"Filius II en ligne (bêta)", logo:"https://filius-ii.net/icons/filius-180.png", icone:"network", url:"https://filius-ii.net",
      note:"Version en ligne de Filius, sans installation. Encore en test : si elle ne marche pas, utilise Filius." },
    { nom:"Réseau virtuel du cours", icone:"signal", url:"applis/reseau-virtuel-routage-complet.html",
      note:"La simulation utilisée en classe pour l'activité 3, directement dans le navigateur." },
  ],

  activites: [
    {
      titre: "Adresse IP, débit et table de routage",
      objectif: "Identifier les éléments qui permettent à une information de circuler dans un réseau.",
      docs: [{ label:"Fiche de l'activité 1", url:"docs/ch1/activite1-chemins-info.pdf" }],
      outils: [
        { label:"Aide : réseau, routage, débit", url:"applis/aide-reseau-routage-debit.html" },
        { label:"Fiche : adresse IP et tables de routage", url:"docs/SFC1p-le-role-et-la-structure-dune-adresse-IP-des-tables-de-routage.pdf" },
        { label:"Fiche : le débit", url:"docs/SFC1q-le-debit-et-les-ordres-de-grandeur-associes.pdf" },
      ],
      chezMoi: [
        "Télécharge et imprime (ou recopie) la <b>fiche de l'activité 1</b>.",
        "Regarde les <b>vidéos ressources</b> dans l'application <b>ELEA</b> de l'ENT.",
        "Réponds aux questions 1.a à 1.d : adresse IP, table de routage, unités de débit.",
        "Réponds aux questions 2.a à 2.c en t'aidant de l'<b>aide réseau</b> et des deux fiches de connaissances.",
        "Lis le bilan « Je retiens » ci-dessous et recopie-le dans ton cahier.",
      ],
      retenir: [
        "Une <b>adresse IP</b> identifie un appareil sur un réseau, comme une adresse postale. <b>Privée</b> dans un réseau local (192.168.1.25), <b>publique</b> sur Internet (203.0.113.10).",
        "Le <b>débit</b> est la quantité de données transmise en une seconde (bit/s, Mbit/s, Gbit/s). Plus il est élevé, plus les données passent vite.",
        "La <b>table de routage</b> aide le routeur à choisir la prochaine étape : c'est un GPS pour les données.",
      ],
    },
    {
      titre: "Configurer un réseau avec Filius",
      objectif: "Créer, configurer et tester un réseau pour observer comment une information y circule.",
      docs: [
        { label:"Fiche de l'activité 2", url:"docs/ch1/activite2-filius.pdf" },
      ],
      outils: [
        { label:"Télécharger Filius", url:"https://lernsoftware-filius.de/Herunterladen" },
        { label:"Filius II en ligne (bêta)", url:"https://filius-ii.net" },
      ],
      chezMoi: [
        "Installe <b>Filius</b> (ou ouvre Filius II en ligne). Pas d'ordinateur à la maison ? Fais cette activité au CDI ou passe directement à l'activité 3.",
        "Suis la <b>fiche de l'activité 2</b> et les <b>vidéos Filius</b>, disponibles dans l'application <b>ELEA</b> de l'ENT, pour créer le réseau simplifié de la salle de technologie.",
        "Configure les <b>adresses IP</b> des ordinateurs et des serveurs, puis les <b>passerelles</b> et le routeur.",
        "Teste la communication : lance une commande <code>ping</code> d'un ordinateur vers un serveur.",
      ],
      retenir: [
        "Un <b>routeur</b> choisit le chemin que vont suivre les données : il les reçoit et les transmet au routeur suivant, en fonction de leur destination.",
      ],
    },
    {
      titre: "Lire et comprendre le choix d'un chemin",
      objectif: "Analyser comment le routage choisit un chemin et lire une table de routage.",
      docs: [{ label:"Fiche de l'activité 3", url:"docs/ch1/activite3-routage.pdf" }],
      outils: [
        { label:"Réseau virtuel (complet)", url:"applis/reseau-virtuel-routage-complet.html" },
        { label:"Réseau virtuel (simple)", url:"applis/reseau-virtuel-routage-simple.html" },
      ],
      chezMoi: [
        "Ouvre la fiche de l'activité 3 et le <b>réseau virtuel (complet)</b>.",
        "Question 1 : retrouve le réseau de chaque adresse IP (les trois premiers nombres sont communs à un même réseau).",
        "Question 2 : envoie un fichier de Léa vers un ordinateur du même réseau et observe le trajet.",
        "Question 3 : dans l'onglet « Trafic », fais varier le volume de trafic, note le chemin retenu et son débit, puis active la panne du routeur R1.",
        "Question 4 : retrouve à quel chemin correspond chaque table de routage mystère.",
      ],
      retenir: [
        "Les données passent de routeur en routeur ; chaque routeur consulte sa table de routage pour trouver le <b>prochain saut</b>.",
        "Deux machines du même réseau communiquent directement par le switch, sans passer par la box.",
        "Le chemin le plus court n'est pas toujours le plus rapide : le routage choisit le chemin au meilleur débit du moment.",
        "Le débit dépend de la technologie (fibre, Wi-Fi, 4G/5G) et de l'encombrement du réseau.",
        "Avoir plusieurs routes permet à l'information d'arriver même si un routeur tombe en panne.",
      ],
    },
  ],

  mots: ["Réseau informatique", "Internet", "Adresse IP", "Adresse IP privée / publique", "Routeur", "Table de routage", "Commutateur (switch)", "Serveur", "Débit", "Protocole", "Simulation"],

  entrainement: [
    { label:"DNB Tapis de course — question 4 : mettre les tapis en réseau", url:"dnb.html#tapis-de-course/q4" },
  ],
});
