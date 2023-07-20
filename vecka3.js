// Vecka 3

// Måndag
// kapitel 14 - the document object model
// s.224 - s.232 - DOCUMENT STRUCTURE - ATTRIBUTES

// Om Document structure
// Ett HTML-dokument kan ses som en hierarki av inbäddade rutor.
// Taggar som <body> och </body> omsluter andra taggar eller text.
// Detta kallas Document Object Model (DOM).
// Genom att använda objektet "document" i JavaScript kan vi interagera med dessa rutor.
// Dokumentet har egenskaper som "documentElement", "head" och "body" för att referera till olika delar av dokumentet.

// Om Trees
// Träd används för att representera strukturer som HTML-dokument och har en rotnod och förgrenade barnnoder.
// I DOM är document.documentElement roten.
// Träd är vanliga inom datavetenskap och används för att hantera sorterade datamängder effektivt.
// I DOM har olika noder olika typer och barnnoder kan vara lövnoder eller innehålla andra barnnoder.

// Om Standard
// DOM-gränssnittet är inte optimalt anpassat för JavaScript och känns klumpigt och främmande.
// Det är utformat för att vara språkneutralt och användbart för andra system som XML.
// Det finns brister i integrationen med JavaScript, som användning av numeriska koder för nodtyper och otillräckliga egenskaper hos objekt som childNodes.
// Det finns också designproblem, som brist på enkla sätt att skapa och manipulera noder.
// Trots detta kan egna abstraktioner skapas i JavaScript för att förbättra användningen av DOM.
// Många bibliotek finns tillgängliga för webbläsarprogrammering som erbjuder verktyg för detta ändamål.

// Om Moving through the tree
// DOM-noder innehåller många länkar till andra närliggande noder.
// Genom att använda parent och child-länkar kan du i teorin röra dig var som helst i trädet.
// Men JavaScript ger också tillgång till ytterligare bekvämlighetslänkar.
// Förälder- och barn-länkar finns genom parentNode och childNodes-egenskaperna.
// Det finns även firstChild, lastChild, previousSibling, nextSibling och children som ger enklare åtkomst till relaterade noder.
// För att hantera ett inbäddat träd är rekursiva funktioner ofta användbara.
// Genom att använda dessa länkar kan du utföra olika operationer på trädet, som att söka efter text i textnoder.

// Om Finding Elements
// För att hitta specifika element i DOM kan du använda metoder som getElementsByTagName och getElementById.
// getElementsByTagName samlar alla element med ett visst taggnamn som är barn eller ättlingar till en given nod.
// getElementById letar efter en nod med en specifik id-attribut.
// Dessa metoder returnerar resultatet som array-liknande objekt.
// Det är ett smidigt sätt att hitta önskade element i dokumentet utan att vara beroende av deras exakta position i DOM-trädet.

// Om Changing the Document
// Nästan allt i DOM-datastrukturen kan ändras.
// Trädet kan ändras genom att ändra förälder-barn-relationer.
// Noder har en remove-metod för att ta bort dem från deras nuvarande föräldernod.
// För att lägga till en barnnod till en elementnod kan vi använda appendChild, som placerar den sist i listan över barn, eller insertBefore, som infogar noden före en given nod.
// En nod kan bara finnas på en plats i dokumentet.
// Så att infoga "Three" framför "One" kommer först ta bort den från slutet av dokumentet och sedan sätta den längst fram, vilket ger "Three/One/Two".
// Alla operationer som infogar en nod någonstans kommer som en bieffekt att ta bort den från dess nuvarande position (om den har en).
// Metoden replaceChild används för att ersätta en barnnod med en annan.
// Den tar två noder som argument: en ny nod och den nod som ska ersättas.
// Den ersatta noden måste vara ett barn till elementet som metoden anropas på.
// Observera att både replaceChild och insertBefore förväntar sig den nya noden som sitt första argument.

// Om Creating Nodes
// Anta att vi vill skriva ett skript som ersätter alla bilder (<img>-taggar) i dokumentet med texten i deras alt-attribut, som anger en alternativ textuell representation av bilden.
// Detta innebär inte bara att ta bort bilderna utan att också lägga till en ny textnod för att ersätta dem. Textnoder skapas med metoden document.createTextNode.
// Den här loopen går igenom bilderna och börjar från slutet av listan. Detta är nödvändigt eftersom nodlistan som returneras av metoder som getElementsByTagName (eller en egenskap som childNodes) är live. Det betyder att den uppdateras när dokumentet ändras. Om vi började från början skulle borttagningen av den första bilden göra att listan förlorar sitt första element, vilket skulle leda till att loopen stannar vid nästa iteration, där i är 1, eftersom samlingen nu också har längden 1.
// Om du vill ha en fast samling av noder, istället för en live-samling, kan du konvertera samlingen till en riktig array genom att använda Array.from.
// För att skapa elementnoder kan du använda metoden document.createElement. Den här metoden tar ett taggnamn och returnerar en ny tom nod av den angivna typen.
// Den följande koden definierar en hjälpfunktion elt, som skapar en elementnod och behandlar resten av sina argument som barn till den noden. Denna funktion används sedan för att lägga till en attribut i ett citat.

// Om Attributes
// Elementattribut såsom href för länkar kan nås genom en egenskap med samma namn på elementets DOM-objekt.
// Detta gäller för de flesta vanligt använda standardattributen.
// Men HTML tillåter dig att ange vilket attribut du vill på noder.
// Det kan vara användbart eftersom det låter dig lagra extra information i ett dokument.
// Om du skapar egna attributnamn kommer sådana attribut dock inte att finnas som egenskaper på elementets nod.
// Istället måste du använda metoderna getAttribute och setAttribute för att arbeta med dem.
// Det rekommenderas att förställa namnen på sådana egna attribut med "data-" för att se till att de inte konflikterar med några andra attribut.
// Det finns ett vanligt använd attribut, class, som är ett nyckelord i JavaScript.
// Av historiska skäl - några äldre JavaScript-implementeringar kunde inte hantera egenskapsnamn som matchade nyckelord - används egenskapen som ger åtkomst till detta attribut som className. Du kan också nå det under sitt verkliga namn, "class", genom att använda metoderna getAttribute och setAttribute.

// video 25 - document object model
// document, typ HTML-index.filen men
// browswers load page
// DOM is created - objects that we can use that represents the HTML
// OBJECTS are stored in the DOM
// The DOM allows us to use our javascript code to access parts of the web page
// NODE-Hierarki - i den ordning det här är i
// 1) ELEMENT-NODE -> <h1></h1>-tags
// 2) ATTRIBUTE-NODE -> class="attribute-node" / id="attribute-node"
// 3) TEXT-NODE -> <>Text-Node</>

// video 26 - getElementById method
// OBS! Properties är CSS-iga grejjer

// DENNA FUNKTION FINNS PÅ index-filen
// function changeStyle(){
//     var text = document.getElementById("para1").style.fontStyle = "italic"

// här ändrar vi på elementens properties
// var text = document.getElementById("para1").style.backgroundColor = "red"
// var text = document.getElementById("para1").style.color = "blue"
// }

// FORTSÄTTNING PÅ kap 14 - The document Object Model
// s.233 - 236 Layput - Cascading styles

// Om Layout
// Olika typer av element har olika layout.
// Vissa, som stycken (<p>) eller rubriker (<h1>), tar upp hela bredden av dokumentet och visas på separata rader.
// Dessa kallas blockelement. Andra, som länkar (<a>) eller <strong>-elementet, visas på samma rad som sin omgivande text.
// Sådana element kallas inlinjeelement.
// Storleken och positionen för ett element kan nås från JavaScript.
// Egenskaperna offsetWidth och offsetHeight ger dig utrymmet som elementet tar upp i pixlar.
// En pixel är den grundläggande mätenheten i webbläsaren.
// Traditionellt motsvarar den den minsta punkt som skärmen kan rita, men på moderna skärmar, som kan rita mycket små punkter, kan det inte längre vara fallet och en webbläsarpixel kan omfatta flera skärmpunkter.
// På samma sätt ger clientWidth och clientHeight dig storleken på utrymmet inuti elementet, utan att ta hänsyn till kantens bredd.
// Det mest effektiva sättet att hitta den exakta positionen för ett element på skärmen är metoden getBoundingClientRect.
// Den returnerar ett objekt med egenskaperna top, bottom, left och right, som anger pixelpositionerna för elementets sidor i förhållande till skärmens övre vänstra hörn.
// Om du vill ha dem i förhållande till hela dokumentet måste du lägga till den aktuella rullningspositionen, som du kan hitta i bindningarna pageXOffset och pageYOffset.
// Att lägga ut ett dokument kan vara ganska mycket arbete.
// För att öka hastigheten lägger webbläsarmotorer inte omedelbart ut ett dokument varje gång du ändrar det, utan väntar så länge som möjligt.
// När ett JavaScript-program som har ändrat dokumentet är färdigt måste webbläsaren beräkna en ny layout för att rita det ändrade dokumentet på skärmen.
// När ett program begär positionen eller storleken på något genom att läsa egenskaper som offsetHeight eller anropa getBoundingClientRect, krävs det också att en layout beräknas för att ge korrekt information.
// Ett program som upprepat växlar mellan att läsa DOM-layoutinformation och ändra DOM tvingar fram många layoutberäkningar och kommer därför att köras mycket långsamt.
// Följande kod är ett exempel på detta.
// Den innehåller två olika program som bygger upp en rad med X-tecken som är 2 000 pixlar bred och mäter tiden för var och en.

// Om Styling
// Olika HTML-element visas olika och kan stylas med CSS.
// Vi kan ändra styling för ett element genom att använda style-attributet, där vi kan sätta egenskaper som färg, display och mer.
// JavaScript kan manipulera elementets style genom style-egenskapen på elementet.

// Om Cascading styles
// CSS, som står för Cascading Style Sheets, är systemet för att styla HTML.
// En style sheet är en uppsättning regler för hur element i ett dokument ska stylas.
// Reglerna kan anges inuti en <style>-tagg.
// Reglerna i en style sheet kombineras för att producera den slutliga stilen för ett element.
// Regler med högre prioritet vinner vid konflikt.
// Stilar som anges direkt på ett element med style-attributet har högst prioritet.
// I CSS kan man rikta in sig på saker utöver taggnamn, som klasser och ID:n.
// Regler kan tillämpas på element med en viss klass (.abc) eller ID (#xyz).
// Specifika regler tar företräde över mindre specifika regler, och regler som definierats senare har högre prioritet än tidigare definierade regler.
// Notationen p > a tillämpar stilar på alla <a>-taggar som är direkta barn till <p>-taggar. p a tillämpar stilar på alla <a>-taggar inuti <p>-taggar, oavsett om de är direkta eller indirekta barn.

// video 27 - getElementsByTagName method
// stark, eftersom vi greppar inte tag i ett specifik element / id, utan alla taggar som vi greppar
// i en nodelista, så är den första elementet index 0, likt array
// function changeStyle() {

// Här greppar vi tag på elementet p
// var parapgraph = document.getElementsByTagName("p")

// med hjälp av index, kan vi välja vilket av dessa p-taggar som vi ska styla
// I detta fall, paragraph-tag nummer 2 (index[1])
// var changeParaText = parapgraph[1].style.fontStyle = "italic"
// }

// video 28 - getElementsByTagName method part 2
// function changeStyle() {
//     var parapgraph = document.getElementsByTagName("p")
//     for(var i = 0; i < parapgraph.length; i++){
//         var changeParaText = parapgraph[i].style.fontStyle = "italic"
//     }
// }

////////////////////////////////////////////////////////////////////////////////
// Tisdag
// Kap 14 - The Document Object Model
// s. 237 - 238 Query Selectors - Positionering and animating

// Om Query selectors
// Query selectors är ett sätt att hitta DOM-element baserat på deras stil- och klassattribut.
// Med hjälp av metoden querySelectorAll kan man hitta och få en lista av alla matchande element utifrån en given selector-sträng.
// I exemplet används funktionen count för att räkna antalet matchande element av olika typer och med olika klassattribut.
// Metoden querySelector fungerar på liknande sätt som querySelectorAll, men returnerar endast det första matchande elementet eller null om inget element matchar.

// Om Positioning and animating
// Genom att ändra värdet på positionsegenskapen i CSS kan man flytta element relativt till dess normala plats i dokumentet.
// Genom att sätta positionsegenskapen till "absolute" kan man positionera elementet absolut i förhållande till det närmaste omslutande elementet med en positionsegenskap som inte är "static".
// I exemplet används positionering och trigonometriska funktioner för att skapa en animation där en kattbild rör sig i en ellips.
// Genom att ändra värdena på "top" och "left" stilattributen med hjälp av JavaScript kan bilden flyttas i en cirkelbana.
// För att uppdatera animationen regelbundet används metoden requestAnimationFrame.
// Texten förklarar även användningen av trigonometriska funktioner Math.cos och Math.sin för att beräkna koordinaterna för punkter på en cirkel.
// Dessutom nämns vikten av att ange enheter (t.ex. "px" för pixlar) vid tillämpning av stilattribut.

// video 29 - getElementByClassName
// Likt getElementsByTagName, så skapar getElementByClassName en node-lista
// RECAP:
// 1) Select the element we want to target
//  - getElementById() - select elements by their id
//  - getElementByTagName() - select elements by their tag name
//  - getElementByClassName() - select elements by their class name
// 2) Change whatever is we want to change in that element
//  - CSS Style
//  - Change text
//  - Changes images
//  - Validtion
//  - Create new pages
//  - Change internals

// function changeStyle(){
//     var parapgraph = document.getElementsByClassName('para');
//     var changeText = parapgraph[0].style.color = "red"
//     var changeText = parapgraph[1].style.color = "red"
// }

// video 30 - Replace content using innerHTML
// function changeStyle(){
//     var parapgraph = document.getElementsByClassName('para');
//     var changeText = parapgraph[0].innerHTML = "New Text"
//     var changeText = parapgraph[1].innerHTML = "New Text"
// }

// video 31 - Reading content using innerHTML
// function changeStyle(){
//     var parapgraph = document.getElementsByClassName('para');

//     var firstParaText = parapgraph[0].innerHTML;
//     var secondParaText = parapgraph[1].innerHTML;
//     var addThem = parapgraph[2].innerHTML = firstParaText + secondParaText;

// det här gör så att texten blir tom
// var firstParaText = parapgraph[0].innerHTML = " ";
// var secondParaText = parapgraph[1].innerHTML = " ";
// }

// video 49 - Follow up session till video 31
// function changeStyle(){
//     var parapgraph = document.getElementsByClassName('para');

//     var firstParaText = parapgraph[0].innerHTML;
//     var secondParaText = parapgraph[1].innerHTML;
//     var addThem = parapgraph[2].innerHTML = firstParaText + secondParaText;

//     var firstParaText = parapgraph[0].innerHTML = " ";
//     var secondParaText = parapgraph[1].innerHTML = " ";

// knappen har ett ID med namn test, som vi greppar och gör den osynlig
//     document.getElementById('test').style.visibility = "hidden";
// }

// video 50 - fortsättning på video 49
// function changeStyle() {
//     var confirmation = confirm('These changes id final')

// detta gör så att man kan trycka på cancel istället för att bara trycka på ok
//     if (confirmation == true) {
//         var parapgraph = document.getElementsByClassName('para')

//         var firstParaText = parapgraph[0].innerHTML
//         var secondParaText = parapgraph[1].innerHTML
//         var addThem = (parapgraph[2].innerHTML = firstParaText + secondParaText)

//         var firstParaText = (parapgraph[0].innerHTML = ' ')
//         var secondParaText = (parapgraph[1].innerHTML = ' ')

//         document.getElementById('test').style.visibility = 'hidden'
//     }
// }

// video 32 - Changing an image
// vi gör det med src-property
// function changeStyle() {
//     document.getElementById("image").src ="/img/lenin.jpeg"
// }

// GÖR ÖVNINGARNA - s.241

// video 36 - Creating a new element
// 1) var nyElement = document.createElement("<element-tag du vill skapa />")
// 2) (Greppa tag "förälder till elementet du nyss skapade för att lägga till")
// ex: main.appendChild = (nyElement)
// function newParagraph() {

// vi skapar ett nytt element som ett p-tag
// var element = document.createElement("p");

// vi ska greppa tag på ett element med ett id, det här är föräldern
// var main = document.getElementById("main");

// vi lägger till det nya elementet till föräldern
//     main.appendChild(element)

//     var text = document.createTextNode("BLA BLA BLA more Battle lol")

//     element.appendChild(text)
// }

// video 37 - Creating a new element part 2
// Creating a heading
// function newParagraph() {
//     var elementH = document.createElement('h2')
//     var main = document.getElementById('main')
//     main.appendChild(elementH)
//     var textH = document.createTextNode("The Battle of Salamis")
//     elementH.appendChild(textH)

//     var element = document.createElement('p')
//     main.appendChild(element)

//     var text = document.createTextNode(
//         'The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.'
//     )

//     element.appendChild(text)
// }

// video 38 - Remove Element
// function newParagraph() {
//     var elementH = document.createElement('h2')
//     var main = document.getElementById('main')
//     main.appendChild(elementH)
//     var textH = document.createTextNode('The Battle of Salamis')
//     elementH.appendChild(textH)

//     var element = document.createElement('p')
//     main.appendChild(element)

//     var text = document.createTextNode(
//         'The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.'
//     )

//     element.appendChild(text)
// }

// funktion för att ta bort header och paragraph
// function removeHeader() {
    // specifierar vilket child i nodelistan som ska bort
    // var elementH = document.getElementsByTagName('h2') [2];

    // specificiera föräldern med hjälp av elementetH property
    // let parent = elementH.parentNode;

    // tar bort barnet från föäldern
//     parent.removeChild(elementH);

//     let elementP = document.getElementsByTagName('p')[4];
//     parent.removeChild(elementP);
// }

// video 39 - Create Attribute
// Vad är en attribut? -> är inte ett barn som ett element,
// en attribut är en del av ett element

// function newParagraph() {
//     var elementH = document.createElement('h2')
//     var main = document.getElementById('main')
//     main.appendChild(elementH)
//     var textH = document.createTextNode('The Battle of Salamis')
//     elementH.appendChild(textH)

//     var element = document.createElement('p')
//     main.appendChild(element)

//     var text = document.createTextNode(
//         'The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.'
//     )

//     element.appendChild(text)

    // vi skapar en attribute, ett id likt: <div id="test"></div>
    // var pAttribute = document.createAttribute("id")

    // vi ger det ett värde, ett namn,
    // pAttribute.value = "test"

    // vi lägger till attributet på elementen
//     element.setAttributeNode(pAttribute)
// }

// function removeHeader() {
//     var elementH = document.getElementsByTagName('h2') [2];

//     let parent = elementH.parentNode;

//     parent.removeChild(elementH);

//     let elementP = document.getElementsByTagName('p')[4];
//     parent.removeChild(elementP);
// }

// Onsdag

// Javascript och DOM - uppgift
// uppgifterna klara, rapport kvar
