
document.querySelector("#submit1").addEventListener("click", function(){
    let correctAnswer = "shaul rabin"
    let answer = document.querySelector("#q1").value.toLowerCase();
    if (answer == correctAnswer){
        document.querySelector("#q1").style.backgroundColor = "Green";
        document.querySelector("#q1result").innerHTML = "Correct";
        document.querySelector("#q1result").style.visibility = "visible";
    }
    else {
        document.querySelector("#q1").style.backgroundColor = "Red";
        document.querySelector("#q1result").innerHTML = "Incorrect";
        document.querySelector("#q1result").style.visibility = "visible";
    }
});

function dropdown(a) {
    a.parentNode.getElementsByClassName('dropdown-content')[0].classList.toggle("show");
    var arrow = a.querySelector('.arrow');
    if (arrow.innerHTML === "▲") {
        arrow.innerHTML = "▼";
    } else {
        arrow.innerHTML = "▲";
    }
}