/**
 * Credits
 * https://www.w3schools.com/html/html_images.asp
 * https://www.sitepoint.com/community/t/using-images-in-array-object/219080/2
 * https://learnersbucket.com/examples/html/3-different-ways-to-hide-dom-element-using-javascript/
 * https://www.youtube.com/watch?v=oT49KkhOv-Y&t=1506s
 * http://web2.acbl.org/documentlibrary/marketing/Clip_Art/cards_png_zip.zip
 * https://www.judgecasino.com/blackjack/number-of-decks-in-blackjack/
 */
// let playerName = prompt(`What is your name?`);

// global variables

let playerHand =[];
let dealerHand = [];
let hitButton = document.querySelector("#hit-me");
let stayButton = document.querySelector(`.stay`);
let restartButton = document.querySelector(`.restart`);
let pGoldMedal = document.querySelector(`.player-gold`);
let dGoldMedal = document.querySelector(`.dealer-gold`);
let pSliverMedal = document.querySelector(`.player-silver`);
let dSliverMedal = document.querySelector(`.dealer-silver`);

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

// randomization of deck, suits, and thus cardImages (inside startGame())
const randomCard = (deck) => deck[Math.floor(Math.random() * deck.length)];
const randomSuit = (suits) => suits[Math.floor(Math.random() * suits.length)];

/////////// Q,K,A not popping up!!! <-- solved!

const faceCard = ["10", "J", "Q", "K"];
const randomFace = (face) => faceCard[Math.floor(Math.random() * faceCard.length)];
const pHandGen = () =>{
// example <img src="images/cards/3S.png">
// console.log(cardImages[playerHand[0]] + " and " + cardImages[playerHand[1]]);

        if (cardImages[playerHand[0]]==10 && cardImages[playerHand[1]]==10){
            document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
            document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
        }
        if (cardImages[playerHand[0]]==10){
            document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[playerHand[1]] + randomSuit(suits) +  '.png">';
            document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
        }
        if (cardImages[playerHand[1]]==10){
            document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[playerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
            document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
        }
        else {
            document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[playerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[playerHand[1]] + randomSuit(suits) +  '.png">';
            document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
        }
    
}


const dHandGen = () =>{

 ///// ace logic here too!!! ////
    
    if(cardImages[dealerHand[0]]==10 && cardImages[dealerHand[1]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
    }
    if (cardImages[dealerHand[0]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[dealerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
    }
    if (cardImages[dealerHand[1]]==10){
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[dealerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + randomFace(faceCard) + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
    }
    else {
        document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[dealerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[dealerHand[1]] + randomSuit(suits) +  '.png">';
        document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
    }
}
// app load functionality as well as restart button functionality
const startGame = () => {
    pGoldMedal.style.display = 'none';
    dGoldMedal.style.display = 'none';
    pSliverMedal.style.display = 'none';
    dSliverMedal.style.display = 'none';
    playerHand = [randomCard(deck), randomCard(deck)];
    dealerHand = [randomCard(deck), randomCard(deck)];    
    pHandGen();
    dHandGen();
    hitCount = 2;
    stayCount = 2;
};


//////////////////////////// ACE LOGIC (I think...) ///////////////////////////////
// if(playerHand.includes(11)&& pHandValue()>21) pHandValue() = pHandValue()-10; //
///////////////////////////////////////////////////////////////////////////////////




// calculations for player and dealer hand values
const pHandValue = () =>{
    return playerHand.reduce((acc, ccV)=>{
        if (ccV===11 && acc>10){
            return acc = acc+ccV - 10;
        }
        if(acc+ccV>21){
            // alert(`Sorry, ${playerName}, but the dealer won.`);
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            dGoldMedal.style.display = 'inline';
            pSliverMedal.style.display = 'inline';
            return acc += ccV;             
        };
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

// functionality for hit me button
let hitCount = 2;
let stayCount = 2;
const hitMe = () => {
    // i = 2, because 2 cards
    playerHand.push(randomCard(deck));
   
        document.querySelector(".player-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[playerHand[hitCount]] + randomSuit(suits) + '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
        console.log("cardImages: "+ cardImages[playerHand[hitCount]])
        console.log(`i: `+ hitCount)
        hitCount++;
    
    // if(playerHand.includes(11)&& pHandValue()>21) pHandValue() = pHandValue()-10;
};


// Game starts below here


startGame();

hitButton.addEventListener("click", hitMe);

stayButton.addEventListener(`click`, () =>{
    
    while(dHandValue()<pHandValue() && dHandValue()<19){
        dealerHand.push(randomCard(deck));
        // add the card images in addition to the values being pushed
           
            document.querySelector(".dealer-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[dealerHand[stayCount]] + randomSuit(suits) + '.png">';
            document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
            console.log("cardImages: "+ cardImages[dealerHand[stayCount]])
            console.log(`i: `+ stayCount)
            stayCount++;
        }
        

    if(pHandValue()===dHandValue()){
        // alert(`Draw!`);
        if(playerHand.length>dealerHand.length){
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            pSliverMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';    
        }
        if(playerHand.length<dealerHand.length){
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            dSliverMedal.style.display = 'inline';
            pGoldMedal.style.display = 'inline';    
        }
        else{
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            pGoldMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';
        }
    } 

    if(dHandValue()>=19){
        if(dHandValue()>21) {
            // alert(`Dealer bust! ${playerName} wins!`);
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            pGoldMedal.style.display = 'inline';
            dSliverMedal.style.display = 'inline';
        }
    }

    if(dHandValue()<=21 && dHandValue()>pHandValue()) {
        // alert(`Sorry, ${playerName}, but the dealer won.`);
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        dGoldMedal.style.display = 'inline';
        pSliverMedal.style.display = 'inline';
    }

    if(pHandValue()===21 && dHandValue()!== 21) {
        // alert(`${playerName} wins! Blackjack!`);
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
    }

    else if(pHandValue()<21 && pHandValue()>dHandValue()) {
        // alert(`${playerName} wins! Blackjack!`);
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
    }
});

restartButton.addEventListener('click',()=>{
    startGame();
    hitButton.style.display = 'inline-block';
    stayButton.style.display = 'inline';
})