
document.querySelector("#submit1").addEventListener("click", function(){
    let correctAnswer = "shaul rabin"
    let altAnswer = "mordechai shaul rabin";
    let answer = document.querySelector("#q1").value.toLowerCase();
    if (answer == correctAnswer){
        document.querySelector("#q1").style.backgroundColor = "Green";
        swal("Correct!", "", "success")
    }
    else if (answer == altAnswer){
        document.querySelector("#q1").style.backgroundColor = "Green";
        swal("Correct, Hey Mottel!", "", "success")
    }
    else {
        document.querySelector("#q1").style.backgroundColor = "Red";
        swal("Sorry Wrong Answer", "", "error")
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