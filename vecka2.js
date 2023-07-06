// Måndag - ett äventyr med javascript deadline 16/7

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
let journal = []
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false)
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false)
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true)

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


//

// Tisdag
