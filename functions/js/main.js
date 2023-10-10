function example() {
    return 0
}
let example1 = function () {
    return 0
}
let example2 = (a, b) => a + b;

function compare(a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        re
        return -1
    } else return 0
}

const sum = (a, b, c) => "" + a + b + c
let result = sum(2, 3, 4);

function calc_area(...args) {
    if (args.length === 1) {
        return args[0] ** 2
    } else if (args.length === 2) {
        return args[0] * args[1]
    } else calc_area()
}
result = calc_area(2, 4)

function isPerfect(a) {
    if (a <= 0) {
        return false;
    }
    let temp = 0;

    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            temp += i;
        }
    }

    return temp === a;
}

function findPerfect(min, max) {
    let perfects = [];
    for (let i = min; i <= max; i++) {
        if (isPerfect(i)) {
            perfects.push(i)
        }

    }
    return perfects
}