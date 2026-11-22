/* ==========================================================
   Verrou des corrections — chiffrement dans le navigateur
   PBKDF2-SHA256 (150 000 tours) → clé AES-GCM 256 bits.
   Un « coffre » = { s: sel, i: vecteur, d: données chiffrées } en base64.
   Sans le bon code, les liens des corrections restent illisibles.
   ========================================================== */
(function (root) {
  const subtle = root.crypto.subtle;
  const enc = new TextEncoder(), dec = new TextDecoder();
  const b64 = buf => { let s = ""; new Uint8Array(buf).forEach(b => s += String.fromCharCode(b)); return btoa(s); };
  const unb64 = str => Uint8Array.from(atob(str), c => c.charCodeAt(0));
  const ITER = 150000;

  async function cle(motDePasse, sel){
    const base = await subtle.importKey("raw", enc.encode(motDePasse), "PBKDF2", false, ["deriveKey"]);
    return subtle.deriveKey({ name:"PBKDF2", salt:sel, iterations:ITER, hash:"SHA-256" }, base, { name:"AES-GCM", length:256 }, false, ["encrypt", "decrypt"]);
  }

  const Verrou = {
    /* les élèves peuvent taper le code en minuscules, avec ou sans tiret ni espace */
    normaliser: code => String(code || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().replace(/[^A-Z0-9]/g, ""),

    async chiffrer(motDePasse, objet){
      const sel = root.crypto.getRandomValues(new Uint8Array(16));
      const iv = root.crypto.getRandomValues(new Uint8Array(12));
      const k = await cle(motDePasse, sel);
      const d = await subtle.encrypt({ name:"AES-GCM", iv }, k, enc.encode(JSON.stringify(objet)));
      return { s: b64(sel), i: b64(iv), d: b64(d) };
    },

    /* renvoie l'objet déchiffré, ou lève une erreur si le mot de passe est faux */
    async dechiffrer(motDePasse, coffre){
      const k = await cle(motDePasse, unb64(coffre.s));
      const d = await subtle.decrypt({ name:"AES-GCM", iv: unb64(coffre.i) }, k, unb64(coffre.d));
      return JSON.parse(dec.decode(d));
    },

    /* identifiant stable d'une activité : chapitre + titre simplifié */
    cleActivite: (chapitreId, titre) => chapitreId + "/" + String(titre).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  };

  root.Verrou = Verrou;
  if (typeof module !== "undefined") module.exports = Verrou;
})(typeof window !== "undefined" ? window : globalThis);
