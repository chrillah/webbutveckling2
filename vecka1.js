// 1:a Veckan
// Vi har gått igenom:

// MÅNDAG: Introduktion programmering, JavaScript, värden (values), datatyper (types), och operatorer (operators)
// Värden, typer och operatorer
// (Kap 1) tog upp:
// Bits (1 och 0)
// Values
// Numbers and fractional numbers (float, double)
// Arithmetic - addition, multiplication, (100 + 4) * 11
// Operators * , + , -
// Special Numbers (positive) infinity and (negative) -infinity
// Strings 'single quotes' "double quotes" `backticks`
// break out characters "This is the first line\nAnd this is the second" / "A newline character is written like \"\\n"."
// Concatenate "con"+"cat"+"e"+"nate"
// Template literals `Half of 100 is ${100 / 2}`
// Unary Operators - typeOf-operator = typeOf "Hell" -> string
// Boolean with comparison 1 > 0 = true and String comparison "Aardvark" < "Zoroaster" -> true
// Comparison >= <= == !=
// Logical Operators && ||
// Ternary Operator true ? 1 : 2
// Empty values null undefined
// Automatic type conversion - typiskt javascript grej, konverterar om automatisk data typer för att passa in / räkna ut
// Short-Circuiting of logical operators

console.log('Summering Måndag - introduktion')

// TISDAG: Fortsätting på values, types och operators.
// unary operators - en sån operator agerar på en enda operand eller variabel. EX: (minus)-tecknet
// boolean,
// automatic type conversion - refererar till en process där ett programmeringspråk automatiskt konverterar en datatyp till en annan
// Programmeringsstruktur
// (Kap 2) top upp:
// Expression and statements, a simple statement 1;
// Bindings (referenser som representerar ett värde) let caught = 5 * 5
// Binding name - namnkonventioner och keywords, ord som är reserverande, som break, cas, catch, const, default, delete, do, else, this, true
// The environment - miljön där programmeringen håller till
// Functions, metoder, wrapped in a value
// The Console.log-function - outputs text
// Return values - returvärden, ex: från metoder add(1,4) -> returvärdet 5
// Control Flow, håller koll på olika argument, läser information som en bok, uppifrån till ner
// Conditional Execution if(conditional)
// While and do loops
// let number = 0;
// while (number <= 12){
//  console.log(number);
//  number = number + 2;
// }
// Indenting code - indragning av kodrader
// For Loops for(let i = 0; i < array.length; i++){}
// Breaking out of a loop - break; from infinity loop
// Updating bindings succinctly (counter = counter + 1 === counter += 1 == counter++ || counter = counter - 1 === counter -= 1 === counter--)
// Dispatching on value with switch -> switch(prompt("Whats the weather like?")) case "Rainy": console.log("FUCK"); break; case "Sunny": console.log('Najs); break;
// Capitalization forBindingWordsTogether
// Comments //

// exercises

// Looping a triangle

// let output = '';
// for(let i = 1; i <= 7; i++){
//     output += '#';
//     console.log(output)
// }

// FizzBuzz

// for(let i = 1; i <= 100; i++){
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz')
//     }
//     else if(i % 3 === 0){
//         console.log('Fizz')
//     } else if( i % 5 === 0){
//         console.log('Buzz')
//     }
//     console.log(i)
// }

// chessboard

console.log('Summering Tisdag - variabler')

// Video 3
// Must allways be VAR(?)
// Declaring variable without assign a value
// var day;
// Declare variable and assign a value
// var assignValue = 567757;

// Numeric value - numbers
// var years = 38;
// String variable - text anc characters - must use double quotes marks
// var someText = " years old";
// Boolean - true / false
// var gameOver = true;

// Function is the action or behaviour. Where we work with our variables
// alert(years + someText);
// Why use variables? Storage - programs memory - and we can REUSE them
// Variables naming: can only start with letter or _
// Variable are case sensitive

// Video 4
// Javascript is a loosely typed language - eftersom man inte behöver deklarera datatyp på variabeln
// Java är en strongly language eftersom man måste deklara datatypen när man skapar en variabel

// Video 5
// Förklrarar hur man kan anävnda en seperat script-fil och hur man monterar den


// ONSDAG: Program structure -> Expressions and statements - control flow
// video 6 - introduction till funktioner
// function saySomething(){alert('Something)}
// video 7 - addSomething(num, string){var add= num + string; alert(add);}
// video 8 - operators arithmetic and assignment (+, -, ++, +=, --, -=)
// video 9 - conditional if, else if, else
// video 10 - conditional part 2 (fortsättning på video 9)
// video 11 - Loops while(condition){//statement}
// video 12 - Loops part 2 for(loop) for(let i = 0; i< array.length; i++){loop}
// läsa kap 2 - programme structure: updating variables succinctly - comments

console.log('Summering Onsdag - funktioner, operatorer, villkor(conditional), loops')
// Video 6
// Functions - key to understanding Javascript
// Function naming is like naming variables, and innanför måsvingarna har man statement

// function saySomething () {
//     alert('Something')
// }
// saySomething()

// Video 7
// Passing data to a function - parametrar till statement och argument till funktionen
// function addSomething(num, str) {
//     var add = num + str;
//     alert(add)
// }
// addSomething(2,' string')

// Video 8
// Operators - Arithmetic and Assignment operators
// var number1 = 7;
// var number2 = 4;

// var number1 = number1 + number2; // Arithmetic operator adderar
// number1 += number2 // compound operator += - lägger till ursprunglia med en till
// number1++ // incremental operator - lägger till en

// console.log(number1)

// operator precedence - ordning i hur man ska räkna ut
// multiplikation och division operatorer har företräde före addition och subtration

// multiplikationen körs först med numret närmast, i det här fallet, 3
// var number3 = 4 + 3 * 5;
// console.log(number3)

// Vill man att additionen körs före, sätter man det inom en parantes
// var number4 = (4+3) * 5;
// console.log(number4)

// Video 9
// Conditional villkor if(villkor){statement}, villkoret måste vara sann eller falsk
// var food = 'Meat';

// if( food == 'Apple'){
//     console.log('Japp')
// } else {
//     console.log('Nope')
// }

// Video 10 else if
// var food = "Apple"
// if( food == 'Apple'){
//     console.log('we ate fruits')
// } else if (food == "Meat"){
//     console.log('we ate meats. blä')
// } else {
//     console.log('we ate something else')
// }

// Video 11 - loops While loops, körs så länge villkoret uppfylls eller till falskt
// while (condition) {statement} <- villkoret får inte förbli, måste bli falskt
// var i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// };

// Video 12 - for loop for(let i = 0; i < .lenght; i++){statement}
// for(let i = 1; i <= 5; i++){
//     console.log(i)
// }

// TORS: Göra övningarna (loop a triangle, fizzbuzz, chessboard)
// Kap 3: functions gick igenom:
// Functions - introduktion, metoder är att omsluta ett stycke programm i ett värde
// function aFunction(parameter){body}
// måste inte ha parametrar, eller ett returvärde (return statement)
// Bindings and scope - {scope} (utanför scope =) global
// local bindings - === {let i = 0} <- innanför måsvingarna, existerar endast därinne
// keywordet var, kan göra så att (före 2015) synligt i local och global
// Nested scope - att kunna skapa en funktion i en funktion, värden kan funktionen i funktionen läsa av, men inte dden yttre fubktionen till den inre
// Functions as values - let aFunction = function(){}
// Declaration notation - (2:a deklarationen)function declaration -> function square(x) { return x * x; }
// - gör så att funktionen inte behöver ligga överst som en del av flow of control
// Arrow Function - 3:e deklarationen const square = (x) => { return x * x; }; || const square = x => x * x;
// arrow funktion utan parametrar const horn = () => {console.log('Tut')}
// The Call Stack - datastruktur som håller koll på vilka funktioner som körs i ett program.
// när enb funktion anropas så läggs den på toppen av stacken. När funktionen är klar tas den bort från stacken och programmet
// forsätter där det senaste anropet gjordes. Call stack är viktig för att hålla ordning på funktioner och deras utförande
// Optional Arguments - du kan skicka in fler parametrar med olika värden till en funktion,
// även om funktione endast tar emot en parametrar. Javascript struntar bara i de andra parametrarna. men måste skicka in minst 1.
// negativt är att ingen varnar ifall man gör det med funktionen,
// Closure - en teknik som gör det möjligt för funktioner att komma åt variabler utanför scoped
// Closure är användbara när vi vill bevara tillstånd eller data inom en function över tid.
// Recursion - en function som anropas sig själv, det är ok så länge det inte gör det så ofta att svämmar över för stacken
// en nackdel är att det är 3 ggr så långsammare än vanligt looping
// Growing functions - att funktionen inte ska bli onödigt stor och komplicerad, gör den mer enklare, vilket ett namn på funktionen lätt ska kunna ges
// Functions and side effect - funktioner som returnera ett värde är mer användbar, pure function utför endast ett specifik instruktion

// OobS!!! Diagnostiskt prov 6/7

// FREDAG:
// Video 13 - function and if-statement
// video 14 - return statment
// video 15 - global och lokala varibaler
// video 16 - pass by value (argument och parametrar)
// läsa kap 3 - functions closure - recursion
// läsa kap 3 - functions growing functions and side effect

// Video 13
// en function med if-statment med en if-statment som innehåller två villkor
// function batting(player, distance) {
//     if (distance <= 350 && distance > 0){
//         console.log(player+ ' hit the ball')
//     } else if (distance <= 0){
//         console.log(player + ' STRUCK OUT')
//     }
//     else {
//         console.log(player + ' hit a home run')
//     }
// }
// batting('Christopher', 400)

// video 14 - return statement
// function add(x,y){
//     return x * y ;
// }
// var result = add(6,5);
// console.log(result)

// video 15
// Global variable
// var name = "Henry";
// function printName() {
//     name2="Sarah"; // local variable
// }
// printName()

// utan var blir variabeln en global variabel
// console.log(name2)

// video 16 - skillnaden mellan en parameter och en agument
// argument skickas in till funktioner och används som parametrar i funktionens statement

// 2) parametrar tar emot
// function batting(player, distance) {
//     if (distance <= 350 && distance > 0){
//         console.log(player+ ' hit the ball')
//     } else if (distance <= 0){
//         console.log(player + ' STRUCK OUT')
//     }
//     else {
//         console.log(player + ' hit a home run')
//     }
// }

// 1) Argument skickas in
// batting('Christopher', 400)
