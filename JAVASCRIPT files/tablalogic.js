

window.addEventListener('keydown', (e) => {
    
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audio) return;
    audio.currentTime =0;
    audio.play();
})

window.addEventListener('keydown', (ev) => {
    
    let changeColor = document.querySelector(`button[data-key = '${ev.keyCode}']`)
    
    // setTimeout(() => changeColor.)

    setTimeout(() => changeColor.style.backgroundColor=" rgb(136, 116, 0)", 300)

    setTimeout(() => changeColor.style.backgroundColor="white", 400)
    
    
})

const jhaptaal = () => {
    for(let i = 1; i<=100;i++){
        let audio = document.querySelector(`audio[data-key='${6}']`)
        audio.play();

    }
}

