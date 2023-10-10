 let auto = {
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
     }, ],

     showInfo() {
         for (const key in auto) {
             if (typeof auto[key] !== 'function') {
                 console.log(`Ключ: ${key}, Значення: ${auto[key]}`);
             }
         }
     },
     addDriver(name, lastName, age) {
         const driver = {
             name: name,
             lastName: lastName,
             age: age
         };
         auto.drivers.push(driver);
     },
     findDriver(name) {
          
     }
 }