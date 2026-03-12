let aktuelleFrage = 1;
let punkte = {
    GO: 0,
    KA: 0,
    CG: 0,
    OM: 0,
    AC: 0,
    V: 0,
    Y: 0,
    SW: 0,
};
function antwort(a) {

    if (aktuelleFrage === 1) {
        if (a === "A") punkte.GO += 3, punkte.SW += 2, punkte.AC += 1;
        if (a === "B") punkte.KA += 3, punkte.CG += 2, punkte.V += 1;
        if (a === "C") punkte.OM += 3, punkte.CG += 2, punkte.AC += 1;
        if (a === "D") punkte.AC += 3, punkte.OM += 2, punkte.V += 1;
        if (a === "E") punkte.V += 3, punkte.Y += 2, punkte.SW += 1;
        if (a === "F") punkte.SW += 3, punkte.Y += 2, punkte.V += 1;
    }

    if (aktuelleFrage === 2) {
        if (a === "A") punkte.KA += 3, punkte.GO += 2, punkte.Y += 1;
        if (a === "B") punkte.CG += 3, punkte.OM += 2, punkte.AC += 1;
        if (a === "C") punkte.OM += 3, punkte.AC += 2, punkte.CG += 1;
        if (a === "D") punkte.V += 3, punkte.Y += 2, punkte.CG += 1;
        if (a === "E") punkte.Y += 3, punkte.KA += 2, punkte.SW += 1;
        if (a === "F") punkte.SW += 3, punkte.GO += 2, punkte.Y += 1;
    }

    if (aktuelleFrage === 3) {
        if (a === "A") punkte.GO += 3, punkte.KA += 2, punkte.Y += 1;
        if (a === "B") punkte.KA += 3, punkte.GO += 2, punkte.Y += 1;
        if (a === "C") punkte.Y += 3, punkte.V += 2, punkte.SW += 1;
        if (a === "D") punkte.SW += 3, punkte.CG += 2, punkte.V += 1;
        if (a === "E") punkte.OM += 3, punkte.AC += 2, punkte.CG += 1;
    }

    if (aktuelleFrage === 4) {
        if (a === "A") punkte.GO += 3, punkte.KA += 2, punkte.SW += 1;
        if (a === "B") punkte.KA += 3, punkte.Y += 2, punkte.CG += 1;
        if (a === "C") punkte.CG += 3, punkte.OM += 2, punkte.SW += 1;
        if (a === "D") punkte.OM += 3, punkte.AC += 2, punkte.CG += 1;
        if (a === "E") punkte.Y += 3, punkte.V += 2, punkte.CG += 1;
        if (a === "F") punkte.SW += 3, punkte.Y += 2, punkte.GO += 1;
    }

    if (aktuelleFrage === 5) {
        if (a === "A") punkte.GO += 3, punkte.KA += 2, punkte.Y += 1;
        if (a === "B") punkte.KA += 3, punkte.GO += 2, punkte.V += 1;
        if (a === "C") punkte.KA += 3, punkte.V += 2, punkte.AC += 1;
        if (a === "D") punkte.Y += 3, punkte.OM += 2, punkte.V += 1;
        if (a === "E") punkte.SW += 3, punkte.Y += 2, punkte.OM += 1;
        if (a === "F") punkte.OM += 3, punkte.SW += 2, punkte.CG += 1;
        if (a === "G") punkte.SW += 3, punkte.Y += 2, punkte.GO += 1;
    }

    documentWechseln();
}
function documentWechseln() {
    document.getElementById("frage" + aktuelleFrage).classList.remove("sichtbar");
    aktuelleFrage++;
    if (document.getElementById("frage" + aktuelleFrage)) {
        document.getElementById("frage" + aktuelleFrage).classList.add("sichtbar");
    } else {
        ergebnisAnzeigen();
    }
}
function ergebnisAnzeigen() {
    let bestes = Object.keys(punkte).reduce((a, b) =>
        punkte[a] > punkte[b] ? a : b
    );


    const ergebnisTexte = {
        GO: "Goth.",
        KA: "Kawaii.",
        CG: "Clean Girl.",
        OM: "Old Money.",
        AC: "Dark/Light Academia.",
        V: "Vintage.",
        Y: "Y2K.",
        SW: "Streetwear."
    };

    const beschreibungTexte = {
        GO: "bnaeb<fwuqisoknkjbfhfijdoKak<n.",
        KA: "bgru<eiwOJIg<fbuifwiqopf<dngjboqdkoafk.",
        CG: "ish<uguhdwiabdh<uwiq9iwjdfgfwefghg.",
        OM: "owifejhijwkdkod<knfjbw09wuerewodjfnkdjv mml, s.",
        AC: "owfaeigsjbijew0odofeigjbiwoqspkdosknfdjvfopakldmksdmf.",
        V: "jehwjqowijhhjiqokswdfkdjjndsokdfdnsjjdospdksfdk.",
        Y: "g708bu6e >EISb feuhfueh<fihidawiJaefnklaeg.",
        SW: "rfwnabsdh friooekofkgjf kml,lpdüölpskkmvn,xghwa."
    };

    const bilder = {
        GO: "img/gothb.jpg",
        KA: "img/kawaiib.jpg",
        CG: "img/cleanb.png",
        OM: "img/oldb.png",
        AC: "img/academiab.jpg",
        V: "img/vintageb.png",
        Y: "img/y2kb.jpg",
        SW: "img/streetwearb.png"
    };


    document.getElementById("ergebnis").classList.add("sichtbar");
    document.getElementById("textErgebnis").innerText =
        ergebnisTexte[bestes];
    document.getElementById("beschreibung").innerText =
        beschreibungTexte[bestes];
    document.getElementById("ergebnisBild").src =
        bilder[bestes];
}