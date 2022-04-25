

window.addEventListener('keydown', (e) => {
    
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audio) return;
    audio.currentTime =0;
    audio.play();
})

window.addEventListener('keydown', (ev) => {
    
    let changeColor = document.querySelector(`button[data-key = '${ev.keyCode}']`)
    
    // setTimeout(() => changeColor.)

    setTimeout(() => changeColor.style.backgroundColor="rgb(0, 0, 0)", 300)

    setTimeout(() => changeColor.style.backgroundColor="grey", 200)
    
    
})

