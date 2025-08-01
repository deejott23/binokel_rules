
import React from 'react';
import { RuleSection } from '../types';

const MeldungenTable: React.FC = () => (
    <div className="overflow-x-auto my-4">
        <table className="min-w-full text-sm text-left text-slate-600 bg-slate-50">
            <thead className="bg-slate-200 text-slate-700 uppercase">
                <tr>
                    <th scope="col" className="px-4 py-2">Meldung</th>
                    <th scope="col" className="px-4 py-2">Karten</th>
                    <th scope="col" className="px-4 py-2">Punkte</th>
                    <th scope="col" className="px-4 py-2">Punkte (in Trumpf)</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Paar</td>
                    <td className="px-4 py-2">König & Ober/Dame einer Farbe</td>
                    <td className="px-4 py-2">20</td>
                    <td className="px-4 py-2">40</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Binokel</td>
                    <td className="px-4 py-2">Schellen-Unter & Blatt-Ober</td>
                    <td className="px-4 py-2">40</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Doppelter Binokel</td>
                    <td className="px-4 py-2">Beide Schellen-Unter & Blatt-Ober</td>
                    <td className="px-4 py-2">300</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Vier Gleiche Asse</td>
                    <td className="px-4 py-2">4 Asse</td>
                    <td className="px-4 py-2">100</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Vier Gleiche Könige</td>
                    <td className="px-4 py-2">4 Könige</td>
                    <td className="px-4 py-2">80</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                 <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Vier Gleiche Ober/Damen</td>
                    <td className="px-4 py-2">4 Ober/Damen</td>
                    <td className="px-4 py-2">60</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                 <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Vier Gleiche Unter/Buben</td>
                    <td className="px-4 py-2">4 Unter/Buben</td>
                    <td className="px-4 py-2">40</td>
                    <td className="px-4 py-2">-</td>
                </tr>
                 <tr className="border-b">
                    <td className="px-4 py-2 font-medium">Familie</td>
                    <td className="px-4 py-2">Ass, 10, König, Ober, Unter einer Farbe</td>
                    <td className="px-4 py-2">100</td>
                    <td className="px-4 py-2">150</td>
                </tr>
                 <tr>
                    <td className="px-4 py-2 font-medium">Acht Gleiche</td>
                    <td className="px-4 py-2">Alle 8 Asse, Könige, etc.</td>
                    <td className="px-4 py-2">1000</td>
                    <td className="px-4 py-2">-</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export const rules: RuleSection[] = [
    {
        id: 'ueberblick',
        title: 'Das Wichtigste im Überblick',
        summary: 'Die Grundlagen: Teams, Ziel, Karten und Ablauf.',
        content: (
            <>
                <p><strong className="text-slate-900">Teams:</strong> Im Dubliner (früher Ochsen) bilden immer die, die sich gegenübersitzen, ein Team (z.B. Kai & Gabriel gegen Olli & Simon).</p>
                <p><strong className="text-slate-900">Ziel:</strong> Als erstes Team 1500 Punkte erreichen.</p>
                <p><strong className="text-slate-900">Karten:</strong> Doppeltes deutsches oder französisches Blatt (48 Karten).</p>
                <p><strong className="text-slate-900">Kartenwerte (Augen):</strong> Ass (11), Zehn (10), König (4), Ober/Dame (3), Unter/Bube (2), Sieben/Neun (0). Insgesamt 240 Augen im Spiel.</p>
                <p className="mt-2 font-semibold">Spielablauf:</p>
                <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Geben:</strong> 11 Karten pro Spieler, 4 Karten in den "Dabb".</li>
                    <li><strong>Reizen (Bieten):</strong> Eine Auktion bestimmt, wer das Spiel ansagt.</li>
                    <li><strong>Spiel ansagen:</strong> Der Gewinner nimmt den Dabb, tauscht Karten und sagt Trumpf an.</li>
                    <li><strong>Melden:</strong> Kartenkombinationen für Punkte auf den Tisch legen.</li>
                    <li><strong>Stechen:</strong> Karten ausspielen unter Farb-, Stich- und Trumpfzwang.</li>
                    <li><strong>Werten:</strong> Augen zählen und zu Meldepunkten addieren.</li>
                </ol>
            </>
        ),
    },
    {
        id: 'fundament',
        title: '1. Das Fundament: Ziel, Teams & Karten',
        summary: 'Das Ziel des Spiels, die Team-Zusammensetzung und die Karten im Detail.',
        content: (
            <>
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Was ist das Ziel beim Binokel?</h3>
                <p>Das Hauptziel ist es, als Team durch Melden und Stechen so viele Punkte zu sammeln, dass man die Zielpunktzahl von 1500 Punkten vor dem gegnerischen Team erreicht.</p>
                
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Wer spielt mit wem zusammen?</h3>
                <p>Wie im Dubliner üblich, bilden immer die beiden Spieler, die sich am Tisch gegenübersitzen, ein Team. Die Punkte von Partnern wie Kai und Gabriel werden am Ende einer Runde zusammengezählt.</p>
                
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Womit wird gespielt? (Das Binokel-Blatt)</h3>
                <p>Es wird mit 48 Karten gespielt (doppeltes Blatt). Jede Karte (Ass, 10, König, Ober/Dame, Unter/Bube, 7/9) ist in jeder Farbe zweimal vorhanden.</p>
                <p className="mt-2 font-semibold">Kartenwerte (Augen):</p>
                <ul className="list-disc list-inside">
                    <li>Ass: 11 Augen</li>
                    <li>Zehn: 10 Augen</li>
                    <li>König: 4 Augen</li>
                    <li>Ober/Dame: 3 Augen</li>
                    <li>Unter/Bube: 2 Augen</li>
                    <li>Sieben/Neun: 0 Augen</li>
                </ul>
                <p className="mt-2">Alle Karten zusammen ergeben 240 Augen. Der letzte Stich zählt zusätzlich 10 Punkte, also insgesamt 250 Punkte pro Runde durch Stiche.</p>
            </>
        )
    },
    {
        id: 'rundenbeginn',
        title: '2. Der Rundenbeginn: Geben & Reizen',
        summary: 'Wie die Karten verteilt werden und die Auktion (Reizen) funktioniert.',
        content: (
            <>
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Wie werden die Karten verteilt?</h3>
                <p>Der Geber mischt, lässt abheben und verteilt an jeden Spieler 11 Karten. Die letzten 4 Karten kommen als "Dabb" in die Mitte. Der Geber wechselt jede Runde.</p>

                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Was bedeutet "Reizen"?</h3>
                <p>Das Reizen ist eine Auktion, um das Recht zu bestimmen, die Trumpffarbe anzusagen. Das Gebot ist das Versprechen, wie viele Punkte das eigene Team mindestens erreichen wird.</p>
                <p className="mt-2">Der Spieler rechts vom Geber beginnt und reizt den Spieler links von sich. Geboten wird in 10er-Schritten. Wer nicht mehr erhöhen will, sagt "Passe".</p>
                <div className="mt-2 p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <p className="font-semibold text-emerald-800">Beispiel aus dem Ochsen:</p>
                    <p className="text-slate-700 mt-1">Kai ist Geber. Olli sitzt rechts von ihm, Simon links. Olli muss Simon reizen. Olli sagt "260", Simon kontert mit "270". Olli passt. Jetzt muss Simon gegen den letzten Spieler, Gabriel, reizen. Gabriel passt sofort. Simon hat sich durchgesetzt.</p>
                </div>
            </>
        ),
    },
    {
        id: 'melden',
        title: '3. Das Herzstück: Melden',
        summary: 'Wie man durch Kombinationen Punkte sammelt, bevor der erste Stich gespielt wird.',
        content: (
            <>
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Was ist "Melden"?</h3>
                <p>Nachdem der Spieler die Trumpffarbe angesagt hat, kommt die Meldephase. Hier können beide Teams durch das Aufdecken von bestimmten Kartenkombinationen (Meldungen) auf der Hand Punkte sammeln.</p>
                <p className="mt-2">Wichtig: Eine Karte darf für mehrere unterschiedliche Meldungen verwendet werden (z.B. ein König in einem Paar und in einer Familie), aber nicht für zwei gleiche Meldungen (z.B. zweimal das gleiche Paar).</p>
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <p className="font-semibold text-amber-800">Tipp für Gabriel:</p>
                    <p className="text-slate-700 mt-1">Wenn du ein Paar in der Trumpffarbe hast, zählt es 40 statt 20 Punkte. Also Augen auf bei der Trumpfansage deines Partners!</p>
                </div>
                <MeldungenTable />
            </>
        )
    },
    {
        id: 'stechen',
        title: '4. Das Spiel: Stechen & Zählen',
        summary: 'Die Regeln beim Ausspielen der Karten und wie am Ende abgerechnet wird.',
        content: (
            <>
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Wie wird gestochen?</h3>
                <p>Der Spieler, der das Spiel angesagt hat, spielt die erste Karte aus. Danach geht es im Uhrzeigersinn weiter. Es gelten folgende Zwänge in dieser Reihenfolge:</p>
                <ol className="list-decimal list-inside space-y-1 mt-2">
                    <li><strong>Farbzwang:</strong> Man muss immer die Farbe der ersten Karte bedienen.</li>
                    <li><strong>Stichzwang:</strong> Wenn möglich, muss man eine höhere Karte der gleichen Farbe spielen, um den Stich zu gewinnen.</li>
                    <li><strong>Trumpfzwang:</strong> Kann man die Farbe nicht bedienen, muss man mit Trumpf stechen. Wurde bereits mit Trumpf gestochen, muss man mit einem höheren Trumpf überstechen.</li>
                </ol>
                <p className="mt-2">Wer den Stich gewinnt, spielt die nächste Karte aus. Der letzte Stich der Runde zählt 10 extra Punkte.</p>
                
                <h3 className="text-lg font-bold text-slate-800 mt-4 mb-2">Wie wird am Ende gezählt?</h3>
                <p>Nach dem letzten Stich zählt jedes Team die "Augen" der Karten in seinen gewonnenen Stichen. Dazu werden die Punkte aus den Meldungen addiert.</p>
                <div className="mt-2 p-3 bg-sky-50 border border-sky-200 rounded-lg">
                    <p className="font-semibold text-sky-800">Beispielrechnung für Olli & Simon:</p>
                    <p className="text-slate-700 mt-1">Olli hat 80 Punkte gemeldet. Simon hat 40 Punkte gemeldet. Zusammen haben sie Stiche im Wert von 130 Augen gemacht. Ihr Ergebnis: 80 + 40 + 130 = 250 Punkte.</p>
                </div>
                <p className="mt-2">Wenn das spielende Team sein Reizgebot nicht erreicht, wird ihm die doppelte Höhe des Gebots abgezogen (sie sind "schwarz").</p>
            </>
        )
    }
];

export const rulesAsText = `
# Das Wichtigste im Überblick
Zusammenfassung: Die Grundlagen: Teams, Ziel, Karten und Ablauf.
Inhalt:
- Teams: Im Dubliner (früher Ochsen) bilden immer die, die sich gegenübersitzen, ein Team (z.B. Kai & Gabriel gegen Olli & Simon).
- Ziel: Als erstes Team 1500 Punkte erreichen.
- Karten: Doppeltes deutsches oder französisches Blatt (48 Karten).
- Kartenwerte (Augen): Ass (11), Zehn (10), König (4), Ober/Dame (3), Unter/Bube (2), Sieben/Neun (0). Insgesamt 240 Augen im Spiel.
- Spielablauf: 1. Geben (11 Karten pro Spieler, 4 in den "Dabb"). 2. Reizen (Auktion). 3. Spiel ansagen (Trumpf wählen). 4. Melden (Kombinationen). 5. Stechen (Karten spielen). 6. Werten (Punkte zählen).

---

# 1. Das Fundament: Ziel, Teams & Karten
Zusammenfassung: Das Ziel des Spiels, die Team-Zusammensetzung und die Karten im Detail.
Inhalt:
- Ziel: 1500 Punkte durch Melden und Stechen erreichen.
- Teams: Gegenübersitzende Spieler bilden ein Team.
- Karten: 48 Karten (doppeltes Blatt). Jede Karte (Ass, 10, König, Ober/Dame, Unter/Bube, 7/9) ist pro Farbe doppelt vorhanden.
- Kartenwerte (Augen): Ass: 11, Zehn: 10, König: 4, Ober/Dame: 3, Unter/Bube: 2, Sieben/Neun: 0. Total: 240 Augen pro Runde. Der letzte Stich gibt 10 extra Punkte.

---

# 2. Der Rundenbeginn: Geben & Reizen
Zusammenfassung: Wie die Karten verteilt werden und die Auktion (Reizen) funktioniert.
Inhalt:
- Geben: Jeder Spieler erhält 11 Karten, 4 kommen in den "Dabb". Geber wechselt jede Runde.
- Reizen: Eine Auktion in 10er-Schritten, um das Spiel zu machen. Wer am höchsten bietet, gewinnt. Der Gewinner muss mit seinem Partner mindestens die gebotene Punktzahl erreichen.

---

# 3. Das Herzstück: Melden
Zusammenfassung: Wie man durch Kombinationen Punkte sammelt, bevor der erste Stich gespielt wird.
Inhalt:
- Was ist Melden?: Nach der Trumpfansage werden Kartenkombinationen für Punkte aufgedeckt.
- Wichtig: Eine Karte kann für verschiedene Meldungen (z.B. Paar und Familie), aber nicht für gleiche Meldungen genutzt werden.
- Meldungstabelle:
  - Paar (König & Ober/Dame): 20 Punkte (40 in Trumpf)
  - Binokel (Schellen-Unter & Blatt-Ober): 40 Punkte
  - Doppelter Binokel (beide Binokel-Karten): 300 Punkte
  - Vier Gleiche (Asse): 100 Punkte
  - Vier Gleiche (Könige): 80 Punkte
  - Vier Gleiche (Ober/Damen): 60 Punkte
  - Vier Gleiche (Unter/Buben): 40 Punkte
  - Familie (A, 10, K, O, U einer Farbe): 100 Punkte (150 in Trumpf)
  - Acht Gleiche (z.B. alle 8 Asse): 1000 Punkte

---

# 4. Das Spiel: Stechen & Zählen
Zusammenfassung: Die Regeln beim Ausspielen der Karten und wie am Ende abgerechnet wird.
Inhalt:
- Stechen Regeln: 1. Farbzwang (gleiche Farbe bedienen). 2. Stichzwang (höher stechen, wenn möglich). 3. Trumpfzwang (wenn Farbe nicht bedienbar, Trumpf spielen; wenn Trumpf liegt, übertrumpfen).
- Zählen: Am Ende werden die Augen der gewonnenen Stiche mit den Meldepunkten addiert.
- Verloren: Erreicht das spielmachende Team sein Gebot nicht, wird der doppelte Gebotswert abgezogen.
`.trim();
