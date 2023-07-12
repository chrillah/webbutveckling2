// Måndag - ett äventyr med javascript deadline 16/7
// MÅSTE SKRIVA KORT RAPPORT SAMT VALIDERA KODEN

// KAP 4 - objects and arrays: the weresquirrel - computing correlation
// tar upp - introduktion till basic data structure
// hur man förvarar data i sets - array
// let myArray = [2,3,5,7,11];
// Properties - egenskaper som är associerade med ett object
// nästan all värde har property, förutom null och undefined
// value binding to property, value.color === value[i]
// properties name must be string, if du vill komma åt ett property 2 eller John Doe, value[2] === value['John Doe']
// properties kan vara funktioner
// let doh = "Doh"
// console.log(typeof doh.toUpperCase)
// console.log(doh.toUpperCase())
// all string har åtkomst till funktionen toUpperCase()
// properrties funktioner kallas för metoder methods of the value they belong to
// let seq = [1,2,3]
// seq.push(4)
// seq.push(5)
// console.log(seq)
// seq.pop()
// console.log(seq)

// Stack, data structure som man kan pusha värde till och ta bort (pop) värdet från motsatt sida, så att värdet som las till sist är det som försvinner först
// Objects - collections of properties
//

// let day = {
//     squirrel : false,
//     events : ["work", "touched tree", "pizza", "running"]
// }
// console.log(day.events[1])

// Intending gör koden mer läsbar
// properties namn måste vara valid property name, annars kan man använda "dubbel quotes"

// let description = {
//     work: "Went to work",
//     "touched tree" : "Touched a tree",
//     "namn med mellanslag" : "Namn med mellanslag"
// }
// console.log(description["namn med mellanslag"])

// måsvingar har två betydelser, ett {statement} och ett {object}
// reading a property som inte finns ger undefined
// tilldelning =, tillger värde, skriver över eller skapar nytt om det inte finns
//

// let testObj = {
//     work : "No thanks"
// }
// testObj["free time"] = "Yes"
// console.log(testObj["free time"])

// property binding
// let anObject = {left:1, right:2}
// console.log(anObject.left)
// delete anObject.left
// console.log(anObject.left)
// console.log("left" in anObject)
// console.log("right" in anObject)

// binary in operator "in"
//  lägger man till med en sträng och ett object, säger till om objectet har en property med liknande namn

// för att veta vad properties ha för namn i ett objekt, använda Object.keys
// let testObj = {x:0,y:0,z:2}
// console.log(Object.keys(testObj))

// Object.assign(SKRIVER ÖVER OBJECT.PROPERTIES VÄRDET testObj, DET HÄR VÄRDET, {b:3,c:4})
// let objectA = {a:1,b:2};
// Object.assign(objectA, {b:3,c:4})
// console.log(objectA)

// Arrays är object som är specielliserade till att förvara sekvenser av saker
// Förvara object i arrayer
// let journal = [
//     {
//         events: ['work', 'touched tree', 'pizza', 'running', 'television'],
//         squirrel: false
//     },
//     {
//         events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
//         squirrel: false
//     },
//     {
//         events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
//         squirrel: false
//     },
// ]
// console.log(journal[1].events)

// Mutability
// vanliga datatyper som numbers, string, booleaner är immutable
// Men inte object, det går att ändra värdet på en property
// properties kan "dela" på samma värde, och koppla properties till samma värde
// let objectA = {value: 10};
// let objectB = objectA; // får samma värde
// let objectC = {value: 10};

// console.log(objectA === objectB) // true
// console.log(objectA === objectC) // false

// objectA.value = 15 // tilldelas ett nytt värde
// console.log(objectB.value) // här ser man att den får samma värde, trots att det är bara objectA som tilldelas
// console.log(objectC.value)

// objectA och objectB har samma identitet
// Konstanter const, tillåter inga ändringar när det har deklarerats

// Jämför == mellan objekt, jämförs om objekten har samma värde eller inte. Det returneras falskt även om de delar properies namn

// ATT LOGGA
// notera att man behäver inte tillskriva ett värde när man skapar en property
// let journal = []
// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }
// addEntry(["work", "touched tree", "pizza", "running", "television"], false)
// addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false)
// addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true)

// Beräkna en korrelation, i bokens exempel så extraherar en tabell för en specifik händelse från dagboken, genpm att loopa igenom inmatingne
// Computing correlation
// function phi(table) {
//     return (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//         (table[2] +table[3])*
//         (table[0] +table[1])*
//         (table[1] +table[3])*
//         (table[0] +table[2]))

// }
// console.log(phi([76, 9, 4, 1]))

// function tabelFor(event, journal) {
//     let table = [0,0,0,0];
//     for (let i = 0; i < journal.length; i++){
//         let entry = journal[i], index = 0;
//         if(entry.events.includes(event)) index += 1;
//         if(entry.squirrel) index+=2;
//         table[index] += 1;
//     }
//     return table;
// }

// console.log(tabelFor("pizza", journal))

// array loop - föekommer ofta i javascript, att loopa igenom ett object och dess element
// mer modernare version av att loopa igenom en data set
// for (let entry of journal){
//     console.log(`${entry.events.length} events`)
// }

// function journalEvents(journal) {
//     let events = [];
//     for (let entry of journal){
//         for (let event of entry.events){
//             if (!events.includes(event)) {
//                 events.push(event)
//             }
//         }
//     }
//     return events;
// }

// console.log(journalEvents(journal))

// push() och pop() lägger till och tar bort den senaste tillagda värdet i slutet på en array
// för att lägga till och ta bort i början av arrayen anropar vi unshift och shift

// to search a specific value, indexOf - letar efter i arrayen från start till slut
// lastIndexOf söker från slutet till starten av en array
// båda metoderna har en optional sekundär andra argument, som indikierar vart man ska börja söka i arrayen
// console.log([1,2,3,2,1].indexOf(2))
// console.log([1,2,3,2,1].lastIndexOf(2))

// slice() - tar två argument, en som tar början, den andra som tar slutet och returnerar en array med det värdet
// ger man slice() inget slut, tar den med resten av arrayen
// console.log([0,1,2,3,4].slice(2,4))
// console.log([0,1,2,3,4].slice(2))

// concat() (som att sätta ihop två strängar som "+") och slice()
// function remove(array, index){
//     return array.slice(0, index)
//     .concat(array.slice(index + 1));
// }
// console.log(remove([ "a", "b", "c", "d", "e"], 2));

// string and other properties
// ex: .lenght() - kollar antalet tecken, toUpperCase() gör alla tecken till gemener
// det här funkar inte för att strängar / number och booleaner är immutable
// let kim = "Kim";
// kim.age = 88;
// console.log(kim.age)
// koden ovanför klagar inte, men det funkar inte.
// Vi kan inte tilldela ett property likt object men dessa immutable datatyper har inbyggda properties
// ex på property i strängar: indexOf, slice() (visst påminner en sträng en array av tecken...?)
// console.log("coconuts".slice(4,7))
// console.log("coconuts".indexOf("u"))

// att använda en indexOf på en sträng och att använda den i en array
// att använda det på en sträng kan man söka efter en delsträng som består av flera tecken.
// Men om du använder `indexOf` på en array, kommer den bara leta efter en enskild element och inte efter en följd av flera element
// console.log("one two three".indexOf("ee"))

// trim(), tar bort whitespace, newlines, tabs och liknande tecken, från start till slutet på en sträng
// console.log(" okay \n ".trim())

// padStart (padEnd gör likadant fast tvärtom), tar en önskad längd och en padding character (fyller ut?) som argument
// console.log(String("7").padStart(3, "0"))
// console.log(String("Y").padEnd(15, "O"))

// split and join
// let sentence = "Secretarybirds specialize in stomping";
// let words = sentence.split(" ");
// console.log(words);
// console.log(words.join(". "));

// repeat()
// let test = "Hej "
// let test1 = test.repeat(2)
// console.log(test1)

// string lenght property
// let string = "abc";
// console.log(string.length)
// console.log(string[1])

// rest parametrar - förvandlar alla argumet och lägger det i en array i parametern som håller isär värdena
// functioner som kan ta emot alla nummervärden är en bra funktion.
// Math.max sätter ett tak på ett nummervärde på alla argument som funktionen tar emot, typ en array
// en sån funktion som tar emot alla nummervärden.
// function max(...numbers) {
//     let result = -Infinity; // tilldelas absolut lägsta värdet
//     for (let number of numbers){
//         if (number > result) result = number // om ett nummer i parametern är större än den absolut lägsta så tilldelas numret
//     }
//     return result
// }
// console.log(max(4,1,9,-2))

// samma sätt att skicka in som argument
// let numbers = [5,1,7]
// console.log(max(...numbers))

// [...array] loopar igenom och håller isär värdena
// let words = ["never", "fully"];
// console.log(["will", ...words, "understand"])

// let numbers = [1,2,3]
// console.log([0,9,8,7,6,...numbers,5,4,3,2,1])

// The Math Object


// excersise

// range
// function range(num1, num2, num3){
//     let range = [];

//     if(num1 > num2 ){
//         for(let i = num1; i >= num2; i--){
//             range.push(i);
//             if(num3) {
//                 i -= (num3 -1)
//             }
//         }
//     } else {
//         for(let i = num1; i <= num2; i++){
//             range.push(i);
//             if(num3) {
//                 i += (num3 -1)
//             }
//         }
//     }
//     return range;
// }

// console.log(range(5, 2));


// Tisdag

// video17 - ARRAYS
// deklarera och tilldela
// var roads = []
// roads[0] = "stone"
// roads[1] = "dirt"
// roads[2] = "cement"
// roads[3] = "tar"
// var roads = ["stone", "dirt", "cement", "tar"]
// roads[1] = "cobblestone"
// var roadTravelled = roads[1]
// console.log(roadTravelled)

// video 18 - OBJECTS
// NOTES:
// 1) Variables innuti i en object kallas för properties
// 2) "real life objects" har flera properties
// 3) man använder "." för att komma åt en objects properties (variabler)
// 4) funktioner i objects kallas för metoder

// ex:
// OBJECT är bättre för att det finns ett nyckel och värde par
// nyckeln beskriver värdet
// var orcObject = {
//     color : "green",
//     height : 5,
//     weight : 180
//     yell : function (){
//      console.log("Orc's are the best!")
//     }
// }

// använda / komma åt värdern / metoder från ett objects:
// orcObject.color;
// orcObject.yell();

// ARRAY
// inte så bra på att förvara värde, index är svår att specificera
// var orcArray = [
//     "green", 5, 180
// ]

// video 19 - OBJECTS part 2 Metoder i object är funktioner

// video 20 - OBJECTS part 3 code-a-long
// värden kommer alltid att ändras / objects är dynamiska

// var orc = {
//     hair : "green",
//     age : 26,
//     stomachFull : true,
//     eat : function(){
//         console.log("Yum Yum");
//     }
// }

// var newAge = orc.age +2
// console.log(newAge)

// if(orc.stomachFull === true){
//     orc.eat()
// }
// else {
//     console.log("Not eating")
// }

// video 21 - OBJECTS - part 4

// RECAP!!!!:
// 3st primitiva datatyper i Javascript:
// String
// Number
// Boolean

// Man kan ändra datatyperna i objectens properties
// Det går att deklarera och tilldela properties i objects
// för att ta bort en property i en object använder man nyckelordet delete + propertyn man vill ta bort
// properties i objects som inte finns eller inte har ett värde returnerar undefined

// var orc = {
//     hair : "green",
//     age : 26,
//     stomachFull : true,
// }

// orc.hair = "purple"
// orc.hair = 1
// orc.hair2 = "red"

// delete orc.hair2

// console.log(orc.hair)
// console.log(orc.hair2)


// video 22 - STRING OBJECTS

// Standalone or primitiva variabler
// var color = "green" // String Object
// var height : 5 // Math Object and Number Object

// custom objects:
// var orc = {
//     color: "green",
//     height: 5,
//     weight: 180
// }
// orc.color; // "green"

// global object
// 1) objects som javascript provides som vi kan använda
// 2) som är redan skrivna för oss så att vi kan använda dess properties och metoder

// STRING OBJECT
// här så inkapslar String Objectet värdet till en variabel
// var hello = "Hello how are you doing";

// String objects metoder
// hello = hello.toUpperCase()
// hello = hello.toLowerCase()

// metod som returnerar char-värdet i en string
// hello = hello.charAt(4)

// metod som byter ut ett string-värde i en string med ett annat string-värde
// hello = hello.replace('doing', 'today')

// FUNKAR INTE MEN FLER METODER I STRING OBJECTET
// hello = hello.italics()
// hello = hello.bold()

// String objects properties
// hello.length

// console.log(hello)


// ONSDAG
// video 23 - MATH - OBJECTS

// var number = 4.7;
// Math.round(RUNDAR UPP eller NER DET SOM SKICKAS IN)
// var newNumber = 26 + Math.round(number)

// Math.ceil RUNDAR ALLTID UPP
// var newNumber = 26 + Math.ceil(number)

// Math.floor RUNDAR ALLTID NERÅT
// var newNumber = 26 + Math.floor(number)
// console.log(newNumber)

// räknar ut roten ur
// var number = Math.sqrt(25)
// console.log(number)

// video 24 - DATE OBJECTS
// ny nyckelord = new
// används för att skapa en ny instans av ett object
// när man sätter dit () så skapas en konstruktor

// var todayDate = new Date()

// .todatstring() returnerar en mer lättläst formatering av date-värdet
// var useString = todayDate.toDateString()

// getYear() metoder hämtar bara
// todayDate.getYear(17)

// setMetoder tilldelar värdet
// todayDate.setYear(2117)

// console.log(todayDate)
// console.log(useString)


// TORSDAG - PROV och upphosvrätt (KOLLA js-fil)
