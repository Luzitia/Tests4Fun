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
        GE: "Gelb",
        GR: "Grün",
        BL: "Blau",
        LI: "Lila",
        RS: "Rosa",
        BR: "Braun",
        S: "Schwarz",
        W: "Weiß"
    };

    const beschreibungTexte = {
        RO: "Rot steht für eine starke und intensive Persönlichkeit. Diese Farbe verbindet man mit Leidenschaft, Liebe und Energie. Menschen, die mit Rot verbunden werden, wirken oft kraftvoll, mutig und voller Tatendrang. Sie bringen Wärme und Stärke in ihre Umgebung und gehen Herausforderungen aktiv an. Gleichzeitig kann Rot auch eine Seite von Aggression oder Warnung zeigen – eine Persönlichkeit, die sehr intensiv fühlt und handelt.",
        GE: "Gelb symbolisiert eine fröhliche und kreative Persönlichkeit. Diese Farbe steht für Freude, Optimismus und Hoffnung. Gelbe Persönlichkeiten wirken oft offen, positiv und voller Ideen. Sie bringen Wärme und Kreativität in ihr Umfeld und denken häufig rational und lösungsorientiert. Gleichzeitig kann Gelb auch eine Schattenseite haben, in der Neid oder Missgunst entstehen können.",
        GR: "Grün steht für eine ruhige und ausgeglichene Persönlichkeit. Diese Farbe wird mit Natur, Erneuerung und Entspannung verbunden. Menschen mit grünen Eigenschaften suchen oft Stabilität, Besinnlichkeit und Ausgeglichenheit. Sie wirken harmonisch und hoffen auf ein gutes Gleichgewicht im Leben. Allerdings kann Grün manchmal auch eine Seite von Gier oder Egoismus zeigen.",
        BL: "Blau beschreibt eine ruhige und vertrauensvolle Persönlichkeit. Die Farbe wirkt beruhigend und steht für Harmonie, Freundschaft und Frieden. Menschen mit blauen Eigenschaften gelten häufig als intelligent, zuverlässig und vertrauenswürdig. Gleichzeitig kann Blau auch Gefühle wie Traurigkeit oder Einsamkeit ausdrücken, weil solche Persönlichkeiten oft sehr tief fühlen und nachdenken.",
        LI: "Lila steht für eine kreative und spirituelle Persönlichkeit. Diese Farbe wird mit Mystik, Ruhe und Entspannung verbunden. Menschen mit einer lilafarbenen Persönlichkeit sind oft kreativ, sensibel und nachdenklich. Lila kann auch für Luxus und etwas Besonderes stehen. Gleichzeitig kann diese Persönlichkeit manchmal eitel wirken oder innerlich einen Zwiespalt erleben.",
        RS: "Rosa symbolisiert eine sanfte und mitfühlende Persönlichkeit. Diese Farbe steht für Romantik, Sensibilität und Mitgefühl. Menschen mit rosa Eigenschaften bringen Zuversicht, Hoffnung und Balance in ihr Umfeld und wirken oft sehr freundlich und einfühlsam. Manchmal kann Rosa jedoch auch als oberflächlich, kitschig oder realitätsfern wahrgenommen werden.",
        BR: "Braun beschreibt eine bodenständige und zuverlässige Persönlichkeit. Diese Farbe steht für Robustheit, Gemütlichkeit und Verlässlichkeit. Menschen mit braunen Eigenschaften wirken stabil und ruhig und schätzen Sicherheit und Beständigkeit. Gleichzeitig kann Braun auch mit Langeweile oder Sturheit verbunden werden.",
        S: "Schwarz symbolisiert eine starke und dominante Persönlichkeit. Die Farbe steht für Macht, Eleganz und Respekt. Schwarze Persönlichkeiten wirken oft mysteriös, geheimnisvoll und führend. Sie strahlen Autorität aus und behalten häufig die Kontrolle. Gleichzeitig kann Schwarz auch mit Trauer oder Bosheit verbunden werden.",
        W: "Weiß steht für eine klare und reine Persönlichkeit. Diese Farbe symbolisiert Reinheit, Unschuld und Neuanfang. Menschen mit weißen Eigenschaften wirken oft friedlich, ruhig und hoffnungsvoll. Sie schätzen Klarheit und Ordnung. Gleichzeitig kann Weiß manchmal auch kalt oder distanziert wirken."
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