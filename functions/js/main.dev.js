"use strict";

function example() {
  return 0;
}

var example1 = function example1() {
  return 0;
};

var example2 = function example2(a, b) {
  return a + b;
};

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    re;
    return -1;
  } else return 0;
}

var sum = function sum(a, b, c) {
  return "" + a + b + c;
};

var result = sum(2, 3, 4);

function calc_area() {
  if (arguments.length === 1) {
    return Math.pow(arguments.length <= 0 ? undefined : arguments[0], 2);
  } else if (arguments.length === 2) {
    return (arguments.length <= 0 ? undefined : arguments[0]) * (arguments.length <= 1 ? undefined : arguments[1]);
  } else calc_area();
}

result = calc_area(2, 4);

function isPerfect(a) {
  if (a <= 0) {
    return false;
  }

  var temp = 0;

  for (var i = 1; i < a; i++) {
    if (a % i === 0) {
      temp += i;
    }
  }

  return temp === a;
}

function findPerfect(min, max) {
  var perfects = [];

  for (var i = min; i <= max; i++) {
    if (isPerfect(i)) {
      perfects.push(i);
    }
  }

  return perfects;
}