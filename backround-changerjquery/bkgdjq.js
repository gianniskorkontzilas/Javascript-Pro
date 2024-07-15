let color = undefined 

$(document).ready(function() {
$('#btn').on('click', function() {
    onClickMeClicked()
})

function onClickMeClicked() {
    updateBg()
}


function updateBg() {
    let color = getBgColor()
    showBgColor(color)
}


function getBgColor() {  
    const colors = ['black', 'red', 'green', 'white', 'blue']
    return colors[Math.floor(Math.random() * colors.length)]
}


function showBgColor(bgColor) { 
    $('#hex').html(bgColor)
    $('#body').css('backgroundColor', bgColor)
}

})