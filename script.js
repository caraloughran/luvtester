let btn = document.getElementById("loveTester");
var form = document.getElementById("bruh");
var score = document.getElementById("score");

function loveFunction() {
    document.getElementById("score").innerHTML = mathFunction() + "% compatible";
    btn.disabled = true;
}

function handleForm(event) { event.preventDefault();}
form.addEventListener('submit', handleForm);
form.addEventListener('submit', loveFunction);


function mathFunction(random) {
    return Math.floor(Math.random() * 100) + 1
}

