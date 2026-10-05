# Eldee Expo Experts – Mailing Generator

## 1. DOEL VAN DIT PROJECT

Dit project wordt gebruikt om automatisch professionele HTML-mailings voor **Eldee Expo Experts** te maken.

De gebruiker levert één of meerdere HTML-bestanden aan met de inhoud van een mailing.

Claude Code moet deze inhoud verwerken in de officiële Eldee-mailtemplate en vervolgens een complete, technisch correcte en responsive HTML-mailing maken.

### BELANGRIJK

**Dit project maakt uitsluitend mailings.**

Claude Code mag:

- HTML-bestanden lezen;
- HTML-bestanden maken;
- HTML-bestanden aanpassen;
- afbeeldingen controleren;
- links controleren;
- previews maken;
- screenshots maken;
- technische controles uitvoeren;
- fouten herstellen;
- bestanden in de outputmap plaatsen.

Claude Code mag NOOIT:

- een mailing versturen;
- een mailing inplannen;
- een mailing publiceren;
- een mailing naar Mailchimp uploaden;
- contacten benaderen;
- e-mails verzenden;
- externe mailingacties uitvoeren.

Het eindresultaat is altijd een **bestand dat door de gebruiker zelf kan worden gecontroleerd en eventueel later handmatig in een mailingplatform kan worden gebruikt.**

---

# 2. PROJECTSTRUCTUUR

Gebruik de volgende structuur:

```text
ELDEE-MAILING/
│
├── CLAUDE.md
│
├── templates/
│   ├── Template NL.html
│   └── Template BL.html
│
├── input/
│   └── [aangeleverde HTML-bestanden]
│
├── output/
│   └── [definitieve mailings]
│
├── previews/
│   ├── desktop/
│   └── mobile/
│
└── archive/
    └── [optionele eerdere versies]
```

Als mappen nog niet bestaan, maak ze aan.

Gebruik altijd de bestaande templates uit:

```text
templates/
```

Gebruik de aangeleverde HTML-bestanden uit:

```text
input/
```

Plaats definitieve bestanden in:

```text
output/
```

Plaats visuele previews in:

```text
previews/
```

---

# 3. DE TWEE OFFICIËLE TEMPLATES

Er zijn twee officiële Eldee-mailtemplates.

## Template NL

Bestand:

```text
templates/Template NL.html
```

Gebruik deze template voor Nederlandse mailings.

## Template BL

Bestand:

```text
templates/Template BL.html
```

Gebruik deze template voor Engelse mailings.

De templates zijn de officiële bron voor de vormgeving.

Gebruik de templates niet alleen als inspiratie.

**Gebruik daadwerkelijk de HTML-structuur van de template als basis voor de nieuwe mailing.**

---

# 4. TEMPLATE IS LEIDEND

De aangeleverde HTML bevat voornamelijk de inhoud.

De officiële Eldee-template bepaalt de vormgeving.

Daarom geldt:

```text
INPUT HTML
    ↓
INHOUD EXTRAHEREN
    ↓
TAAL BEPALEN
    ↓
JUISTE ELDEE TEMPLATE SELECTEREN
    ↓
INHOUD IN TEMPLATE PLAATSEN
    ↓
CONTROLEREN
    ↓
PREVIEWEN
    ↓
DEFINITIEVE HTML
```

Kopieer niet zomaar de oorspronkelijke layout van de input.

Wanneer de input bijvoorbeeld een compleet andere kleurstelling of structuur heeft:

**behoud de inhoud, maar gebruik de Eldee-template voor de uiteindelijke vormgeving.**

---

# 5. TAALHERKENNING

Bepaal automatisch de taal van iedere aangeleverde mailing.

Controleer:

- zichtbare tekst;
- headings;
- buttons;
- CTA's;
- onderwerp;
- previewtekst;
- footer;
- eventuele `lang`-attribute.

## Nederlands

Gebruik:

```text
Template NL.html
```

## Engels

Gebruik:

```text
Template BL.html
```

Gebruik nooit Template NL voor een Engelse mailing.

Gebruik nooit Template BL voor een Nederlandse mailing.

Als de taal duidelijk herkenbaar is, stel hierover geen vraag aan de gebruiker.

---

# 6. INPUT ANALYSEREN

Wanneer de gebruiker een HTML-bestand aanlevert:

Lees eerst de volledige HTML voordat je wijzigingen maakt.

Analyseer minimaal:

### Tekst

- onderwerp;
- titel;
- headings;
- subheadings;
- bodytekst;
- CTA's;
- buttonteksten;
- footer;
- eventuele verborgen previewtekst.

### Afbeeldingen

- `<img>`;
- `src`;
- `srcset`;
- `alt`;
- width;
- height;
- afbeeldingslinks.

### Links

- `<a>`;
- `href`;
- CTA-links;
- button-links;
- links achter afbeeldingen;
- socialmedia-links.

### Structuur

Bepaal:

- welke secties bij elkaar horen;
- welke afbeelding bij welke tekst hoort;
- welke CTA bij welke content hoort;
- welke elementen herhaald worden.

---

# 7. ONDERWERP HERKENNEN

Probeer het onderwerp automatisch te vinden.

Controleer in deze volgorde:

1. `<title>`
2. `<meta name="subject">`
3. bestaande subjectvelden
4. bestaande preheader/subjectdata
5. duidelijke hoofdtitel
6. bestandsnaam
7. eerste relevante inhoud

Als er een duidelijk bestaand onderwerp is:

**behoud het.**

Verzin geen nieuw onderwerp wanneer het originele onderwerp duidelijk aanwezig is.

Als er geen onderwerp aanwezig is:

maak zelf een kort, professioneel onderwerp op basis van de inhoud.

Het onderwerp moet:

- duidelijk;
- professioneel;
- relevant;
- niet overdreven commercieel;
- passend bij Eldee.

---

# 8. PREVIEWTEKST / PREHEADER

Zoek automatisch naar bestaande previewtekst.

Controleer onder andere:

- hidden preheader;
- `<span>`;
- `display:none`;
- `visibility:hidden`;
- meta-informatie;
- bestaande preheader-elementen.

Als er een bestaande previewtekst is:

**behoud deze.**

Als er geen previewtekst aanwezig is:

genereer een korte previewtekst op basis van de belangrijkste boodschap.

De previewtekst moet:

- aansluiten op het onderwerp;
- niet exact hetzelfde zijn;
- kort zijn;
- natuurlijk klinken;
- dezelfde taal gebruiken.

Plaats deze technisch correct in de uiteindelijke e-mail HTML.

---

# 9. INHOUD NIET HERSCHRIJVEN

De oorspronkelijke tekst is leidend.

Verander de tekst niet zomaar.

Niet:

- herschrijven;
- vertalen;
- marketingteksten verbeteren;
- claims veranderen;
- informatie toevoegen;
- informatie verwijderen.

Technische correcties zijn wel toegestaan.

Bijvoorbeeld:

- HTML repareren;
- ontbrekende tags toevoegen;
- spacing aanpassen;
- tekst correct in template plaatsen;
- responsive problemen oplossen.

---

# 10. AFBEELDINGEN

Controleer iedere afbeelding.

Controleer:

- `src`;
- URL;
- HTTPS;
- `alt`;
- breedte;
- hoogte;
- verhouding;
- responsive gedrag;
- eventuele link.

Behoud originele afbeeldings-URL's wanneer deze geldig zijn.

Verwijder geen afbeeldingen zonder goede reden.

Verander de afbeelding zelf niet.

Verander geen crop of verhouding tenzij dit technisch noodzakelijk is om de mailing correct weer te geven.

---

# 11. AFBEELDINGSFOUTEN

Wanneer een afbeelding niet bereikbaar is:

- probeer vast te stellen waarom;
- controleer of de URL verkeerd is;
- controleer of een alternatieve URL in de input staat.

Verzin nooit een nieuwe afbeelding-URL.

Als een afbeelding niet gecontroleerd kan worden, vermeld dit in het eindrapport.

Laat de originele URL staan tenzij deze aantoonbaar ongeldig is.

---

# 12. ALT-TEKSTEN

Controleer iedere afbeelding op `alt`.

Wanneer een alt-tekst ontbreekt:

- voeg een korte beschrijving toe wanneer dit logisch mogelijk is;
- gebruik geen overdreven lange alt-teksten.

Decoratieve elementen kunnen een lege `alt=""` krijgen wanneer dit passend is.

---

# 13. LINKS

Controleer alle hyperlinks.

Controleer:

- `href`;
- volledige URL;
- correcte syntax;
- juiste bestemming;
- buttonlinks;
- afbeeldingslinks.

Verwijder geen links.

Behoud bestaande trackingparameters.

Voeg zelf geen trackingparameters toe tenzij de gebruiker hier expliciet om vraagt.

---

# 14. BUTTONS

Iedere button moet:

- klikbaar zijn;
- de originele bestemming behouden;
- de juiste CTA-tekst bevatten;
- de styling van de gekozen template gebruiken;
- mobiel correct werken.

Controleer extra goed op lange CTA-teksten.

---

# 15. ELDEE DESIGN BEHOUDEN

Behoud de officiële template:

- kleuren;
- fonts;
- font sizes;
- header;
- logo;
- contentbreedte;
- buttons;
- spacing;
- footer;
- socialmedia;
- borders;
- border radius;
- achtergrond;
- responsive structuur.

Maak geen nieuw design.

Het resultaat moet eruitzien alsof de mailing oorspronkelijk voor Eldee in de officiële template is gemaakt.

---

# 16. E-MAIL HTML

De HTML moet geschikt zijn voor e-mailclients.

Gebruik waar nodig:

- tables;
- inline CSS;
- e-mailveilige CSS;
- media queries;
- correcte image attributes.

Vermijd:

- JavaScript;
- webapp-functionaliteit;
- onnodige frameworks;
- complexe CSS die slecht ondersteund wordt.

---

# 17. RESPONSIVE DESIGN

De mailing moet geschikt zijn voor:

### Desktop

- Outlook;
- Gmail;
- Apple Mail;
- webmail.

### Mobiel

- iPhone;
- Android;
- Gmail app;
- Apple Mail.

Controleer:

- contentbreedte;
- afbeeldingen;
- buttons;
- tekst;
- padding;
- marges;
- kolommen;
- overflow;
- footer.

---

# 18. DESKTOP PREVIEW

Wanneer de benodigde tools beschikbaar zijn:

render de definitieve HTML op desktopformaat.

Gebruik bij voorkeur ongeveer:

```text
1200px viewport
```

Controleer visueel:

- header;
- logo;
- content;
- afbeeldingen;
- tekst;
- buttons;
- footer;
- achtergrond;
- uitlijning;
- spacing.

Maak daarna:

```text
previews/desktop/
```

met bijvoorbeeld:

```text
Eldee_Mailing_Desktop.png
```

---

# 19. MOBILE PREVIEW

Render de definitieve HTML op minimaal één mobiele viewport.

Gebruik bij voorkeur:

```text
375px
```

en indien mogelijk:

```text
390px
```

Controleer:

- geen horizontale overflow;
- afbeeldingen passen;
- buttons passen;
- tekst is leesbaar;
- headings zijn correct;
- spacing is correct;
- footer werkt;
- kolommen stapelen correct;
- niets wordt afgesneden.

Maak daarna:

```text
previews/mobile/
```

met bijvoorbeeld:

```text
Eldee_Mailing_Mobile.png
```

---

# 20. VISUELE CONTROLE

Een preview is geen eindresultaat.

Gebruik de preview om fouten te vinden.

Wanneer je bijvoorbeeld ziet:

- afbeelding te breed;
- button buiten beeld;
- tekst afgesneden;
- verkeerde spacing;
- kolom verkeerd gestapeld;
- footer kapot;
- content buiten container;

dan:

1. pas de HTML aan;
2. render opnieuw;
3. controleer opnieuw;
4. maak de definitieve preview.

Herhaal dit totdat de mailing correct is.

---

# 21. HTML VALIDATIE

Controleer de definitieve HTML.

Controleer onder andere:

- HTML syntax;
- `<html>`;
- `<head>`;
- `<body>`;
- `<table>`;
- `<tr>`;
- `<td>`;
- `<a>`;
- `<img>`;
- CSS;
- media queries;
- charset;
- viewport;
- language;
- title;
- preheader.

Controleer specifiek op:

- dubbele `<html>`;
- dubbele `<body>`;
- ongewenste CSS;
- oude content;
- kapotte tags;
- placeholders;
- testcontent.

---

# 22. PLACEHOLDER CONTROLE

Zoek vóór oplevering naar:

```text
Lorem ipsum
placeholder
IMAGE HERE
LINK HERE
INSERT TEXT
TEST
TODO
FIXME
```

Verwijder deze wanneer ze geen bewust onderdeel van de mailing zijn.

---

# 23. OUDE TEMPLATECONTENT

De templates kunnen voorbeeldcontent bevatten.

Wanneer je nieuwe content invoegt:

verwijder oude voorbeeldcontent die niet meer relevant is.

Laat nooit per ongeluk oude:

- afbeeldingen;
- teksten;
- buttons;
- links;
- headings;

in de definitieve mailing staan.

---

# 24. FOOTER

Gebruik de footer van de juiste Eldee-template.

Controleer:

- logo;
- bedrijfsinformatie;
- website;
- socialmedia;
- unsubscribe-functionaliteit indien aanwezig.

Verander de footer niet onnodig.

---

# 25. HTML LANG

Zet de taal correct.

Nederlands:

```html
<html lang="nl">
```

Engels:

```html
<html lang="en">
```

---

# 26. BESTANDSNAAM

Gebruik duidelijke bestandsnamen.

Nederlandse mailing:

```text
output/Eldee_Mailing_NL.html
```

Engelse mailing:

```text
output/Eldee_Mailing_EN.html
```

Wanneer meerdere mailings worden verwerkt, gebruik een unieke naam gebaseerd op de mailing.

Bijvoorbeeld:

```text
output/Eldee_Mailing_NL_Intertraffic.html
```

of:

```text
output/Eldee_Mailing_EN_IFAT.html
```

Gebruik geen onduidelijke namen zoals:

```text
final.html
final2.html
final-final.html
new.html
test.html
```

---

# 27. NOOIT VERSTUREN

Dit is een harde regel.

Claude Code mag **NOOIT**:

- een e-mail versturen;
- een mailing versturen;
- een mailing plannen;
- Mailchimp openen om een campagne te verzenden;
- een campagne publiceren;
- contacten importeren;
- contacten wijzigen;
- ontvangers benaderen;
- API's gebruiken om een mailing te versturen;
- SMTP gebruiken;
- e-maildiensten gebruiken om daadwerkelijk te verzenden.

De workflow eindigt altijd bij:

```text
KLAAR HTML-BESTAND
+
DESKTOP PREVIEW
+
MOBILE PREVIEW
```

De gebruiker beslist zelf wat daarna gebeurt.

---

# 28. GEEN EXTERNE ACTIES

De standaardworkflow werkt lokaal binnen het project.

Gebruik geen externe services om de mailing automatisch te publiceren of versturen.

Externe URL's uit de mailing mogen wel worden gecontroleerd wanneer dat noodzakelijk is voor technische validatie.

Maar:

**geen verzending en geen publicatie.**

---

# 29. OUTPUT

Na verwerking moeten minimaal deze bestanden beschikbaar zijn:

```text
output/
    Eldee_Mailing_NL.html

previews/
    desktop/
        Eldee_Mailing_Desktop.png
    mobile/
        Eldee_Mailing_Mobile.png
```

Voor Engelse mailings:

```text
output/
    Eldee_Mailing_EN.html
```

---

# 30. EINDRAPPORT

Na iedere mailing geef je een kort rapport.

Gebruik:

```text
ELDEE MAILING KLAAR

Taal:
[Nederlands / Engels]

Template:
[Template NL / Template BL]

Onderwerp:
[...]

Previewtekst:
[...]

HTML:
[bestandsnaam]

Desktop preview:
[bestandsnaam]

Mobile preview:
[bestandsnaam]

Controle:
✓ HTML gecontroleerd
✓ Afbeeldingen gecontroleerd
✓ Links gecontroleerd
✓ Desktop gecontroleerd
✓ Mobiel gecontroleerd
✓ Template gecontroleerd

Verzonden:
NEE – bestand is uitsluitend aangemaakt.
```

---

# 31. ALS EEN CONTROLE NIET MOGELIJK IS

Wanneer een bepaalde test technisch niet beschikbaar is:

doe niet alsof deze test is uitgevoerd.

Geef bijvoorbeeld:

```text
⚠ Mobile rendering kon niet automatisch worden uitgevoerd omdat er geen browser/renderingtool beschikbaar is.
```

Blijf wel de overige controles uitvoeren.

---

# 32. WERKWIJZE BIJ EEN NIEUWE MAILING

Wanneer de gebruiker zegt:

> Maak deze mailing

voer automatisch uit:

### Stap 1
Bekijk `input/`.

### Stap 2
Lees het aangeleverde HTML-bestand.

### Stap 3
Analyseer de inhoud.

### Stap 4
Bepaal de taal.

### Stap 5
Selecteer de juiste template.

### Stap 6
Analyseer onderwerp en preheader.

### Stap 7
Extraheer tekst, afbeeldingen en links.

### Stap 8
Bouw de mailing in de Eldee-template.

### Stap 9
Controleer HTML.

### Stap 10
Controleer afbeeldingen.

### Stap 11
Controleer links.

### Stap 12
Controleer desktop.

### Stap 13
Controleer mobiel.

### Stap 14
Los gevonden problemen op.

### Stap 15
Render opnieuw indien nodig.

### Stap 16
Maak desktop- en mobiele previews.

### Stap 17
Plaats definitieve bestanden in `output/` en `previews/`.

### Stap 18
Geef het eindrapport.

### Stap 19

**STOP.**

Verstuur of publiceer niets.

---

# 33. COMMANDO'S

Wanneer mogelijk mogen de volgende natuurlijke opdrachten worden gebruikt:

## Nieuwe mailing

```text
Maak de mailing uit input/
```

## Specifiek bestand

```text
Maak een mailing van input/mailing.html
```

## Alleen controleren

```text
Controleer de mailing
```

## Preview opnieuw maken

```text
Maak de previews opnieuw
```

## HTML controleren

```text
Controleer de HTML op e-mailcompatibiliteit
```

## Mobiele controle

```text
Controleer de mobiele versie
```

## Desktopcontrole

```text
Controleer de desktopversie
```

Deze opdrachten mogen geen mailing versturen.

---

# 34. PRIORITEIT

Wanneer verschillende eisen met elkaar botsen, gebruik deze volgorde:

1. Inhoud correct behouden
2. Juiste Eldee-template
3. Technisch correcte HTML
4. Correcte links en afbeeldingen
5. Responsive gedrag
6. Visuele kwaliteit
7. Optimalisatie

Verander inhoud nooit alleen om een designprobleem op te lossen.

---

# 35. ABSOLUTE REGELS

Deze regels mogen nooit worden genegeerd:

**1. Nederlands = Template NL**

**2. Engels = Template BL**

**3. Input HTML = inhoud**

**4. Eldee-template = design**

**5. Niet opnieuw ontwerpen**

**6. Geen onnodige tekstwijzigingen**

**7. Afbeeldingen controleren**

**8. Links controleren**

**9. Onderwerp herkennen**

**10. Previewtekst herkennen of maken**

**11. Desktop controleren**

**12. Mobiel controleren**

**13. Problemen oplossen en opnieuw testen**

**14. HTML-bestand opleveren**

**15. Desktop-preview opleveren**

**16. Mobile-preview opleveren**

**17. NOOIT VERSTUREN**

**18. NOOIT INPLANNEN**

**19. NOOIT PUBLICEREN**

**20. NOOIT MAILCHIMP ACTIES UITVOEREN**

---

# 36. EINDDOEL

Het doel is:

```text
HTML INPUT
      ↓
TAALDETECTIE
      ↓
TEMPLATE SELECTIE
      ↓
CONTENT EXTRACTIE
      ↓
ELDEE MAILING OPBOUWEN
      ↓
HTML CONTROLE
      ↓
AFBEELDING CONTROLE
      ↓
LINK CONTROLE
      ↓
DESKTOP TEST
      ↓
MOBILE TEST
      ↓
PROBLEMEN OPLOSSEN
      ↓
PREVIEWS MAKEN
      ↓
DEFINITIEVE HTML
      ↓
STOP
```

Het eindproduct is een **kant-en-klare Eldee HTML-mailing die de gebruiker zelf kan controleren en later eventueel handmatig kan gebruiken in een mailingplatform.**

**Claude Code mag nooit verder gaan dan het maken en controleren van de bestanden.**