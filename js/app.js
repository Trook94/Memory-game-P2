(function(){
    "use strict";
/*
 * Create a list that holds all of your cards
 */

const cards = document.querySelectorAll(".card");

let Symbol = [];  //all symboles
let OpenC = [];  // opened cards
let handlerTime;
 
let Nstars = 3; // Number of Stars
let Nmoves = 0; // Number of moves
let minutesTime = 0;
let secandsTime = 0;
let completedTime;   // in Showbox 


function initGame() {   // initialize game 
    cards.forEach(card => {
        card.addEventListener("click", ClickCard);   // add event listener to each card
        let child = card.children[0];    
        Symbol.push(child.className);
    }); 
    
    document.querySelector("#btn-again").addEventListener("click", StartGM);
    document.querySelector("#btn-Close").addEventListener("click", CloseDialog);
    document.querySelector(".restart").addEventListener("click", StartGM);

}



function FlipCards() {    // flip cards down 
    cards.forEach(card => {
        card.className = "card";        
    });
}


function CloseDialog() {  
    document.querySelector("#dialog-box").close(); // close Dialog

}    

function startTimer()  {  
    if(!handlerTime) {  
        handlerTime = setInterval(updateTime,800); 
    }
}


function StartGM() {    // start game and close 

    CloseDialog();  /* >> */   minutesTime = 0;   /* >> */   secandsTime = 0;  
    Nmoves = 0;     /* >> */   OpenC = [];       /* >> */    Nstars = 3;
    UpdateNmoves(); /* >> */   updateTime();     /* >> */    CardShuffle();
    FlipCards();   /* >> */    startTimer();

}

function stopTimer() {
    clearInterval(handlerTime);
    handlerTime = null;

}

function updateTime() {

    if(secandsTime>59) { 
         secandsTime = 0; 
         minutesTime += 1;
    }
    
    
    let minutesString = "";
    let SecandString = "";


    if (secandsTime<10) {
        SecandString = "0" + secandsTime;
    } else {
        SecandString = secandsTime;
    }

    if (minutesTime < 10) {
        minutesString = "0" + minutesTime;
    } else {
        minutesString = minutesTime;
    }
    
    completedTime = document.querySelector(".timer").innerText = `${minutesString}:${SecandString}`;

    secandsTime += 1;
    
}



function CardShuffle() {
    
    Symbol = shuffle(Symbol); //shuffle the Symbol

    let j = 0;
    cards.forEach(card => {
        let child = card.children[0];

        child.className = Symbol[j];
        j++;
    });

}

function ClickCard() {  // Make sure card is not opened
    
    if(this.classList.contains("show")) {
        
        console.log("card is open");
        return;
    }


    if (OpenC.length<2) {   //  need to open 2 cards maximam
        
        this.classList.toggle("show");
        this.classList.toggle("open");
        OpenC.push(this);
        
        if (OpenC.length == 2) {    // two cards only 
            
            setTimeout(matchingCards, 800);

            
        }
    }
    
    
}

function matchingCards() {     // Make sure card is open


    if(OpenC.length==2) {
        let F1card = OpenC[0];  // first card 
        let secondCard = OpenC[1];
        let FchildClass = F1card.children[0].className;    // first child class 
        let SchildClass = secondCard.children[0].className; // second child class 

        if(FchildClass==SchildClass) {  //  compare the className 
            F1card.classList.add("match");
            secondCard.classList.add("match");    
        } else {
            F1card.className = "card";
            secondCard.className = "card";
   
        }
        
        OpenC = [];

        incrementNumberMoves(); 
    }

    // display a message to the user

    const remainingUnOpenC = document.querySelectorAll(".card:not(.match)");
    if(remainingUnOpenC.length==0) {
        
        ShowBox();    // display You winner

        
        
    }
}

function incrementNumberMoves() {
    Nmoves += 1;
    
    if(Nmoves<17) {
        Nstars = 3;
    } else if(Nmoves < 21) {
        Nstars = 2;
    } else {
        Nstars = 1;
    }

    UpdateNmoves();
}

function UpdateNmoves() {

    const movesElement = document.querySelector(".moves");
    
    movesElement.innerText = Nmoves;

    const starsElement = document.querySelector(".stars");   //  update the number of stars

    starsElement.innerHTML = "";

    for(let i=0; i<Nstars; i++) {
        let star = "<li> <i class='fa fa-star'></i> </li>";
        starsElement.innerHTML += star;
    }

}

// function getTimer(){
// document.querySelector("timer");    
//     }


function ShowBox() {
    // clearInterval(interval);
    // var Time = getTimer();
    
    
    let dialog = document.querySelector("#dialog-box");

    document.querySelector("#span-moves").innerText = Nmoves;
    document.querySelector("#span-star").innerText = Nstars;

    // Adding completed Time in Dilog-box
    document.querySelector("#time").innerText = completedTime ;


    dialog.showModal();

    stopTimer();
}

initGame();
StartGM();




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

})();