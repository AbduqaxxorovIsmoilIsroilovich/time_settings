'use strict';


// const box = document.querySelector('.box')
// // setTimeout( () => {
// //     box.style.backgroundColor = "red"
// // }, 2000 );



// let counter = 0;
// const countInterval = setInterval( count, 1000);



// function count() {
//     console.log(counter++);
//     if(counter > 5 ) {
//         clearInterval(countInterval)
//     }
//     if(counter > 5 ) {
//         box.style.marginLeft = "auto";
//     }
// }
const box = document.querySelector('.box')
const body = document.querySelector('body')

let counter = 0;
const countInterval = setInterval( count, 1000);


function count() {
    console.log(counter++)
    if(counter > 5 ) {
        clearInterval(countInterval)
    }
    if(counter > 5 ) {
        box.style.display = "block"
        body.style.backgroundColor = '#3e3f4e'
    }
}

const span = document.querySelector('span');

span.addEventListener('click', () => {
    box.style.display = "none";
    body.style.display = "none";
})






