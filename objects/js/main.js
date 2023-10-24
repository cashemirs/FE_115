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
             if (typeof auto[key] !== 'function' && typeof auto[key] !== 'object') {
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
         const foundDrivers = auto.drivers.filter(driver => driver.name === name);
         if (foundDrivers.length > 0) {
             console.log("Найденные водители:");
             foundDrivers.forEach(driver => {
                 console.log(`Имя: ${driver.name}, Фамилия: ${driver.lastName}, Возраст: ${driver.age}`);
             });
         } else {
             console.log("Водитель не найден.");
         }
     },
     calcTimeFuel(distance) {
         if (distance < 0) {
             console.log("Distance can be greater or equal 0")
             this.calcTimeFuel()
         } else {
             temp = Math.floor(distance / this.avg_speed / 4)
             time = distance / this.avg_speed + temp
             console.log("Общее время в пути: " + time + " часов");
         }
     }
 }

 let watches = {
     seconds: 33,
     minutes: 22,
     hours: 14,
     showTime() {
         console.log(this.hours + " : " + this.minutes + " : " + this.seconds)
     },
     addSeconds(seconds = 0) {
         this.seconds += seconds;
         if (this.seconds >= 60) {
             const minutesToAdd = Math.floor(this.seconds / 60);
             this.seconds %= 60;
             this.minutes += minutesToAdd;
         }
         if (this.minutes >= 60) {
             const hoursToAdd = Math.floor(this.minutes / 60);
             this.minutes %= 60;
             this.hours += hoursToAdd;
         }
         this.hours %= 24;
     },
     addMinutes(minutes = 0) {
         this.minutes += minutes;
         if (this.minutes >= 60) {
             const hoursToAdd = Math.floor(this.minutes / 60);
             this.minutes %= 60;
             this.hours += hoursToAdd;
         }
         this.hours %= 24;
     },
     addHours(hours = 0) {
         this.hours += hours;
         this.hours %= 24;
     },

 }