/* ==========================================================
   ✎ LOGICIELS UTILES — tous gratuits
   cat        : bureautique | programmation | cao | image | reseau | utilitaire
   plateformes: "win" | "mac" | "linux" | "web"
   libre      : true si logiciel libre (open source)
   logo       : adresse de l'icône officielle (facultatif ; sinon une icône du site)
   Vérifiez de temps en temps que les liens fonctionnent toujours.
   ========================================================== */
window.LOGICIELS = [
  // Bureautique
  { nom:"LibreOffice", logo:"https://fr.libreoffice.org/favicon.ico", cat:"bureautique", plateformes:["win","mac","linux"], libre:true, url:"https://fr.libreoffice.org",
    desc:"Suite bureautique complète : traitement de texte (Writer), tableur (Calc), présentation (Impress), dessin (Draw)." },
  { nom:"ONLYOFFICE Desktop", logo:"https://static-site.onlyoffice.com/public/images/favicons/favicon325.png", cat:"bureautique", plateformes:["win","mac","linux"], libre:true, url:"https://www.onlyoffice.com/fr/desktop.aspx",
    desc:"Suite bureautique très compatible avec les fichiers Word, Excel et PowerPoint." },
  { nom:"Firefox", logo:"https://www.firefox.com/media/img/favicons/firefox/browser/apple-touch-icon.79c2abeb4e35.png", cat:"bureautique", plateformes:["win","mac","linux"], libre:true, url:"https://www.mozilla.org/fr/firefox/",
    desc:"Navigateur web respectueux de la vie privée." },
  { nom:"PDF24 Creator", logo:"https://www.pdf24.org/static/img/pdf24.png?v=67988dc3", cat:"bureautique", plateformes:["win","web"], libre:false, url:"https://www.pdf24.org/fr/",
    desc:"Créer, fusionner, compresser ou découper des PDF. Sur Mac, l'application Aperçu fait déjà l'essentiel." },

  // Programmation
  { nom:"Scratch", logo:"https://scratch.mit.edu/favicon.ico", cat:"programmation", plateformes:["win","mac","web"], libre:true, url:"https://scratch.mit.edu",
    desc:"Programmation par blocs : jeux, animations, histoires interactives." },
  { nom:"mBlock", logo:"https://mblock.cc/cdn/shop/files/favicon_32x32.png?v=1716790211", cat:"programmation", plateformes:["win","mac","web"], libre:false, url:"https://mblock.cc",
    desc:"Programmation par blocs ou en Python des robots mBot, basée sur Scratch." },
  { nom:"Vittascience — mBot", logo:"https://fr.vittascience.com/favicon.ico", cat:"programmation", plateformes:["web"], libre:false, url:"https://fr.vittascience.com/mBot/",
    desc:"Programmer le mBot en blocs ou en Python dans le navigateur, sans installation ni compte obligatoire." },
  { nom:"mBlock en ligne", logo:"https://ide.mblock.cc/favicon.ico", cat:"programmation", plateformes:["web"], libre:false, url:"https://ide.mblock.cc/",
    desc:"La version web de mBlock 5 pour programmer le mBot sans rien installer." },
  { nom:"MakeCode micro:bit", logo:"https://cdn.makecode.com/blob/4de54063603c8d16531078818a83f7c29a3588fa/static/icons/apple-touch-icon.png", cat:"programmation", plateformes:["web"], libre:true, url:"https://makecode.microbit.org",
    desc:"Éditeur officiel de la carte micro:bit, avec simulateur intégré." },
  { nom:"Arduino IDE", logo:"https://www.arduino.cc/wiki/icons/icon-512x512.png?v=23330209a9e4870226e34963941206b6", cat:"programmation", plateformes:["win","mac","linux"], libre:true, url:"https://www.arduino.cc/en/software",
    desc:"Environnement officiel pour programmer les cartes Arduino." },
  { nom:"Thonny", logo:"https://thonny.org/favicon.ico", cat:"programmation", plateformes:["win","mac","linux"], libre:true, url:"https://thonny.org",
    desc:"Éditeur Python simple, pensé pour débuter." },

  // CAO / 3D
  { nom:"Tinkercad", logo:"https://www.tinkercad.com/img/favicon.ico", cat:"cao", plateformes:["web"], libre:false, url:"https://www.tinkercad.com",
    desc:"Modélisation 3D et simulation de circuits électroniques en ligne, très accessible." },
  { nom:"FreeCAD", logo:"https://www.freecad.org/images/favicon.ico", cat:"cao", plateformes:["win","mac","linux"], libre:true, url:"https://www.freecad.org",
    desc:"Modeleur 3D paramétrique pour aller plus loin en conception." },
  { nom:"Sweet Home 3D", logo:"https://www.sweethome3d.com/favicon.ico", cat:"cao", plateformes:["win","mac","linux","web"], libre:true, url:"https://www.sweethome3d.com/fr/",
    desc:"Aménagement intérieur : dessiner un plan et le visiter en 3D." },
  { nom:"UltiMaker Cura", logo:"https://ultimaker.com/wp-content/uploads/2023/04/cropped-UltiMaker-favicon-512-192x192.png", cat:"cao", plateformes:["win","mac","linux"], libre:true, url:"https://ultimaker.com/software/ultimaker-cura/",
    desc:"Trancheur : prépare un modèle 3D pour l'impression 3D." },

  // Image, son, vidéo
  { nom:"Inkscape", logo:"https://inkscape.org/favicon.ico", cat:"image", plateformes:["win","mac","linux"], libre:true, url:"https://inkscape.org/fr/",
    desc:"Dessin vectoriel : logos, schémas, fichiers pour découpe laser." },
  { nom:"GIMP", logo:"https://www.gimp.org/images/wilber32.png", cat:"image", plateformes:["win","mac","linux"], libre:true, url:"https://www.gimp.org",
    desc:"Retouche photo et création d'images." },
  { nom:"draw.io", logo:"https://www.drawio.com/favicon.ico", cat:"image", plateformes:["win","mac","linux","web"], libre:true, url:"https://www.drawio.com",
    desc:"Schémas, organigrammes, cartes mentales, diagrammes." },
  { nom:"Audacity", logo:"https://www.audacityteam.org/favicon.svg", cat:"image", plateformes:["win","mac","linux"], libre:true, url:"https://www.audacityteam.org",
    desc:"Enregistrer et monter du son (podcast, présentation orale)." },
  { nom:"Shotcut", logo:"https://shotcut.org/assets/img/favicon.svg", cat:"image", plateformes:["win","mac","linux"], libre:true, url:"https://shotcut.org",
    desc:"Montage vidéo simple et complet." },
  { nom:"VLC", logo:"https://images.videolan.org/images/favicon-192.png", cat:"image", plateformes:["win","mac","linux"], libre:true, url:"https://www.videolan.org/vlc/",
    desc:"Lecteur multimédia qui lit presque tous les formats." },

  // Réseaux
  { nom:"Filius", logo:"https://lernsoftware-filius.de/.cm4all/sysdb/favicon/icon-180x180_dc632e2.png", cat:"reseau", plateformes:["win","mac","linux"], libre:true, url:"https://lernsoftware-filius.de/Herunterladen",
    desc:"Simulateur de réseau : relier des ordinateurs, un commutateur, un routeur et tester les échanges. Windows : installateur « with JRE » (Java inclus). Mac et Linux : Java nécessaire." },
  { nom:"Filius II (bêta en ligne)", logo:"https://filius-ii.net/icons/filius-180.png", cat:"reseau", plateformes:["web"], libre:true, url:"https://filius-ii.net",
    desc:"La nouvelle version de Filius, directement dans le navigateur. Encore en test." },

  // Utilitaires
  { nom:"7-Zip", logo:"https://www.7-zip.org/favicon.ico", cat:"utilitaire", plateformes:["win"], libre:true, url:"https://www.7-zip.org",
    desc:"Compresser et décompresser des archives (.zip, .7z…)." },
  { nom:"Keka", logo:"https://www.keka.io/img/Keka-Square-512x512.png", cat:"utilitaire", plateformes:["mac"], libre:true, url:"https://www.keka.io/fr/",
    desc:"Compresser et décompresser des archives sur Mac." },
  { nom:"Notepad++", logo:"https://notepad-plus-plus.org/apple-touch-icon.png", cat:"utilitaire", plateformes:["win"], libre:true, url:"https://notepad-plus-plus.org",
    desc:"Éditeur de texte et de code léger." },
  { nom:"Bitwarden", logo:"https://bitwarden.com/icons/icon-512x512.png", cat:"utilitaire", plateformes:["win","mac","linux","web"], libre:true, url:"https://bitwarden.com/fr-fr/",
    desc:"Gestionnaire de mots de passe gratuit, pour des mots de passe uniques et robustes." },
];

window.CATS_LOGICIELS = {
  bureautique:   { label:"Bureautique",           icone:"doc" },
  programmation: { label:"Programmation",         icone:"code" },
  cao:           { label:"CAO & 3D",              icone:"cube" },
  image:         { label:"Image, son & vidéo",    icone:"image" },
  reseau:        { label:"Réseaux",               icone:"network" },
  utilitaire:    { label:"Utilitaires",           icone:"wrench" },
};
window.PLATEFORMES = { win:"Windows", mac:"macOS", linux:"Linux", web:"En ligne" };
