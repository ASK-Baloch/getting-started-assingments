"use strict";
function makeShirt(size = "large", message = " I love Typescript") {
    console.log(`shirt size ${size} with message : "${message}"`);
}
makeShirt(); //default size 
makeShirt("medium");
makeShirt("short", "TypeScript is the best!");
