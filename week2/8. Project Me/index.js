const myEmojis =["🏸","🍨","🍉"]


function renderEmojis(){
    let emojiContainer = document.getElementById("emoji-container")
    emojiContainer.innerHTML =""    
    for (let i=0;i<myEmojis.length;i++){
        let emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmojis.push(emojiInput.value)
        renderEmojis()
    }
})
const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmojis.pop(emojiInput.value)
        renderEmojis()
    }
})
const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmojis.shift(emojiInput.value)
        renderEmojis()
    }
})
const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value){
        myEmojis.unshift(emojiInput.value)
        renderEmojis()
    }
})
