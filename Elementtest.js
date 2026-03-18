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
        FE: "Das Element Feuer steht für Leidenschaft, Energie und starke Emotionen. Menschen mit viel Feuer in ihrer Persönlichkeit sind oft motiviert, mutig und voller Tatendrang. Sie handeln schnell, zeigen Begeisterung und können andere mit ihrer Energie anstecken. Gleichzeitig kann Feuer auch impulsiv wirken und manchmal zu Ungeduld oder Wut führen.",
        WA: "Wasser symbolisiert Gefühle, Ruhe und Sensibilität. Menschen mit diesem Element sind häufig einfühlsam, ruhig und verständnisvoll. Sie können gut zuhören und haben ein starkes Gefühl für die Emotionen anderer. Wasser-Persönlichkeiten suchen Harmonie, können aber manchmal auch sehr nachdenklich oder emotional sein.",
        ER: "Das Element Erde steht für Stabilität, Zuverlässigkeit und Bodenständigkeit. Menschen mit viel Erde wirken oft ruhig, verantwortungsbewusst und organisiert. Sie arbeiten strukturiert und sind sehr verlässlich. Gleichzeitig können sie manchmal etwas stur sein oder Veränderungen nur langsam akzeptieren.",
        LU: "Luft steht für Freiheit, Bewegung und Kommunikation. Menschen mit diesem Element sind oft offen, neugierig und kreativ. Sie sprechen gerne mit anderen, haben viele Ideen und mögen Abwechslung. Manchmal können sie aber auch unruhig wirken oder sich schwer lange auf eine Sache konzentrieren.",
        EI: "Eis symbolisiert Kontrolle, Ruhe und Nachdenklichkeit. Eis-Persönlichkeiten wirken oft ruhig, sachlich und überlegt. Sie behalten auch in schwierigen Situationen einen kühlen Kopf. Gleichzeitig können sie manchmal distanziert wirken oder ihre Gefühle weniger zeigen.",
        LI: "Das Element Licht steht für Hoffnung, Positivität und Inspiration. Menschen mit viel Licht sind oft optimistisch, freundlich und motivierend für andere. Sie sehen häufig das Gute in Situationen und versuchen, anderen zu helfen. Manchmal können sie aber auch sehr idealistisch sein.",
        S: "Schatten steht für Tiefe, Rückzug und innere Gedanken. Menschen mit diesem Element sind oft nachdenklich, ruhig und beobachten viel. Sie beschäftigen sich stark mit ihren eigenen Gedanken und Gefühlen. Gleichzeitig kann Schatten auch Unsicherheit oder das Bedürfnis nach Abstand von anderen bedeuten.",
        EL: "Elektrizität symbolisiert Schnelligkeit, Ideenreichtum und starke Reaktionen. Menschen mit diesem Element sind oft spontan, kreativ und voller Energie. Sie reagieren schnell auf Situationen und denken häufig sehr aktiv. Manchmal können sie dadurch auch hektisch oder nervös wirken.",
        Z: "Zeit steht für Planung, Strategie und langfristiges Denken. Menschen mit diesem Element überlegen oft genau, bevor sie handeln. Sie planen gerne, analysieren Situationen und denken an die Zukunft. Gleichzeitig kann diese Persönlichkeit manchmal zu viel nachdenken oder Entscheidungen hinauszögern."
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