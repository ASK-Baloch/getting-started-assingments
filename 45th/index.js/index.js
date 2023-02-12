"use strict";
function carDetails(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let option of options) {
        car[option[0]] = option[1];
    }
    return car;
}
let car1 = carDetails("mercedes", "C63", ["color", "black"], ["features", "RWD traction control"]);
console.log(car1);
let car2 = carDetails("Toyota", "Camry", ["color", "blue"], ["year", 2021], ["engine", "V6"]);
console.log(car2);
let car3 = carDetails("Honda", "Civic", ["color", "silver"], ["year", 2022], ["feature", "Lane Assist"]);
console.log(car3);
