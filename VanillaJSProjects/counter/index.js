// Initial State
const DEFAULT = 0
let counter = 0


window.addEventListener('DOMContentLoaded', function() {
    const btnDecr = this.document.querySelector('#btnDecr')
    const btnReset = this.document.querySelector('#btnReset')
    const btnIncr = this.document.querySelector('#btnIncr')

    btnDecr.addEventListener('click', () => onDecreaseClicked() )
    btnReset.addEventListener('click', () => onResetClicked() )
    btnIncr.addEventListener('click', () => onIncreaseClicked() )
})

/**
 * Actions taken after 'Decrease' button was clicked.
 * Actions include decreasing the counter.
 */

function onDecreaseClicked(){
    decreaseCounter()
}

/**
 * Actions taken after 'Reset' button was clicked.
 * Actions include reseting the counter.
 */

function onResetClicked(){
    resetCounter()
}

/**
 * Actions taken after 'Increase' button was clicked.
 * Actions include increasing the counter.
 */

function onIncreaseClicked(){
    increaseCounter()
}

// Model

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}
/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 * Increase the counter ans dyncs the UI.
 */

function increaseCounter() {
    counter++
    showCounter()
}

/**
 * Assigns counter to the corresponding UI Element.
 * And gives styling accordingly.
 */

function  showCounter() {
    const counterDom = document.querySelector('#counter')
    counterDom.innerHTML = counter
    styleCounter(counterDom)
}

function styleCounter(counterDom) {
    counterDom.classList.toggle('color-green', counter > 0)
    counterDom.classList.toggle('color-black', counter === 0)
    counterDom.classList.toggle('color-red', counter < 0)
    // if (counter > 0) {
    //    counterDom.classList.add('green')
    //     counterDom.style.color = "green"
    // } else if (counter < 0) {
    //     counterDom.style.color = "red"
    // } else {  // if(counter ===0)
    //     counterDom.style.color = "black"
    //     }
    }
