/* ==========================================================
   ✎ CONNAISSANCES DE 3e
   Source : « Projet d'aménagement des programmes de technologie du
   cycle 4 » (CSP, juin 2025) — colonne « Connaissances visées » et
   attendus du niveau 3e. Ce projet n'engage pas encore le ministère.

   Pour chaque partie du programme :
     titre        : intitulé de la partie
     theme        : couleur (info | energie | objets | matiere | durable | reseau)
     connaissances: liste des connaissances visées
     attendus     : « L'élève sait… » (résumé)
     mots         : mots du glossaire liés (doivent exister dans glossaire.js)
     chap         : chapitre(s) de l'année où c'est travaillé (facultatif)
   ========================================================== */
window.PROGRAMME = [
  {
    theme: "Les objets et les systèmes techniques : leurs usages et leurs interactions à découvrir et à analyser",
    court: "Usages et interactions",
    parties: [
      {
        titre: "L'évolution des OST",
        theme: "objets",
        connaissances: [
          "Les contraintes sociétales",
          "Les grands types d'apprentissage des intelligences artificielles et leurs usages possibles (géolocalisation, identification, calcul, traduction…)",
          "Les incidences sociétales et environnementales de l'usage d'une intelligence artificielle (IA)",
        ],
        attendus: [
          "Identifier les innovations de rupture liées à l'évolution d'un OST (numérique, informatique, IA)",
          "Distinguer le résultat d'une recherche sur un moteur de recherche et celui d'une IA générative",
          "Rédiger un prompt efficace (rôle, tâche, contexte, format de sortie) et comparer les réponses de deux IA",
          "Argumenter sur le rôle de l'IA dans le développement des OST et ses incidences (positives, négatives, énergétiques)",
        ],
        mots: ["Innovation de rupture", "Intelligence artificielle (IA)", "IA générative", "Prompt"],
      },
      {
        titre: "Usages et impacts sociétaux du numérique",
        theme: "reseau",
        connaissances: [
          "Principes de la cybersécurité : la confidentialité, l'intégrité, la disponibilité",
          "Cybersécurité : protection des données personnelles, traces numériques (témoins de connexion, géolocalisation), identification, authentification, respect de la propriété intellectuelle",
          "Cyberviolence : usurpation d'identité, usage détourné",
          "Le rôle du numérique dans la société et les métiers (dématérialisation, réseaux sociaux)",
        ],
        attendus: [
          "Citer les règles d'un mot de passe solide et un moyen mnémotechnique pour le retenir",
          "Citer des techniques de vol de mots de passe (hameçonnage, force brute) et s'en protéger",
          "Expliquer la différence d'échelle de diffusion entre une discussion et un réseau social",
          "Citer des exemples de dématérialisation dans la vie quotidienne",
        ],
        mots: ["Cybersécurité", "Cyberespace", "Donnée personnelle", "Cookie (témoin de connexion)", "Hameçonnage (phishing)", "Attaque par force brute", "Mot de passe robuste", "Double authentification", "Usurpation d'identité", "Cyberviolence", "Propriété intellectuelle"],
        chap: ["Chapitre 2"],
      },
      {
        titre: "L'OST dans son environnement",
        theme: "objets",
        connaissances: [
          "L'expérience utilisateur",
          "Les contraintes : exigences issues des normes ou d'un cahier des charges, labels et certifications, ergonomie liée à l'usage",
        ],
        attendus: [
          "Choisir un mode de représentation adapté (schéma, graphique, algorithme, carte mentale) pour décrire l'expérience utilisateur souhaitée",
        ],
        mots: ["Expérience utilisateur", "Ergonomie", "Cahier des charges", "Contrainte"],
      },
      {
        titre: "Le choix d'un OST dans un contexte de développement durable",
        theme: "durable",
        connaissances: [
          "L'indice de réparabilité",
          "Les piliers du développement durable",
          "Les critères de choix : performances, réparabilité, durabilité",
        ],
        attendus: [
          "Comparer plusieurs OST avec des critères (efficacité énergétique, réparabilité, durabilité, recyclabilité, impact environnemental)",
          "Pondérer les critères et réaliser une analyse multicritère",
          "Présenter un argumentaire pour l'OST choisi",
        ],
        mots: ["Indice de réparabilité", "Développement durable", "Analyse multicritère", "Cycle de vie"],
      },
      {
        titre: "La performance des OST",
        theme: "objets",
        connaissances: ["Protocole expérimental, appareils de mesure, mesure directe et indirecte d'une performance"],
        attendus: [
          "Établir et mettre en œuvre un protocole pour mesurer une performance",
          "Comparer la mesure à l'exigence et conclure",
        ],
        mots: ["Protocole expérimental", "Performance"],
      },
    ],
  },

  {
    theme: "Structure, fonctionnement, comportement : des objets et des systèmes techniques à comprendre",
    court: "Structure et fonctionnement",
    parties: [
      {
        titre: "Fonctions, solutions, constituants de la chaîne d'énergie",
        theme: "energie",
        connaissances: [
          "Les mécanismes de transmission et de transformation de mouvements (engrenages, courroies, chaînes)",
          "Les fonctions de la chaîne d'énergie : alimenter, distribuer, convertir, transmettre",
        ],
        attendus: [
          "Décrire le comportement d'un OST (fonctionnement, mouvements, interactions)",
          "Associer chaque constituant à sa fonction dans un schéma bloc",
          "Préciser les grandeurs et unités des énergies d'entrée et de sortie de chaque conversion",
        ],
        mots: ["Chaîne d'énergie", "Conversion d'énergie", "Transmission de mouvement", "Transformation de mouvement", "Engrenage", "Poulie-courroie", "Schéma bloc"],
        chap: ["Projet Blaise Robotics"],
      },
      {
        titre: "Matériaux et procédés",
        theme: "matiere",
        connaissances: [
          "Les caractéristiques et les propriétés des principaux matériaux",
          "Les étapes du cycle de vie d'un OST et leur incidence environnementale (air, sols, eau)",
          "La disponibilité, la valorisation et le recyclage des matériaux",
        ],
        attendus: [
          "Justifier le choix d'un matériau au regard d'un cahier des charges",
          "Préciser les éléments pris en compte dans une analyse de cycle de vie (ACV)",
          "Argumenter sur la disponibilité des matériaux (terres rares, lithium, cobalt…)",
        ],
        mots: ["Matériau", "Propriété d'un matériau", "Cycle de vie", "Analyse du cycle de vie (ACV)", "Recyclage", "Écoconception"],
      },
      {
        titre: "Fonctions, solutions, constituants de la chaîne d'information",
        theme: "objets",
        connaissances: ["Les grandeurs analogiques associées aux différents capteurs"],
        attendus: [
          "Identifier les grandeurs à mesurer et les interactions entre l'humain et un OST",
          "Déterminer les capteurs et les composants d'IHM nécessaires",
          "Classer les capteurs : information logique ou analogique",
        ],
        mots: ["Chaîne d'information", "Capteur", "Actionneur", "Grandeur analogique", "Information logique", "Interface homme-machine (IHM)", "Capteur à ultrasons", "Suiveur de ligne"],
        chap: ["Projet Blaise Robotics"],
      },
      {
        titre: "Structuration et traitement de données",
        theme: "info",
        connaissances: [
          "Les formats de données : booléen, nombre entier, chaîne de caractères",
          "Le stockage, la mise en forme et la transmission des données (fichiers texte, image, nombre)",
        ],
        attendus: [
          "Lister les données nécessaires au fonctionnement d'un OST et leur format",
          "Cartographier la source des données d'entrée et la destination des données produites",
        ],
        mots: ["Donnée", "Booléen", "Variable", "Binaire", "Octet"],
      },
      {
        titre: "La circulation de l'information dans un réseau informatique",
        theme: "reseau",
        connaissances: [
          "Le réseau mondial (Internet)",
          "Le rôle d'un routeur, d'un serveur",
          "Le rôle des tables de routage",
          "Le chiffrement de l'information",
        ],
        attendus: [
          "Identifier les constituants du réseau local et le routeur qui relie plusieurs réseaux",
          "Expliquer le rôle d'un serveur dans les échanges avec Internet",
          "Représenter la circulation d'une information du réseau local vers Internet",
          "Justifier le chiffrement pour la confidentialité et l'intégrité des échanges",
        ],
        mots: ["Réseau informatique", "Internet", "Adresse IP", "Adresse IP privée / publique", "Routeur", "Table de routage", "Commutateur (switch)", "Serveur", "Débit", "Chiffrement"],
        chap: ["Chapitre 1"],
      },
      {
        titre: "Le dépannage et la réparation",
        theme: "durable",
        connaissances: [
          "L'indice de durabilité (fiabilité, robustesse, facilité d'entretien)",
          "Les moyens de prototypage électronique : plaque d'essai, fils, composants, générateurs",
          "Les moyens et procédés de production en sécurité : découpe laser, usinage, impression 3D, pliage, thermoformage, assemblage",
        ],
        attendus: [
          "Proposer des causes possibles à une panne (« si… alors »)",
          "Proposer un protocole de dépannage puis de réparation",
          "Fabriquer une pièce sur mesure en respectant les règles de sécurité",
        ],
        mots: ["Dépannage", "Réparation", "Indice de durabilité", "Prototype", "Impression 3D", "Découpe laser"],
      },
      {
        titre: "La programmation d'une nouvelle fonctionnalité",
        theme: "info",
        connaissances: ["Lien entre la programmation graphique par blocs et la programmation textuelle"],
        attendus: [
          "Déterminer les données utilisées et produites par un programme",
          "Programmer, modifier et tester une nouvelle fonctionnalité sur l'OST réel",
          "Rédiger un programme par blocs à partir d'un algorithme simple",
        ],
        mots: ["Algorithme", "Programme", "Programmation par blocs", "Programmation textuelle", "Condition", "Boucle", "Événement"],
        chap: ["Projet Blaise Robotics"],
      },
    ],
  },

  {
    theme: "Création, conception, réalisation, innovations : des objets à concevoir et à réaliser",
    court: "Conception et réalisation",
    parties: [
      {
        titre: "La gestion de projet technique",
        theme: "objets",
        connaissances: ["Les étapes et tâches d'un projet, les revues de projet, le planning, les rôles et responsabilités"],
        attendus: [
          "Définir les étapes du projet, de la créativité à la soutenance",
          "Répartir les tâches sur un planning et respecter les délais",
          "Ajuster le planning en revue de projet face aux aléas",
        ],
        mots: ["Revue de projet", "Planning", "Cahier des charges"],
        chap: ["Projet Blaise Robotics"],
      },
      {
        titre: "Le prototypage de solutions",
        theme: "matiere",
        connaissances: [
          "L'ergonomie liée à l'usage",
          "Les procédés d'obtention de pièces (ajout et enlèvement de matière), de mise en forme (pliage, thermoformage) et d'assemblage (fixe et démontable)",
          "Les règles de sécurité dans un atelier de fabrication collaboratif (FabLab)",
        ],
        attendus: [
          "Imaginer une solution et l'expliquer à ses camarades",
          "Rechercher des idées (médias, IA générative) et décider collectivement",
        ],
        mots: ["Prototype", "Croquis", "Ergonomie", "Fabrication additive"],
      },
      {
        titre: "Le choix des matériaux",
        theme: "matiere",
        connaissances: ["Les différentes étapes du cycle de vie d'un OST", "L'empreinte carbone", "La disponibilité"],
        attendus: ["Choisir un matériau en argumentant sur sa disponibilité et son empreinte carbone"],
        mots: ["Empreinte carbone", "Cycle de vie", "Matériau"],
      },
      {
        titre: "Le choix d'une source d'énergie",
        theme: "energie",
        connaissances: ["L'impact environnemental lié aux sources d'énergie"],
        attendus: [
          "Évaluer le besoin énergétique d'un OST",
          "Choisir une source d'énergie (disponibilité, autonomie, efficacité, impact, coût)",
        ],
        mots: ["Source d'énergie renouvelable", "Source d'énergie non renouvelable", "Énergie", "Puissance", "Stockage de l'énergie"],
      },
      {
        titre: "L'assemblage de constituants",
        theme: "matiere",
        connaissances: ["Matériel, outillage et appareils de contrôle (pied à coulisse, multimètre)"],
        attendus: ["Ordonner les étapes d'assemblage, assembler et contrôler le prototype"],
        mots: ["Prototype"],
      },
      {
        titre: "La modélisation et la fabrication",
        theme: "matiere",
        connaissances: [
          "Les règles de sécurité des moyens de réalisation (impression 3D, découpe laser, MOCN)",
          "Les instruments de mesure",
        ],
        attendus: [
          "Modéliser une pièce en 3D, la coter et piloter sa fabrication",
          "Vérifier la pièce réalisée avec des outils de mesure",
        ],
        mots: ["Modélisation 3D (CAO)", "Impression 3D", "Découpe laser"],
      },
      {
        titre: "Les objets communicants",
        theme: "reseau",
        connaissances: ["Adressage IP de deux objets communicants dans un réseau local"],
        attendus: [
          "Déterminer et paramétrer deux adresses IP",
          "Tester la connexion et commander un OST depuis un autre",
        ],
        mots: ["Objet connecté", "Adresse IP", "Protocole"],
        chap: ["Chapitre 1"],
      },
      {
        titre: "La validation du comportement mécanique d'un matériau",
        theme: "matiere",
        connaissances: ["Sollicitation, déformation, simulation de la tenue mécanique"],
        attendus: [
          "Paramétrer une simulation et conclure sur la déformation maximale",
          "Proposer un protocole de test et comparer réel et simulé",
        ],
        mots: ["Simulation", "Protocole expérimental"],
      },
      {
        titre: "La validation des performances d'un OST",
        theme: "objets",
        connaissances: ["Tests de comportement et mesure de performance"],
        attendus: ["Lister et réaliser les tests pour valider le comportement d'un OST"],
        mots: ["Protocole expérimental", "Performance"],
        chap: ["Projet Blaise Robotics"],
      },
      {
        titre: "La programmation des OST",
        theme: "info",
        connaissances: [
          "La modularité : sous-programme, fonction",
          "La structuration d'un programme (organisation, modularité, commentaires)",
          "Biais dans un jeu de données",
        ],
        attendus: [
          "Décomposer un problème en sous-objectifs, écrire un algorithme principal et des fonctions",
          "Tester pas à pas puis sur l'objet réel",
          "Entraîner un modèle d'IA de classification, détecter ses biais et l'intégrer dans un programme",
        ],
        mots: ["Algorithme", "Sous-programme (fonction)", "Bug", "Biais", "Intelligence artificielle (IA)"],
        chap: ["Projet Blaise Robotics"],
      },
    ],
  },
];
