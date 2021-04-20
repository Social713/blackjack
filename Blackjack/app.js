/*Credit
https://code-boxx.com/javascript-blackjack/#sec-js
https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
https://www.dstromberg.com/2019/02/tutorial-create-and-shuffle-a-deck-of-cards-in-javascript/

Note: Nothing was copied and pasted. I coded everything in the way I understood best.
*/

let playerName = prompt(`What is your name?`);
// new Array() creates an array that will hold the card objects
// declared in global memory so that all the functions will have access
let deck = new Array();

const makeTheDeck = () => {
    // suits and values
    const suits = [`diamonds`, `clubs`, `hearts`, `spades`];
    const values = [`A`,`2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`];

    // loop through the suits and the values to store them in the newly created array as 'suit & value' pairs
    for(let i = 0; i < suits.length; i+=1){
		for(let j = 0; j < values.length; j+=1){

            //create a value 'points' for the A, J, Q, and K cards
            let points = Number(values[i]);
            if (values[i]=== "J"|| values[i]=== "Q"|| values[i]=== "K") points = 10;

            // initially set 'A' set to 11 but later if score is over 21 'A' will change it's value to 1
            if (values[i]=== "A") points = 11;

            //create the 'card' and then push it to the 'stack'(new Array)
			let card = {Suit: suits[i], Value: values[j]};
			deck.push(card);
		};
	}
    return deck;
};


// must create a shuffle feature for the deck of cards --> Fisher-Yates Algorithm
const shuffle = ()=>{
    for(let i=0; i<713; i+=1){
        let card1 = Math.floor((Math.random()*deck.length));
        let card2 = Math.floor((Math.random()*deck.length));
        let temp = deck[card1];
        
        deck[card1] = deck[card2];
        deck[card2] = temp;
    }
}

// must create the players
const makeThePlayer = num => {
    let players = new Array();
    for (let i = 1; i <= num; i+=1){
        // create a new array for a new player's hand
        let hand = new Array();
        let player = {Name: playerName, ID: i, Points: 0, Hand: hand};
        players.push([player]);
    }
}

const playerUI = () => {
    let player = document.querySelector('.div-player');
    let playerHand  = document.querySelector('.div-hand');
    let playerValue = document.querySelector('.player-value');
    for(let i=0; i<)
}

const startBJ = ()=>{
    makeTheDeck();
    shuffle();
    
}


document.querySelector(".hit-me").addEventListener("click", (event) => {

})