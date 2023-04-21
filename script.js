const whiteKeys = document.querySelectorAll(".white")
const blackKeys = document.querySelectorAll(".black")
const keys = document.querySelectorAll(".key")


function whiteKeyColor(whiteKey){
    whiteKey.style.background = "#F0EB8D"
    setTimeout(() => whiteKeyColorReset(whiteKey),200)
}

function whiteKeyColorReset(whiteKey){
    whiteKey.style.background = "#F6F1F1"
}

function blackKeyColor(blackKey){
    blackKey.style.background = "linear-gradient(180deg, rgba(7,7,7,1) 100%, rgba(98,98,98,1) 0%)"
    setTimeout(() => blackKeyColorReset(blackKey),200)
}

function blackKeyColorReset(blackKey){
    blackKey.style.background = "#413543"
}

function playTone(path){
    new Audio(path).play()
}

function keysAddEventListeners(){

    keys.forEach((key, i)=>{
        const path = `./tunes/(${i+1}).wav`
        key.addEventListener("click", ()=>playTone(path))
    })

    whiteKeys.forEach((whiteKey)=>{
        whiteKey.addEventListener("click", ()=> whiteKeyColor(whiteKey))
    })

    blackKeys.forEach((blackKey)=>{
        blackKey.addEventListener("click", ()=> blackKeyColor(blackKey))
    })
    
}

keysAddEventListeners()