"use strict";
function city_country(city, country) {
    return `"${city},${country}"`;
}
let countryPairOne = city_country("lahore", "pakistan");
console.log(countryPairOne);
let countryPairTwo = city_country("London", "England");
console.log(countryPairTwo);
let countryPairThree = city_country("New york", "America");
console.log(countryPairThree);
