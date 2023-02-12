var guestList = ["sir Zia", "andrew", "Imran Khan"];
guestList[2] = "Imran Ali Dena";
console.log("i just found out that we can have a bigger table ");
guestList.unshift("Iron Man");
var index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, "jordan peterson");
guestList.push("Elon Musk");
// console.log(guestList)
console.log("Dear ".concat(guestList[0], " i would love to have you .cuz you are the only person that keeps my motivation going even at this time right now  2 Am in the morning "));
console.log("Dear ".concat(guestList[1], "  you are  a gem sir, that would be the best thing if i could have a dinner with you.."));
console.log("Dear ".concat(guestList[2], " sir please come"));
console.log("Dear ".concat(guestList[3], " sir please come"));
console.log("Dear ".concat(guestList[4], " please come to dinner"));
console.log("Dear ".concat(guestList[5], " , i would love to sit with you and hear you lifelong experiences "));
console.log("sry  i can only invite two people");
guestList.pop();
console.log("elon musk sry  i'am sorry but i can't invite you  to dinner ");
guestList.pop();
console.log("Imran Ali dena sry  i'am sorry but i can't invite you  to dinner ");
guestList.pop();
console.log("Andrew Tate sry  i'am sorry but i can't invite you  to dinner ");
guestList.pop();
console.log("Jorden Peterson sry  i'am sorry but i can't invite you  to dinner ");
// console.log(guestList)
// let indexToRemove = 2;
// guestList.splice(indexToRemove, 2);
console.log("".concat(guestList[0], ",").concat(guestList[1], " you are still invited"));
while (guestList.length > 0) {
    guestList.splice(0, 1);
}
console.log(guestList);
