"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var auto = {
  brand: "BMW",
  year: 1999,
  color: "blue",
  avg_speed: 120,
  fuel_bag: 70,
  fuel_spent: 15,
  drivers: [{
    name: "Kevin",
    lastName: "Clein",
    age: 25
  }],
  showInfo: function showInfo() {
    for (var key in auto) {
      if (typeof auto[key] !== 'function' && _typeof(auto[key]) !== 'object') {
        console.log("\u041A\u043B\u044E\u0447: ".concat(key, ", \u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F: ").concat(auto[key]));
      }
    }
  },
  addDriver: function addDriver(name, lastName, age) {
    var driver = {
      name: name,
      lastName: lastName,
      age: age
    };
    auto.drivers.push(driver);
  },
  findDriver: function findDriver(name) {
    var foundDrivers = auto.drivers.filter(function (driver) {
      return driver.name === name;
    });

    if (foundDrivers.length > 0) {
      console.log("Найденные водители:");
      foundDrivers.forEach(function (driver) {
        console.log("\u0418\u043C\u044F: ".concat(driver.name, ", \u0424\u0430\u043C\u0438\u043B\u0438\u044F: ").concat(driver.lastName, ", \u0412\u043E\u0437\u0440\u0430\u0441\u0442: ").concat(driver.age));
      });
    } else {
      console.log("Водитель не найден.");
    }
  },
  calcTimeFuel: function calcTimeFuel(distance) {
    if (distance < 0) {
      console.log("Distance can be greater or equal 0");
      this.calcTimeFuel();
    } else {
      temp = Math.floor(distance / this.avg_speed / 4);
      time = distance / this.avg_speed + temp;
      console.log("Общее время в пути: " + time + " часов");
    }
  }
};
var watches = {
  seconds: 33,
  minutes: 22,
  hours: 14,
  showTime: function showTime() {
    console.log(this.hours + " : " + this.minutes + " : " + this.seconds);
  },
  addSeconds: function addSeconds() {
    var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    this.seconds += seconds;

    if (this.seconds >= 60) {
      var minutesToAdd = Math.floor(this.seconds / 60);
      this.seconds %= 60;
      this.minutes += minutesToAdd;
    }

    if (this.minutes >= 60) {
      var hoursToAdd = Math.floor(this.minutes / 60);
      this.minutes %= 60;
      this.hours += hoursToAdd;
    }

    this.hours %= 24;
  },
  addMinutes: function addMinutes() {
    var minutes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    this.minutes += minutes;

    if (this.minutes >= 60) {
      var hoursToAdd = Math.floor(this.minutes / 60);
      this.minutes %= 60;
      this.hours += hoursToAdd;
    }

    this.hours %= 24;
  },
  addHours: function addHours() {
    var hours = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    this.hours += hours;
    this.hours %= 24;
  }
};