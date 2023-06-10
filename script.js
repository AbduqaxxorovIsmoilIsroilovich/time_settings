'use strict';


const box = document.querySelector('.box')
setTimeout( () => {
    box.style.backgroundColor = "red"
}, 2000 );

let count = 0;
const countInterval = setInterval( count(), 1000);

function count() {
    console.log(count++);
    if( count > 5 ) {
        clearInterval()
    }
}