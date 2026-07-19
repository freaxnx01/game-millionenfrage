// 15 Stufen × 4 Fragen. c = Index der richtigen Antwort.
export const FRAGEN = [
[ // Stufe 1 — 50 €
{q:"Wie viele Beine hat eine Spinne?",a:["Sechs","Acht","Zehn","Zwölf"],c:1},
{q:"Welche Farbe entsteht, wenn man Blau und Gelb mischt?",a:["Orange","Lila","Grün","Braun"],c:2},
{q:"Wie nennt man gefrorenes Wasser?",a:["Dampf","Tau","Nebel","Eis"],c:3},
{q:"Wie nennt man einen jungen Hund?",a:["Welpe","Fohlen","Kalb","Lamm"],c:0}
],
[ // Stufe 2 — 100 €
{q:"Wie viele Bundesländer hat Deutschland?",a:["12","14","16","18"],c:2},
{q:"Welches Tier wiehert?",a:["Kuh","Pferd","Schaf","Schwein"],c:1},
{q:"Womit schreibt man klassisch auf eine Schultafel?",a:["Kohle","Tinte","Wachs","Kreide"],c:3},
{q:"Wie viele Minuten hat eine Stunde?",a:["60","100","30","90"],c:0}
],
[ // Stufe 3 — 200 €
{q:"Welche Stadt ist die Hauptstadt Frankreichs?",a:["Lyon","Marseille","Paris","Nizza"],c:2},
{q:"Wie heißt der beste Freund von Ernie aus der Sesamstraße?",a:["Bert","Grobi","Elmo","Samson"],c:0},
{q:"Welches Instrument hat 88 Tasten?",a:["Akkordeon","Orgel","Cembalo","Klavier"],c:3},
{q:"Aus welchem Land stammt die Pizza?",a:["Spanien","Italien","Griechenland","Frankreich"],c:1}
],
[ // Stufe 4 — 300 €
{q:"Welcher Fluss fließt durch Köln?",a:["Elbe","Donau","Rhein","Main"],c:2},
{q:"Wie viele Spieler stehen beim Fußball pro Mannschaft auf dem Platz?",a:["10","11","9","12"],c:1},
{q:"In welchem Märchen heißt es: „Spieglein, Spieglein an der Wand“?",a:["Aschenputtel","Rapunzel","Dornröschen","Schneewittchen"],c:3},
{q:"Welches Organ pumpt das Blut durch den Körper?",a:["Herz","Leber","Lunge","Niere"],c:0}
],
[ // Stufe 5 — 500 €
{q:"Wie heißt die Hauptstadt Österreichs?",a:["Salzburg","Graz","Wien","Innsbruck"],c:2},
{q:"Welcher Planet wird „der Rote Planet“ genannt?",a:["Venus","Mars","Jupiter","Merkur"],c:1},
{q:"Wer sang 1983 den Hit „99 Luftballons“?",a:["Nena","Alphaville","Falco","Trio"],c:0},
{q:"Wie viele Kontinente gibt es nach gängiger Zählung?",a:["Fünf","Sechs","Acht","Sieben"],c:3}
],
[ // Stufe 6 — 1.000 €
{q:"Welches chemische Element hat das Symbol „O“?",a:["Gold","Osmium","Sauerstoff","Silber"],c:2},
{q:"Welche Währung wird in der Schweiz verwendet?",a:["Euro","Franken","Krone","Gulden"],c:1},
{q:"Wer komponierte die Oper „Die Zauberflöte“?",a:["Beethoven","Bach","Haydn","Mozart"],c:3},
{q:"Wie nennt man die Angst vor engen Räumen?",a:["Klaustrophobie","Agoraphobie","Arachnophobie","Akrophobie"],c:0}
],
[ // Stufe 7 — 2.000 €
{q:"Welches Gebirge bildet die Grenze zwischen Europa und Asien?",a:["Kaukasus","Ural","Altai","Karpaten"],c:1},
{q:"Wie viele Saiten hat eine klassische Konzertgitarre?",a:["Vier","Fünf","Sieben","Sechs"],c:3},
{q:"Welches Land hat heute die meisten Einwohner der Welt?",a:["China","USA","Indien","Indonesien"],c:2},
{q:"Welches Team gewann das rein deutsche Champions-League-Finale 2013?",a:["FC Bayern München","Borussia Dortmund","FC Schalke 04","Bayer Leverkusen"],c:0}
],
[ // Stufe 8 — 4.000 €
{q:"Wer war der Leadsänger der Band Queen?",a:["David Bowie","Elton John","Freddie Mercury","Mick Jagger"],c:2},
{q:"Welcher ist der größte Ozean der Erde?",a:["Atlantik","Pazifik","Indischer Ozean","Arktischer Ozean"],c:1},
{q:"In welchem Jahr fiel die Berliner Mauer?",a:["1987","1991","1993","1989"],c:3},
{q:"Welches Bundesland ist flächenmäßig das größte?",a:["Bayern","Niedersachsen","Baden-Württemberg","Nordrhein-Westfalen"],c:0}
],
[ // Stufe 9 — 8.000 €
{q:"Wer malte die „Mona Lisa“?",a:["Michelangelo","Raffael","Leonardo da Vinci","Botticelli"],c:2},
{q:"Welches Element hat die Ordnungszahl 1?",a:["Helium","Wasserstoff","Lithium","Kohlenstoff"],c:1},
{q:"Wie heißt der höchste Berg Deutschlands?",a:["Watzmann","Feldberg","Brocken","Zugspitze"],c:3},
{q:"Welcher Komponist war bei der Uraufführung seiner 9. Sinfonie bereits nahezu taub?",a:["Beethoven","Brahms","Schubert","Wagner"],c:0}
],
[ // Stufe 10 — 16.000 €
{q:"In welchem Jahr wurde die Bundesrepublik Deutschland gegründet?",a:["1945","1947","1949","1951"],c:2},
{q:"Aus wie vielen Bits besteht ein Byte?",a:["4","8","16","32"],c:1},
{q:"Welches Land richtete 1930 die erste Fußball-Weltmeisterschaft aus?",a:["Brasilien","Italien","Argentinien","Uruguay"],c:3},
{q:"Welche Blutgruppe gilt als Universalspender?",a:["0 negativ","AB positiv","A negativ","B positiv"],c:0}
],
[ // Stufe 11 — 32.000 €
{q:"Welches Metall ist bei Raumtemperatur flüssig?",a:["Blei","Zinn","Quecksilber","Natrium"],c:2},
{q:"Wie heißt die Hauptstadt Kanadas?",a:["Toronto","Ottawa","Vancouver","Montreal"],c:1},
{q:"Wer schrieb den Roman „Buddenbrooks“?",a:["Hermann Hesse","Theodor Fontane","Franz Kafka","Thomas Mann"],c:3},
{q:"Von welchem Komponisten stammt die Melodie der deutschen Nationalhymne?",a:["Joseph Haydn","Ludwig van Beethoven","Robert Schumann","Felix Mendelssohn"],c:0}
],
[ // Stufe 12 — 64.000 €
{q:"Welches Organ produziert das Hormon Insulin?",a:["Leber","Schilddrüse","Bauchspeicheldrüse","Milz"],c:2},
{q:"In welchem Land liegt die antike Felsenstadt Petra?",a:["Ägypten","Jordanien","Israel","Oman"],c:1},
{q:"Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",a:["Ludwig Erhard","Willy Brandt","Kurt Georg Kiesinger","Konrad Adenauer"],c:3},
{q:"Welcher Planet hat die meisten bekannten Monde?",a:["Saturn","Jupiter","Uranus","Neptun"],c:0}
],
[ // Stufe 13 — 125.000 €
{q:"In welchem Jahr sank die Titanic?",a:["1905","1909","1912","1915"],c:2},
{q:"In welchem Tiefseegraben liegt der tiefste Punkt der Ozeane?",a:["Tongagraben","Marianengraben","Puerto-Rico-Graben","Japangraben"],c:1},
{q:"Wer komponierte den Opernzyklus „Der Ring des Nibelungen“?",a:["Giuseppe Verdi","Richard Strauss","Giacomo Puccini","Richard Wagner"],c:3},
{q:"Welches chemische Element trägt das Symbol „W“?",a:["Wolfram","Wismut","Vanadium","Tantal"],c:0}
],
[ // Stufe 14 — 500.000 €
{q:"Wie viele Knochen hat ein erwachsener Mensch üblicherweise?",a:["186","196","206","226"],c:2},
{q:"Um welches Jahr erfand Johannes Gutenberg den Buchdruck mit beweglichen Lettern?",a:["um 1350","um 1450","um 1500","um 1550"],c:1},
{q:"Welcher Fluss führt am meisten Wasser?",a:["Nil","Jangtse","Kongo","Amazonas"],c:3},
{q:"Wer erhielt 1921 den Nobelpreis für Physik?",a:["Albert Einstein","Max Planck","Niels Bohr","Werner Heisenberg"],c:0}
],
[ // Stufe 15 — 1.000.000 €
{q:"In welchem Jahr wurden die Nobelpreise zum ersten Mal verliehen?",a:["1895","1899","1901","1905"],c:2},
{q:"Wer betrat als zweiter Mensch den Mond?",a:["Michael Collins","Buzz Aldrin","Alan Shepard","John Glenn"],c:1},
{q:"Wie hieß die Hündin, die 1957 als erstes Lebewesen die Erde umkreiste?",a:["Strelka","Belka","Zwetotschka","Laika"],c:3},
{q:"Welches Land besitzt die längste Küstenlinie der Welt?",a:["Kanada","Russland","Australien","Norwegen"],c:0}
]
];
