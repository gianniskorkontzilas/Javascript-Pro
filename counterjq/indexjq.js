const DEFAULT = 0
let counter = 0

$(document).ready(function() {

    const btnDecr = $('#btnDecr')
    const btnReset = $('#btnReset')
    const btnIncr = $('#btnIncr')

    btnDecr.on('click', () => onDecreaseClicked() )
    btnReset.on('click', () => onResetClicked() )
    btnIncr.on('click', () => onIncreaseClicked() )

function onDecreaseClicked(){
    decreaseCounter()
}



function onResetClicked(){
    resetCounter()
}



function onIncreaseClicked(){
    increaseCounter()
}


function decreaseCounter() {
    counter--
    showCounter()
}

function resetCounter() {
    counter = DEFAULT
    showCounter()
}



function increaseCounter() {
    counter++
    showCounter()
}


function  showCounter() {
    const counterDom = $('#counter')
    counterDom.html(counter)
    styleCounter(counterDom)
}

function styleCounter(counterDom) {
    if (counter > 0) {
        counterDom.css('color', 'green');
    } else if (counter === 0) {
        counterDom.css('color', 'black');
    } else {
        counterDom.css('color', 'red');
    }
}

})
