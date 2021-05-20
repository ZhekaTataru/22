let number = document.getElementById("number")
let name = document.getElementById("name")
let date = document.getElementById("date")
let year = document.getElementById("year")
let pole = document.getElementsByClassName("pole")
let card_name = document.getElementById("card_name")
let card_mounth = document.getElementById("card_mounth")
let card_year = document.getElementById("card_year")
let type = document.getElementById("type")
number.addEventListener("keyup", setNumber)
name.addEventListener("keyup", setName)
date.addEventListener("mouseup", setDate)
year.addEventListener("keyup", setYear)

function discover(dis){
    if(dispatchEvent.includes("54321")){
        type.innerHTML= "MasterCard"
    }
    else if(dis.includes("12345")){
        type.innerHTML= "Visa"
    }
    else{
        type.innerHTML= "......"
    }
}
function setNumber(x){
    x.preventDefault
    if(isNum(number.value)){
        pole.innerHTML = number.value
    }
    else{
        alert("error")
    }
    discover(number.value)
}
