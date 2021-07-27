// Create a function that puts the apples onto the orangeShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


function sortFruit(){
    // logic for sorting fruits
    for (let i=0; i < fruit.length; i++) {
        if (fruit[i]==="🍎"){
            appleShelf.textContent +=  "🍎"
        } else if (fruit[i]==="🍊"){
            orangeShelf.textContent = orangeShelf.textContent+ "🍊"
        }
    }
}

sortFruit()




















































