

window.addEventListener('keydown', (e) => {
    
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if(!audio) return;
    audio.currentTime =0;
    audio.play();
})

window.addEventListener('keydown', (ev) => {

    let color = document.querySelector(`button[data-key = '${ev.keyCode}']`)
    
    setTimeout(() => color.style.backgroundColor="rgb(0, 0, 0)", 300)
    setTimeout(() => color.style.backgroundColor="grey", 200)
    
    
})