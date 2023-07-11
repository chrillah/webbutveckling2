// Global variables
const BOOMER_ALERT = 20
const THE_RIGHT_CHOICE = 3
const MINIMUM_POWER = 3
const MAXIMUM_POWER = 7
var player = ''
var playerAnswer = ''

var nameCheck = false
var ageCheck = false
var numberCheck = false
var continuingGame = true
var playAgain = true

alert('Life: An Adventure')
confirm('Are you ready to play?')
while (continuingGame) {
    while (!nameCheck) {
        var name = prompt("What's your name, playah?")
        if (typeof name == 'string') {
            if (name.length >= 0) {
                if (name === null || name === 'null' || name === '') {
                    alert('No, no, no, you have to have a name!')
                } else {
                    nameCheck = true
                }
            } else {
                alert('No, no, no, you have to have a name!')
            }
        } else {
            alert('No, no, no, you have to have a name!')
        }
    }
    nameCheck = false
    nameToUpperCase = name.toUpperCase()
    while (!ageCheck) {
        var age = parseInt(prompt(name + " , what's your age?"))
        if (Number.isInteger(age)) {
            if (age === null || age <= 0 || age > 200) {
                alert('Impossible! Try again.')
            } else {
                ageCheck = true
            }
        } else {
            alert('No age? Come on, try again.')
        }
    }
    ageCheck = false
    if (age < BOOMER_ALERT) {
        alert('Alright ' + name + '! You play as an astronaut')
        player = 'astronaut'
    } else if (age > 122) {
        alert(
            'Poor old thing. Still a boomer. And an adult. And you play as a regular adult.'
        )
        player = 'boomer'
    } else {
        alert('Ok boomer, you play as a regular adult')
        player = 'boomer'
    }

    astronautStory =
        'Captain ' +
        name +
        ", we are in a direct course to a black hole, we need to change course ASAP! Use the control panel and boost our rockets! But be careful, don't use to much power or the rockets will blow up!"

    boomerStory_part1 =
        'Dear ' +
        name +
        ", I have gone to work. I will be home late so you have to do the shopping. Here is the list: \n - Oat creme \n - Tofu \n - Toothpaste \n It's very important that you get it all, or don't be here when I come home. Love xx"

    boomerStory_part2 =
        '- LATER IN THE GROCERY STORE INSIDE ' +
        nameToUpperCase +
        "'s MIND - 'Dammit! I forgot the list! What was it now again?'"

    groceryList_1 = '\n1) - Milk\n - Creme\n - Tooth brush'
    groceryList_2 = '\n2) - Goat Milk\n - Nachos\n - Dental floss'
    groceryList_3 = '\n3) - Oat creme\n - Tofu\n - Toothpaste'

    listOfThoughts = [groceryList_1, groceryList_2, groceryList_3]

    if (player == 'astronaut') {
        alert(astronautStory)

        while (!numberCheck) {
            powerBoost = parseInt(prompt('Pick a number between 1 - 10'))
            if (Number.isInteger(powerBoost)) {
                if (powerBoost < 1 || powerBoost > 10) {
                    alert(
                        'Dammit captain ' +
                            name +
                            "! That's incorrect! Try again!"
                    )
                } else {
                    numberCheck = true
                }
            } else {
                alert('You must enter a number!')
            }
        }
        numberCheck = false

        if (powerBoost < MINIMUM_POWER) {
            alert(
                "You didn't use much power, we are drifting in to the black hole. Good bye"
            )
        } else if (powerBoost > MAXIMUM_POWER) {
            alert(
                'I did warn you, now our rockets are gone. And so are we, drifting in to the black hole... Good bye'
            )
        } else {
            alert("Puh! That's was a close one! Good job captain " + name + '!')
        }
    } else {
        alert(boomerStory_part1)
        alert(boomerStory_part2)

        while (!numberCheck) {
            yourChoice = parseInt(prompt('Was it ' + [...listOfThoughts] + '?'))
            if (Number.isInteger(yourChoice)) {
                if (yourChoice < 1 || yourChoice > 3) {
                    alert(
                        'Wake up ' +
                            name +
                            ', not an option, try again! Is it 1, 2 or 3?'
                    )
                } else {
                    numberCheck = true
                }
            } else {
                alert('Oh come on! Incorrect, try again! Is it 1, 2 or 3?')
            }
        }
        numberCheck = false

        if (yourChoice == THE_RIGHT_CHOICE) {
            alert(
                'For the first time ever, ' +
                    name +
                    ' age of ' +
                    age +
                    ' brought home the right groceries like a true boomer. Well played.'
            )
        } else {
            alert(
                'When ' +
                    name +
                    ' came home with the wrong groceries, and saw the list with the right products, ' +
                    name +
                    ' went out and never came back again... '
            )
        }
    }

    playAgain = true
    while (playAgain) {
        playerAnswer = prompt('Play again? yes / no?')
        if (
            playerAnswer === null ||
            playerAnswer === 'null' ||
            playerAnswer.length <= 0
        ) {
            alert("Input 'yes' or 'no'")
        } else {
            theAnswer = playerAnswer.toLowerCase()
            if (theAnswer === 'no') {
                continuingGame = false
                playAgain = false
            }
            if (theAnswer === 'yes') {
                playAgain = false
                alert('Really? Ok!')
            }
        }
    }
}

alert('Good bye player!')
