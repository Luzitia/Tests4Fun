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
        AD: "Adler",
        TA: "Taube",
        Q: "Qualle",
        DE: "Delfin",
        HU: "Hund",
        KA: "Katze",
        PF: "Pferd",
        ER: "Erdmännchen",
        LO: "Löwe",
        EL: "Elefant",
        RO: "Robbe",
        PI: "Pinguin",
        PA: "Panda",
        AF: "Affe"
    };

    const beschreibungTexte = {
        AD: "Der Adler wirkt selbstbewusst und hat ein starkes Auftreten. Er liebt Überblick und Struktur. Er ist sehr Zielstrebig und fühlt sich am wohlsten, wenn er frei entscheiden kann. Ungerechtigkeit und Ineffezienz reizen ihn schnell, denn er hat ein starkes inneres Wertegefühl. Er strebt nach Freiheit und Weitsicht.",
        TA: "Die Taube macht einen ruhigen, schüchternen ersten Eindruck. Sie liebt Harmonie und Drama sowie laute Konflikte. Statt im Mittelpunkt zu stehen, beobachtet sie lieber aus dem Hintergrund und sorgt für Ausgleich. Sie wirkt unscheinbar, besitzt aber eine stille innere Stärke.",
        Q: "Die Qualle ist sensibel, introvertiert und sehr feinfühlig. Sie reagiert stark auf Reizüberflutung, besonders auf Lautstärke und Chaos. Lieber bleibt sie im Hintergrund und bewegt sich sanft durch Situationen, ohne aufzufallen. Ihr innerer Wunsch ist Dinge aus der Distanz zu beeinflussen.",
        DE: "Der Delfin ist offen, intelligent und Humorvoll. Er geht auf andere zu ist sozial und ist schwer zu reizen. Trotz seiner Verspieltheit besitzt er eine hohe Emotionale Inteligenz und ein gutes Gespür für sein Umfeld. Er hat eine empathische, robuste und belastbare Natur.",
        HU: "Der Hund ist loyal, ehrlich und auf Gerechtigkeit bedacht. Respeklosigkeit oder Ungerechtigkeiten treffen ihn besonders, da er sehr werteorientiert ist. Er beschützt die Menschen, die ihm wichtig sind und gibt selten auf. Er hat eine zähe und treue Persönlichkeit.",
        KA: "Die Katze wirkt elegant, selbstsicher und manchmal leicht arrogant. Sie liebt Ruhe, Kontrolle und ihre eigenen Regeln. In Diskussionen bleibt sie stur und überzeugt von sich selbst. Sie hat eine geheimnisvolle und unabhängige Art.",
        PF: "Das Pferd steht für Zuverlässigkeit, Freiheit und stille Stärke. Unpünktlichkeit und Chaos bringen es schnell aus dem Gleichgewicht, denn es schätzt Struktur. Es wirkt Selbsbewusst, ohne dominant zu sein und trägt viel Verantwortung . Es hat eine natürliche Stärke und Ausdauer.",
        ER: "Das Erdmännchen ist aufmerksam, sozial und stark gemeinschaftsorientert. Es reagiert sensibel auf Drama und Ungerechtigkeit, da es Ordnung und Fairness braucht. Trot seiner Wachsamkeit besitzt es Humor und Neugier. Es hat eine schnelle, reaktionsfreudige Art.",
        LO: "Der Löwe tritt stolz, dominant und selbstbewusst aus. Respekt ist für ihn essenziell und Ungerechtigkeit duldet er nicht. Er übernimmt gerne die Rolle des Beschützers und des Anführers. Er hat eine kraftvolle und königliche Ausstrahlung.",
        EL: "Der Elefant wirkt ruhig, weise und tief empathisch. Er vergisst Unrecht nicht, handelt aber bedacht und gerecht. Sein starkes Gedächtnis und seine emotionale Tiefe machen ihn zu einer stabilen Persönlichkeit. Er hat eine reflektierende Natur.",
        RO: "Die Robbe ist locker, verspielt und erstaunlich gelassen. Sie lässt sich nicht leicht provozieren und geht mit vielen Dingen humorvoll um. Gemeinschaft und Nähe sind ihr sehr wichtig. Sie ist anpassungsfähig und hat eine innere Ruhe.",
        PI: "Der Pinguin ist sozial, zuverlässig und liebt klare Strukturen. Drama und unnötiger Stress können ihn aus dem Konzept bringen. Auch wenn er manchmal tollpatschig wirkt, ist er äußerst loyal und teamorientiert. Seine Stärke liegt in Zusammenhalt und Beständigkeit.",
        PA: "Der Panda wirkt sanft, ruhig und eher schüchtern. Er braucht Harmonie und zieht sich bei Lautstärke oder Stress zurück. Trotz seiner Zurückhaltung besitzt er eine innere Gelassenheit. Er hat ein Bedürfnis nach Ruhe und Regeneration.",
        AF: "Der Affe ist neugierig, schlau und sehr humorvoll. Er liebt Diskussionen, neue Eindrücke und Bewegung, kann dabei aber auch chaotisch wirken. Meinungsverschiedenheiten reizen ihn, weil er gerne Recht behält. Er besitzt eine rastlose und spielerische Energie."
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