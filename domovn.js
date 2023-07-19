(function () {
    // detta gör så att varje variabel i scriptkoden måste deklareras
    'use strict';

    console.log('Javascript och DOM');

    // 1) Tag name selektor och klassmanipulation
    // Hämta alla p-taggar som finns i dokumentet
    // sätt klassnamnet bodyCopy på dessa

    // Här selekterar vi tag i alla p-taggar/ element och förvarar det i en lista med noder
    var listOfParagraphs = document.getElementsByTagName('p');

    // Här sätter vi klassnamnet "bodyCopy" till alla p-element med en for lopp
    // loppen startar på 0, vilket är det första indexplatsen i listan av noder
    // och loopar tills den når sista indexplatsen
    for (var i = 0; i < listOfParagraphs.length; i++) {
        listOfParagraphs[i].className = 'bodyCopy';
    }

    // 2) Selektorer och childnodes för klassmanipulation
    // Manipulera p-taggen i footer och sätt klassnamnet "footerp"

    // kollade igenom alla p-taggar genom att ändra indexplatsen inom hakparanterserna
    listOfParagraphs[3].className = 'footerp';

    // 3) Class name selektorer, loopar och DOM manipulation
    // Skapa länkar utifrån navigations-listans <li> och dess text

    // Selekterar rätt list-element genom att använda mig utav getElementByClassName
    // får en lista med li-element
    var navigationListItems = document.getElementsByClassName('navigation');

    // loopar igenom listan
    for (i = 0; i < navigationListItems.length; i++) {
        // Skapar länk-taggen a med createElement
        var linkTag = document.createElement('a');

        // Lägger till attributen med rätt länk från li-elementens innehåll
        linkTag.setAttribute('href', '#' + navigationListItems[i].innerHTML);

        // Får rätt innehållsvärde
        linkTag.innerHTML = navigationListItems[i].innerHTML;

        // Tar bort li-taggens inehåll
        navigationListItems[i].innerHTML = '';

        // Lägger till a-taggen till föräldern i det här fallet, li-taggen
        navigationListItems[i].appendChild(linkTag);
    }

    // 4) Id selektorer och attribut
    // Välj id:n "#lista2", manipulera dess parentnode
    // så att parentnodens bakgrundsfärgen får värdet: #cfd8dc
    // Jag hoppas att jag tolkade uppgiften rätt!

    // Väljer rätt ID med getElementById och förvarar det i list2
    var list2 = document.getElementById('lista2');

    // Väljer parentNode och ändrar backgrundsfärg
    list2.parentNode.style.backgroundColor = '#cfd8dc';


    // 5) Finalen
    // Kombinera flera selektorer och manipulera textfärgen i #lista1
    // med hjälp av modulus %, gör så att de ojämna li-elementen får textfärgen röd

    // Väljer rätt ID och förvarar värdet i en variabel
    var list1 = document.getElementById('lista1');

    // Loopar igenom list1-varibelns children, vilket är en lista med alla li-taggar
    // som finns i "#lista1"
    for(i = 0; i < list1.children.length; i++){

        // Kollar om li-taggens plats i indexet är ojämnt med hjälp av modulu %
        // modulus kollar om det blir rest över när summan går jämnt ut
        // Här kollar om det inte blir jämnt ut, det vill säga, om det blir rest
        if(i % 2 !== 0)
        // och om det stämmer så får li-taggen i en ojämn indexplats en röd textfärg
        list1.children[i].style.color = "red";
    }
})();
