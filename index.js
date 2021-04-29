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
// storing the scores in global due to the ace logic
let playerScore = 0;
let dealerScore = 0;
//  counters for adding the proper cards images
let hitCount = 2;
let standCount = 2;
// total wins // don't want to count losses as it may be depressing
let pWins = 0;
let dWins = 0;

let hitButton = document.querySelector("#hit-me");
let standButton = document.querySelector(`.stand`);
let restartButton = document.querySelector(`.restart`);
let pGoldMedal = document.querySelector(`.player-gold`);
let dGoldMedal = document.querySelector(`.dealer-gold`);
let pSliverMedal = document.querySelector(`.player-silver`);
let dSliverMedal = document.querySelector(`.dealer-silver`);
let aceButton = document.querySelector(`.ace-value`);
let pTotal = document.querySelector(".player-value");
let dTotal = document.querySelector(".dealer-value");
let domPHand = document.querySelector(".player-hand");
let domDHand = document.querySelector(".dealer-hand");

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
const randomFace = (faceCard) => faceCard[Math.floor(Math.random() * faceCard.length)];
let noMore = [];


const pstopRepeat = () => {

    let card1 = cardImages[playerHand[hitCount]];
    let card2 = card1 + suits[0];
    let card3 = card1 + suits[1];
    let card4 = card1 + suits[2];
    let card5 = card1 + suits[3];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                noMore.push(card5);  
                console.log(`stop1`, noMore, card5)   
                return card5;  
            }
            noMore.push(card4); 
            console.log(`stop2`, noMore, card4)    
            return card4; 
        }
        noMore.push(card3);
        console.log(`stop3`, noMore, card3)   
        return card3;
    }
    else{
        noMore.push(card2);
        console.log(`stop4`, noMore, card2)
        return card2;
    }
}

const dstopRepeat = () => {

    let card1 = cardImages[dealerHand[standCount]];
    let card2 = card1 + suits[3];
    let card3 = card1 + suits[2];
    let card4 = card1 + suits[1];
    let card5 = card1 + suits[0];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                noMore.push(card5);  
                console.log(`stop5`, noMore, card5)   
                return card5;  
            }
            noMore.push(card4); 
            console.log(`stop6`, noMore, card4)    
            return card4; 
        }
        noMore.push(card3);
        console.log(`stop7`, noMore, card3)   
        return card3;
    }
    else{
        noMore.push(card2);
        console.log(`stop8`, noMore, card2)
        return card2;
    }
}

const pcardFaceDontRepeat0 = () =>{
    let card1 = cardImages[playerHand[0]];
    let card2 = card1 + suits[2];
    let card3 = card1 + suits[3];
    let card4 = card1 + suits[0];
    let card5 = card1 + suits[1];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                noMore.push(card5);  
                console.log(`stop9`, noMore, card5)   
                return card5;  
            }
            noMore.push(card4); 
            console.log(`stop10`, noMore, card4)    
            return card4; 
        }
        noMore.push(card3);
        console.log(`stop11`, noMore, card3)   
        return card3;
    }
    else{
        noMore.push(card2);
        console.log(`stop12`, noMore, card2)
        return card2;
    }
}

const pcardFaceDontRepeat1 = () =>{
    let card1 = cardImages[playerHand[1]];
    let card2 = card1 + suits[3];
    let card3 = card1 + suits[0];
    let card4 = card1 + suits[1];
    let card5 = card1 + suits[2];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                noMore.push(card5);  
                console.log(`stop13`, noMore, card5)   
                return card5;  
            }
            noMore.push(card4); 
            console.log(`stop14`, noMore, card4)    
            return card4; 
        }
        noMore.push(card3);
        console.log(`stop15`, noMore, card3)   
        return card3;
    }
    else{
        noMore.push(card2);
        console.log(`stop16`, noMore, card2)
        return card2;
    }
}

let dCard0;
const dcardFaceDontRepeat0 = () =>{
    let card1 = cardImages[dealerHand[0]];
    let card2 = card1 + suits[2];
    let card3 = card1 + suits[3];
    let card4 = card1 + suits[0];
    let card5 = card1 + suits[1];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                dCard0 = card5
                noMore.push(card5);   
                console.log(`stop17`, noMore, card5) 
                return card5;  
            }
            dCard0 = card4
            noMore.push(card4);
            console.log(`stop18`, noMore, card4)   
            return card4; 
        }
        dCard0 = card3
        noMore.push(card3);
        console.log(`stop19`, noMore, card3)   
        return card3;
    }
    else{
        dCard0 = card2
        noMore.push(card2);
        console.log(`stop20`, noMore, card2)
        return card2;
    }
    
}

let dCard1;
const dcardFaceDontRepeat1 = () =>{
    let card1 = cardImages[dealerHand[1]];
    let card2 = card1 + suits[1];
    let card3 = card1 + suits[2];
    let card4 = card1 + suits[0];
    let card5 = card1 + suits[3];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                dCard1 = card5
                noMore.push(card5);
                console.log(`stop21`, noMore, card5)    
                return card5;  
            }
            dCard1 = card4
            noMore.push(card4);
            console.log(`stop22`, noMore, card4)    
            return card4; 
        }
        dCard1 = card3
        noMore.push(card3);
        console.log(`stop23`, noMore, card3)   
        return card3;
    }
    else{
        dCard1 = card2
        noMore.push(card2);
        console.log(`stop24`, noMore, card2)
        return card2;
    }
}


const repeatNo = () =>{
    let card1 = randomFace(faceCard);
    let card2 = card1 + suits[1];
    let card3 = card1 + suits[0];
    let card4 = card1 + suits[3];
    let card5 = card1 + suits[2];
    if (noMore.includes(card2)){
        if (noMore.includes(card3)){
            if (noMore.includes(card4)){
                dCard1 = card5
                noMore.push(card5);
                console.log(`stop25`, noMore, card5)    
                return card5;  
            }
            dCard1 = card4
            noMore.push(card4);
            console.log(`stop26`, noMore, card4)    
            return card4; 
        }
        dCard1 = card3
        noMore.push(card3);
        console.log(`stop27`, noMore, card3)   
        return card3;
    }
    else{
        dCard1 = card2
        noMore.push(card2);
        console.log(`stop28`, noMore, card2)
        return card2;
    }
}

/////////// Q,K,A not popping up!!! <-- solved!

const pHandGen = () =>{
// example <img src="images/cards/3S.png">
// console.log(cardImages[playerHand[0]] + " and " + cardImages[playerHand[1]]);
    playerScore = pHandValue();
    if (cardImages[playerHand[0]]==10 && cardImages[playerHand[1]]==10){
        domPHand.innerHTML = '<img class="cards" src="images/cards/' + repeatNo() + '.png">' + '<img class="cards" src="images/cards/' + repeatNo() +  '.png">';
        pTotal.innerHTML = `Total: ${playerScore}`;
    }
    else if (cardImages[playerHand[0]]==10){
        domPHand.innerHTML = '<img class="cards" src="images/cards/' + repeatNo() + '.png">' + '<img class="cards" src="images/cards/' + pcardFaceDontRepeat1() +  '.png">';
        pTotal.innerHTML = `Total: ${playerScore}`;
    }
    else if (cardImages[playerHand[1]]==10){
        domPHand.innerHTML = '<img class="cards" src="images/cards/' + pcardFaceDontRepeat0() + '.png">' + '<img class="cards" src="images/cards/' + repeatNo() +  '.png">';
        pTotal.innerHTML = `Total: ${playerScore}`;
    }
    else {
        domPHand.innerHTML = '<img class="cards" src="images/cards/' + pcardFaceDontRepeat0() + '.png">' + '<img class="cards" src="images/cards/' + pcardFaceDontRepeat1() +  '.png">';
        pTotal.innerHTML = `Total: ${playerScore}`;
    }
}

let backCardImage = '<img class="cards back-card" src="images/cards/red_back.png">';

const dHandGen = () =>{ 
    dealerScore = dHandValue();
    if(cardImages[dealerHand[0]]==10 && cardImages[dealerHand[1]]==10){
        domDHand.innerHTML = '<img class="cards" src="images/cards/' + repeatNo() + '.png">' + backCardImage;
        dTotal.innerHTML = `Total: ?`;
    }
    else if (cardImages[dealerHand[0]]==10){
        domDHand.innerHTML = '<img class="cards" src="images/cards/' + repeatNo() + '.png">' + backCardImage;
        dTotal.innerHTML = `Total: ?`;
    }
    else if (cardImages[dealerHand[1]]==10){
        domDHand.innerHTML = '<img class="cards" src="images/cards/' + dcardFaceDontRepeat0() + '.png">' + backCardImage;
        dTotal.innerHTML = `Total: ?`;
    }
    else {
        domDHand.innerHTML = '<img class="cards" src="images/cards/' + dcardFaceDontRepeat0() + '.png">' + backCardImage;
        dTotal.innerHTML = `Total: ?`;
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
    noMore = [];
    pHandGen();
    dHandGen();
    // dcardFaceDontRepeat0();
    hitCount = 2;
    standCount = 2;
    $(".dealer-wins").text(`Total wins: ${dWins}`);
    $(".player-wins").text(`Total wins: ${pWins}`);
    $(`.back-card`).append();
};


const hitMe = () => {
    
    playerHand.push(randomCard(deck));
    playerScore = pHandValue();
    
    if (playerHand[0] == 11 && playerHand[hitCount]+playerScore>21){
        playerHand.splice(0, 1, 1);
        playerScore = pHandValue();
    }
    if (playerHand[1] == 11 && playerHand[hitCount]+playerScore>21){
        playerHand.splice(1, 1, 1);
        playerScore = pHandValue();
    }
    if (playerHand[hitCount] == 11 && playerHand[hitCount]+playerScore>21){
        playerHand.splice(hitCount, 1, 1);
        playerScore = pHandValue();
        cardImages[playerHand[hitCount]] = "A";
    }    
    if(playerScore>21){
            // alert(`Sorry, ${playerName}, but the dealer won.`);
            $(`.back-card`).remove();
            $(`.dealer-hand`).append('<img class="cards" src="images/cards/' + dcardFaceDontRepeat1() + '.png">');
            dTotal.innerHTML = `Total: ${dealerScore}`;
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            dGoldMedal.style.display = 'inline';
            pSliverMedal.style.display = 'inline';   
            dWins+=1;         
        };
        domPHand.innerHTML += '<img class="cards" src="images/cards/' + pstopRepeat() + '.png">';
        pTotal.innerHTML = `Total: ${playerScore}`;
        hitCount++;
};

// calculations for player and dealer hand values
const pHandValue = () =>{
    return playerHand.reduce((acc, ccV)=>{
        if (ccV===11 && acc>10){
            return acc = acc+ccV - 10;
        }
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

$(`#hit-me`).on(`click`, hitMe);
// hitButton.addEventListener("click", hitMe);

$(`.stand`).on(`click`, () =>{
    dealerScore = dHandValue();
    playerScore = pHandValue();
    $(`.back-card`).remove();
    $(`.dealer-hand`).append('<img class="cards" src="images/cards/' + dcardFaceDontRepeat1() + '.png">');
    
    // domDHand.innerHTML = '<img class="cards" src="images/cards/' + dCard0 + '.png">' + backCardImage;
    while(dealerScore<playerScore && dealerScore<19){
        
        dealerHand.push(randomCard(deck));
        
        dealerScore = dHandValue();
        if (dealerHand[0] == 11 && dealerHand[standCount]+dealerScore>21){
            console.log(`1`)
            dealerHand.splice(0, 1, 1);
           
            dealerScore = dHandValue();
        }
    
        if (dealerHand[1] == 11 && dealerHand[standCount]+dealerScore>21){
            console.log(`2`)
            dealerHand.splice(1, 1, 1);
            
            dealerScore = dHandValue();   
        }
        // add the card images in addition to the values being pushed
        if(dealerHand[standCount]==10){
            $(`.dealer-hand`).append('<img class="cards" src="images/cards/' + repeatNo() + '.png">');
            console.log(`1`)
            dTotal.innerHTML = `Total: ${dealerScore}`;
            standCount++;
        }
        else{
            $(`.dealer-hand`).append('<img class="cards" src="images/cards/' + dstopRepeat() + '.png">');
            console.log(`2`)
            dTotal.innerHTML = `Total: ${dealerScore}`;
            standCount++;
        }
    }
        
    if(playerScore===dealerScore){
        // alert(`Draw!`);
        dTotal.innerHTML = `Total: ${dealerScore}`;
       
        if(playerHand.length>dealerHand.length){
           
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            pSliverMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';  
            dWins+=1;    
        }
        if(playerHand.length<dealerHand.length){
          
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            dSliverMedal.style.display = 'inline';
            pGoldMedal.style.display = 'inline';   
            pWins+=1;    
        }
        if (playerHand.length===dealerHand.length){
          
            hitButton.style.display = 'none';
            standButton.style.display = 'none';
            pGoldMedal.style.display = 'inline';
            dGoldMedal.style.display = 'inline';
        }
        
    } 

    if(dealerScore>21) {
        // alert(`Dealer bust! ${playerName} wins!`);
     
        dTotal.innerHTML = `Total: ${dealerScore}`;
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
        pWins+=1;  
    }

    if(dealerScore<=21 && dealerScore>playerScore) {
        // alert(`Sorry, ${playerName}, but the dealer won.`);
  
        dTotal.innerHTML = `Total: ${dealerScore}`;
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        dGoldMedal.style.display = 'inline';
        pSliverMedal.style.display = 'inline';
        dWins+=1;  
    }

    if(playerScore===21 && dealerScore!== 21) {
        // alert(`${playerName} wins! Blackjack!`);
      
        dTotal.innerHTML = `Total: ${dealerScore}`;
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
        pWins+=1;  
    }

    else if(playerScore<21 && playerScore>dealerScore) {
        // alert(`${playerName} wins! Blackjack!`);
       
        dTotal.innerHTML = `Total: ${dealerScore}`;
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dSliverMedal.style.display = 'inline';
        pWins+=1;  
    }
});

$(".restart").on('click',()=>{  
    if (playerScore<dealerScore && dealerScore<21){
        dWins+=1;   
    }
    startGame();
    hitButton.style.display = 'inline-block';
    standButton.style.display = 'inline';
});