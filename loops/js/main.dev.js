"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function check_palindrome() {
  var user_value = document.getElementById("user_value_palindrome").value;

  if (user_value.length != 5) {
    console.log("it is not 5 numeric value");
    return;
  }

  var first_three = user_value.slice(0, 3);
  var last_three = user_value.slice(-3);
  var last_three_reversed = "";

  while (last_three > 0) {
    var temp = last_three % 10;
    last_three = Math.floor(last_three / 10);
    last_three_reversed = last_three_reversed + String(temp);
  }

  if (first_three === last_three_reversed) {
    console.log("it is palindrome");
  } else {
    console.log("it is not palindrome");
  }
}

function get_discount() {
  var numbers_entered = 0;
  var positive_count = 0;
  var negative_count = 0;
  var zero_count = 0;
  var even_count = 0;
  var odd_count = 0;

  for (var _i = 1; _i <= 10; _i++) {
    var user_input = parseInt(prompt("Введіть число " + _i + ":"));

    if (!isNaN(user_input)) {
      numbers_entered++;

      if (user_input > 0) {
        positive_count++;
      } else if (user_input < 0) {
        negative_count++;
      } else {
        zero_count++;
      }

      if (user_input % 2 === 0) {
        even_count++;
      } else {
        odd_count++;
      }
    }
  }

  console.log("Кількість введених чисел: " + numbers_entered);
  console.log("Додатніх чисел: " + positive_count);
  console.log("Від'ємних чисел: " + negative_count);
  console.log("Нулів: " + zero_count);
  console.log("Парних чисел: " + even_count);
  console.log("Непарних чисел: " + odd_count);
}

function get_week_days() {
  var daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

  while (true) {
    i = 0;
    user_response = prompt(daysOfWeek[i] + ". Хочеш побачити наступний день?");

    if (user_response !== null) {
      console.log((typeof user_response === "undefined" ? "undefined" : _typeof(user_response)) + i);
      i++;
    } else {
      return;
    }

    ;
  }
}

function akhinator() {
  //to be honest i needed Ai help to resolve the task, but i got the alhorithm 
  var min = 0;
  var max = 100;

  while (true) {
    var guess = Math.floor((min + max) / 2);
    var userResponse = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E > ".concat(guess, ", < ").concat(guess, " \u0430\u0431\u043E == ").concat(guess, "? \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u0434\u0438\u043D \u0437 \u0441\u0438\u043C\u0432\u043E\u043B\u0456\u0432 (>, <, =)"));

    if (userResponse === '=') {
      alert("\u0413\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430. \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E - ".concat(guess));
      break;
    } else if (userResponse === '>') {
      min = guess + 1;
    } else if (userResponse === '<') {
      max = guess - 1;
    } else {
      alert('Будь ласка, введіть один з символів: >, <, =');
    }

    if (min > max) {
      alert('Щось пішло не так. Можливо, ви допустили помилку при введенні.');
      break;
    }
  }
}

function multiplication_table() {
  multiplicated_value = prompt("Enter value for multiplication(result in console)");

  for (i = 2; i < 10; i++) {
    console.log(multiplicated_value + " * " + i + " = " + multiplicated_value * i);
  }
}

function next_day() {
  day = prompt("Enter day");
  month = prompt("Enter month");
  year = prompt("Enter year");

  if (date_validation(day, month, year)) {
    if (day > 30 && month < 12) {
      day = 1;
      month++;
    } else if (day > 30 && month === 12) {
      day = 1;
      month = 1;
      year++;
    } else {
      day++;
    }
  } else {
    console.log("Provide a valid date");
    return false;
  }

  console.log("next date is " + day + "." + month + "." + year);
}

function date_validation(day, month, year) {
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return false;
  } else if (day <= 0 || day > 31 || month <= 0 || month > 12 || year <= 0) {
    return false;
  } else if (day > 30 && (month === 4 || month === 6 || month === 9 || month === 11) || month === 2 && day > 29) {
    return false;
  } else if (month === 2 && day === 29 && (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0)) {
    return false;
  } else {
    return true;
  }
}