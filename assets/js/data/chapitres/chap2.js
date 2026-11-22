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
  ],

  mots: ["Cyberespace", "Cybersécurité", "Cyberattaque", "Malware", "Ransomware (rançongiciel)", "Hameçonnage (phishing)", "Pharming", "VPN", "Donnée personnelle", "Cookie (témoin de connexion)", "Mot de passe robuste", "Attaque par force brute", "Attaque par dictionnaire", "Effet domino", "Double authentification", "Gestionnaire de mots de passe"],

  entrainement: [
    { label:"Cybermalveillance.gouv.fr : les bons réflexes", url:"https://www.cybermalveillance.gouv.fr" },
  ],
});
