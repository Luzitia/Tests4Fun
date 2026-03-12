let aktuelleFrage = 1;
let punkte = {
    AD: 0,
    TA: 0,
    Q: 0,
    DE: 0,
    HU: 0,
    KA: 0,
    PF: 0,
    ER: 0,
    LO: 0,
    EL: 0,
    RO: 0,
    PI: 0,
    PA: 0,
    AF: 0,
};
function antwort(a) {

    if (aktuelleFrage === 1) {
        if (a === "A") punkte.DE += 3, punkte.RO += 2, punkte.Q += 1;
        if (a === "B") punkte.AD += 3, punkte.PA += 2, punkte.PI += 1;
        if (a === "C") punkte.TA += 3, punkte.KA += 2, punkte.AF += 1;
        if (a === "D") punkte.PF += 3, punkte.HU += 2, punkte.KA += 1;
        if (a === "E") punkte.DE += 3, punkte.RO += 2, punkte.AF += 1;
        if (a === "F") punkte.Q += 3, punkte.HU += 2, punkte.ER += 1;
        if (a === "G") punkte.LO += 3, punkte.EL += 2, punkte.ER += 1;
    }

    if (aktuelleFrage === 2) {
        if (a === "A") punkte.ER += 3, punkte.PA += 2, punkte.PI += 1;
        if (a === "B") punkte.TA += 3, punkte.AF += 2, punkte.Q += 1;
        if (a === "C") punkte.RO += 3, punkte.DE += 2, punkte.AD += 1;
        if (a === "D") punkte.LO += 3, punkte.KA += 2, punkte.AD += 1;
        if (a === "E") punkte.EL += 3, punkte.AF += 2, punkte.HU += 1;
        if (a === "F") punkte.PF += 3, punkte.EL += 2, punkte.TA += 1;
    }

    if (aktuelleFrage === 3) {
        if (a === "A") punkte.PA += 3, punkte.Q += 2, punkte.ER += 1;
        if (a === "B") punkte.LO += 3, punkte.AD += 2, punkte.PF += 1;
        if (a === "C") punkte.AF += 3, punkte.HU += 2, punkte.EL += 1;
        if (a === "D") punkte.KA += 3, punkte.LO += 2, punkte.DE += 1;
        if (a === "E") punkte.PI += 3, punkte.RO += 2, punkte.TA += 1;
        if (a === "F") punkte.AF += 3, punkte.ER += 2, punkte.DE += 1;
    }

    if (aktuelleFrage === 4) {
        if (a === "A") punkte.PF += 3, punkte.EL += 2, punkte.ER += 1;
        if (a === "B") punkte.LO += 3, punkte.KA += 2, punkte.HU += 1;
        if (a === "C") punkte.PA += 3, punkte.Q += 2, punkte.KA += 1;
        if (a === "D") punkte.Q += 3, punkte.PI += 2, punkte.ER += 1;
        if (a === "E") punkte.AD += 3, punkte.AF += 2, punkte.KA += 1;
        if (a === "F") punkte.HU += 3, punkte.EL += 2, punkte.LO += 1;
        if (a === "G") punkte.TA += 3, punkte.PA += 2, punkte.RO += 1;
    }

    if (aktuelleFrage === 5) {
        if (a === "A") punkte.Q += 3, punkte.KA += 2, punkte.TA += 1;
        if (a === "B") punkte.AD += 3, punkte.TA += 2, punkte.AF += 1;
        if (a === "C") punkte.AF += 3, punkte.KA += 2, punkte.ER += 1;
        if (a === "D") punkte.EL += 3, punkte.Q += 2, punkte.PA += 1;
        if (a === "E") punkte.DE += 3, punkte.EL += 2, punkte.KA += 1;
        if (a === "F") punkte.PF += 3, punkte.AD += 2, punkte.PA += 1;
        if (a === "G") punkte.LO += 3, punkte.PF += 2, punkte.EL += 1;
        if (a === "H") punkte.HU += 3, punkte.RO += 2, punkte.PA += 1;
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
        AD: "Adler.",
        TA: "Taube.",
        Q: "Qualle.",
        DE: "Delfin.",
        HU: "Hund.",
        KA: "Katze.",
        PF: "Pferd.",
        ER: "Erdmännchen.",
        LO: "Löwe.",
        EL: "Elefant.",
        RO: "Robbe.",
        PI: "Pinguin.",
        PA: "Panda.",
        AF: "Affe."
    };

    const beschreibungTexte = {
        AD: "bnaeb<fwuqisoknkjbfhfijdoKak<n.",
        TA: "bgru<eiwOJIg<fbuifwiqopf<dngjboqdkoafk.",
        Q: "ish<uguhdwiabdh<uwiq9iwjdfgfwefghg.",
        DE: "owifejhijwkdkod<knfjbw09wuerewodjfnkdjv mml, s.",
        HU: "owfaeigsjbijew0odofeigjbiwoqspkdosknfdjvfopakldmksdmf.",
        KA: "jehwjqowijhhjiqokswdfkdjjndsokdfdnsjjdospdksfdk.",
        PF: "g708bu6e >EISb feuhfueh<fihidawiJaefnklaeg.",
        ER: "rfwnabsdh friooekofkgjf kml,lpdüölpskkmvn,xghwa.",
        LO: "FINGURHE)R=KOAJFSYJBU)GKJOPDAKFSDKBJOGEKFWPLE",
        EL: "FGBURIFJWOFENJFBFLFNJOLKNFDKJNFKFLDVMBKBNKFLM",
        RO: "PBONIGFJWODQDKPOFSNDIJOKWDPKFOJDNFBJFJOKDPPKFDNK",
        PI: "POGKKFOS)(/%()IU&%HJTKGFKGNKOKKDANYVB;L;",
        PA: "OIBUGHIJFI=WFOEJIBIJFOKODVKN",
        AF: "POINBIFJDKPKSVDNKBVMCL;VLMK BKMVKPFL;VLMD;"
    };

    const bilder = {
        AD: "img/hawk.jpg",
        TA: "img/pigeon.jpg",
        Q: "img/jelly.jpg",
        DE: "img/dolphin.jpg",
        HU: "img/dog.jpg",
        KA: "img/cat.jpg",
        PF: "img/cat.jpg",
        ER: "img/horse.jpg",
        LO: "img/lion.jpg",
        EL: "img/elephant.jpg",
        RO: "img/seal.jpg",
        PI: "img/pinguin.jpg",
        PA: "img/panda.jpg",
        AF: "img/monkey.jpg"
    };

    document.getElementById("ergebnis").classList.add("sichtbar");
    document.getElementById("textErgebnis").innerText =
        ergebnisTexte[bestes];
    document.getElementById("beschreibung").innerText =
        beschreibungTexte[bestes];
    document.getElementById("ergebnisBild").src =
        bilder[bestes];
}