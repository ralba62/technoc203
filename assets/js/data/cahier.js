/* ==========================================================
   ✎ MON CAHIER — contenu du cahier de l'élève (version en ligne, SANS les réponses)
   Repris de Cahiers/Cahier.docx.

   Un chapitre : { id (même id que dans chapitres/), couleur, illustration, situation:[blocs],
                   activites:[{ site (titre de l'activité sur le site → sert à la visibilité),
                                titre, blocs:[…], bilan:{ titre, notions:[…] } }],
                   fiches:[{ titre, img, pdf }] }

   Blocs possibles :
     { t:"p", html }                       paragraphe
     { t:"probleme", html }                phrase en italique « Pour résoudre ce problème… »
     { t:"img", src, alt, legende }        image
     { t:"consigne", icone, html }         consigne (icone : "video" | "appli" | "lire")
     { t:"partie", n, titre }              sous-titre numéroté
     { t:"liste", items:[…] }              liste à puces
     { t:"q", id, num, html, rep }         question. rep =
          { type:"lignes", n }                          lignes d'écriture
          { type:"cases", options:[…] }                 cases à cocher
          { type:"associer", gauche:[…], droite:[…] }   relier (on écrit la lettre)
          { type:"tableau", entetes:[…], lignes:[[texte | null]] }  null = case à remplir
          { type:"ligne", avant }                       une réponse courte
   Chaque question a un id unique : il sert à enregistrer la réponse de l'élève.
   ⚠ Ne changez pas l'id d'une question déjà utilisée (les élèves perdraient leur réponse).
   ========================================================== */
window.CAHIER = {
  annee: "2026-2027",
  professeur: "M. ALBA",
  classes: ["3C", "3D", "3E", "3F", "3G"],

  chapitres: [
    /* ======================= CHAPITRE 1 ======================= */
    {
      id: "chap1",
      couleur: "#0A84C6",
      illustration: "reseau",
      situation: [
        { t:"p", html:"Un collège vient de recevoir une nouvelle salle informatique et tous les ordinateurs sont bien reliés au réseau." },
        { t:"p", html:"Pourtant, certains élèves arrivent à ouvrir Pronote, à accéder à leur espace de travail ou au serveur vidéo, alors que d'autres obtiennent un message d'erreur. Parfois, Internet fonctionne mais les pages mettent beaucoup de temps à s'afficher." },
        { t:"img", src:"assets/img/cahier/ch1-situation-college.jpg", alt:"Le réseau du collège relié à Internet : salle informatique, CDI, administration, salle de classe" },
        { t:"p", html:"Le chef d'établissement demande au professeur de Technologie et à ses élèves de comprendre pourquoi les informations n'arrivent pas toujours à destination." },
        { t:"probleme", html:"Pour résoudre ce problème, nous allons d'abord identifier les éléments qui permettent de comprendre comment une information circule dans un réseau, puis comprendre comment se déterminent le chemin et la vitesse de son trajet." },
        { t:"img", src:"assets/img/cahier/ch1-situation-lea.jpg", alt:"Le PC de Léa envoie des paquets d'informations au serveur Pronote à travers Internet" },
      ],
      activites: [
        {
          site: "Adresse IP, débit et table de routage",
          titre: "Identifier les éléments de la circulation de l'information",
          blocs: [
            { t:"consigne", icone:"video", html:"En t'aidant des vidéos disponibles dans l'application <b>ELEA</b> de l'ENT, réponds aux questions suivantes." },
            { t:"partie", n:"1", titre:"Identifier les éléments caractéristiques pour la circulation de l'information" },
            { t:"q", id:"c1a1-1a", num:"1.a", html:"Comment appelle-t-on le numéro qui identifie de façon unique l'ordinateur de Léa sur le réseau ?", rep:{ type:"lignes", n:1 } },
            { t:"q", id:"c1a1-1b", num:"1.b", html:"Quelle structure utilise un routeur pour savoir vers quel prochain routeur envoyer une information ?", rep:{ type:"lignes", n:1 } },
            { t:"q", id:"c1a1-1c", num:"1.c", html:"Parmi ces unités, lesquelles servent à exprimer un débit ?", rep:{ type:"cases", options:["bps", "Mo", "Mbps", "Gb/s"] } },
            { t:"q", id:"c1a1-1d", num:"1.d", html:"Associe chaque terme à sa définition (écris la lettre correspondante dans la case).",
              rep:{ type:"associer",
                    gauche:["Adresse IP", "Débit", "Table de routage"],
                    droite:["Quantité de données transmises par seconde",
                            "Numéro d'identification unique d'un appareil sur un réseau",
                            "Structure de données qui indique le chemin à suivre pour joindre une destination"] } },
            { t:"partie", n:"2", titre:"La compréhension d'un routage" },
            { t:"q", id:"c1a1-2a", num:"2.a", html:"En t'appuyant sur la vidéo ressource n°1, explique avec tes mots à quoi sert une table de routage pour un routeur.", rep:{ type:"lignes", n:3 } },
            { t:"q", id:"c1a1-2b", num:"2.b", html:"En t'appuyant sur la vidéo ressource n°2, explique pourquoi une vidéo peut mettre du temps à se charger si le débit d'une connexion est faible.", rep:{ type:"lignes", n:3 } },
            { t:"q", id:"c1a1-2c", num:"2.c", html:"Explique la différence entre l'adresse IP privée du PC de Léa (192.168.1.25) et l'adresse IP publique du serveur vidéo (203.0.113.10).", rep:{ type:"lignes", n:4 } },
          ],
          bilan: {
            titre: "Bilan de l'activité 1",
            notions: [
              { icone:"ip", titre:"Adresse IP",
                html:"Une <b>adresse IP</b> est un numéro qui permet d'<b>identifier un appareil sur un réseau</b> et de lui permettre de communiquer avec d'autres appareils.<ul><li><b>Adresse IP privée</b> : elle identifie un appareil <b>à l'intérieur d'un réseau local</b>, par exemple le PC de Léa dans le réseau du collège. Exemple : <code>192.168.1.25</code></li><li><b>Adresse IP publique</b> : elle identifie un appareil ou un réseau <b>sur Internet</b>. Elle permet notamment de retrouver le serveur auquel on veut se connecter. Exemple : <code>203.0.113.10</code></li></ul>",
                retenir:"l'adresse IP, c'est un peu comme une <b>adresse postale pour un appareil informatique</b>." },
              { icone:"debit", titre:"Débit",
                html:"Le <b>débit</b> correspond à la <b>quantité de données qui peut être transmise en une seconde</b> sur un réseau. Il s'exprime généralement en <b>bits par seconde (bit/s)</b>, par exemple :<ul><li><b>Mbit/s</b> : millions de bits par seconde</li><li><b>Gbit/s</b> : milliards de bits par seconde</li></ul>",
                retenir:"plus le débit est élevé, <b>plus les données peuvent être transmises rapidement</b>." },
              { icone:"routage", titre:"Table de routage",
                html:"Une <b>table de routage</b> est une structure qui contient les informations utilisées par un routeur pour <b>choisir le prochain chemin à suivre pour envoyer les données vers leur destination</b>.",
                retenir:"la table de routage fonctionne un peu comme <b>un GPS pour les données</b> : elle aide le routeur à choisir la prochaine étape." },
            ],
          },
        },
        {
          site: "Configurer un réseau avec Filius",
          titre: "Configurer un réseau avec Filius",
          blocs: [
            { t:"probleme", html:"Maintenant que vous connaissez le rôle de l'adresse IP, de la table de routage et du débit, nous allons configurer un vrai réseau avec le logiciel <b>Filius</b> pour observer concrètement comment une information y circule." },
            { t:"img", src:"assets/img/cahier/ch1-reseau-filius.png", alt:"Le réseau à construire dans Filius : switchs, ordinateurs, serveurs, routeur et modem", legende:"Le réseau du collège à construire dans Filius" },
          ],
          bilan: {
            titre: "Bilan de l'activité 2",
            notions: [
              { icone:"routeur", titre:"Routeur",
                html:"Un <b>routeur</b> est un appareil qui <b>choisit le chemin que vont suivre les données</b> pour les envoyer vers leur destination sur un réseau. Il reçoit les données et les transmet au <b>routeur suivant</b>, en fonction de leur destination." },
            ],
          },
        },
        {
          site: "Lire et comprendre le choix d'un chemin",
          titre: "Le routage : lire et comprendre le choix d'un chemin",
          blocs: [
            { t:"probleme", html:"Maintenant que vous avez configuré et testé votre réseau dans Filius, nous allons analyser plus finement comment le routage choisit un chemin et comment lire une table de routage." },
            { t:"consigne", icone:"appli", html:"Utilise l'application disponible sur <b>ELEA</b>." },
            { t:"partie", n:"1", titre:"À quel réseau appartient chaque adresse ?" },
            { t:"p", html:"Dans cette simulation, chaque réseau a sa plage d'adresses (les trois premiers nombres sont communs à un même réseau) :" },
            { t:"liste", items:["Réseau du collège → <code>192.168.1.___</code>", "Réseau du serveur vidéo → <code>203.0.113.___</code>", "Réseau du serveur Pronote → <code>198.51.100.___</code>"] },
            { t:"q", id:"c1a3-1", num:"1", html:"Pour chaque adresse ci-dessous, indique à quel réseau elle appartient, ou barre-la si elle est impossible. Justifie en t'appuyant sur les adresses visibles dans l'application (PC de Léa : <code>192.168.1.25</code> ; serveur vidéo : <code>203.0.113.10</code> ; serveur Pronote : <code>198.51.100.5</code>).",
              rep:{ type:"tableau", entetes:["Adresse", "Réseau ?"],
                    lignes:[["192.168.1.42", null], ["203.0.113.200", null], ["198.51.100.9", null], ["192.168.2.25", null], ["203.0.113.300", null]] } },
            { t:"partie", n:"2", titre:"Envoyer un fichier dans le même réseau" },
            { t:"q", id:"c1a3-2", num:"2", html:"Un nouvel ordinateur reçoit l'adresse <code>192.168.1.10</code>. Léa (<code>192.168.1.25</code>) veut lui envoyer un fichier. En observant l'onglet, explique si l'information devra ou non passer par la Box et le FAI, et pourquoi.", rep:{ type:"lignes", n:3 } },
            { t:"partie", n:"3", titre:"Analyser le choix d'un chemin selon le trafic (onglet « Trafic »)" },
            { t:"p", html:"Dans l'onglet « Trafic », il existe trois chemins entre la source et le serveur :" },
            { t:"liste", items:["<b>Chemin A</b> : Source → R1 → Serveur (2 sauts)", "<b>Chemin B</b> : Source → R2 → R3 → Serveur (3 sauts)", "<b>Chemin C</b> : Source → R4 → R5 → R6 → Serveur (4 sauts)"] },
            { t:"q", id:"c1a3-3a", num:"3.a", html:"Fais varier le « Volume de trafic » (Faible, Moyen, Élevé) et note à chaque fois le chemin retenu.",
              rep:{ type:"tableau", entetes:["Volume de trafic", "Chemin retenu", "Débit du chemin retenu"],
                    lignes:[["Faible", null, null], ["Moyen", null, null], ["Élevé", null, null]] } },
            { t:"q", id:"c1a3-3b", num:"3.b", html:"Le chemin le plus court (A, 2 sauts) est-il toujours celui qui est choisi ? Justifie avec ce que tu observes.", rep:{ type:"lignes", n:2 } },
            { t:"q", id:"c1a3-3c", num:"3.c", html:"À trafic élevé, le chemin B affiche un meilleur nombre de sauts que C mais n'est pas retenu. Pourquoi le routage choisit-il quand même C ? (appuie-toi sur les débits affichés)", rep:{ type:"lignes", n:3 } },
            { t:"q", id:"c1a3-3d", num:"3.d", html:"Active l'interrupteur « Panne du routeur R1 » à trafic faible. Que se passe-t-il pour le chemin A, et quel chemin prend alors le relais ? Que démontre cette expérience sur l'utilité d'avoir plusieurs routes ?", rep:{ type:"lignes", n:4 } },
            { t:"partie", n:"4", titre:"Mise en route : les tables mystères" },
            { t:"p", html:"Toujours dans l'onglet « Trafic », observe le schéma et relève les voisins directs de chaque routeur en suivant les trois chemins :" },
            { t:"liste", items:["<b>Chemin A</b> : Source → R1 → Serveur", "<b>Chemin B</b> : Source → R2 → R3 → Serveur", "<b>Chemin C</b> : Source → R4 → R5 → R6 → Serveur"] },
            { t:"p", html:"<b>Tables mystères</b> : retrouve de quel chemin il s'agit et justifie." },
            { t:"q", id:"c1a3-4a", num:"Table α", html:"", rep:{ type:"table-mystere", lignes:[["Serveur", "R6"], ["Source", "R4"]] } },
            { t:"q", id:"c1a3-4b", num:"Table β", html:"", rep:{ type:"table-mystere", lignes:[["Serveur", "R3"], ["Source", "livraison directe"]] } },
            { t:"q", id:"c1a3-4c", num:"Table γ", html:"", rep:{ type:"table-mystere", lignes:[["Serveur", "livraison directe"], ["Source", "R5"]] } },
          ],
          bilan: {
            titre: "Bilan : réseaux et circulation de l'information",
            notions: [
              { icone:"ip", titre:"Adresse IP",
                html:"Chaque appareil connecté à un réseau possède une <b>adresse IP</b> qui permet de l'identifier et de savoir où envoyer les données." },
              { icone:"routage", titre:"Routage",
                html:"Pour aller du collège jusqu'à un serveur sur Internet, les données passent <b>de routeur en routeur</b>. Chaque routeur consulte sa <b>table de routage</b> pour déterminer le <b>prochain routeur (prochain saut)</b> vers lequel transmettre les données." },
              { icone:"debit", titre:"Débit",
                html:"Le débit correspond à la quantité de données qui peut être transmise <b>en une seconde</b>. Il s'exprime en <b>bits par seconde (bps)</b>, souvent en <b>Mbps</b> ou <b>Gbps</b>. Plus le débit est élevé, plus les données peuvent être transmises rapidement." },
              { icone:"signal", titre:"De quoi dépend le débit ?",
                html:"Le débit dépend notamment :<ul><li>de la <b>technologie de connexion</b> utilisée (fibre, Wi-Fi, 4G/5G…) ;</li><li>de la <b>congestion du réseau</b> : lorsque beaucoup d'utilisateurs utilisent le réseau en même temps, le débit peut diminuer.</li></ul>" },
            ],
          },
        },
      ],
      fiches: [
        { titre:"Le rôle et la structure d'une adresse IP, des tables de routage", img:"assets/img/cahier/fiche-1.jpg", pdf:"docs/SFC1p-le-role-et-la-structure-dune-adresse-IP-des-tables-de-routage.pdf" },
        { titre:"Le débit et les ordres de grandeur associés (1/2)", img:"assets/img/cahier/fiche-2.jpg", pdf:"docs/SFC1q-le-debit-et-les-ordres-de-grandeur-associes.pdf" },
        { titre:"Le débit et les ordres de grandeur associés (2/2)", img:"assets/img/cahier/fiche-3.jpg", pdf:"docs/SFC1q-le-debit-et-les-ordres-de-grandeur-associes.pdf" },
      ],
    },

    /* ======================= CHAPITRE 2 ======================= */
    {
      id: "chap2",
      couleur: "#6D4FD8",
      illustration: "cyber",
      situation: [
        { t:"p", html:"Un matin, en arrivant au collège, les élèves découvrent que le site web de l'établissement ne fonctionne plus et que plusieurs comptes ENT (Espace Numérique de Travail) d'élèves et de professeurs ont été piratés. Le collège a été la cible d'une <b>cyberattaque</b>." },
        { t:"p", html:"Le professeur de technologie sollicite les élèves de 3e pour comprendre ce qui s'est passé et proposer des solutions afin que cela ne se reproduise plus." },
      ],
      activites: [],
    },
  ],
};
