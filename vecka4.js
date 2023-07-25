// måndag
// PROJEKTPLANERING - 6 dagar kvar! Måste in före torsdag!

// Video: Web Design Fundamentels level 1
// Tar upp fonter, layout, typsnitt, färger, content is king
// Blanda inte två liknande stilar
// Använd inte typsnitt från samma klass

// Video: Introduktion till användarbarhet <-PROJEKTARBETET
// tar upp: UX!
// Användarbarhet - är ett kavlitetsmått
// De som sysslar med användarbarhet
// - User-centered design
// - Interaction design
// - Information architecture
// - Human-centered design

// Anävndarbarhete är mer än bara gränssitt
// Vad ska produkten användas?
// Var?
// Vem?
// Vad behöver de? Vad vill de?

// User interface - 3 olika typer av design
// Graphic design - view, enjoy
// color, form, typography, mood

// Information design - find, understand, interpret
// titles, headlines, labels, disposition, links, search

// (Här kan saker bli fel) - mellan interaction och information design

// Interaction design - do, buy, download, register
// forms, buttons, task flow, error messages, feedback

// saker att ändra vid missnöje?

// Graphic design - enkelt att byta ut bilder, graphic, template, stylesheet
// bad graphic design is usually the greatest threshold for acceptance

// Information design - can be changed, but will take time, and must often be done by hand
// Bad information design is the biggest problem in use

// Interaction design - huge cost, if changes are possible at all
// Bad interaction design has the greatest potential to hurt your brand or relation with your customers - for a very lång time

// 4 saker att göra för att undvika fällorna:
// 1) Lyssna på användarna, obesrvera deras miljö
// 2) Fånga deras drivkrafter
// 3) Börja med enkla protoyper
// 4) Testa regelbundet

// Usable, useful! <-
// Istället för could I use it? till would I use it?


// RESTEN AV MÅNDAGENS UNDERVISNING HANDLAR OM ATT TÄNKA FRAM ETT PROJEKT!

// Tisdag

// Läs s.284-289 (Drawing on Canvas: SVG - Curves)
// SVG - DOM - based - document markup
// Canvas - single dom-element that encapsule a picture -
// alltså, det är ett dom-element som inkapslar en bild

// SVG - styrkan är att det går att förstora och förminsa en svg utan att den förlorar upplösnig
//  till skillnad mot canvas
// SVG - vector
// Canvas - pixlar

// SVG - KOLLA INDEX
// om xmlns:
// Attributet xmlns ändrar ett element (och dess barn) till en annan XML-namnrymd. Denna namnrymd, identifierad med en URL, specificerar vilken "dialekt" vi för närvarande använder. Taggarna <circle> och <rect>, som inte finns i HTML, har en betydelse i SVG - de ritas ut som former med den stil och position som anges av deras attribut.

// Ändrar färgen på cirkeln i svg med js
// let circle = document.querySelector("circle")
// console.log(circle)
// circle.setAttribute("fill", "indigo")

// The Canvas Element
// Canvas-grafik kan ritas på ett <canvas>-element. Genom att ge elementet bredd- och höjdattribut kan du bestämma dess storlek i pixlar.
// En ny canvas är tom, vilket betyder att den är helt transparent och visas därför som tomt utrymme i dokumentet.
// <taggen <canvas> är avsedd att möjliggöra olika stilar av ritning. För att få tillgång till en faktisk ritningsyta behöver vi först skapa en "context" (sammanhang), ett objekt vars metoder tillhandahåller ritningsgränssnittet. För närvarande stöds två välkända ritningsstilar: "2d" för tvådimensionell grafik och "webgl" för tredimensionell grafik genom OpenGL-gränssnittet.
// Denna bok kommer inte att diskutera WebGL - vi håller oss till två dimensioner. Men om du är intresserad av tredimensionell grafik rekommenderar jag att du tittar närmare på WebGL. Det ger ett direkt gränssnitt till grafik hårdvara och gör det möjligt att effektivt rendera även komplicerade scener med hjälp av JavaScript.
// Du skapar en "context" med hjälp av getContext-metoden på <canvas>-DOM-elementet.

// Lines and surfaces
// I canvas-gränssnittet kan en form fyllas med en viss färg eller mönster, eller så kan en linje ritas längs dess kant (stroke). Samma terminologi används i SVG.
// Metoden fillRect fyller en rektangel genom att ange x- och y-koordinater för dess övre vänstra hörn, följt av bredd och höjd. Metoden strokeRect ritar konturen av en rektangel.
// Ingen av metoderna tar ytterligare parametrar. Färgen på fyllning, tjockleken på linjen, etc., bestäms inte av argument till metoden utan av egenskaper hos kontextobjektet.
// Egenskapen fillStyle styr hur former fylls och kan sättas till en sträng som specifierar en färg med hjälp av färgnotationen som används av CSS.
// Egenskapen strokeStyle fungerar på liknande sätt men bestämmer färgen som används för en ritad linje. Bredden på linjen bestäms av egenskapen lineWidth och kan innehålla vilket positivt tal som helst.

// Paths
// En path (bana) i 2D canvas-gränssnittet är en sekvens av linjer som beskriver en form.
// Istället för att hantera paths som värden som kan lagras och skickas vidare, beskrivs de helt genom sidoeffekter med metodanrop.
// För att rita en path använder man sig av metoder som moveTo och lineTo för att beskriva dess form.
// För att fylla en path med färg används metoden fill, och för att rita konturen av en path används metoden stroke.
// En path kan innehålla flera figurer, men den måste vara stängd (start- och slutpunkt sammanfaller) innan den kan fyllas med färg.
// closePath-metoden kan användas för att explicit stänga en path genom att lägga till ett linjesegment tillbaka till startpunkten.
// KOLLA INDEX SOM ETT EXEMPEL

// Curves
// En path (bana) kan innehålla kurvade linjer. quadraticCurveTo-metoden ritar en kurva till en given punkt med en kontrollpunkt som påverkar kurvningen.
// bezierCurveTo-metoden ritar en liknande kurva, men har två kontrollpunkter för att styra kurvans riktning i båda ändar.
// arc-metoden ritar en linje som följer kanten av en cirkel och tar parametrar för cirkelns center, radie och start- och slutvinkel.
// Kurvorna kan vara svåra att jobba med, och ibland kan man behöva prova sig fram för att hitta rätt värden för att få önskad form.

// Läs s.291-295 (Drawing on Canvas: Drawing a pie chart - Transformation)

//  Läs s.397-304 (Drawing on Canvas: Storing and clearing transformations - Choosing a graphics interface)

// "Gör klart" mellan kl 09 - 10 (ej övningarna)

// MÖTE KL 11.20

// Övningarna Gör övningar på s.306
