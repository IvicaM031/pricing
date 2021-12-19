
var btnContainer = document.getElementsByClassName("period");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
function yearly()
{
    document.getElementById("basicprice").innerHTML = "<span>$570</span>/ Y";
    document.getElementById("proprice").innerHTML = "<span>$1100</span>/ Y";
    document.getElementById("busprice").innerHTML = "<span>$1700</span>/ Y";
    let button = document.getElementsByClassName("btn")[1];
    button.classList.add('active');
    button = document.getElementsByClassName("btn")[0];
    button.classList.remove('active');
}
function monthly()
{
    document.getElementById("basicprice").innerHTML = "<span>$49</span>/month";
    document.getElementById("proprice").innerHTML = "<span>$99</span>/month";
    document.getElementById("busprice").innerHTML = "<span>$149</span>/month";
    let button = document.getElementsByClassName("btn")[0];
    button.classList.add('active');
    button = document.getElementsByClassName("btn")[1];
    button.classList.remove('active');
}


