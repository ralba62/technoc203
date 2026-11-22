/* ==========================================================
   ✎ SUJETS DNB INTERACTIFS
   Chaque sujet : id, titre, theme, duree, contexte, documents[], questions[]
   Types de questions :
     qcm      : choix[], bonne (index à partir de 0), explication
     vf       : affirmations[{ texte, vrai:true/false }], explication
     associer : paires[{ gauche, droite }]  (la liste des réponses est mélangée)
     ouvert   : correction (affichée à la demande, auto-évaluation par l'élève)
     saisie   : champs[{ repere:"A", label, options:[…] ou accept:[expressions], differentDe:"B", reponse }]
     multi    : choix[], bonnes:[index] (cases à cocher)
   html : (facultatif) image ou schéma affiché sous l'énoncé (repères : <span class="mk">A</span>)
   pdf  : (facultatif) sujet papier à télécharger, ex. "docs/dnb/mon-sujet.pdf"
   docs : documents utilisés par la question (index à partir de 0), pour le lien
          direct vers une question : dnb.html#tapis-de-course/q4
   Documents : { titre, html }   (on peut y mettre un tableau ou un algorithme)
   Ce sont des sujets d'entraînement, pas des sujets officiels.
   ========================================================== */
window.SUJETS_DNB = [
  {
    id: "tapis-de-course",
    titre: "Le tapis de course",
    source: "DNB 2022 · Sciences · partie Technologie",
    pdf: "docs/dnb/dnb-2022-tapis-de-course-technologie.pdf",   // sujet papier à télécharger
    theme: "energie",
    duree: "30 min",
    contexte: "Le tapis de course est un système technique qui permet de pratiquer un sport en intérieur — la course à pied ou la marche — pour préserver sa santé et entretenir ses capacités physiques. Pendant l'activité, l'écran de la console affiche le temps, la vitesse, la distance, les calories perdues et la fréquence cardiaque mesurée par les capteurs tactiles des poignées. La console sert à paramétrer le tapis : en mode manuel, on change la vitesse par appui sur une touche ; en mode automatique, on utilise des programmes enregistrés. Une clé de sécurité arrête automatiquement le tapis en cas d'urgence.",
    // Les documents s'affichent juste avant la première question qui les utilise (champ docs des questions)
    documents: [
      { titre: "Document 1 — Les éléments du tapis de course", html: `
        <figure class="fig fig-labels" style="max-width:520px">
          <img src="assets/img/dnb/doc1-tapis.png" alt="Coureur sur un tapis de course, flèches vers l'écran, la console, le capteur tactile, la clé de sécurité et le tapis roulant">
          <span style="top:9.6%">Écran</span><span style="top:26.5%">Console</span><span style="top:44.6%">Capteur tactile</span><span style="top:59.3%">Clé de sécurité</span><span style="top:79.7%">Tapis roulant</span>
        </figure>` },
      { titre: "Documents 2 et 3 — La rotation du tapis", html: `
        <table>
          <tr><th>Fonction technique</th><th>Solution technique</th></tr>
          <tr><td>Alimenter le moteur en énergie</td><td>Alimentation secteur 230 V</td></tr>
          <tr><td>Apporter au moteur l'énergie nécessaire</td><td>Relais</td></tr>
          <tr><td>Convertir l'énergie électrique en énergie mécanique</td><td>Moteur</td></tr>
          <tr><td>Transmettre l'énergie mécanique</td><td>Poulie et courroie</td></tr>
        </table>
        <figure class="fig" style="max-width:560px; margin-top:12px"><img src="assets/img/dnb/doc3-moteur.png" alt="Document 3 : le moteur, la poulie et la courroie qui entraînent le tapis roulant"></figure>` },
      { titre: "Document 4 — Mise en réseau de 3 tapis", html: `
        <p>Une salle de sport envisage la mise en réseau de 3 tapis de course. Un ordinateur collectera les données comme la vitesse et la fréquence cardiaque de chaque coureur. Les usagers pourront consulter l'évolution de leurs performances à distance, en se connectant au serveur de données.</p>
        <figure class="fig"><div class="markers">
          <img src="assets/img/dnb/doc4-reseau.png" alt="Schéma du réseau : trois tapis et un ordinateur reliés au commutateur, serveur de données relié au commutateur, routeur et Web non reliés. Case A : masque du tapis 1. Case B : adresse IP du tapis 3. Case C : adresse IP de l'ordinateur.">
          <span class="mk" style="left:13%; top:25.5%">A</span><span class="mk" style="left:66%; top:14%">B</span><span class="mk" style="left:91%; top:14.2%">C</span>
        </div></figure>` },
      { titre: "Document 5 — Programme des modes « débutant » et « endurance »", html: `
        <p>Le sportif peut choisir sur la console différents modes de fonctionnement. Mode « débutant » : le moteur tourne à la vitesse 2 pendant 3 minutes, puis à la vitesse 3 pendant 10 minutes. Mode « endurance » : le moteur tourne à la vitesse 5 pendant 4 minutes, puis à la vitesse 7 pendant 20 minutes.</p>
        <figure class="fig" style="max-width:520px"><div class="markers">
          <img src="assets/img/dnb/doc5-programme.png" alt="Programme par blocs avec six cases vides repérées de A à F">
          <span class="mk" style="left:70.8%; top:19.8%">A</span><span class="mk" style="left:92.5%; top:26.4%">B</span><span class="mk" style="left:92.5%; top:38.2%">C</span>
          <span class="mk" style="left:39.7%; top:44%">D</span><span class="mk" style="left:92.4%; top:54.9%">E</span><span class="mk" style="left:92.4%; top:66.7%">F</span>
        </div></figure>` },
    ],
    questions: [
      { type:"ouvert", pts:3, enonce:"Question 1 — Indique à quel besoin répond le tapis de course.",
        correction:"Le tapis de course permet de <b>pratiquer la course à pied ou la marche en intérieur</b>, pour préserver sa santé et entretenir ses capacités physiques." },

      { type:"associer", pts:5, docs:[0], enonce:"Question 2 — Complète les fonctions techniques des éléments indiqués sur le document 1.",
        paires:[
          { gauche:"Écran", droite:"Afficher les données de l'activité (temps, vitesse, distance, calories…)" },
          { gauche:"Console", droite:"Paramétrer le fonctionnement (vitesse, programmes)" },
          { gauche:"Capteur tactile", droite:"Mesurer la fréquence cardiaque" },
          { gauche:"Clé de sécurité", droite:"Arrêter le tapis en cas d'urgence" },
          { gauche:"Tapis roulant", droite:"Permettre de marcher ou courir sur place" },
        ] },

      { type:"saisie", pts:5, docs:[1], enonce:"Question 3 — À l'aide des documents 2 et 3, complète le schéma de la chaîne d'énergie de la rotation du tapis : le nom de la fonction de la case A, puis le constituant qui réalise chaque fonction (cases B à E).",
        html:`<figure class="fig"><div class="markers">
          <img src="assets/img/dnb/chaine-energie.png" alt="Chaîne d'énergie : 230 V AC, case A vide, DISTRIBUER (signal de commande), CONVERTIR, TRANSMETTRE, tapis immobile puis tapis activé. Sous chaque bloc, une bulle vide : B, C, D, E.">
          <span class="mk" style="left:18.9%; top:37%">A</span><span class="mk" style="left:18.6%; top:76%">B</span><span class="mk" style="left:38%; top:76%">C</span><span class="mk" style="left:57%; top:76%">D</span><span class="mk" style="left:76.5%; top:76%">E</span>
        </div></figure>`,
        champs:[
          { repere:"A", label:"Nom de la fonction du premier bloc", options:["ACQUÉRIR","ALIMENTER","COMMUNIQUER","STOCKER","TRAITER"], reponse:"ALIMENTER" },
          { repere:"B", label:"Constituant sous le premier bloc", options:["Alimentation secteur 230 V","Clé de sécurité","Moteur","Poulie et courroie","Relais","Tapis roulant"], reponse:"Alimentation secteur 230 V" },
          { repere:"C", label:"Constituant sous DISTRIBUER", options:["Alimentation secteur 230 V","Clé de sécurité","Moteur","Poulie et courroie","Relais","Tapis roulant"], reponse:"Relais" },
          { repere:"D", label:"Constituant sous CONVERTIR", options:["Alimentation secteur 230 V","Clé de sécurité","Moteur","Poulie et courroie","Relais","Tapis roulant"], reponse:"Moteur" },
          { repere:"E", label:"Constituant sous TRANSMETTRE", options:["Alimentation secteur 230 V","Clé de sécurité","Moteur","Poulie et courroie","Relais","Tapis roulant"], reponse:"Poulie et courroie" },
        ],
        explication:"Chaîne d'énergie : ALIMENTER (alimentation secteur 230 V) → DISTRIBUER (relais) → CONVERTIR (moteur) → TRANSMETTRE (poulie et courroie)." },

      { type:"saisie", pts:3, docs:[2], enonce:"Question 4.1 — Complète le document 4 : le masque de sous-réseau du tapis 1 (case A), puis une adresse IP pour le tapis 3 (case B) et pour l'ordinateur (case C).",
        champs:[
          { repere:"A", label:"Masque de sous-réseau du tapis 1", accept:["^255\\.255\\.255\\.0$"], reponse:"255.255.255.0" },
          { repere:"B", label:"Adresse IP du tapis 3", accept:["^195\\.64\\.248\\.(?!21$|22$)(25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?)$"], reponse:"195.64.248.x, avec x de 1 à 254, différent de 21 et de 22 (ex. 195.64.248.23)" },
          { repere:"C", label:"Adresse IP de l'ordinateur", accept:["^195\\.64\\.248\\.(?!21$|22$)(25[0-4]|2[0-4]\\d|1\\d\\d|[1-9]\\d?)$"], differentDe:"B", reponse:"195.64.248.x, avec x de 1 à 254, différent de 21, de 22 et du tapis 3 (ex. 195.64.248.24)" },
        ],
        explication:"Avec le masque 255.255.255.0, tous les appareils du même réseau ont les trois premiers nombres identiques (195.64.248). Le dernier nombre doit être différent pour chaque appareil." },

      { type:"multi", pts:2, docs:[2], enonce:"Question 4.2 — Il manque des liaisons sur le schéma du document 4. Coche les liaisons à ajouter pour que les usagers puissent accéder au serveur de données à distance.",
        choix:["Commutateur ↔ Routeur","Routeur ↔ Web","Serveur de données ↔ Web","Tapis 3 ↔ Routeur","Ordinateur ↔ Serveur de données"],
        bonnes:[0, 1],
        explication:"Le réseau local (commutateur) est relié au routeur, et le routeur est relié à Internet (Web)." },

      { type:"ouvert", pts:1, docs:[2], enonce:"Question 4.3 — Explique le rôle du routeur.",
        correction:"Le routeur <b>relie le réseau local de la salle de sport à Internet</b> (et donc à d'autres réseaux). Il oriente les données vers le bon réseau grâce à sa table de routage." },

      { type:"saisie", pts:6, docs:[3], enonce:"Question 5 — Complète les cases A à F du programme pour qu'il permette le fonctionnement décrit dans les deux modes.",
        champs:[
          { repere:"A", label:"Case A", accept:["^vrai$"], reponse:"Vrai" },
          { repere:"B", label:"Case B", accept:["^2$"], reponse:"2" },
          { repere:"C", label:"Case C", accept:["^3$"], reponse:"3" },
          { repere:"D", label:"Case D", accept:["^600$"], reponse:"600 (10 min = 600 s)" },
          { repere:"E", label:"Case E", accept:["^5$"], reponse:"5" },
          { repere:"F", label:"Case F", accept:["^7$"], reponse:"7" },
        ],
        explication:"Débutant (prog débutant = Vrai) : vitesse 2 pendant 180 s puis vitesse 3 pendant 600 s. Sinon (endurance) : vitesse 5 pendant 240 s puis vitesse 7 pendant 1 200 s." },
    ],
  },

  {
    id: "echographe",
    titre: "L'échographe portable",
    source: "DNB 2018 · Sciences · partie Technologie",
    pdf: "docs/dnb/dnb-2018-echographe-technologie.pdf",
    theme: "objets",
    duree: "30 min",
    contexte: "L'échographie est une technologie d'imagerie 2D qui permet de visualiser certaines parties du corps humain, non visibles à l'œil nu. Un constructeur d'échographes souhaite intégrer une transmission des résultats d'une vidéo de l'échographie en haute définition (HD). Afin de garantir une bonne disponibilité de cet appareil, il est nécessaire d'améliorer l'autonomie de la batterie et d'indiquer l'état de sa charge électrique.",
    documents: [
      { titre: "Document 1 — Principe de fonctionnement d'un échographe portable", html: `
        <figure class="fig" style="max-width:300px; float:right; margin:0 0 10px 16px"><img src="assets/img/dnb/echo-appareil.png" alt="Échographe portable relié sans fil à une tablette"></figure>
        <p>Lorsque le médecin appuie sur le bouton marche/arrêt (flèche ②), la carte de traitement est alimentée. Un voyant témoin de connexion avec la tablette est allumé (flèche ③).</p>
        <p>La consigne de début et de fin d'acquisition des images, ainsi que sa visualisation, se font sur la tablette tactile. La tablette transmet les consignes (flèche ⑤) au module de communication qui les transmet à la carte de traitement.</p>
        <p>La carte de traitement alimente l'émetteur à ultrasons en énergie électrique. L'émetteur à ultrasons convertit l'énergie électrique en signal sonore (flèche ④) qui se propage au sein du corps du patient. L'écho du signal sonore est capté par le récepteur qui le convertit en signal électrique transmis à la carte de traitement puis au module de communication. Celui-ci renvoie les résultats du traitement (flèche ⑤) à la tablette pour l'affichage des images.</p>
        <figure class="fig" style="clear:both"><img src="assets/img/dnb/echo-doc1-blocs.png" alt="Diagramme des blocs internes de l'échographe : connecteur d'alimentation, bouton marche/arrêt, module de gestion de l'énergie, batterie, carte de traitement, voyants, module de communication, émetteur/récepteur à ultrasons. Flèches numérotées de 1 à 6."></figure>` },
      { titre: "Document 2 — Caractéristiques des technologies de transmission sans fil", html: `
        <figure class="fig"><img src="assets/img/dnb/echo-doc2-transmissions.png" alt="Graphique débit / portée : NFC (environ 100 kbit/s, quelques cm), Bluetooth V2 à V4 (environ 1 Mbit/s, jusqu'à 10 m environ), Wi-Fi 802.11 g/n (de 10 à plus de 100 Mbit/s, jusqu'à 100 m environ)."></figure>
        <p style="margin-top:10px"><b>Débits nécessaires pour une transmission :</b></p>
        <ul style="margin:0"><li>d'une image d'échographie en 1 s → 128 kbit/s (kilobits par seconde) ;</li>
        <li>d'une vidéo d'échographie haute définition → 10 Mbit/s (mégabits par seconde).</li></ul>` },
      { titre: "Document 3 — Caractéristiques des batteries", html: `
        <table>
          <tr><th>Critère</th><th>Plomb</th><th>Ni-Cd</th><th>Ni-Mh</th><th>Li-ion</th></tr>
          <tr><td>Rapport énergie stockée / masse</td><td>40 Wh/kg</td><td>60 Wh/kg</td><td>85 Wh/kg</td><td>170 Wh/kg</td></tr>
          <tr><td>Prix pour 1 Wh</td><td>0,15 €</td><td>0,60 €</td><td>0,65 €</td><td>0,70 €</td></tr>
          <tr><td>Source de pollution</td><td>élevée</td><td>élevée</td><td>faible</td><td>faible</td></tr>
          <tr><td>Durée de vie (ans)</td><td>4 à 5</td><td>2 à 3</td><td>2 à 4</td><td>2 à 3</td></tr>
        </table>` },
      { titre: "Document 4 — Gestion de la charge de la batterie", html: `
        <p>Un module de gestion gère la charge de la batterie et communique les informations suivantes à la carte de traitement :</p>
        <ul><li><b>charge en cours</b> — état vrai ou faux ;</li><li><b>batterie déchargée</b> — état vrai ou faux ;</li><li><b>batterie chargée</b> — état vrai ou faux.</li></ul>
        <p>L'information de l'utilisateur est réalisée à l'aide d'une LED tricolore. En permanence :</p>
        <ul style="margin:0"><li>lorsque la batterie est en charge, la LED clignote en orange (1 s allumée, 1 s éteinte) ;</li>
        <li>lorsque la batterie est en charge et qu'elle a atteint son niveau chargé, la LED s'allume en vert ;</li>
        <li>si la batterie est déchargée, la LED s'éclaire en rouge.</li></ul>` },
    ],
    questions: [
      { type:"saisie", pts:6, docs:[0], enonce:"Question 1 — À l'aide du document 1, indique pour chaque flèche numérotée la nature de l'interaction et le type de flux. Exemple : la flèche ⑥ est un signal lumineux, flux d'information.",
        champs:[
          { repere:"①", label:"Flèche ① — nature de l'interaction", options:["signal sonore","signal lumineux","courant électrique","ondes radio (sans fil)","consigne utilisateur"], reponse:"courant électrique" },
          { repere:"①", label:"Flèche ① — type de flux", options:["flux d'énergie","flux d'information"], reponse:"flux d'énergie" },
          { repere:"②", label:"Flèche ② — nature de l'interaction", options:["signal sonore","signal lumineux","courant électrique","ondes radio (sans fil)","consigne utilisateur"], reponse:"consigne utilisateur" },
          { repere:"②", label:"Flèche ② — type de flux", options:["flux d'énergie","flux d'information"], reponse:"flux d'information" },
          { repere:"③", label:"Flèche ③ — nature de l'interaction", options:["signal sonore","signal lumineux","courant électrique","ondes radio (sans fil)","consigne utilisateur"], reponse:"signal lumineux" },
          { repere:"③", label:"Flèche ③ — type de flux", options:["flux d'énergie","flux d'information"], reponse:"flux d'information" },
          { repere:"④", label:"Flèche ④ — nature de l'interaction", options:["signal sonore","signal lumineux","courant électrique","ondes radio (sans fil)","consigne utilisateur"], reponse:"signal sonore" },
          { repere:"④", label:"Flèche ④ — type de flux", options:["flux d'énergie","flux d'information"], reponse:"flux d'information" },
          { repere:"⑤", label:"Flèche ⑤ — nature de l'interaction", options:["signal sonore","signal lumineux","courant électrique","ondes radio (sans fil)","consigne utilisateur"], reponse:"ondes radio (sans fil)" },
          { repere:"⑤", label:"Flèche ⑤ — type de flux", options:["flux d'énergie","flux d'information"], reponse:"flux d'information" },
        ],
        explication:"① le chargeur apporte du courant électrique (énergie) ; ② le médecin appuie sur le bouton (consigne, information) ; ③ le voyant informe le médecin (signal lumineux) ; ④ les ultrasons émis et leur écho servent à construire l'image (signal sonore, information) ; ⑤ la tablette et le module communiquent sans fil (ondes radio, information)." },

      { type:"qcm", pts:2, docs:[1], enonce:"Question 2 — Pour transmettre une vidéo en HD, il faut adapter le module de communication. À l'aide du document 2, choisis la solution technique que le constructeur doit intégrer.",
        choix:["NFC","Bluetooth V2 à V4","Wi-Fi 802.11 g / 802.11n"],
        bonne:2, explication:"Seul le Wi-Fi atteint le débit de 10 Mbit/s nécessaire pour une vidéo HD." },
      { type:"ouvert", pts:3, docs:[1], enonce:"Question 2 (suite) — Argumente ton choix en précisant le ou les critères de choix.",
        correction:"Critère principal : le <b>débit</b>. Une vidéo HD demande <b>10 Mbit/s</b>. Le Wi-Fi offre de 10 à plus de 100 Mbit/s ; le Bluetooth (environ 1 Mbit/s) et le NFC (environ 100 kbit/s) sont insuffisants. La <b>portée</b> du Wi-Fi (jusqu'à environ 100 m) convient aussi, alors que le NFC ne fonctionne qu'à quelques centimètres." },

      { type:"multi", pts:3, docs:[2], enonce:"Question 3 — Pour répondre au cahier des charges, le constructeur remplace la batterie Ni-Cd par une batterie Li-ion. À l'aide du document 3, coche les exigences qui ont été déterminantes dans ce choix.",
        choix:["Rapport énergie stockée / masse","Prix pour 1 Wh","Source de pollution","Durée de vie"],
        bonnes:[0, 2],
        explication:"La Li-ion stocke beaucoup plus d'énergie pour la même masse et pollue moins. Elle est plus chère et ne dure pas plus longtemps : ces critères ne l'ont pas avantagée." },
      { type:"ouvert", pts:3, docs:[2], enonce:"Question 3 (suite) — Argumente ta réponse en comparant les batteries Ni-Cd et Li-ion.",
        correction:"La Li-ion stocke <b>170 Wh/kg</b> contre <b>60 Wh/kg</b> pour la Ni-Cd : presque 3 fois plus d'énergie pour la même masse, donc une <b>meilleure autonomie</b> sans alourdir l'appareil (exigence du cahier des charges). Elle est aussi <b>moins polluante</b> (faible au lieu d'élevée). En revanche, elle est un peu plus chère (0,70 € contre 0,60 € par Wh) et sa durée de vie est la même (2 à 3 ans) : ce ne sont donc pas ces critères qui ont décidé du choix." },

      { type:"saisie", pts:8, docs:[3], enonce:"Question 4 — À l'aide du document 4, complète les cases A à G du programme de gestion du voyant d'alimentation.",
        html:`<figure class="fig" style="max-width:560px"><div class="markers">
          <img src="assets/img/dnb/echo-q4-programme.png" alt="Programme par blocs à compléter, cases A à G : A devant « indéfiniment », B condition « = Vrai », C après « Batterie chargée = », D couleur de la LED, E action sur la LED, F bloc vide entre les deux parties, G après « Batterie déchargée = ».">
          <span class="mk" style="left:11.3%; top:5.3%">A</span><span class="mk" style="left:33.3%; top:12.1%">B</span><span class="mk" style="left:62.9%; top:19.4%">C</span>
          <span class="mk" style="left:90.3%; top:35.6%">D</span><span class="mk" style="left:22.5%; top:46.8%">E</span><span class="mk" style="left:16.3%; top:61%">F</span><span class="mk" style="left:67.6%; top:67.3%">G</span>
        </div></figure>`,
        champs:[
          { repere:"A", label:"Case A", options:["répéter","si","attendre","sinon"], reponse:"répéter" },
          { repere:"B", label:"Case B", options:["Batterie chargée","Batterie déchargée","Charge en cours"], reponse:"Charge en cours" },
          { repere:"C", label:"Case C", options:["Vrai","Faux"], reponse:"Vrai" },
          { repere:"D", label:"Case D", options:["orange","rouge","vert"], reponse:"orange" },
          { repere:"E", label:"Case E", options:["Allumer","Éteindre","Attendre"], reponse:"Éteindre" },
          { repere:"F", label:"Case F", options:["alors","répéter","si","sinon"], reponse:"sinon" },
          { repere:"G", label:"Case G", options:["Vrai","Faux"], reponse:"Vrai" },
        ],
        explication:"Répéter indéfiniment : si charge en cours = Vrai, alors si batterie chargée = Vrai → LED verte, sinon la LED clignote en orange (allumer orange, attendre 1 s, éteindre, attendre 1 s). Sinon (pas en charge) : si batterie déchargée = Vrai → LED rouge, sinon LED verte." },
    ],
  },

  {
    id: "velo-electrique",
    titre: "Le vélo à assistance électrique",
    theme: "energie",
    duree: "25 min",
    contexte: "Pour se rendre au collège, Léa souhaite remplacer le bus par un vélo à assistance électrique (VAE). Le moteur ne fonctionne que lorsque Léa pédale et s'arrête au-delà de 25 km/h.",
    documents: [
      { titre: "Document 1 — Caractéristiques du VAE", html: `
        <table>
          <tr><th>Élément</th><th>Caractéristique</th></tr>
          <tr><td>Batterie lithium-ion</td><td>36 V — capacité 400 Wh</td></tr>
          <tr><td>Moteur dans le moyeu arrière</td><td>Puissance 250 W</td></tr>
          <tr><td>Capteur de pédalage</td><td>Détecte la rotation du pédalier</td></tr>
          <tr><td>Capteur de vitesse</td><td>Aimant sur la roue + capteur sur le cadre</td></tr>
          <tr><td>Contrôleur</td><td>Microcontrôleur qui gère l'assistance</td></tr>
          <tr><td>Écran au guidon</td><td>Affiche vitesse et niveau de batterie</td></tr>
        </table>` },
      { titre: "Document 2 — Algorithme de l'assistance", html: `<div class="algo">Répéter indéfiniment
  Si (pédalage détecté) ET (vitesse &lt; 25 km/h) alors
      Alimenter le moteur
  Sinon
      Couper le moteur
  Afficher vitesse sur l'écran</div>` },
    ],
    questions: [
      { type:"qcm", pts:2, enonce:"Quel est le besoin auquel répond le VAE de Léa ?",
        choix:["Faire du sport intensif","Se déplacer en fournissant moins d'effort","Transporter des marchandises lourdes","Remplacer une voiture sur autoroute"],
        bonne:1, explication:"Le VAE aide la personne à se déplacer : le moteur complète l'effort de pédalage." },
      { type:"associer", pts:3, enonce:"Associe chaque élément du VAE à sa fonction dans la chaîne d'information ou d'énergie.",
        paires:[
          { gauche:"Batterie", droite:"Alimenter / stocker" },
          { gauche:"Capteur de pédalage", droite:"Acquérir" },
          { gauche:"Contrôleur", droite:"Traiter" },
          { gauche:"Écran au guidon", droite:"Communiquer" },
          { gauche:"Moteur", droite:"Convertir" },
        ] },
      { type:"qcm", pts:2, enonce:"Le moteur convertit l'énergie…",
        choix:["mécanique en énergie électrique","chimique en énergie électrique","électrique en énergie mécanique","thermique en énergie mécanique"],
        bonne:2, explication:"Le moteur reçoit de l'énergie électrique (de la batterie) et produit un mouvement de rotation : énergie mécanique." },
      { type:"vf", pts:3, enonce:"D'après l'algorithme (document 2), indique si chaque situation est vraie ou fausse.",
        affirmations:[
          { texte:"Léa pédale à 18 km/h : le moteur est alimenté.", vrai:true },
          { texte:"Léa ne pédale pas et descend une côte à 20 km/h : le moteur est alimenté.", vrai:false },
          { texte:"Léa pédale à 27 km/h : le moteur est coupé.", vrai:true },
        ],
        explication:"Le moteur n'est alimenté que si les DEUX conditions sont vraies : pédalage détecté ET vitesse inférieure à 25 km/h." },
      { type:"ouvert", pts:3, enonce:"Le trajet aller-retour de Léa demande 40 Wh par jour. Combien de jours peut-elle rouler avec une batterie pleine (400 Wh) ? Détaille ton calcul.",
        correction:"Nombre de jours = 400 Wh ÷ 40 Wh = <b>10 jours</b>. (Dans la réalité, un peu moins : la batterie perd en capacité avec le froid et le vieillissement.)" },
      { type:"ouvert", pts:3, enonce:"Donne un avantage et un inconvénient environnemental du VAE par rapport au bus.",
        correction:"<b>Avantage</b> : aucune émission de gaz à effet de serre pendant l'utilisation, faible consommation d'énergie.<br><b>Inconvénient</b> : la fabrication et le recyclage de la batterie lithium-ion ont un impact (extraction de métaux, fin de vie). Un bus plein transporte aussi beaucoup de personnes à la fois." },
    ],
  },

  {
    id: "serre-connectee",
    titre: "La serre connectée du collège",
    theme: "info",
    duree: "25 min",
    contexte: "Le club jardin du collège installe une petite serre. Pour arroser les plantes pendant les vacances, la classe de 3e conçoit un système d'arrosage automatique piloté par une carte programmable et consultable à distance.",
    documents: [
      { titre: "Document 1 — Fonctionnement", html: `
        <p>Un capteur d'humidité est planté dans la terre. Il renvoie une valeur entre 0 (terre sèche) et 100 (terre détrempée). Une pompe alimentée en 5 V puise l'eau d'un réservoir. Une carte Wi-Fi envoie chaque heure les mesures vers un serveur ; les élèves les consultent sur un site web.</p>` },
      { titre: "Document 2 — Programme", html: `<div class="algo">Quand la carte démarre
  Répéter indéfiniment
      humidite ← lire capteur d'humidité
      Si humidite &lt; 30 alors
          Allumer la pompe
          Attendre 5 secondes
          Éteindre la pompe
      Envoyer humidite au serveur
      Attendre 1 heure</div>` },
    ],
    questions: [
      { type:"qcm", pts:2, enonce:"Dans ce programme, « humidite » est…",
        choix:["une boucle","une variable","un capteur","un événement"],
        bonne:1, explication:"« humidite » est une variable : elle stocke la valeur lue par le capteur, qui change à chaque mesure." },
      { type:"qcm", pts:2, enonce:"Le capteur mesure 45. Que se passe-t-il ?",
        choix:["La pompe s'allume 5 secondes","La pompe reste éteinte et la valeur est envoyée au serveur","Le programme s'arrête","La pompe s'allume en continu"],
        bonne:1, explication:"45 n'est pas inférieur à 30 : la condition est fausse, la pompe ne s'allume pas. La mesure est quand même envoyée." },
      { type:"associer", pts:3, enonce:"Associe chaque élément à son rôle.",
        paires:[
          { gauche:"Capteur d'humidité", droite:"Capteur" },
          { gauche:"Pompe", droite:"Actionneur" },
          { gauche:"Carte programmable", droite:"Unité de traitement" },
          { gauche:"Serveur", droite:"Stocke les mesures sur le réseau" },
        ] },
      { type:"vf", pts:3, enonce:"Vrai ou faux ?",
        affirmations:[
          { texte:"La boucle « Répéter indéfiniment » permet au système de fonctionner pendant toutes les vacances.", vrai:true },
          { texte:"Le serveur reçoit une mesure toutes les 5 secondes.", vrai:false },
          { texte:"Pour consulter le site web, l'ordinateur des élèves doit être connecté à Internet.", vrai:true },
        ],
        explication:"L'envoi a lieu une fois par tour de boucle, et chaque tour se termine par « Attendre 1 heure »." },
      { type:"ouvert", pts:3, enonce:"Le réservoir peut se vider pendant les vacances. Propose une amélioration du système (capteur ajouté et modification du programme).",
        correction:"Ajouter un <b>capteur de niveau d'eau</b> dans le réservoir. Dans le programme : <i>si niveau trop bas alors</i> ne pas allumer la pompe (pour ne pas l'abîmer) et <i>envoyer une alerte</i> au serveur ou par message aux élèves." },
      { type:"ouvert", pts:2, enonce:"Les données sont publiées sur un site web. Pourquoi faut-il protéger l'accès à la commande de la pompe par un mot de passe robuste ?",
        correction:"Sans protection, n'importe qui pourrait <b>prendre le contrôle</b> de la pompe (vider le réservoir, inonder la serre). Un mot de passe robuste, long et unique, rend l'accès non autorisé beaucoup plus difficile." },
    ],
  },
];
