"use strict";
function describe_city(city, country = "pakistan") {
    console.log(` ${city} is in ${country}`);
}
describe_city("islamabad");
describe_city("lahore");
describe_city("london", "England");
