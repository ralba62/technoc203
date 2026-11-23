/* ✎ PROJET BLAISE ROBOTICS — voir chap1.js pour l'explication des champs.
   Ce chapitre est découpé en parties : parties[{ titre, note, activites[…] }]. */
CHAPITRES.push({
  id: "projet-br",
  num: "Projet",
  titre: "Blaise Robotics",
  theme: "objets",
  icone: "robot",
  statut: "en-cours",
  programme: "Projet Blaise Robotics",
  situation: "La classe participe au concours Blaise Robotics : par équipes, il faut programmer le robot mBot pour une course de vitesse et des défis, concevoir un dispositif pour l'épreuve du SUMO et présenter son projet devant un jury. Le projet se déroule en trois parties : programmation du mBot, découverte du concours et organisation de l'équipe, puis préparation des épreuves.",
  problematique: "Comment programmer et équiper le robot mBot pour relever les épreuves du concours ?",

  logiciels: [
    { nom:"Vittascience — mBot", logo:"https://fr.vittascience.com/favicon.ico", icone:"code", url:"https://fr.vittascience.com/mBot/",
      note:"Programmer le mBot en blocs dans le navigateur, sans installation ni compte obligatoire." },
    { nom:"mBlock en ligne", logo:"https://ide.mblock.cc/favicon.ico", icone:"code", url:"https://ide.mblock.cc/",
      note:"La version web de mBlock 5, le logiciel utilisé en classe." },
    { nom:"mBlock 5 (à installer)", logo:"https://mblock.cc/cdn/shop/files/favicon_32x32.png?v=1716790211", icone:"terminal", url:"https://mblock.cc",
      note:"Le logiciel conseillé par le règlement du concours (Windows, Mac)." },
  ],

  parties: [
    {
      titre: "Partie 1 — Programmation du mBot",
      note: "En classe, en <b>demi-groupe</b> : chaque élève programme son mBot. Ces défis préparent aux épreuves 1 (vitesse) et 2 (défis) du concours. Objectif : maîtriser tous les éléments demandés par le règlement — moteurs, bouton, capteur à ultrasons et suiveur de ligne (épreuve 1), plus capteur de luminosité, LED et buzzer (épreuve 2).",
      activites: [
    {
      titre: "Découvrir le mBot : capteurs et actionneurs",
      objectif: "Identifier les capteurs et les actionneurs du robot et leur rôle.",
      docs: [
        { label:"Les capteurs du mBot", url:"docs/br/capteurs-mbot.pdf" },
        { label:"Les actionneurs du mBot", url:"docs/br/actionneurs-mbot.pdf" },
      ],
      outils: [{ label:"Appli Découverte du mBot", url:"applis/decouverte-mbot.html" }],
      chezMoi: [
        "Lis les deux fiches : <b>capteurs</b> et <b>actionneurs</b> du mBot.",
        "Ouvre l'appli <b>Découverte du mBot</b> : explore le robot, puis fais l'onglet « Classer » et le quiz.",
      ],
      retenir: [
        "Un <b>capteur</b> acquiert une information : ultrasons, suiveur de ligne, bouton, luminosité.",
        "Un <b>actionneur</b> agit : moteurs, LED, buzzer.",
        "La carte mCore (microcontrôleur) <b>traite</b> les informations selon le programme.",
      ],
    },
    {
      titre: "Algorithme et défi 1",
      objectif: "Écrire un algorithme précis puis le traduire en programme.",
      docs: [{ label:"Fiche : qu'est-ce qu'un algorithme ?", url:"docs/br/algorithme.pdf" }],
      outils: [
        { label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" },
        { label:"mBlock en ligne", url:"https://ide.mblock.cc/" },
      ],
      chezMoi: [
        "Lis la fiche <b>algorithme</b>.",
        "<b>Défi 1</b> : le mBot attend l'appui sur le bouton, avance pendant 5 secondes puis s'arrête. Écris d'abord l'algorithme sur papier.",
        "Programme-le en blocs dans <b>Vittascience</b> ou <b>mBlock en ligne</b>.",
        "Pas de robot chez toi ? Fais une capture d'écran de ton programme : tu le testeras sur le mBot à la prochaine séance.",
      ],
      retenir: [
        "Un <b>algorithme</b> est une suite d'instructions dans un ordre précis. Il doit être précis : « avance à 50 % pendant 3 s » plutôt que « avance un peu ».",
        "Un <b>programme</b> traduit l'algorithme pour le robot.",
        "Un bon programme commence toujours par un bon algorithme !",
      ],
    },
    {
      titre: "Défis 2 et 3 : se déplacer avec une boucle",
      objectif: "Utiliser une boucle « répéter » pour enchaîner déplacements, virages et LED.",
      outils: [{ label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" }],
      chezMoi: [
        "<b>Défi 2</b> : après l'appui sur le bouton, le mBot fait 4 fois : avancer 2 s, tourner à gauche 0,5 s, avancer 2 s, tourner à droite 0,5 s (tous à 50 %).",
        "<b>Défi 3</b> : même parcours, mais les LED indiquent la direction : les 2 LED en vert quand il avance, seulement la LED gauche quand il tourne à gauche, seulement la droite quand il tourne à droite.",
        "Écris l'algorithme, puis programme-le avec un bloc <b>répéter 4 fois</b>.",
      ],
      retenir: [
        "Une <b>boucle</b> répète des instructions : le programme est plus court et plus facile à modifier.",
      ],
    },
    {
      titre: "Défi 4 : le capteur à ultrasons",
      objectif: "Faire réagir le robot à un obstacle.",
      docs: [{ label:"Fiche : le capteur à ultrasons", url:"docs/br/capteur-ultrasons.pdf" }],
      outils: [{ label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" }],
      chezMoi: [
        "Lis la fiche sur le <b>capteur à ultrasons</b>.",
        "<b>Défi 4</b> : après l'appui sur le bouton, le mBot avance à 50 % et s'arrête dès que la distance devant lui est inférieure à 20 cm.",
        "Écris l'algorithme puis le programme (blocs « attendre jusqu'à » ou « si… alors »).",
      ],
      retenir: [
        "Le <b>capteur à ultrasons</b> mesure une distance grâce à l'écho d'un son inaudible.",
        "Une <b>condition</b> permet au robot de réagir à ce que mesure un capteur.",
      ],
    },
    {
      titre: "Défi 5 : le suiveur de ligne",
      objectif: "Utiliser le suiveur de ligne et une condition « si… alors… sinon ».",
      docs: [{ label:"Fiche : le suiveur de ligne", url:"docs/br/suiveur-de-ligne.pdf" }],
      outils: [{ label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" }],
      chezMoi: [
        "Lis la fiche sur le <b>suiveur de ligne</b>.",
        "<b>Défi 5</b> : le robot avance sur une piste blanche et s'arrête quand il voit du noir à gauche ET à droite.",
        "Programme-le avec une boucle « pour toujours » et un « si… alors… sinon ».",
      ],
      retenir: [
        "Le <b>suiveur de ligne</b> détecte le noir ou le blanc sous le robot, à gauche et à droite.",
        "« si… alors… sinon » : le robot choisit son action selon la valeur du capteur.",
      ],
    },
        {
          titre: "Les chaînes d'information et d'énergie du mBot",
          objectif: "Placer chaque élément du mBot dans la chaîne d'information ou dans la chaîne d'énergie.",
          docs: [
            { label:"Cours : chaînes d'information et d'énergie", url:"docs/br/chaines-info-energie.pdf" },
            { label:"Exercice papier : les chaînes du mBot", url:"docs/br/chaines-mbot-exercice.pdf" },
          ],
          outils: [{ label:"Lancer l'activité interactive", url:"applis/chaines-mbot.html" }],
          chezMoi: [
            "Lis le <b>cours</b> sur les chaînes d'information et d'énergie.",
            "Ouvre l'<b>activité interactive</b> et fais les 4 étapes : capteur ou actionneur, chaîne d'information, chaîne d'énergie, questions.",
            "À chaque étape, clique sur <b>Vérifier</b> : les erreurs s'affichent en rouge avec la bonne case. Corrige-les avant de passer à la suite.",
            "Complète ensuite l'<b>exercice papier</b> et recopie le bilan dans ton cahier.",
          ],
          retenir: [
            "Chaîne d'information : <b>ACQUÉRIR</b> (récepteur infrarouge, capteur de distance, détecteur de ligne) → <b>TRAITER</b> (carte microcontrôleur) → <b>COMMUNIQUER</b> (câbles / pistes de cuivre).",
            "Les consignes de l'utilisateur (interrupteur, télécommande) entrent dans la chaîne d'information ; la LED donne une information à l'utilisateur.",
            "Chaîne d'énergie : <b>ALIMENTER</b> (piles / batterie) → <b>DISTRIBUER</b> (câbles / pistes de cuivre) → <b>CONVERTIR</b> (moteurs) → <b>TRANSMETTRE</b> (engrenages) → les roues font avancer le robot.",
            "La carte envoie un <b>ordre</b> à la chaîne d'énergie : c'est le lien entre les deux chaînes.",
          ],
        },
      ],
    },
    {
      titre: "Partie 2 — Découverte du concours, organisation de l'équipe et planification",
      note: "En équipe : comprendre ce qui est attendu, se répartir les rôles et planifier le travail jusqu'à la rencontre inter-collèges.",
      activites: [
        {
          titre: "Découvrir le concours et analyser le règlement",
          objectif: "Comprendre les 4 épreuves, les contraintes et les critères de réussite.",
          docs: [{ label:"Règlement (PDF)", url:"docs/reglement-blaise-robotics-2025-2026.pdf" }],
          outils: [
            { label:"Page du concours", url:"concours.html" },
            { label:"Site officiel Blaise Robotics", url:"https://pedagogie.ac-lille.fr/blaiserobotics/" },
          ],
          chezMoi: [
            "Lis la <b>page du concours</b> puis le <b>règlement</b>.",
            "Pour chaque épreuve (vitesse, défis, SUMO, revue de projet), note : ce qu'il faut faire, comment on gagne des points, les pénalités.",
            "Relève les <b>contraintes</b> du dispositif SUMO (amovible, non motorisé, boîte A4…) : c'est le cahier des charges.",
            "Note les éléments du mBot à savoir programmer pour les épreuves 1 et 2.",
          ],
          retenir: [
            "Le <b>règlement</b> joue le rôle de <b>cahier des charges</b> : il fixe ce qui est attendu et les contraintes à respecter.",
            "4 épreuves : <b>vitesse</b>, <b>défis</b>, <b>SUMO</b> et <b>revue de projet</b>, sur un total de 80 points.",
          ],
        },
        {
          titre: "Constituer et organiser l'équipe",
          objectif: "Former l'équipe, choisir un nom et un logo, répartir les rôles.",
          outils: [{ label:"Règlement : constitution des équipes", url:"concours.html#reglement" }],
          chezMoi: [
            "Rappel : 5 élèves maximum, équipe <b>mixte</b>, un nom et un logo en lien avec le concours.",
            "Désignez un <b>responsable d'équipe</b> et répartissez les rôles (programmation, conception SUMO, CAO, diaporama, oral…).",
            "Si tu étais absent : demande à ton équipe quel rôle t'a été confié et note-le.",
          ],
          retenir: [
            "Chaque membre a un <b>rôle</b> et des <b>responsabilités</b> ; le responsable coordonne le travail de l'équipe.",
          ],
        },
        {
          titre: "Planifier le projet",
          objectif: "Découper le projet en tâches et les placer sur un planning.",
          outils: [{ label:"Les 4 étapes du projet", url:"concours.html" }],
          chezMoi: [
            "Liste les tâches du projet à partir des 4 étapes conseillées par le règlement.",
            "Pour chaque tâche : qui la fait, combien de séances, pour quand.",
            "Place les tâches sur un <b>planning</b> en prévoyant des <b>revues de projet</b> pour faire le point.",
          ],
          retenir: [
            "Un <b>planning</b> répartit les tâches dans le temps et entre les membres de l'équipe.",
            "Les <b>revues de projet</b> permettent de faire le point et d'ajuster le planning en cas de retard.",
          ],
        },
      ],
    },
    {
      titre: "Partie 3 — Préparation des épreuves",
      note: "En équipe : préparer les quatre épreuves de la rencontre inter-collèges.",
      activites: [
        {
          titre: "Épreuve 1 : vitesse",
          objectif: "Programmer le mBot pour suivre la ligne, éviter les obstacles et s'arrêter seul, le plus vite possible.",
          outils: [
            { label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" },
            { label:"mBlock en ligne", url:"https://ide.mblock.cc/" },
            { label:"Règles de l'épreuve", url:"concours.html#epreuves" },
          ],
          chezMoi: [
            "Écris l'<b>algorithme</b> du parcours : suivre la ligne, contourner l'obstacle, s'arrêter en fin de piste.",
            "Programme-le en utilisant des <b>variables</b> (vitesse, distance) et des <b>sous-programmes</b> (suivre la ligne, contourner) : c'est bonifié par le jury.",
            "Teste sur la piste en classe, chronomètre et améliore (3 essais, +5 s par pénalité).",
          ],
          retenir: [
            "Un <b>sous-programme</b> regroupe des instructions sous un nom : le programme est plus lisible et plus facile à améliorer.",
          ],
        },
        {
          titre: "Épreuve 2 : défis",
          objectif: "S'entraîner aux défis de programmation de difficulté croissante.",
          outils: [
            { label:"Ressources mBot du concours", url:"https://pedagogie.ac-lille.fr/blaiserobotics/ressources/ressources-programmation-mbot/" },
            { label:"Vittascience — mBot", url:"https://fr.vittascience.com/mBot/" },
          ],
          chezMoi: [
            "Refais les défis de la partie 1 sans regarder la correction.",
            "Entraîne-toi sur les éléments non encore vus : <b>capteur de luminosité</b>, <b>LED</b> de la carte et <b>buzzer</b>.",
          ],
        },
        {
          titre: "Épreuve 3 : SUMO",
          objectif: "Concevoir, modéliser et fabriquer un dispositif pour pousser le robot adverse.",
          outils: [
            { label:"Modèles 3D du mBot", url:"https://pedagogie.ac-lille.fr/blaiserobotics/ressources/modeles-3d/" },
            { label:"Tinkercad", url:"https://www.tinkercad.com" },
            { label:"Contraintes de l'épreuve", url:"concours.html#epreuves" },
          ],
          chezMoi: [
            "Relis les contraintes : amovible, non motorisé, sans kit du commerce, mBot équipé dans une boîte A4, démarche de développement durable.",
            "Dessine plusieurs <b>croquis</b> de solutions, puis choisissez-en une en équipe.",
            "Modélise le dispositif en <b>CAO</b> (Tinkercad) à partir du modèle 3D du mBot.",
            "Fabrique et teste le prototype au collège ou au FabLab.",
          ],
          retenir: [
            "Le dispositif est conçu <b>entièrement par les élèves</b> : le professeur n'intervient pas dans vos choix.",
          ],
        },
        {
          titre: "Épreuve 4 : revue de projet (oral)",
          objectif: "Préparer un diaporama et une présentation orale de 5 minutes, puis 10 minutes de questions.",
          docs: [
            { label:"Cours : chaînes d'information et d'énergie", url:"docs/br/chaines-info-energie.pdf" },
            { label:"Exercice : les chaînes du mBot", url:"docs/br/chaines-mbot-exercice.pdf" },
          ],
          outils: [
            { label:"Revoir l'activité 1.6 : les chaînes du mBot", url:"applis/chaines-mbot.html" },
            { label:"LibreOffice (Impress)", url:"https://fr.libreoffice.org" },
          ],
          chezMoi: [
            "Prépare ta partie du diaporama avec <b>LibreOffice Impress</b>.",
            "Contenu attendu : l'équipe et les rôles, les <b>chaînes d'information et d'énergie du mBot</b>, l'algorithme de l'épreuve de vitesse, le dispositif SUMO et sa modélisation, un exemple concret de robotique.",
            "Entraîne-toi à présenter sans lire, en respectant les 5 minutes.",
          ],
          retenir: [
            "Chaîne d'information : <b>acquérir</b> (capteurs) → <b>traiter</b> (carte mCore) → <b>communiquer</b> (LED, buzzer, Bluetooth).",
            "Chaîne d'énergie : <b>alimenter</b> (piles, batterie) → <b>distribuer</b> (carte) → <b>convertir</b> (moteurs) → <b>transmettre</b> (roues).",
            "Ce travail peut être réutilisé pour l'<b>oral du DNB</b>.",
          ],
        },
      ],
    },
  ],
  // activites est rempli automatiquement à partir des parties (ne pas modifier)
  activites: [],


  mots: ["Algorithme", "Programme", "Programmation par blocs", "Capteur", "Actionneur", "Capteur à ultrasons", "Suiveur de ligne", "Microcontrôleur", "Boucle", "Condition", "Variable", "Chaîne d'information", "Chaîne d'énergie", "Sous-programme (fonction)", "Revue de projet"],

  entrainement: [
    { label:"Défis du concours Blaise Robotics", url:"concours.html#epreuves" },
    { label:"DNB Tapis de course — question 5 : compléter le programme", url:"dnb.html#tapis-de-course/q5" },
    { label:"DNB Échographe — question 1 : flux d'énergie et d'information", url:"dnb.html#echographe/q1" },
    { label:"DNB Échographe — question 4 : compléter le programme de la LED", url:"dnb.html#echographe/q4" },
  ],
});
