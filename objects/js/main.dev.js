"use strict";

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
      if (typeof auto[key] !== 'function') {
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
  findDriver: function findDriver(name) {}
};