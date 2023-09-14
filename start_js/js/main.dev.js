"use strict";

function greating() {
  var name = document.getElementById("name_input").value;
  var greating_text = document.getElementById("greating_text");

  if (name) {
    greating_text.innerHTML = "Hi , " + name + "! Welcome!";
  } else {
    greating_text.innerHTML = "Enter your valid name";
  }
}

function age_calculation() {
  var birth_date = document.getElementById("birth_input").value;
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var age_result = currentYear - parseInt(birth_date);

  if (age_result && birth_date >= 1900 && birth_date <= currentYear) {
    age.innerHTML = "your age  " + age_result + "...";
  } else {
    age.innerHTML = "enter a valid birth date";
  }
}

function square_calculation() {
  var square_side = document.getElementById("square_input").value;
  var square_area = square_side * square_side;

  if (square_side) {
    square_result.innerHTML = "square area is " + square_area;
  } else {
    square_result.innerHTML = "Enter square side length";
  }
}

function square_circle_calculation() {
  var radius = document.getElementById("radius_input").value;
  var circle_area = (radius * radius * Math.PI).toFixed(2);

  if (circle_area) {
    square_circle_result.innerHTML = "circle area is " + circle_area;
  } else {
    square_result.innerHTML = "Enter a valid radius";
  }
}

function speed_calculation() {
  var distance = document.getElementById("distance_input").value;
  var time = document.getElementById("time_input").value;
  speed = distance / time;

  if (speed && distance >= 0 && time >= 0) {
    speed_result.innerHTML = "You have to move by " + speed.toFixed(2) + " km per hour";
  } else {
    speed_result.innerHTML = "Enter a valid values";
  }
}

function exchange_rate_calculation() {
  var exchange_rate = 1.1;
  exchange_rate_result.innerHTML = "you will got " + (document.getElementById("dollars_input").value * exchange_rate).toFixed(2) + " euro";
}