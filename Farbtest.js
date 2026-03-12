let aktuelleFrage = 1;
let punkte = {
    RO: 0,
    GE: 0,
    GR: 0,
    BL: 0,
    LI: 0,
    RS: 0,
    BE: 0,
    BR: 0,
    S: 0,
    W: 0,
};
function antwort(a) {

    if (aktuelleFrage === 1) {
        if (a === "A") punkte.RO += 3, punkte.S += 2, punkte.GR += 1;
        if (a === "B") punkte.GE += 3, punkte.GR += 2, punkte.BR += 1;
        if (a === "C") punkte.RS += 3, punkte.LI += 2, punkte.BR += 1;
        if (a === "D") punkte.BL += 3, punkte.GE += 2, punkte.LI += 1;
        if (a === "E") punkte.W += 3, punkte.BL += 2, punkte.RS += 1;
    }

    if (aktuelleFrage === 2) {
        if (a === "A") punkte.RO += 3, punkte.RS += 2, punkte.GE += 1;
        if (a === "B") punkte.GE += 3, punkte.LI += 2, punkte.BL += 1;
        if (a === "C") punkte.BL += 3, punkte.GR += 2, punkte.RS += 1;
        if (a === "D") punkte.RS += 3, punkte.BL += 2, punkte.W += 1;
        if (a === "E") punkte.GR += 3, punkte.GE += 2, punkte.RO += 1;
        if (a === "F") punkte.BR += 3, punkte.S += 2, punkte.W += 1;
    }

    if (aktuelleFrage === 3) {
        if (a === "A") punkte.RO += 3, punkte.S += 2, punkte.BR += 1;
        if (a === "B") punkte.GE += 3, punkte.GR += 2, punkte.RS += 1;
        if (a === "C") punkte.GR += 3, punkte.S += 2, punkte.LI += 1;
        if (a === "D") punkte.LI += 3, punkte.RS += 2, punkte.BL += 1;
        if (a === "E") punkte.RS += 3, punkte.GE += 2, punkte.RO += 1;
        if (a === "F") punkte.W += 3, punkte.BL += 2, punkte.S += 1;
        if (a === "G") punkte.BR += 3, punkte.LI += 2, punkte.RS += 1;
    }

    if (aktuelleFrage === 4) {
        if (a === "A") punkte.LI += 3, punkte.S += 2, punkte.BR += 1;
        if (a === "B") punkte.GE += 3, punkte.RS += 2, punkte.GR += 1;
        if (a === "C") punkte.W += 3, punkte.BL += 2, punkte.S += 1;
        if (a === "D") punkte.RS += 3, punkte.RO += 2, punkte.GR += 1;
        if (a === "E") punkte.BR += 3, punkte.BL += 2, punkte.W += 1;
        if (a === "F") punkte.S += 3, punkte.RO += 2, punkte.LI += 1;
        if (a === "G") punkte.GR += 3, punkte.GE += 2, punkte.BR += 1;
    }

    if (aktuelleFrage === 5) {
        if (a === "A") punkte.GE += 3, punkte.GR += 2, punkte.RO += 1;
        if (a === "B") punkte.RO += 3, punkte.S += 2, punkte.BL += 1;
        if (a === "C") punkte.W += 3, punkte.BL += 2, punkte.LI += 1;
        if (a === "D") punkte.GR += 3, punkte.RO += 2, punkte.S += 1;
        if (a === "E") punkte.S += 3, punkte.LI += 2, punkte.BR += 1;
        if (a === "F") punkte.BL += 3, punkte.RS += 2, punkte.W += 1;
        if (a === "G") punkte.RS += 3, punkte.GE += 2, punkte.GR += 1;
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
        RO: "Rot",
        GE: "Gelb.",
        GR: "Grün.",
        BL: "Blau.",
        LI: "Lila.",
        RS: "Rosa.",
        BR: "Braun.",
        S: "Schwarz.",
        W: "Weiß."
    };

    const beschreibungTexte = {
        RO: "bnaeb<fwuqisoknkjbfhfijdoKak<n.",
        GE: "bgru<eiwOJIg<fbuifwiqopf<dngjboqdkoafk.",
        GR: "ish<uguhdwiabdh<uwiq9iwjdfgfwefghg.",
        BL: "owifejhijwkdkod<knfjbw09wuerewodjfnkdjv mml, s.",
        LI: "owfaeigsjbijew0odofeigjbiwoqspkdosknfdjvfopakldmksdmf.",
        RS: "ofgnbuifjwopkojfbjijfwofjeigjbfgdfk.",
        BR: "jehwjqowijhhjiqokswdfkdjjndsokdfdnsjjdospdksfdk.",
        S: "g708bu6e >EISb feuhfueh<fihidawiJaefnklaeg.",
        W: "rfwnabsdh friooekofkgjf kml,lpdüölpskkmvn,xghwa."
    };

    const bilder = {
        RO: "img/red.jpg",
        GE: "img/yellow.jpg",
        GR: "img/green.jpg",
        BL: "img/blue.jpg",
        LI: "img/lila.jpg",
        RS: "img/rosa.jpg",
        BR: "img/brown.jpg",
        S: "img/black.jpg",
        W: "img/white.jpg"
    };


    document.getElementById("ergebnis").classList.add("sichtbar");
    document.getElementById("textErgebnis").innerText =
        ergebnisTexte[bestes];
    document.getElementById("beschreibung").innerText =
        beschreibungTexte[bestes];
    document.getElementById("ergebnisBild").src =
        bilder[bestes];
}