let guestList :string[] = ["sir Zia","andrew","Imran Khan"];

// console.log(`Dear ${guestList[0]}  you are  a gem sir, that would be the best thing if i could have a dinner with you..`)
// console.log(`Dear ${guestList[1]} i would love to have you .cuz you are the only person that keeps my motivation going even at this time right now  2 Am in the morning`)
// console.log(`Dear ${guestList[2]} , i would love to sit with you and hear you lifelong experiences `)
// console.log(`our dear guest ${guestList[2]} couldn't make it the dinner`);

// console.log(`Dear ${guestList[0]}  you are  a gem sir, that would be the best thing if i could have a dinner with you..`)
// console.log(`Dear ${guestList[1]} i would love to have you .cuz you are the only person that keeps my motivation going even at this time right now  2 Am in the morning`)
// console.log(`Dear ${guestList[2]} , i would love to sit with you and hear you lifelong experiences `)

guestList[2] = "Imran Ali Dena";


console.log("i just found out that we can have a bigger table ");

guestList.unshift("Iron Man")

let index = Math.floor(guestList.length / 2);
guestList.splice(index, 0, "jordan peterson");
guestList.push("Elon Musk")
// console.log(guestList)

console.log(`Dear ${guestList[0]} i would love to have you .cuz you are the only person that keeps my motivation going even at this time right now  2 Am in the morning `)
console.log(`Dear ${guestList[1]}  you are  a gem sir, that would be the best thing if i could have a dinner with you..`)
console.log(`Dear ${guestList[2]} sir please come`)

console.log(`Dear ${guestList[3]} sir please come`)
console.log(`Dear ${guestList[4]} please come to dinner`)
console.log(`Dear ${guestList[5]} , i would love to sit with you and hear you lifelong experiences `)

