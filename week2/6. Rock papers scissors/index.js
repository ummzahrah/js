// Create a function that returns a random item from the array

let hands = ["rock", "paper", "scissor"]

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )