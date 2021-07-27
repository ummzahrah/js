const myEmojis = ["🎾","🍇","🚣"]


function renderEmojis(){
    let emojiContainer = document.getElementById("emoji-container")
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
