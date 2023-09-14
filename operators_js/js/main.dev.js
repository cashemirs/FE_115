"use strict";

function calc() {
  console.log((0.1 + 0.2).toFixed(2));
}

function sum() {
  var a = "1";
  var b = 2;
  console.log(+a + b);
}

function calculateFiles() {
  var flash_size = document.getElementById("flash_size").value;
  console.log(Math.floor(flash_size / 0.82));
}

function calculateChocolates() {
  var choco_price = document.getElementById("choco_price").value;
  var money_amount = document.getElementById("money_amount").value;
  var chocolates_amount = money_amount / choco_price;

  if (choco_price != NaN && money_amount != NaN && chocolates_amount >= 1) {
    console.log(Math.floor(money_amount / choco_price) + " chocolates u will have");
    console.log((money_amount % choco_price).toFixed(2) + " money u will have");
  } else if (chocolates_amount < 1) {
    console.log("You dont have enough money for sweet east chocolate");
  } else {
    console.log("Please, provide a valid values");
  }
}

function reverse_number() {
  var user_number = document.getElementById("user_number").value;
  var reverse_value = "";

  if (user_number > 0) {
    while (user_number > 0) {
      var temp = user_number % 10;
      user_number = Math.floor(user_number / 10);
      reverse_value = reverse_value + String(temp);
    }

    console.log(reverse_value);
  } else if (user_number < 0) {
    user_number = -user_number;

    while (user_number > 0) {
      var _temp = user_number % 10;

      user_number = Math.floor(user_number / 10);
      reverse_value = reverse_value + String(_temp);
    }

    console.log(-reverse_value);
  }
}

function bank_calc() {
  var initial_money = document.getElementById("initial_money").value;
  var period = document.getElementById("period").value;

  if (initial_money != NaN && period != NaN && initial_money >= 0 && period >= 0) {
    console.log("Your income will be " + (initial_money * 0.1 / 12 * period).toFixed(2) + " for a " + period + " month");
  } else {
    console.log("Provide a valid values");
  }
}