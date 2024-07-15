const radius = 5;
let area = calculateCircleArea(radius);
function calculateCircleArea(radius) {

    return Math.PI * Math.pow(radius, 2);
}

console.log("Το εμβαδόν του κύκλου με ακτίνα", radius, "είναι", area);

