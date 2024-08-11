"use strict";

function escapeHtml(html){
  /* This abomination was brought to you by https://stackoverflow.com/a/25396011/ */
  var text = document.createTextNode(html);
  var p = document.createElement('p');
  p.appendChild(text);
  return p.innerHTML;
}

function randomItem(items) {
  return items[Math.floor(items.length * Math.random())];
}

function randomFarnFact() {
  var item = randomItem([
["Die Farne sind eine Gruppe von Gefäßsporenpflanzen, die die Schwestergruppe der Samenpflanzen bilden.", ""],
["Die Farne umfassen alle Gefäßsporenpflanzen exklusive der Bärlapppflanzen.", ""],
["Zu den Farnen zählen die Schachtelhalme, die Gabelblattgewächse, die Natternzungengewächse, die Marattiaceae und die Echten Farne.", ""],
["Farne werden häufig als Monilophyten bezeichnet, die Bezeichnungen Monilophyta oder Moniloformopses sind jedoch keine gültigen Taxon-Bezeichnungen.", ""],
["Es gibt weltweit rund 12.000 Farn-Arten.", ""],
["Die meisten Farn-Arten sind in den immerfeuchten Tropen angesiedelt.", ""],
["In Europa sind etwa 171 Farn-Arten, in Mitteleuropa etwa 101 Farn-Arten beheimatet.", ""],
["Im Karbon-Zeitalter bildeten Farne (in größerer Form als heute, meist Baumfarne genannt) zusammen mit Schachtelhalmen und Bärlapppflanzen riesige Wälder und schufen die Basis für die meisten heutigen Steinkohle-Vorkommen.", ""],
["Die ältesten fossilen Farn-Funde stammen aus dem unteren Devon (vor etwa 400 Millionen Jahren).", ""],
["Farne sind wahrscheinlich älter als die Samenpflanzen, die erstmals im oberen Devon (vor etwa 372 Millionen Jahren) auftraten.", ""],
["Farne besitzen alle Merkmale der Gefäßsporenpflanzen.", ""],
["Farne haben eine besondere Form der Gefäßbündel: Das Protoxylem ist auf bestimmte Lappen des Xylemstrangs beschränkt.", ""],
["Der Name Monilophyta für Farne stammt von der besonderen Gefäßbündel-Form: Lateinisch moniliformis bedeutet „halsbandförmig“.", ""],
["Alle Farne der heutigen Zeit haben eine spezifische Insertion im Plastiden-Gen rps4 von neun Nukleotiden.", ""],
["Die Gewöhnliche Natternzunge (Ophioglossum vulgatum) und die Echte Mondraute (Botrychium lunaria) gehören zur Familie der Natternzungengewächse (Ophioglossaceae).", ""],
["Der Königsfarn (Osmunda regalis) hat der Familie der Königsfarngewächse (Osmundaceae) seinen Namen gegeben.", ""],
["Das Wappen von Barwedel besteht aus einem prominenten gelben Farnwedel auf grünem Hintergrund.", ""],
["Der Gewöhnliche Pillenfarn (Pilularia globulifera) und der Vierblättrige Kleefarn (Marsilea quadrifolia) gehören zur Familie der Kleefarngewächse (Marsileaceae).", ""],
["Polypodium californicum ist ein Vertreter der Tüpfelfarngewächse (Polypodiaceae), einer sehr artenreichen Familie.", ""],
["Farne kommen auch als Gartenpflanze zur Verwendung.", ""],
["Farnpflanzen sind in der Regel durch den Besitz von Wedelblättern (ähnlich den Palmwedeln) mit Rhachis gekennzeichnet, die über rand- oder unterständigen Sporangien verfügen.", ""],
["Die Fiederblätter von Farnen sind bei den meisten Arten flächig ausgebildet und in der Jugend eingerollt.", ""],
["In tropischen Gebieten wachsen die größten Farnpflanzen, die Baumfarne.", ""],
["Vertreter der Farn-Familien Cyatheaceae und Dicksoniaceae bilden einen sogenannten Scheinstamm aus und ähneln daher Bäumen.", ""],
["Durch ihre unterschiedlichen Wuchsformen besiedeln Farne weltweit unterschiedliche Lebensräume, wobei sie eher feuchte Standorte bevorzugen.", ""],
["Ihren Verbreitungsschwerpunkt, sowie die größte Artenvielfalt weisen Vertreter der Farne in Orientalis, Mittelamerika und dem nördlichen Südamerika auf.", ""],
["Viele Farnpflanzen bevorzugen schattige Plätze im Wald, in Mauerritzen, Felsspalten und Schluchten oder in der Nähe von Gewässern, es gibt aber auch lichtliebende Arten.", ""],
["Manche Farne werden als Zierpflanzen genutzt, da sie winterhart sind und auch an schattigen Standorten gedeihen.", ""],
["Junger Adlerfarn und Straußenfarn werden trotz ihrer Giftigkeit regional als Salat oder Wildgemüse gegessen.", ""],
["In der chinesischen Küche und der japanischen Küche sind unterschiedliche Arten von Farn bereits seit rund 3000 Jahren anzutreffen.", ""],
["In der asiatischen Küche werden sämtliche Teile diverser Farne (wie des eigentlich giftigen Adlerfarns) so zubereitet, dass sie sich für den menschlichen Verzehr eignen.", ""],
["In der Weißkrain wurde auf sogenannten Steljniki Adlerfarn als Einstreu kultiviert.", ""],
["Die Farne werden nach der Systematik von Smith et al. (2006) in vier Klassen unterteilt, die alle monophyletisch sind: Psilotopsida, Equisetopsida (= Sphenopsida), Marattiopsida, und Echte Farne (Polypodiopsida, oder Filicopsida).", ""],
["Fossile Gruppen, die an der Basis der heute existierenden Farne stehen, sind Cladoxylopsida und weitere frühe farnähnliche Pflanzen wie z.B. die Rhacophytales.", ""],
["Nele Wellinghausen hat „Farnpflanzen. Bestimmungsschlüssel für alle heimischen Farne, Bärlappartigen und Schachtelhalme.“ im Jahre 1997 veröffentlicht (ISBN 3-923376-13-8).", ""],
/* moar farn facts go here */
  ]);
  if (item[1] == "") {
    item[1] = "https://de.wikipedia.org/wiki/Farne";
  }
  return item;
}

function loadRandomFarnFact() {
  var farnFact = randomFarnFact();
  document.getElementById("farn-fact-content").innerHTML = escapeHtml(farnFact[0]);
  document.getElementById("farn-fact-wikilink").href = farnFact[1];
}

loadRandomFarnFact();
