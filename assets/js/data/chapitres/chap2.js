/* ✎ CHAPITRE 2 — voir chap1.js pour l'explication des champs */
CHAPITRES.push({
  id: "chap2",
  num: "Chapitre 2",
  titre: "La cybersécurité au quotidien",
  theme: "reseau",
  icone: "lock",
  statut: "en-cours",
  programme: "Chapitre 2",
  situation: "Un matin, en arrivant au collège, les élèves découvrent que le site web de l'établissement ne fonctionne plus et que plusieurs comptes ENT d'élèves et de professeurs ont été piratés. Le collège a été la cible d'une cyberattaque. Le professeur de technologie sollicite les élèves de 3e pour comprendre ce qui s'est passé et proposer des solutions.",
  problematique: "Quelles sont les menaces dans le cyberespace et comment se protéger ?",

  logiciels: [
    { nom:"Mission mot de passe", icone:"lock", url:"applis/mission-mot-de-passe.html",
      note:"L'appli de l'activité 2, directement dans le navigateur. Ne tape jamais un vrai mot de passe dedans." },
    { nom:"48 h après l'attaque", icone:"signal", url:"https://ralba62.github.io/cyber-48h/",
      note:"L'appli de l'activité 3 : une enquête interactive, directement dans le navigateur." },
  ],

  activites: [
    {
      titre: "Les menaces dans le cyberespace",
      objectif: "Connaître le vocabulaire de la cybersécurité et les principales cyberattaques.",
      docs: [{ label:"Fiche de l'activité 1", url:"docs/ch2/activite1-menaces-cyberespace.pdf" }],
      outils: [
        { label:"Fiche : cybersécurité et données personnelles", url:"docs/OST1l-Cybersecurite-protection-des-donnees-personnelles-traces-numeriques-identification-authentification-respect-de-la-propriete-intellectuelle.pdf" },
        { label:"Fiche : cyberviolence", url:"docs/OST1m-Cyberviolence-usurpation-didentite-usage-detourne.pdf" },
        { label:"Cybermalveillance.gouv.fr", url:"https://www.cybermalveillance.gouv.fr" },
      ],
      chezMoi: [
        "Télécharge la <b>fiche de l'activité 1</b>.",
        "Ouvre les documents de l'activité sur <b>ELEA</b> (par l'ENT).",
        "Exercice 1 : associe chaque mot à sa définition (tu peux t'aider du glossaire du site).",
        "Exercices 2 et 3 : complète le tableau des trois couches du cyberespace et classe les menaces.",
        "Exercices 4 et 5 : données personnelles, cookies, puis le schéma du pharming.",
      ],
      retenir: [
        "Le cyberespace comporte trois couches : <b>matérielle</b> (équipements), <b>logique</b> (programmes et protocoles) et <b>informationnelle</b> (données et contenus).",
        "Cyberattaques : <b>phishing</b> (vol d'informations), <b>malwares</b> (logiciels malveillants), <b>ransomwares</b> (blocage des fichiers), <b>pharming</b> (redirection vers un faux site), sabotages.",
        "Les <b>données personnelles</b> permettent d'identifier une personne et doivent être protégées.",
        "Les <b>cookies</b> sont de petits fichiers qui mémorisent des informations ou suivent notre navigation.",
        "Il faut rester vigilant et protéger ses données et ses appareils.",
      ],
    },
    {
      titre: "Mission mot de passe",
      objectif: "Comprendre ce qui rend un mot de passe robuste et savoir en créer un.",
      docs: [{ label:"Fiche de l'activité 2", url:"docs/ch2/activite2-mission-mot-de-passe.pdf" }],
      outils: [{ label:"Lancer Mission mot de passe", url:"applis/mission-mot-de-passe.html" }],
      chezMoi: [
        "Télécharge la <b>fiche de l'activité 2</b> (normalement en binôme : seul, c'est possible aussi).",
        "Ouvre l'appli <b>Mission mot de passe</b> et réalise les 6 défis dans l'ordre.",
        "Complète la fiche au fur et à mesure et recopie le code secret de chaque défi.",
        "⚠️ Ne tape <b>jamais</b> un de tes vrais mots de passe dans l'appli.",
      ],
      retenir: [
        "Un mot de passe fort fait <b>au moins 12 caractères</b> et mélange minuscules, majuscules, chiffres et symboles : chaque caractère en plus allonge l'attaque par <b>force brute</b>.",
        "Jamais de mots courants (« azerty », « 123456 ») : ils sont testés en premier (<b>attaque par dictionnaire</b>). Jamais d'informations personnelles.",
        "Un mot de passe <b>différent pour chaque compte</b>, sinon c'est l'<b>effet domino</b>. Le compte le plus important à protéger est la messagerie.",
        "Pour retenir : la <b>phrase secrète</b> (premières lettres de chaque mot), un gestionnaire de mots de passe et la <b>double authentification</b>.",
      ],
    },
    {
      titre: "48 h après l'attaque",
      objectif: "Mener l'enquête après le piratage du collège et retenir les bons réflexes face aux risques du quotidien.",
      docs: [{ label:"Carnet d'enquête (fiche de l'activité 3)", url:"docs/ch2/activite3-carnet-enquete-48h.pdf" }],
      outils: [{ label:"Lancer l'appli « 48 h après l'attaque »", url:"https://ralba62.github.io/cyber-48h/" }],
      chezMoi: [
        "Télécharge et imprime (ou recopie) le <b>carnet d'enquête</b>.",
        "Ouvre l'appli <b>« 48 h après l'attaque »</b> : le collège a été piraté, tu suis Claude pendant 48 h.",
        "Quand l'appli affiche <b>« À noter sur la fiche »</b>, recopie l'information dans la case indiquée (1A, 1B…). Le bouton <b>« Mes notes »</b> permet de la revoir.",
        "À la fin de chaque chapitre, recopie la <b>clé</b> affichée à droite du titre : elle ne s'affiche qu'une fois et sert à ouvrir le dossier d'enquête.",
        "Fais les 5 chapitres (le PC de la maison, la story de vacances, le bandeau de cookies, le groupe de classe, la consultation en ligne), puis le <b>bonus</b> : le mail piège.",
      ],
      retenir: [
        "Pour protéger mon ordinateur, j'installe un <b>antivirus</b> et un <b>pare-feu</b>, je télécharge sur les sites officiels et je fais les mises à jour.",
        "Avant de publier sur Internet, je me demande qui va voir ma publication, car elle laisse des <b>traces volontaires</b>.",
        "Sur un site, je peux refuser les <b>cookies</b> : le <b>RGPD</b> oblige le site à demander mon consentement.",
        "Face à la <b>cyberviolence</b>, je ne réponds pas, je garde des preuves, je bloque et j'en parle à un adulte ou j'appelle le <b>3018</b>.",
        "Avant de saisir des données personnelles, je vérifie que le site est en <b>https</b>, avec le cadenas et la bonne adresse.",
        "Face à un mail suspect, je ne clique pas, je le signale et je préviens un adulte (<b>hameçonnage</b>).",
      ],
    },
  ],

  mots: ["Cyberespace", "Cybersécurité", "Cyberattaque", "Malware", "Ransomware (rançongiciel)", "Hameçonnage (phishing)", "Pharming", "VPN", "Donnée personnelle", "Cookie (témoin de connexion)", "Mot de passe robuste", "Attaque par force brute", "Attaque par dictionnaire", "Effet domino", "Double authentification", "Gestionnaire de mots de passe", "Antivirus", "Pare-feu", "Trace numérique", "RGPD", "HTTPS", "Cyberviolence", "3018"],

  entrainement: [
    { label:"Cybermalveillance.gouv.fr : les bons réflexes", url:"https://www.cybermalveillance.gouv.fr" },
  ],
});
