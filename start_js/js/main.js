function greating() {
    const name = document.getElementById("name_input").value;
    const greating_text = document.getElementById("greating_text");

    if (name) {
        greating_text.innerHTML = "Hi , " + name + "! Welcome!";
    } else {
        greating_text.innerHTML = "Enter your name plz";
    }
}

function age_calculation() {
    const birth_date = document.getElementById("birth_input").value;
    
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    
    const age_result = currentYear - parseInt(birth_date);
    
    if (age_result &&  birth_date >= 1900 && birth_date <= currentYear ) {
        age.innerHTML = "Тут навіть церква не допоможе, " + age_result + "...";
    } else{
        age.innerHTML = "Введіть валідну дату нарождення";
    }
 
}

function square_calculation() {
    const square_side = document.getElementById("square_input").value;
    const square_area = square_side*square_side;
    
    if (square_side) {
        square_result.innerHTML = "square area is " + square_area;
    } else{
        square_result.innerHTML = "Enter square side length";
    }
  
}
function square_circle_calculation(){
    const radius = document.getElementById("radius_input").value
    const circle_area = (radius * radius * Math.PI).toFixed(2)
    
    if (circle_area){
        square_circle_result.innerHTML = "circle area is " + circle_area;
    }else{
        square_result.innerHTML = "Enter a valid radius";
    }
}

function speed_calculation(){
    const distance = document.getElementById("distance_input").value
    const time = document.getElementById("time_input").value
    speed = distance / time
    if (speed && distance >=0 && time >=0){
        speed_result.innerHTML = "You have to move by " + speed + " km per hour";
    }else{
        speed_result.innerHTML = "Enter a valid values";
    }
}

function exchange_rate_calculation(){
    const exchange_rate = 1.1;
    exchange_rate_result.innerHTML = "you will got " + (document.getElementById("dollars_input").value * exchange_rate).toFixed(2)+ " euro"
}