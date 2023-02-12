"use strict";
function makeSandwich(...items) {
    console.log("Making a sandwich with the following items: " + items.join(", "));
}
makeSandwich("lettuce", "tomato", "mayonnaise");
makeSandwich("turkey", "cheese", "bread");
makeSandwich("peanut butter", "jelly");
