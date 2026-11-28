/* ==========================================================
   ✎ CONCOURS BLAISE ROBOTICS
   Sources : site du concours (pedagogie.ac-lille.fr/blaiserobotics)
   et règlement de l'édition 4.0 (2025/2026). À mettre à jour quand
   le règlement 2027 sera publié.
   dateFinale : "AAAA-MM-JJTHH:MM" active le compte à rebours ("" pour le masquer)
   ========================================================== */
window.CONCOURS = {
  edition: "Édition 2027",
  accroche: "Le concours de robotique des 3e du district audomarois : programmer, concevoir et présenter son mBot face aux autres collèges.",
  presentation: "Blaise Robotics est organisé par les collèges de l'Audomarois et le lycée Blaise Pascal de Longuenesse. Il relie la technologie de 3e aux enseignements du lycée (STI2D, SI, BTS, club robotique). Toute l'année, les équipes préparent leur robot mBot en classe ; lors de la rencontre inter-collèges, elles s'affrontent sur quatre épreuves. Le concours met en œuvre la démarche de projet et s'inscrit dans le Parcours Avenir.",
  dateFinale: "2027-04-15T09:00",
  lieu: "Lycée Blaise Pascal, Longuenesse",
  logo: "assets/img/blaise-robotics.jpg",
  siteOfficiel: "https://pedagogie.ac-lille.fr/blaiserobotics/",
  reglementPdf: "docs/reglement-blaise-robotics-2025-2026.pdf",
  reglementNote: "Règlement de l'édition 2025/2026 — le règlement 2027 sera publié sur le site du concours.",

  chiffres: [
    { val:"3e", label:"élèves de 3e uniquement" },
    { val:"5", label:"élèves max. par équipe, mixte" },
    { val:"2", label:"équipes qualifiées par collège" },
    { val:"4", label:"épreuves le jour J" },
  ],

  epreuves: [
    { nom:"Épreuve de vitesse", icone:"flag", prix:"Prix de vitesse",
      desc:"Le mBot suit une ligne en évitant les obstacles, puis s'arrête seul en fin de piste, le plus vite possible.",
      details:["3 essais, le meilleur temps compte", "+5 s de pénalité si le robot touche un obstacle ou le portique, sort de la zone de contournement ou ne s'arrête pas", "Le programme est présenté au jury : variables et sous-programmes sont bonifiés"],
      modules:["Moteurs", "Bouton de la carte", "Module à ultrasons", "Suiveur de ligne"] },
    { nom:"Épreuve des défis", icone:"code", prix:"Prix de programmation",
      desc:"Accompagnée d'un lycéen, l'équipe résout des défis de programmation de difficulté croissante.",
      details:["Des points pour chaque défi réussi", "On peut renoncer à un défi et passer au suivant, sans retour en arrière"],
      modules:["Moteurs", "Bouton", "Ultrasons", "Suiveur de ligne", "Capteur de luminosité", "LED de la carte", "Buzzer"] },
    { nom:"Épreuve du SUMO", icone:"robot", prix:"Prix de créativité",
      desc:"Robots pilotés en Bluetooth, deux à deux sur une piste circulaire : il faut sortir le robot adverse. Combats de 3 minutes.",
      details:["Dispositif de poussée conçu et fabriqué par les élèves au collège ou en FabLab", "Amovible, non motorisé, sans kit du commerce (sauf vis et écrous)", "Le mBot équipé doit tenir dans une boîte A4 (hauteur libre)", "Démarche de développement durable et modélisation en CAO obligatoires"] },
    { nom:"Revue de projet", icone:"mic", prix:"Meilleure présentation de projet",
      desc:"5 minutes de présentation sans interruption, puis 10 minutes de questions du jury.",
      details:["Diaporama réalisé avec LibreOffice Impress", "Contenu : l'équipe et ses rôles, chaînes d'information et d'énergie du mBot, algorithme de l'épreuve de vitesse, dispositif SUMO et sa modélisation, un exemple concret de robotique", "Grille inspirée de l'oral du DNB : le travail peut être réutilisé pour l'oral du brevet !"] },
  ],

  recompenses: "Chaque épreuve rapporte des points selon le classement, sur un total de 80 points. Les trois premiers de chaque épreuve sont récompensés, et le meilleur score cumulé remporte le GRAND PRIX BLAISE ROBOTICS. Une équipe ne peut être récompensée qu'une seule fois.",

  calendrier: [
    { date:"Étape 1", etape:"Analyser le règlement, planifier le projet, choisir un nom d'équipe et un logo, désigner un responsable" },
    { date:"Étape 2", etape:"Programmer l'épreuve de vitesse et maîtriser tous les éléments programmables du mBot" },
    { date:"Étape 3", etape:"Réaliser et modéliser le dispositif SUMO (et, en option, une application de pilotage)" },
    { date:"Étape 4", etape:"Réaliser le dossier de présentation et préparer l'oral" },
    { date:"15 avril 2027", etape:"Rencontre inter-collèges au lycée Blaise Pascal" },
  ],

  journee: [
    { h:"9h – 9h30", t:"Accueil des équipes" },
    { h:"9h30 – 12h", t:"Vitesse, défis et revue de projet" },
    { h:"12h – 15h", t:"SUMO, visite du lycée et repas" },
    { h:"15h – 15h30", t:"Finales du SUMO" },
    { h:"15h30 – 16h", t:"Remise des prix" },
  ],
  journeeNote: "Horaires de l'édition 2025/2026, donnés à titre indicatif.",

  reglement: [
    { titre:"Constitution des équipes", texte:"Uniquement des élèves de 3e, 5 élèves maximum, équipes obligatoirement mixtes, avec un nom et un logo. Un responsable peut être désigné. Deux équipes par collège sont qualifiées pour la rencontre inter-collèges." },
    { titre:"Le robot et le logiciel", texte:"Robot mBot, programmé de préférence avec mBlock 5. Chaque robot est mesuré avant le concours ; un robot non conforme entraîne la disqualification." },
    { titre:"Réparations", texte:"Les équipes peuvent réparer leur robot entre les épreuves : un stand est prévu." },
    { titre:"Le SUMO en détail", texte:"Phase de poules (4 combats minimum, robots placés côte à côte) : 3 points pour une victoire (les 3 roues adverses sorties), pénalités si son robot perd 1 ou 2 roues ou reste inactif. Puis quarts de finale en mort subite." },
    { titre:"Le dispositif est conçu par les élèves", texte:"Les professeurs n'interviennent pas dans les choix des élèves : tout manquement entraîne la disqualification de l'équipe." },
  ],

  // Défis travaillés en classe (parcours ELEA)
  defisClasse: [
    { n:1, titre:"Le mBot avance 5 secondes et s'arrête", notions:"Algorithme, moteurs" },
    { n:2, titre:"Déplacement du mBot", notions:"Séquence d'instructions" },
    { n:3, titre:"Parcours avec les LED", notions:"Boucle « répéter », LED" },
    { n:4, titre:"S'arrêter devant un obstacle (< 20 cm)", notions:"Capteur à ultrasons, condition" },
    { n:5, titre:"Avancer sur la piste blanche et s'arrêter sur le noir", notions:"Suiveur de ligne, si… alors… sinon" },
  ],

  ressources: [
    { label:"Site officiel du concours", url:"https://pedagogie.ac-lille.fr/blaiserobotics/" },
    { label:"Ressources de programmation mBot", url:"https://pedagogie.ac-lille.fr/blaiserobotics/ressources/ressources-programmation-mbot/" },
    { label:"Modèles 3D du mBot (CAO)", url:"https://pedagogie.ac-lille.fr/blaiserobotics/ressources/modeles-3d/" },
  ],

  equipes: [
    // ✎ { nom:"Les Robotix", classe:"3eC" }  — nom d'équipe uniquement, pas de noms d'élèves
  ],

  editions: [
    { annee:"2025", titre:"Blaise Robotics 3.0", texte:"110 collégiens de 11 établissements et 27 lycéens : défis, SUMO, vitesse et revue de projet.", url:"https://pedagogie.ac-lille.fr/blaiserobotics/blaise-robotics-3-0-2025/" },
    { annee:"2024", titre:"Blaise Robotics 2.0", texte:"Parcours chronométrés, énigmes à résoudre et duels de robots.", url:"https://pedagogie.ac-lille.fr/blaiserobotics/blaise-robotics-1-1-2023-2/" },
    { annee:"2023", titre:"Blaise Robotics 1.1", texte:"Près d'une centaine de collégiens accueillis au lycée Blaise Pascal.", url:"https://pedagogie.ac-lille.fr/blaiserobotics/blaise-robotics-1-1-2023/" },
    { annee:"2022", titre:"Blaise Robotics 1.0", texte:"La première édition du concours.", url:"https://pedagogie.ac-lille.fr/blaiserobotics/blaise-robotics-1-0/" },
  ],
};
