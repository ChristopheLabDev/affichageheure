const myInterval = setInterval(myTimer, 1000);

function myTimer() {

const date = new Date();
let text = date.toLocaleTimeString("fr-FR");
document.getElementById("clock").innerHTML = text;
}

function every3Seconds() {
    let testClock = text % 3;
    if (testClock === 0) {
    document.getElementById("clock").style.color = "red";
}
}

function myStopFunction() {
    clearInterval(myInterval);
}
