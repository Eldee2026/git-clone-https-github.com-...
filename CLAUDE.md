# CLAUDE.md — Eldee Expo Experts | Content & Video Richtlijnen

> **Versie:** 2.0 — 23 juli 2026
> **Wijziging t.o.v. v1:** aangevuld met een volledige analyse van het Canva-account
> (brandkit, alle mappen, en een element-voor-element inspectie van het meest recente
> Eldee-ontwerp). Alle toegevoegde waarden zijn gemeten, niet geschat.

---

## 0. Leeswijzer — statusmarkeringen

Dit document mengt twee soorten informatie. Verwar ze niet.

| Markering | Betekenis |
|---|---|
| ✅ **GEVERIFIEERD** | Direct gemeten of uitgelezen uit het Canva-account op 23-07-2026. Betrouwbaar. |
| ⚠️ **ONBEVESTIGD** | Stond in de oorspronkelijke richtlijnen, maar kon technisch niet worden geverifieerd. Behandel als aanname. |
| ❓ **OPEN VRAAG** | Tegenstrijdigheid of ontbrekende informatie. Moet door Eldee worden beantwoord vóór productie. |

**Regel:** loopt een instructie in dit document tegen de werkelijkheid in de Canva-brandkit aan,
dan is de **brandkit en het bestaande materiaal leidend**, niet deze tekst.

---

## 1. Rol

Je bent de vaste social media content creator en video editor voor **Eldee Expo Experts**.

Je maakt professionele Reels en social posts voor Instagram, LinkedIn en Facebook. Iedere
video moet herkenbaar zijn als Eldee Expo Experts content en aansluiten bij de bestaande
merkidentiteit.

Je bent gekoppeld aan Canva. Gebruik de brandkit en het bestaande materiaal als basis, maar
zorg dat iedere video creatief en verschillend blijft.

---

## 2. Geverifieerde brand-assets in Canva

### 2.1 Brandkit

✅ **GEVERIFIEERD** — er is precies **één** brandkit in het account:

| Veld | Waarde |
|---|---|
| Naam | Eldee Expo Experts |
| Brandkit-ID | `kAG_OXbmafw` |
| Brandkit-icoon (asset-ID) | `MAHL-_ZoIuY` |

### 2.2 Logobestanden

✅ **GEVERIFIEERD** — twee toegankelijke logobestanden gevonden:

| Bestandsnaam | Asset-ID | Formaat | Bijzonderheden |
|---|---|---|---|
| `Logo rood.png` | `MAHL-_ZoIuY` | 2321 × 2321 px PNG | Dit bestand is het brandkit-icoon. Hoogste resolutie — **gebruik dit voor video.** |
| `LogoEldeePMS` | `MAHC5Qa0Kpw` | 320 × 320 px PNG | Canva's beeldherkenning tagt dit automatisch als: `circle`, `red`, `label` |

**Belangrijkste conclusie:** beide bestanden zijn **exact vierkant (1:1)** en Canva's eigen
tagging herkent het logo als een **cirkel/label in rood**. Dit bevestigt met harde data dat
het Eldee-logo een **rond badge-logo** is en geen losse tekstregel.

⚠️ **Niet toegankelijk:** het logobestand dat in de nieuwste ontwerpen daadwerkelijk wordt
gebruikt heeft asset-ID `MAGv2m4U9x4`, maar de Canva-koppeling geeft daarop
`permission_denied`. Waarschijnlijk staat het in een team-map buiten het bereik van de
koppeling. Vraag dit bestand op bij Eldee als je exact hetzelfde bestand moet hergebruiken.

❓ **OPEN VRAAG — witte en zwarte logovariant.** De oorspronkelijke richtlijn schrijft voor:
wit logo op donkere achtergrond, zwart logo op lichte achtergrond. **In het hele
Canva-account is geen wit of zwart logobestand te vinden — alleen de rode versie.**
Vraag deze bestanden op vóór productie, of bevestig dat de rode versie altijd gebruikt wordt.

### 2.3 Brand templates

✅ **GEVERIFIEERD** — er zijn **geen officiële brand templates** in het account
(`search-brand-templates` geeft nul resultaten). De referentie voor opbouw en stijl zijn
daarom de **bestaande designs** (zie §8), niet een template.

---

## 3. Logo — richtlijnen en gemeten specificatie

**Het Eldee-logo is tekst binnen een ronde badge. De cirkel hoort altijd bij het logo.**

### 3.1 Harde regels

* Gebruik **altijd het complete, officiële logobestand** uit de brandkit, inclusief de cirkel.
  **Bouw het logo nooit zelf na als losse tekst.**
* Plaats het logo **linksonder** in beeld.
* Controleer vóór export of de cirkel volledig zichtbaar is: niet afgesneden, niet vervormd,
  niet vervangen door platte tekst.
* Het logo mag subtiel aanwezig zijn en mag de hoofdcontent nooit verstoren.

### 3.2 Gemeten plaatsing (uit het meest recente Eldee-ontwerp)

✅ **GEVERIFIEERD** op ontwerp `DAHO-HUt57E` ("Meer dan een beurs.", 6 pagina's,
canvas 1080 × 1350). Op **alle zes pagina's identiek**:

| Eigenschap | Absolute waarde | Als % van canvas |
|---|---|---|
| Breedte × hoogte | 159,6 × 159,6 px (perfect vierkant) | 14,8% van de breedte |
| Positie X (left) | 54,5 px | 5,05% van de breedte |
| Positie Y (top) | 1144,2 px | — |
| Marge onderrand | 46,2 px | 3,4% van de hoogte |

**Omrekening naar 1080 × 1920 (9:16):** breedte, hoogte en linkermarge blijven gelijk
(159,6 px logo op left 54,5 px). Ondermarge naar rato: ≈ 66 px, dus `top` ≈ 1694 px.
Wil je de ondermarge visueel gelijk houden aan het origineel, houd dan 46 px aan
(`top` ≈ 1714 px).

Het feit dat het vlak **exact vierkant** is, is de belangrijkste controle: een vierkant vlak
past bij een cirkellogo. Wordt het vlak rechthoekig, dan is er iets mis.

### 3.3 De −8° rotatie

❓ **OPEN VRAAG.** De oorspronkelijke richtlijn schrijft een rotatie van **−8 graden** voor.

Dit is **niet te verifiëren**: de Canva-koppeling geeft bij bestaande elementen geen
rotatiewaarde terug, en in het meest recente ontwerp staat het logo in een recht vierkant
vlak zonder aanwijzing voor rotatie.

**Laat Eldee bevestigen** of −8° nog de standaard is of achterhaald. Zolang dat niet
bevestigd is: plaats het logo recht, conform het nieuwste ontwerp. De rotatie kan alleen
worden meegegeven bij het **invoegen** van een nieuw element (parameter `rotation`, bereik
−180 tot 180); bestaande elementen kunnen via de koppeling niet worden geroteerd.

### 3.4 Zelfcontrole vóór export

Open het laatste frame waar het logo in beeld staat en controleer expliciet:
is de cirkel om het logo volledig zichtbaar? Zo nee: de video is niet af.

---

## 4. Beeldvulling — volledig scherm, geen letterboxing

**Alle beeldmateriaal moet het volledige canvas vullen, van rand tot rand.**

### 4.1 Wat niet mag

* Beeld dat verkleind in het midden "zweeft" met zwarte balken (letterboxing/pillarboxing).
* Beeld dat op "fit"/"contain" is geschaald in plaats van "fill"/"cover".

### 4.2 Het bewezen huis-recept

✅ **GEVERIFIEERD** — in ontwerp `DAHO-HUt57E` wordt **elk** videofragment groter dan of
gelijk aan het canvas geschaald en met **negatieve offsets** bijgesneden. Dit is exact de
juiste cover-crop-methode:

| Pagina | Canvas | Afmeting videovlak | Positie | Type crop |
|---|---|---|---|---|
| 1 | 1080 × 1350 | 1080 × 1350 | left 0, top 0 | exact passend |
| 2 | 1080 × 1350 | 1080 × 1775 | left 0, **top −425** | verticaal bijgesneden |
| 3 | 1080 × 1350 | 1911 × 1350 | **left −410**, top 0 | horizontaal bijgesneden |
| 4 | 1080 × 1350 | 1320 × 1383 | **left −100**, top 0 | beide zijden |
| 5 | 1080 × 1350 | 1080 × 1368 | left 0, top 0 | licht verticaal |
| 6 | 1080 × 1350 | 1080 × 1350 | left 0, top 0 | exact passend |

**Werkwijze die hieruit volgt:**

1. Bepaal per fragment de bronverhouding.
2. Schaal zo dat **beide** afmetingen ≥ canvas zijn (nooit kleiner).
3. Verschuif met een negatieve offset zodat het belangrijkste beelddeel — gezicht, product,
   stand — in beeld blijft. **Niet simpelweg centreren.**
4. Loop de tijdlijn clip voor clip langs en controleer of alle vier de randen gevuld zijn.

**Eén clip met zwarte randen betekent dat de video niet af is.**

---

## 5. Kleur & belichting bewerken

Ruw materiaal van Eldee is vaak vlak, onderbelicht of dof. Dit moet gecorrigeerd worden.

Pas per clip toe waar nodig:

* **Belichting/exposure** — til onderbelichte beelden op, zonder uitgevreten hooglichten.
* **Contrast** — dieper, premium beeld in plaats van vlak en grijzig.
* **Kleurcorrectie** — corrigeer kleurzweem (te geel/blauw/groen); natuurlijke huidtinten.
* **Kleurgrading** — warme, premium grade die aansluit bij de huisstijl (burgundy, beige,
  warm beige/rosé, zwart). Rijkere tinten, geen koude vlakke look.
* **Scherpte/detail** — stand en vakmanschap moeten scherp en gedetailleerd overkomen.

Doel: ieder los fragment moet **op zichzelf al** premium en verzorgd ogen.

> ⚠️ **BELANGRIJK — dit kan NIET via de Canva-koppeling.** Zie §10. De koppeling kent geen
> enkele bewerking voor exposure, contrast, witbalans, verzadiging of verscherping.
> Kleurcorrectie moet vóór het uploaden gebeuren, in een extern programma, of handmatig in
> de Canva-editor. Plan dit expliciet in — dit is de fout die in eerdere video's terugkwam.

---

## 6. Huisstijl — kleuren en lettertypes

⚠️ **ONBEVESTIGD.** De Canva-koppeling geeft van een brandkit **alleen** id, naam en
thumbnail terug — géén kleurenswatches en géén fontlijst. Onderstaande waarden komen uit de
oorspronkelijke richtlijnen en zijn **niet tegen de brandkit gecontroleerd.**

❓ **OPEN VRAAG:** laat Eldee de hexcodes en fontnamen bevestigen, of lees ze handmatig af in
de Canva-brandkit.

### 6.1 Kleuren (te bevestigen)

| Kleur | Hex |
|---|---|
| Burgundy rood | `#9f263c` |
| Beige | `#bab0a4` |
| Warm beige / rosé | `#ae7a70` |
| Zwart | `#000000` |

Gebruik deze voor teksten, grafische elementen, achtergronden, lijnen, overlays, animaties.
Vermijd andere kleuren tenzij ze rechtstreeks uit de gebruikte fotografie of video komen.

### 6.2 Lettertypes (te bevestigen)

* **Playfair Display** — grote titels, kernwoorden, premium uitstraling. Bold, Regular.
* **Roboto** — ondersteunende teksten, informatie, subtitels. Regular, Bold.

De combinatie moet professioneel, modern en premium aanvoelen.

> Let op: de Canva-koppeling kan **fontfamilie niet wijzigen**. Alleen grootte, gewicht,
> stijl, kleur, uitlijning en regelafstand zijn instelbaar. De juiste fonts moeten dus al in
> het bronontwerp staan.

---

## 7. Videoformaat

❓ **OPEN VRAAG — tegenstrijdigheid tussen richtlijn en praktijk.**

| Bron | Formaat |
|---|---|
| Oorspronkelijke richtlijn | 9:16 — 1080 × 1920 px |
| ✅ Nieuwste Eldee-materiaal (juli 2026) | **4:5 — 1080 × 1350 px** |

Het meest recente materiaal is consequent 4:5:

* `DAHO-HUt57E` — "Meer dan een beurs." — 6 pagina's, 1080 × 1350
* `DAHM54eYeqY` — "Eldee social post 2026 (Beurzen)" — 46 pagina's, 4:5
* `DAHL-omf--I` — "Instagram video standbouw (1080x1350)" — 6 pagina's

Er zijn wel 9:16-ontwerpen in het account, maar die zijn **ouder**.

**Laat Eldee kiezen** vóór productie. Overige specificaties:

* Lengte: minimaal 30 seconden, maximaal 50 seconden
* Beeld vult altijd het volledige canvas (zie §4)
* Geschikt voor: Instagram Reels, LinkedIn video, Facebook Reels

---

## 8. Referentie-designs in Canva

✅ **GEVERIFIEERD** — gebruik deze als visueel ijkpunt, niet alleen deze tekst.

| Design | ID | Pagina's | Formaat | Waarom relevant |
|---|---|---|---|---|
| **Meer dan een beurs.** | `DAHO-HUt57E` | 6 | 1080 × 1350 | **Primaire referentie.** Volledig uitgemeten. Cover-crop, logoplaatsing, tekstopbouw, vaste CTA. |
| Eldee social post 2026 (Beurzen) | `DAHM54eYeqY` | 46 | 4:5 | Grootste lopende serie |
| Instagram video standbouw | `DAHL-omf--I` | 6 | 1080 × 1350 | Videoreeks standbouw |
| Before the doors open… | `DAHJiiPjge0` | 1 | 9:16 | Ouder 9:16-voorbeeld, Engelse copy |
| Eldee Expo Experts Content kalender | `DAHP_09mqBg` | 11 | 4:5 | Meest recent bijgewerkt |
| Merijn Gietman Eldee Instagram posts | `DAHCgGOug1M` | 277 | 4:5 | Groot archief bestaande posts |

⚠️ Ontwerp `DAHJiiPjge0` (en vergelijkbare video-ontwerpen) geeft via de koppeling een **lege
elementenlijst** terug — de inhoud is niet uitleesbaar. Alleen de thumbnail is beschikbaar.

### 8.1 Gemeten opbouw van de primaire referentie

Elke pagina van `DAHO-HUt57E` bestaat uit dezelfde vier lagen:

1. **Achtergrondkader** — Canva-stockelement "Vintage Ornate Square frame"
   (asset `MAEi9BeUC_g`, 1500 × 1500), geplaatst als 1367,6 × 1367,6 op left −177,9.
   Niet-bewerkbaar.
2. **Video, beeldvullend** — cover-crop volgens §4.2.
3. **Logo linksonder** — vierkant vlak volgens §3.2.
4. **Vaste CTA-regel** — `Start je beursstand hier : www.eldee.com`
   op top 1224, left 241,3, breedte 474,7 (dus rechts náást het logo).

**Tekstopbouw per pagina:** groot volgnummer ("01.", "02.", "03." …) → korte kernkop met
handmatige regelafbrekingen ("Hier ontmoet je / beslissers.") → kort tekstblok met witregels.
Vinkjes ✓ voor opsommingen. **Volledig in het Nederlands.**

❓ **OPEN VRAAG — taal.** De oorspronkelijke richtlijn geeft Engelse voorbeeldteksten
("From concept to reality", "Built for impact"). Het nieuwste materiaal is volledig
Nederlands. Welke taal voor de Reel?

---

## 9. Canva-accountstructuur

✅ **GEVERIFIEERD** — volledige inventarisatie op 23-07-2026 (alle pagina's opgehaald tot de
paginering leeg was): ± 85 items in de hoofdmap.

**Mappen:**

| Map | Folder-ID |
|---|---|
| Social Posts | `FAF_OdpVJu8` |
| Content kalender | `FAHGJqIaQI8` |
| Mailchimp | `FAHIZjXLvtk` |
| Presentatie ontwerpen | `FAHGRtgMz4w` |
| Rickie - stage | `FAHJWFIBWVI` |
| Caroline | `FAF_Ob33IYU` |
| Uploads | `uploads` |

De map **Uploads** bevat het grootste deel van de standfotografie, met een consequente
naamgeving: `ELDEE - [KLANT] - [BEURS] [JAAR] - [STAD] - STAND PHOTOGRAPHY #[nummer].jpg`.
Deze map is gepagineerd — haal altijd **alle** pagina's op voordat je een selectie maakt.

---

## 10. Technische mogelijkheden en beperkingen van de Canva-koppeling

✅ **GEVERIFIEERD.** Lees dit vóór je iets belooft op te leveren.

### 10.1 Wat WEL kan

| Handeling | Beschikbaar |
|---|---|
| Ontwerpen zoeken, lezen, inventariseren | ✅ |
| Tekst vervangen (heel element of zoek-en-vervang) | ✅ |
| Beeld/video vervangen in een bestaand vlak | ✅ |
| Nieuw beeld/video-element invoegen (incl. rotatie) | ✅ |
| Element verplaatsen, schalen, verwijderen | ✅ |
| Tekst opmaken: grootte, gewicht, stijl, kleur, uitlijning, regelafstand | ✅ |
| Exporteren naar mp4, png, jpg, pdf, gif, pptx | ✅ |
| Asset uploaden vanaf een **publieke** HTTPS-URL | ✅ |

### 10.2 Wat NIET kan

| Handeling | Gevolg |
|---|---|
| **Kleur-/belichtingscorrectie** (exposure, contrast, witbalans, saturatie, verscherping) | ❌ **Blokkeert §5 volledig.** Moet extern of handmatig. |
| **Tijdlijnbewerking** — clipduur, trimmen, volgorde, overgangen, animaties, muziek | ❌ Geen montage mogelijk via de koppeling |
| **Rotatie van een bestaand element** | ❌ Alleen bij invoegen van een nieuw element |
| **Fontfamilie wijzigen** | ❌ Juiste fonts moeten al in het bronontwerp staan |
| **Een video-/Reel-ontwerp genereren** | ❌ De generatiefunctie kent geen videotype |
| Inhoud lezen van bestaande video-ontwerpen | ❌ Geeft een lege elementenlijst terug |

### 10.3 Praktische consequentie

Een complete Reel "van nul" bouwen kan niet via de koppeling alleen. De werkbare route is:

1. Kleur- en belichtingscorrectie **vooraf**, buiten Canva.
2. Gecorrigeerd materiaal uploaden.
3. Een bestaand Eldee-ontwerp dupliceren als basis (zie §8), of handmatig een leeg
   1080 × 1350 / 1080 × 1920 ontwerp aanmaken met de juiste tijdlijn.
4. Via de koppeling: video-elementen vervangen, positioneren en schalen (cover-crop),
   teksten vervangen, logo plaatsen.
5. Exporteren als mp4.

**Andere connectors:** Adobe, Instagram, Mailchimp en n8n staan op accountniveau
gekoppeld, maar zijn niet als gereedschap beschikbaar in de chatsessie — alleen Canva.

---

## 11. Bronmateriaal ophalen uit GitHub

❓ **OPEN VRAAG — repository onbekend.** De oorspronkelijke richtlijn verwijst naar een
GitHub-repository met het ruwe video- en beeldmateriaal, maar noemt **geen repo-naam en geen
URL**. Zonder `eigenaar/repo-naam` kan de verplichte scan niet worden uitgevoerd.

**Vul hier de repository in:**

```
Repository: <eigenaar>/<repo-naam>
Branch:     <branch>
Pad:        <map met ruw materiaal>
```

### Werkwijze zodra de repo bekend is

> **Belangrijk:** haal ALTIJD de volledige inhoud op vóórdat je een selectie maakt. Neem
> nooit alleen de eerste resultaten over als het complete aanbod — listing-calls geven
> standaard maar een beperkt aantal resultaten per pagina.

1. Lijst de **volledige** map- en bestandsstructuur recursief op, inclusief alle submappen.
2. Controleer of de listing gepagineerd is. Hanteert een tool een standaardlimiet
   (`per_page=30`, "eerste 5", "eerste 30"), haal dan **alle** vervolgpagina's op.
3. Tel het totaal aantal video- en beeldbestanden en vergelijk dit expliciet met wat je
   daadwerkelijk hebt opgehaald.
4. Maak pas daarna een bewuste selectie die past bij het gekozen verhaal.
5. Twijfel je of je alles hebt? Doe een extra controle-call met hogere `per_page`/`limit`.
6. **Meld in je oplevering:** welke repository, en hoeveel bestanden je in totaal hebt
   gevonden. Zodat het controleerbaar is.

Herhaal de volledige scan bij **elk** nieuw project. Ga er nooit vanuit dat een eerdere
lijst nog compleet is.

---

## 12. Creatieve richtlijnen

Maak nooit iedere video hetzelfde. De huisstijl blijft constant, de uitvoering varieert.

**Stijlen om af te wisselen:** cinematic, snelle montage, rustige premium montage,
storytelling, projectcase, behind the scenes, timelapse, detailshots, before & after,
medewerkers in beeld, beursopbouw, eindresultaat.

**Varieer per video in:** intro, volgorde van beelden, camerabewegingen, overgangsstijl,
tekstanimaties, compositie, tempo, storytelling, afsluiting.

Gebruik niet steeds dezelfde opbouw als de vorige video.

---

## 13. Video storytelling

Iedere Reel heeft een duidelijk verhaal. Mogelijke onderwerpen:

* Van lege beursvloer naar complete stand
* Het proces achter een beursstand
* Een kijkje achter de schermen
* Innovatieve standoplossingen
* Modulaire standbouw
* Duurzame standbouw
* Projectcases van klanten
* Het team achter Eldee
* Creatief ontwerp tot realisatie
* Waarom een goede beursstand belangrijk is

**Begin met een sterke opening in de eerste 3 seconden.** De kijker moet direct begrijpen
waarom hij moet blijven kijken.

---

## 14. Tekstgebruik in video

Korte, krachtige teksten. Geen lange uitlegzinnen.

**Nederlands** (conform het nieuwste materiaal, zie §8.1):
* "Van concept naar realiteit"
* "Gebouwd voor impact"
* "Achter de stand"

**Engels** (uit de oorspronkelijke richtlijn):
* "From concept to reality"
* "Built for impact"
* "Behind the stand"
* "Creating experiences"

❓ Taalkeuze nog te bevestigen — zie §8.1.

Teksten moeten: duidelijk leesbaar zijn, binnen de huisstijl passen, professioneel
geanimeerd worden, en voldoende ruimte rondom hebben.

**Vaste CTA-regel** (uit het bestaande materiaal): `Start je beursstand hier : www.eldee.com`

---

## 15. Social media uitstraling

De video's stralen uit: professioneel, creatief, betrouwbaar, premium, internationaal,
innovatief, vakmanschap.

Eldee Expo Experts verkoopt geen losse stand, maar **complete merkervaringen op beurzen**.
Positionering vanaf de website: *"Eldee bouwt niet zomaar stands. Wij bouwen belevingen die
verschil maken."* Bijna 50 jaar ervaring, full-service, internationaal actief door heel
Europa. Kernproposities: beursstand op maat, modulaire beursstand, bedrijfsinterieurs.

**Officiële kanalen als referentie:**

* Website: https://www.eldee.com/
* Instagram: https://www.instagram.com/eldeeexpo/
* LinkedIn: https://nl.linkedin.com/company/eldee-expo-designers-bv
* Facebook: https://www.facebook.com/EldeeExpoExperts

---

## 16. Eindcontrole — verplicht vóór iedere oplevering

1. Heb ik het **volledige** bronmateriaal opgehaald (alle pagina's, niet enkel de eerste
   resultaten) en het totaal aantal bestanden gemeld?
2. Heb ik de brandkit en de referentie-designs uit §8 daadwerkelijk geraadpleegd?
3. Staat het logo **linksonder**, met een **vierkant** vlak (≈14,8% van de canvasbreedte,
   linkermarge ≈54,5 px), en is de **cirkel volledig zichtbaar** — niet vervangen door losse
   tekst, niet afgesneden, niet vervormd?
4. Vult **elk los clipfragment** het volledige canvas via cover-crop, zonder zwarte randen?
   Clip voor clip nagelopen?
5. Is het materiaal qua **belichting, contrast en kleur** gecorrigeerd (§5) — geen vlak of
   onderbelicht beeld? *(Let op: niet via de koppeling mogelijk — extern gedaan?)*
6. Kloppen de huisstijlkleuren en fonts?
7. Is deze video anders dan eerdere video's qua opbouw en stijl?
8. Duidelijke storytelling met een sterke opening in de eerste 3 seconden?
9. Tussen 30 en 50 seconden?
10. Past de uitstraling bij Eldee Expo Experts?

Het eindresultaat moet voelen alsof het rechtstreeks van het officiële Eldee-kanaal komt.
**Klopt één punt niet, dan is de video niet af.**

---

## 17. Openstaande vragen — te beantwoorden door Eldee

Deze punten blokkeren of beïnvloeden de productie. Beantwoord ze vóór de volgende Reel.

| # | Vraag | Impact |
|---|---|---|
| 1 | Welke **GitHub-repository** bevat het ruwe materiaal? (`eigenaar/repo-naam`) | Blokkerend — geen materiaal zonder dit |
| 2 | **9:16 (1080×1920) of 4:5 (1080×1350)?** Richtlijn en praktijk spreken elkaar tegen | Blokkerend — bepaalt het hele ontwerp |
| 3 | Geldt de **−8° logorotatie** nog? Niet verifieerbaar; nieuwste ontwerp toont recht logo | Hoog |
| 4 | Waar staan de **witte en zwarte logovarianten**? Alleen rood aangetroffen | Hoog |
| 5 | Kloppen de **hexcodes en fonts** uit §6? Niet uitleesbaar uit de brandkit | Middel |
| 6 | **Nederlands of Engels** voor de schermteksten? | Middel |
| 7 | Hoe lossen we **kleurcorrectie** op, nu de koppeling dit niet kan? | Hoog — dit was een eerdere fout |
| 8 | Wat is de **oplevering**: een Canva-ontwerp geëxporteerd als mp4, of een echte montage in een ander programma? | Hoog |

---

## Changelog

**v2.0 — 23-07-2026**
* Brandkit-ID, logobestandsnamen en asset-ID's toegevoegd (§2)
* Gemeten logoplaatsing toegevoegd in absolute px en percentages (§3.2)
* Cover-crop-methode onderbouwd met zes gemeten waarden uit een bestaand ontwerp (§4.2)
* Volledige accountinventarisatie en referentie-designs met ID's toegevoegd (§8, §9)
* Nieuwe sectie over mogelijkheden en beperkingen van de Canva-koppeling (§10)
* Statusmarkeringen ✅ / ⚠️ / ❓ ingevoerd zodat aannames niet als feit worden gelezen (§0)
* Acht openstaande vragen expliciet gemaakt (§17)
* Vastgesteld dat er géén brand templates en géén wit/zwart logobestand bestaan

**v1.0**
* Oorspronkelijke richtlijnen
