

window.addEventListener('keydown', (e) => {

    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
})

window.addEventListener('keydown', (ev) => {

    let changeColor = document.querySelector(`button[data-key = '${ev.keyCode}']`)

   

    setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)

    setTimeout(() => changeColor.style.backgroundColor = "white", 400)
    
    
})

// const jhaptaal = () => {
    
// //    setInterval(() => {
//     setTimeout(function beatDhi() {
//         let audio = document.querySelector(`audio[data-key='68']`)
//         audio.play();
//         let changeColor = document.querySelector(`button[data-key = '68']`)
//         setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)

//         setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//         setTimeout(function beatNa() {
//             let audio = document.querySelector(`audio[data-key='79']`)
//             audio.play();

//             let changeColor = document.querySelector(`button[data-key = '79']`)

//             setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)

//             setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//             setTimeout(function beatDhi() {
//                 let audio = document.querySelector(`audio[data-key='68']`)
//                 audio.play();
//                 let changeColor = document.querySelector(`button[data-key = '68']`)

               

//                 setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)

//                 setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//                 setTimeout(function beatDhi() {
//                     let audio = document.querySelector(`audio[data-key='68']`)
//                     audio.play();
//                     let changeColor = document.querySelector(`button[data-key = '68']`)
            
                   
            
//                     setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
            
//                     setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//                     setTimeout(function beatNa() {
//                         let audio = document.querySelector(`audio[data-key='79']`)
//                         audio.play();
//                         let changeColor = document.querySelector(`button[data-key = '79']`)
                
                       
                
//                         setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                
//                         setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//                         setTimeout(function beat1Tiri() {
//                             let audio = document.querySelector(`audio[data-key='75']`)
//                             audio.play();
//                             let changeColor = document.querySelector(`button[data-key = '75']`)
                    
                           
                    
//                             setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                    
//                             setTimeout(() => changeColor.style.backgroundColor = "white", 400)
                            
//                             setTimeout(function beatNa() {
//                                 let audio = document.querySelector(`audio[data-key='79']`)
//                                 audio.play();
//                                 let changeColor = document.querySelector(`button[data-key = '79']`)
                        
                               
                        
//                                 setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                        
//                                 setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//                                 setTimeout(function beatDhi() {
//                                     let audio = document.querySelector(`audio[data-key='68']`)
//                                     audio.play();
//                                     let changeColor = document.querySelector(`button[data-key = '68']`)
                            
                                   
                            
//                                     setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                            
//                                     setTimeout(() => changeColor.style.backgroundColor = "white", 400)
//                                     setTimeout(function beatDhi() {
//                                         let audio = document.querySelector(`audio[data-key='68']`)
//                                         audio.play();
//                                         let changeColor = document.querySelector(`button[data-key = '68']`)
                                
                                       
                                
//                                         setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                                
//                                         setTimeout(() => changeColor.style.backgroundColor = "white", 400)
                                        
//                                         setTimeout(function beatNa() {
//                                             let audio = document.querySelector(`audio[data-key='79']`)
//                                             audio.play();
//                                             let changeColor = document.querySelector(`button[data-key = '79']`)
                                    
                                           
                                    
//                                             setTimeout(() => changeColor.style.backgroundColor = " rgb(136, 116, 0)", 300)
                                    
//                                             setTimeout(() => changeColor.style.backgroundColor = "white", 400)
                                            
//                                         }, 500)
//                                     }, 500)
//                                 }, 500)
//                             }, 500)
//                         }, 500)
//                     }, 500)
//                 }, 500)
//             }, 500)
//         }, 500)
//     }, 500)
    
// // }, 1000)    
    
// }



// jhaptaal()
