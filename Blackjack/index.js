
// let playerName = prompt(`What is your name?`);
let playerHand =[];
let dealerHand = [];
let hitButton = document.querySelector("#hit-me");
let stayButton = document.querySelector(`.stay`);
let restartButton = document.querySelector(`.restart`);
let pGoldMedal = document.querySelector(`.player-gold`);
let dGoldMedal = document.querySelector(`.dealer-gold`);
let pSliverMedal = document.querySelector(`.player-silver`);
let dSliverMedal = document.querySelector(`.dealer-silver`);

const deck = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

const cardImages = [
    "", "", `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`, `A`];
const suits = ['S', 'H', 'C', 'D'];

    // '<img src="' + cardImages[playerHand[0]] + '">';
const randomCard = (deck) => deck[Math.floor(Math.random() * deck.length)];
const randomSuit = (suits) => suits[Math.floor(Math.random()*suits.length)];
// randomSuit(suits);
const startGame = () => {
    pGoldMedal.style.display = 'none';
    dGoldMedal.style.display = 'none';
    pSliverMedal.style.display = 'none';
    dSliverMedal.style.display = 'none';
    playerHand = [randomCard(deck), randomCard(deck)];
    dealerHand = [randomCard(deck), randomCard(deck)];     // <img src="images/cards/3S.png">
    document.querySelector(".player-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[playerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[playerHand[1]] + randomSuit(suits) +  '.png">';
    console.log(cardImages[playerHand[0]] + " and " + cardImages[playerHand[1]]);
    document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;;
    document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
    document.querySelector(".dealer-hand").innerHTML = '<img class="cards" src="images/cards/' + cardImages[dealerHand[0]] + randomSuit(suits) + '.png">' + '<img class="cards" src="images/cards/' + cardImages[dealerHand[1]] + randomSuit(suits) +  '.png">';;
    document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
};


// ACE LOGIC (I think...) 
// if(playerHand.includes(11)&& pHandValue()>21) pHandValue() = pHandValue()-10;


const pHandValue = () =>{
    return playerHand.reduce((acc, ccV)=>{
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
        return acc += ccV;
    })
}
const hitMe = () => {
    // i = playerHand.length
    playerHand.push(randomCard(deck));
    for(let i = 2; i<playerHand.length; i+=1){
        document.querySelector(".player-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[playerHand[i]] + randomSuit(suits) + '.png">';
        document.querySelector(".player-value").innerHTML = `Total: ${pHandValue()}`;
    }
    if(playerHand.includes(11)&& pHandValue()>21) pHandValue() = pHandValue()-10;
};

startGame();

hitButton.addEventListener("click", hitMe);

stayButton.addEventListener(`click`, () =>{
    
    while(dHandValue()<19){
        dealerHand.push(randomCard(deck));
        for(let i=2; i<dealerHand.length;i+=1){
            document.querySelector(".dealer-hand").innerHTML += '<img class="cards" src="images/cards/' + cardImages[dealerHand[i]] + randomSuit(suits) + '.png">';
            document.querySelector(".dealer-value").innerHTML = `Total: ${dHandValue()}`;
        }
        
    }

    if(pHandValue()===dHandValue()){
        alert(`Draw!`);
        hitButton.style.display = 'none';
        stayButton.style.display = 'none';
        pGoldMedal.style.display = 'inline';
        dGoldMedal.style.display = 'inline';
    } 

    if(dHandValue()>=19){
        if(dHandValue()>21) {
            // alert(`Dealer bust! ${playerName} wins!`);
            hitButton.style.display = 'none';
            stayButton.style.display = 'none';
            pGoldMedal.style.display = 'inline';
            dSliverMedal.style.display = 'inline';
        }
        // if(dHandValue()===21) {
        //     alert(`Sorry, ${playerName}, but the dealer won. Blackjack!`);
        //     hitButton.style.display = 'none';
        //     stayButton.style.display = 'none';
        // }
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
    console.log('restart!!!')
    startGame();
    hitButton.style.display = 'inline-block';
    stayButton.style.display = 'inline';
})