function dropdown(a) {
    /* document.getElementById("dropdowncontent1").classList.toggle("show"); */
    a.parentNode.getElementsByClassName('dropdown-content')[0].classList.toggle("show");
    var arrow = a.querySelector('.arrow');
    if (arrow.innerHTML === "▲") {
        arrow.innerHTML = "▼";
    } else {
        arrow.innerHTML = "▲";
    }
}