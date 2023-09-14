function calc() {
    console.log((0.1 + 0.2).toFixed(2));
}

function sum() {
    const a = "1";
    const b = 2;
    console.log(+a + b);
}

function calculateFiles() {
    const flash_size = document.getElementById("flash_size").value;
    console.log(Math.floor(flash_size / 0.82));
}

function calculateChocolates() {
    const choco_price = document.getElementById("choco_price").value;
    const money_amount = document.getElementById("money_amount").value;
    const chocolates_amount = money_amount / choco_price;
    if (choco_price != NaN && money_amount != NaN && chocolates_amount >= 1) {
        console.log((Math.floor(money_amount / choco_price)) + " chocolates u will have")
        console.log((money_amount % choco_price).toFixed(2) + " money u will have")
    } else if (chocolates_amount < 1) {
        console.log("You dont have enough money for sweet east chocolate")
    } else {
        console.log("Please, provide a valid values")
    }
}

function reverse_number() {
    let user_number = document.getElementById("user_number").value;
    let reverse_value = "";
    if (user_number > 0) {
        while (user_number > 0) {
            let temp = user_number % 10;
            user_number = Math.floor(user_number / 10);
            reverse_value = reverse_value + String(temp)
        }
        console.log(reverse_value)
    } else if (user_number < 0) {
        user_number = -user_number;
        while (user_number > 0) {
            let temp = user_number % 10;
            user_number = Math.floor(user_number / 10);
            reverse_value = reverse_value + String(temp)
        }
        console.log(-reverse_value);
    }
}

function bank_calc() {
    let initial_money = document.getElementById("initial_money").value;
    let period = document.getElementById("period").value;
    if (initial_money != NaN && period != NaN && initial_money >= 0 && period >= 0) {
        console.log("Your income will be " + ((initial_money * 0.1 / 12) * period).toFixed(2) + " for a " + period + " month");
    } else {
        console.log("Provide a valid values")
    }
}