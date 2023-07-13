// Globala variabler

// Variabler för spelens utgång
var boomerAlert = 20;
var theRightChoice = 3;
var minimumPower = 3;
var maximumPower = 7;

// Deklarerade sträng-variabler
var player = '';
var playerAnswer = '';

// Deklarerade och tilldelade strängvärden
var groceryList_1 = '\n1) - Milk\n - Creme\n - Tooth brush';
var groceryList_2 = '\n2) - Goat Milk\n - Nachos\n - Dental floss';
var groceryList_3 = '\n3) - Oat creme\n - Tofu\n - Toothpaste';

// Boolean-variabler med olika värden som startvärde för spelets flöde
var nameCheck = false;
var ageCheck = false;
var numberCheck = false;
var continuingGame = true;
var playAgain = true;

// Funktioner som tar in ett namnvärde som parameter för att returnera spelhistorierna
function astronautStory(name){
    return "Captain " +
        name +
        ", we are in a direct course to a black hole, we need to change course ASAP! Use the control panel and boost our rockets! But be careful, don't use to much power or the rockets will blow up!";
}

function boomerStory_part1(name){
    return "Dear " +
        name +
        ", I have gone to work. I will be home late so you have to do the shopping. Here is the list: \n - Oat creme \n - Tofu \n - Toothpaste \n It's very important that you get it all, or don't be here when I come home. Love xx";
}

function boomerStory_part2(name){
    // Ett nytt strängvariabel deklareras och tillges värdet från användarens input till spelarnamn,
    // i vilket stringobjektets inbyggda metod ändrar strängtecknet till versaler, till spelhistorien
    var nameToUpperCase = name.toUpperCase();
    return "- LATER IN THE GROCERY STORE INSIDE " + nameToUpperCase +
    "'S MIND - 'Dammit! I forgot the list! What was it now again?'";
}

// Startmeddelande
alert('Life: An Adventure');

// JavaScript-funktion, meddelande till användaren
confirm('Are you ready to play?');

// While-loop med en boolean som villkor, i vilket det ändras beroende på om spelaren vill spela om spelet eller inte
while (continuingGame) {

    // While-loop med en boolean som villkor, som kör loopen tills rätt värde kommer in via prompt
    while (!nameCheck) {

        // Strängvärde sparas från input från användaren via prompt
        var playerName = prompt("What's your name, player?");

        // if-sats, kollar om värdet som kommer in från användaren är en sträng
        if (typeof playerName == 'string') {

            //if-sats, kollar så att string-värdet inte tomt eller om det innehåller några tecken med hjälp av den inbyggda stringobjektsmetoden
            // som räknar antal tecken
            if (playerName.length >= 0) {
                if (playerName === null || playerName === 'null' || playerName === '') {

                    // Feedback till användaren om fel
                    alert('No, no, no, you have to have a name!');
                } else {

                    // Om allt stämmer och rätt värde kommer in, så ändras booleanvärdet och while-loop slutar att loopa
                    nameCheck = true;
                }
            } else {

                // Feedback till användaren om fel
                alert('No, no, no, you have to have a name!');
            }
        } else {

            // Feedback till användaren om fel
            alert('No, no, no, you have to have a name!');
        }
    }

    // Booleanvärdet återställs så att det funkar till nästa omgång
    nameCheck = false;

    // While-loop med en boolean som villkor, som kör loopen tills rätt värde kommer in via prompt
    while (!ageCheck) {

        // Nummervärde sparas från input från användaren via prompt, med hjälp av parseInt-funktionen som säkerställer att värdet från användaren är ett intvärde
        var playerAge = parseInt(prompt(playerName + " , what's your age?"));

        // if-sats, kollar om värdet som kommer in från användaren är en number
        if (Number.isInteger(playerAge)) {

            // if-sats med flera villkor med den logiska operatorn or, kollar om värdet som kommer in från användaren är korrekt
            if (playerAge === null || playerAge <= 0 || playerAge > 200) {

                // Feedback till användaren om fel
                alert('Impossible! Try again.');
            } else {

                // Om allt stämmer och rätt värde kommer in, så ändras booleanvärdet och while-loop slutar att loopa
                ageCheck = true;
            }
        } else {

            // Feedback till användaren om fel
            alert('No age? Come on, try again.');
        }
    }

    // Booleanvärdet återställs så att det funkar till nästa omgång
    ageCheck = false;

    // if-sats med villkor med en konstant som kollar åldern på spelaren som ändrar spelläget beroende på åldern.
    // Konstantvärdet finns för att det inte ska ändras, är deklarerat högst upp bland globala variabler
    if (playerAge < boomerAlert) {

        // Feedback till användaren efter ålderinput
        alert('Alright ' + playerName + '! You play as an astronaut');

        // Väljer spelläge
        player = 'astronaut';
    } else if (playerAge > 122) {

        // Feedback till användaren
        alert(
            'Poor old thing. Still a boomer. And an adult. And you play as a regular adult.'
        );

        // Väljer spelläge
        player = 'boomer';
    } else {

        // Feeback till användaren
        alert('Ok boomer, you play as a regular adult');

        // Väljer spelläge
        player = 'boomer';
    }

    // if-sats som kollar vilket värde playervariabeln som bestämmer utgången
    // Om villkoret stämmer, väljs astronautspelläget
    if (player == 'astronaut') {

        // skriver ut astronauthistorien, en av två spellägen
        alert(astronautStory(playerName));

        // While-loop med en boolean som villkor, som kör loopen tills rätt värde kommer in via prompt
        while (!numberCheck) {

            // Nummervärde sparas från input från användaren via prompt, med hjälp av parseInt-funktionen som säkerställer att värdet från användaren är ett intvärde
            var powerBoost = parseInt(prompt('Pick a number between 1 - 10'));

            // if-sats, kollar om värdet som kommer in från användaren är en number
            if (Number.isInteger(powerBoost)) {

                // if-sats med flera villkor med den logiska operatorn or, kollar om värdet som kommer in från användaren är korrekt
                if (powerBoost < 1 || powerBoost > 10) {

                    // Feedback till användaren om fel
                    alert(
                        'Dammit captain ' +
                        playerName +
                            "! That's incorrect! Try again!"
                    );
                } else {

                    // Om allt stämmer och rätt värde kommer in, så ändras booleanvärdet och while-loop slutar att loopa
                    numberCheck = true;
                }
            } else {

                // Feedback till användaren om fel
                alert('You must enter a number!');
            }
        }

        // Booleanvärdet återställs så att det funkar till nästa omgång
        numberCheck = false;

        // if-sats med villkoret med värdet från användaren, ändrar spelets utgång beroende på värdet
        if (powerBoost < minimumPower) {
            // Feedback till användaren om fel
            alert(
                "You didn't use much power, we are drifting in to the black hole. Good bye"
            );
        } else if (powerBoost > maximumPower) {
            // Feedback till användaren om fel
            alert(
                'I did warn you, now our rockets are gone. And so are we, drifting in to the black hole... Good bye'
            );
        } else {
            // Feedback till användaren om rätt
            alert("Puh! That's was a close one! Good job captain " + playerName + '!');
        }
    } else {

        // Om villkoret inte stämde, väljs boomerspelläget
        // skriver ut boomerspelhistorien
        alert(boomerStory_part1(playerName));

        // för dramatiskt effekt, är historien uppdelat i två delar
        alert(boomerStory_part2(playerName));

        while (!numberCheck) {

            // Nummervärde sparas från input från användaren via prompt, med hjälp av parseInt-funktionen som säkerställer att värdet från användaren är ett intvärde
            // sammanfogar strängvariablerna med hjälp av + operatorn
            var yourChoice = parseInt(prompt('Was it ' + groceryList_1 + groceryList_2 + groceryList_3 + '?'));
            if (Number.isInteger(yourChoice)) {
                if (yourChoice < 1 || yourChoice > 3) {
                    alert(
                        'Wake up ' +
                        playerName +
                            ', not an option, try again! Is it 1, 2 or 3?'
                    );
                } else {

                    // Om villkoret är uppfylld, ändras booleanvärdet och loopen slutar
                    numberCheck = true;
                }
            } else {

                // Feedback till användaren om fel
                alert('Oh come on! Incorrect, try again! Is it 1, 2 or 3?');
            }
        }

        // Återställer booleanvärdet för nästa spelomgång
        numberCheck = false;

        // if-sats som kollar input från anävndaren om den uppfylls
        if (yourChoice == theRightChoice) {

            // Feedback till användaren om rätt
            alert(
                'For the first time ever, ' +
                playerName +
                    ' age of ' +
                    playerAge +
                    ' brought home the right groceries like a true boomer. Well played.'
            );
        } else {

            // Feedback till användaren om fel
            alert(
                'When ' +
                playerName +
                    ' came home with the wrong groceries, and saw the list with the right products, ' +
                    playerName +
                    ' went out and never came back again... '
            );
        }
    }

    // Denna while-loop med ett booleanvärde är strukturerat likt de ovanför, denna för att ta input från användaren om hen vill spela om
    // Tar input från användaren, loopar tills villkoret är uppfyllt
    while (playAgain) {

        // input från användaren
        playerAnswer = prompt('Play again? yes / no?');

        // if-sats med flera villkor med den logiska operatorn, or, kollar så att rätt input kommer in
        if (
            playerAnswer === null ||
            playerAnswer === 'null' ||
            playerAnswer.length <= 0
        ) {

            // Feedback till användaren om fel
            alert("Input 'yes' or 'no'");
        } else {

            // får den in rätt input, rätt variabelvärde, omvandlas värdet till gemener
            // för att smidigt kontrollera input och så att villkoret till if-satsen under, kan uppfyllas
           var theAnswer = playerAnswer.toLowerCase();

            // if-sats som kollar den omvandlade strängvärdet
            if (theAnswer === 'no') {

                // uppfylls detta villkor, ändras booleanvärdet som styr spelflödet
                continuingGame = false;

                // booleanvärdet änndras så att denna while-loop kan sluta
                playAgain = false;
            }

            // if-sats som kollar den omvandlade strängvärdet
            if (theAnswer === 'yes') {
                // booleanvärdet änndras så att denna while-loop kan sluta
                playAgain = false;
                // ironisk feedback till användaren
                alert('Really? Ok!');
            }
        }
    }

    // Booleanvärdet återställs så att det funkar till nästa omgång
    playAgain = true;
}

// Slutmeddelande
alert('Good bye player!');


// Hela koden är validerad och de fel har korrigeras
