let name1 :string = "Ahmed";
let name2 :string = "Baloch";

//  Equality and inEquality test
console.log(name1 !== name2); 
console.log(name1 === name2); 

let name3 = "khan";
let name4 = "khan";

// toLowerCase() test
console.log(name3.toLowerCase() === name4.toLowerCase())
console.log(name3.toLowerCase() !== name4.toLowerCase())

let number1 :number = 5;
let number2 :number = 6;

// numerical test 
console.log(number1 ==  number2)
console.log(number1 !=  number2)
console.log(number1 >=  number2)
console.log(number1 <=  number2)

//  && and | test 

console.log(number1 > 0 && number2 > 0,number1 > 0 && number2 < 0)
console.log(number1 > 0 || number2 < 0,number1 < 0 || number2 < 0)

//array test 
const arr:(string|number)[] = [1 , "a" , 3]
const findItem = "a";

console.log(arr.includes(findItem))
console.log(!arr.includes(findItem))

// i could used for and other condtional statements but i wanted the console to show only boolean values..

// for e.g

// if (number1 > 0 && number2 > 0) {
//     console.log("Both numbers are positive");
//   } else {
//     console.log("One or both numbers are not positive");
//   }
  
//   if (number1 > 0 || number2 > 0) {
//     console.log("At least one of the numbers is positive");
//   } else {
//     console.log("Neither number is positive");
//   }