/**
 * Credits
 * https://www.w3schools.com/html/html_images.asp
 * https://www.sitepoint.com/community/t/using-images-in-array-object/219080/2
 * https://learnersbucket.com/examples/html/3-different-ways-to-hide-dom-element-using-javascript/
 * http://web2.acbl.org/documentlibrary/marketing/Clip_Art/cards_png_zip.zip
 * https://www.youtube.com/watch?v=oT49KkhOv-Y&t=1506s
 * https://www.judgecasino.com/blackjack/number-of-decks-in-blackjack/
 * https://attacomsian.com/blog/javascript-array-splice
 * No code snippets were used. Everything was implemented by myself :)
 */
// let playerName = prompt(`What is your name?`);

// global variables

let playerHand =[];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;
let hitCount = 2;
let standCount = 2;
let hitButton = document.querySelector("#hit-me");
let standButton = document.querySelector(`.stand`);
let restartButton = document.querySelector(`.restart`);
let pGoldMedal = document.querySelector(`.player-gold`);
let dGoldMedal = document.querySelector(`.dealer-gold`);
let pSliverMedal = document.querySelector(`.player-silver`);
let dSliverMedal = document.querySelector(`.dealer-silver`);
let aceButton = document.querySelector(`.ace-value`);

// let ace1 = document.querySelector(`.ace-1`);
// let ace11 = document.querySelector(".ace-11");
// casinos use multiple decks for blackjack to stop card counters, so no need to pop cards out of the deck.

const deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

    // insert two blank spaces so the deck[i] will access the proper cardImage[i]
const cardImages = [
    "", "", `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `A`];

    // suits need to be randomized then added to cardImages
const suits = ['S', 'H', 'C', 'D'];
const faceCard = ["10", "J", "Q", "K"];
// randomization of deck, suits, and thus cardImages (inside startGame())
const randomCard = (deck) => deck[Math.floor(Math.random() * deck.length)];
const randomSuit = (suits) => suits[Math.floor(Math.random() * suits.length)];
const randomFace = (face) => faceCard[Math.floor(Math.random() * faceCard.length)];
/////////// Q,K,A not popping up!!! <-- solved!

const pHandGen = () =>{
// example <img src="images/cards/3S.png">
// console.log(cardImages[playerHand[0]] + " and " + cardImages[playerHand[1]]);
    playerScore = pHandValue();
    if (cardImages[playerHand[0]]==10 && cardImages[playerHand[1]]==10){
        document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
    }
    if (cardImages[playerHand[0]]==10){
        document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[playerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
    }
    if (cardImages[playerHand[1]]==10){
        document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[playerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
    }
    else {
        document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[playerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[playerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
    }
}


const dHandGen = () =>{ 
    dealerScore = dHandValue();
    if(cardImages[dealerHand[0]]==10 && cardImages[dealerHand[1]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dealerScore}`;
    }
    if (cardImages[dealerHand[0]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[dealerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dealerScore}`;
    }
    if (cardImages[dealerHand[1]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[dealerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dealerScore}`;
    }
    else {
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[dealerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[dealerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dealerScore}`;
    }
}

// app load functionality as well as restart button functionality
const startGame = () => {
    pGoldMedal.style.display = 'none';
    dGoldMedal.style.display = 'none';
    pSliverMedal.style.display = 'none';
    dSliverMedal.style.display = 'none';
    // aceButton.style.display = 'none';
    playerHand = [randomCard(deck), randomCard(deck)];
    dealerHand = [randomCard(deck), randomCard(deck)];    
    pHandGen();
    dHandGen();
    hitCount = 2;
    standCount = 2;
};



// functionality for hit me button
for (let i=0; i<playerHand.length; i+=1){
    
}

const hitMe = () => {
    
    playerHand.push(randomCard(deck));
    playerScore = pHandValue();
    
    if (playerHand[0] == 11 && playerHand[hitCount]+playerScore>21){
        
        console.log(playerHand);
        playerHand.splice(0, 1, 1);
        playerScore = pHandValue();
        console.log(playerHand);
    }
    if (playerHand[1] == 11 && playerHand[hitCount]+playerScore>21){
    
        console.log(playerHand);
        playerHand.splice(1, 1, 1);
        playerScore = pHandValue();
        console.log(playerHand);
    }
    if (playerHand[hitCount] == 11 && playerHand[hitCount]+playerScore>21){
       
        console.log(playerHand);
        playerHand.splice(hitCount, 1, 1);
        playerScore = pHandValue();
        cardImages[playerHand[hitCount]] = "A";
        console.log(playerHand);
    }    
    if(playerScore>21){
            // alert(`Sorry, ${playerName}, but the dealer won.`);
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            dGoldMedal.style.display = 'inline';
            pSliverMedal.style.display = 'inline';            
        };
        document.querySelector(".player-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[playerHand[hitCount]] + randomSuit(suits) + '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
        hitCount++;
    
    // if(playerHand.includes(11)&& pHandValue()>21) pHandValue() = pHandValue()-10;
};

// calculations for player and dealer hand values
const pHandValue = () =>{
    return playerHand.reduce((acc, ccV)=>{
        // playerScore= pHandValue();
        // if(ccV === 11){
        //     aceButton.style.display = 'inline';
        //     ace1.addEventListener("click", ()=> {
        //         playerScore-=10;
        //         document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
        //         aceButton.style.display = 'none';
        //     });
        //     ace11.addEventListener("click", ()=> {
        //         document.querySelector(".player-value").innerHTML = `Total: ${playerScore}`;
        //         aceButton.style.display = 'none';
        //     });
        // }
        if (ccV===11 && acc>10){
            return acc = acc+ccV - 10;
        }


        // if(acc+ccV>21){
        //     // alert(`Sorry, ${playerName}, but the dealer won.`);
        //     hitButton.style.display = 'none';
        //     standButton.style.display = 'none';
        //     dGoldMedal.style.display = 'inline';
        //     pSliverMedal.style.display = 'inline';
        //     return acc += ccV;             
        // };
        return acc += ccV;     
    })  
}
const dHandValue = () =>{
    return dealerHand.reduce((acc, ccV)=>{
        if (ccV===11 && acc>10){
            return acc = acc+ccV - 10;
        }
        return acc += ccV;
    })
}
       

// Game starts below here


startGame();



hitButton.addEventListener("click", hitMe);

standButton.addEventListener(`click`, () =>{
    dealerScore = dHandValue();
    playerScore = pHandValue();
    
    while(dealerScore<playerScore && dealerScore<19){
        dealerHand.push(randomCard(deck));
        dealerScore = dHandValue();
        // add the card images in addition to the values being pushed
        document.querySelector(".dealer-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[dealerHand[standCount]] + randomSuit(suits) + '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dealerScore}`;
        standCount++;
    }

    if (dealerHand[0] == 11 && dealerHand[standCount]+dealerScore>21){
        dealerHand.splice(0, 1, 1);
        dealerScore = dHandValue();
    }

    if (dealerHand[1] == 11 && dealerHand[standCount]+dealerScore>21){
        dealerHand.splice(1, 1, 1);
        dealerScore = dHandValue();   
    }

    if (dealerHand[standCount] == 11 && dealerHand[standCount]+dealerScore>21){
        dealerHand.splice(standCount, 1, 1);
        dealerScore = dHandValue();      
    }
        
    if(playerScore===dealerScore){
        // alert(`Draw!`);
        if(playerHand.length>dealerHand.length){
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            pSliverMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';    
        }
        if(playerHand.length<dealerHand.length){
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            dSliverMedal.style.display = 'inline';
            pGoldMedal.style.display = 'inline';    
        }
        else{
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            pGoldMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';
        }
    } 

    if(dealerScore>21) {
        // alert(`Dealer bust! ${playerName} wins!`);
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
    }

    if(dealerScore<=21 && dealerScore>playerScore) {
        // alert(`Sorry, ${playerName}, but the dealer won.`);
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        dGoldMedal.style.display = 'inline';
        pSliverMedal.style.display = 'inline';
    }

    if(playerScore===21 && dealerScore!== 21) {
        // alert(`${playerName} wins! Blackjack!`);
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
    }

    else if(playerScore<21 && playerScore>dealerScore) {
        // alert(`${playerName} wins! Blackjack!`);
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
    }
});

restartButton.addEventListener('click',()=>{
    startGame();
    hitButton.style.display = 'inline-block';
    standButton.style.display = 'inline';
})