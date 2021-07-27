// // Arrays - ordered lists of items

// // 0 indexed
// let featuredPosts = [
//     "Check out my Netflix clone",        // 0 
//     "Here's the code for my project",    // 1
//     "I've just relaunched my portfolio"  // 2
// ]

// console.log( featuredPosts[1] )

// let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]

// // Make the following appear in the console:
// // Frontend developer at Xeneta
// // People counter for Norstat
// // CEO at Scrimba

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])




// // Array - ordered list of items - coposite / complex data type

// // Create an array that describes yourself. Use the three primitive data types you've learned
// // It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let castle = {
//     title: "Live like a king in my castle",
//     price: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/caste2.png"],
//     sayHello: function() {
//         console.log("Hey Castle!")
//     }
// }


// let per = ["Aly", 35, true, castle]


// // Push the newMessage to the messages array, and then log out the array

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// console.log(messages[2])





// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 10;  count < 21;  count += 3 )  {
    
//     console.log(count)

// }


// For loops and arrays
// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers

// for (let i = 10; i < 101; i += 10) {
//     console.log(i)
// }



let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌",
    "Okay, bye!"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }


// Loop and DOMs
let sentence = ["Hello", "my", "name", "is", "Alia"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}





// let largeCountries = ["China","India","USA","Indonesia"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
*/
