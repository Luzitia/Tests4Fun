let aktuelleFrage = 1;
let punkte = {
    FE: 0,
    WA: 0,
    ER: 0,
    LU: 0,
    EI: 0,
    LI: 0,
    S: 0,
    EL: 0,
    Z: 0,
};
function antwort(a) {

    if (aktuelleFrage === 1) {
        if (a === "A") punkte.FE += 3, punkte.EL += 2, punkte.ER += 1;
        if (a === "B") punkte.LI += 3, punkte.S += 2, punkte.WA += 1;
        if (a === "C") punkte.WA += 3, punkte.LU += 2, punkte.EI += 1;
        if (a === "D") punkte.EL += 3, punkte.Z += 2, punkte.FE += 1;
        if (a === "E") punkte.S += 3, punkte.EI += 2, punkte.WA += 1;
        if (a === "F") punkte.ER += 3, punkte.Z += 2, punkte.FE += 1;
    }

    if (aktuelleFrage === 2) {
        if (a === "A") punkte.LU += 3, punkte.EL += 2, punkte.FE += 1;
        if (a === "B") punkte.WA += 3, punkte.LU += 2, punkte.FE += 1;
        if (a === "C") punkte.ER += 3, punkte.EI += 2, punkte.LI += 1;
        if (a === "D") punkte.EL += 3, punkte.LI += 2, punkte.Z += 1;
        if (a === "E") punkte.Z += 3, punkte.WA += 2, punkte.ER += 1;
        if (a === "F") punkte.S += 3, punkte.EI += 2, punkte.WA += 1;
    }

    if (aktuelleFrage === 3) {
        if (a === "A") punkte.FE += 3, punkte.WA += 2, punkte.EL += 1;
        if (a === "B") punkte.LI += 3, punkte.Z += 2, punkte.ER += 1;
        if (a === "C") punkte.Z += 3, punkte.S += 2, punkte.LU += 1;
        if (a === "D") punkte.EI += 3, punkte.EL += 2, punkte.LI += 1;
        if (a === "E") punkte.ER += 3, punkte.FE += 2, punkte.LU += 1;
    }

    if (aktuelleFrage === 4) {
        if (a === "A") punkte.EL += 3, punkte.FE += 2, punkte.LU += 1;
        if (a === "B") punkte.Z += 3, punkte.EI += 2, punkte.WA += 1;
        if (a === "C") punkte.S += 3, punkte.LI += 2, punkte.WA += 1;
        if (a === "D") punkte.ER += 3, punkte.Z += 2, punkte.EI += 1;
        if (a === "E") punkte.LI += 3, punkte.LU += 2, punkte.ER += 1;
        if (a === "F") punkte.FE += 3, punkte.WA += 2, punkte.S += 1;
    }

    if (aktuelleFrage === 5) {
        if (a === "A") punkte.ER += 3, punkte.FE += 2, punkte.EI += 1;
        if (a === "B") punkte.LU += 3, punkte.EL += 2, punkte.FE += 1;
        if (a === "C") punkte.WA += 3, punkte.EI += 2, punkte.S += 1;
        if (a === "D") punkte.S += 3, punkte.LI += 2, punkte.FE += 1;
        if (a === "E") punkte.LI += 3, punkte.Z += 2, punkte.LU += 1;
        if (a === "F") punkte.EL += 3, punkte.Z += 2, punkte.LU += 1;
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
        FE: "Feuer",
        WA: "Wasser",
        ER: "Erde",
        LU: "Luft",
        EI: "Eis",
        LI: "Licht",
        S: "Schatten",
        EL: "Elektrizität",
        Z: "Zeit"
    };

    const beschreibungTexte = {
        FE: "bnaeb<fwuqisoknkjbfhfijdoKak<n.",
        WA: "bgru<eiwOJIg<fbuifwiqopf<dngjboqdkoafk.",
        ER: "ish<uguhdwiabdh<uwiq9iwjdfgfwefghg.",
        LU: "owifejhijwkdkod<knfjbw09wuerewodjfnkdjv mml, s.",
        EI: "owfaeigsjbijew0odofeigjbiwoqspkdosknfdjvfopakldmksdmf.",
        LI: "jehwjqowijhhjiqokswdfkdjjndsokdfdnsjjdospdksfdk.",
        S: "g708bu6e >EISb feuhfueh<fihidawiJaefnklaeg.",
        EL: "rfwnabsdh friooekofkgjf kml,lpdüölpskkmvn,xghwa.",
        Z: "OFJEGNIRBTIRGJEFWQPKWD§)($RZ(§)"
    };

    const bilder = {
        FE: "img/firerer.jpg",
        WA: "img/water.jpg",
        ER: "img/earth.jpg",
        LU: "img/air.jpg",
        EI: "img/ice.jpg",
        LI: "img/light.jpg",
        S: "img/shadow.jpg",
        EL: "img/electro.jpg",
        Z: "img/clock.jpg"
    };


    document.getElementById("ergebnis").classList.add("sichtbar");
    document.getElementById("textErgebnis").innerText =
        ergebnisTexte[bestes];
    document.getElementById("beschreibung").innerText =
        beschreibungTexte[bestes];
    document.getElementById("ergebnisBild").src =
        bilder[bestes];
}