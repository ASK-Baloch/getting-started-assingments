"use strict";
let magicians = ["Harry Houdini", "David Copperfield", "David Blaine"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("The Great " + magician);
    }
    return greatMagicians;
}
let greatMagicians = make_great(magicians);
showMagicians(magicians);
showMagicians(greatMagicians);
