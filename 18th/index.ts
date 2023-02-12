let  favPlaces = ["welington","zoo","NYC","Melbourne","scotland","Miami","Bali"];

console.log(favPlaces);

const  alphabeticalArray = [...favPlaces].sort();
console.log(alphabeticalArray);

console.log(favPlaces);

const  reversedArray = [...favPlaces].sort().reverse();
console.log(reversedArray);

console.log(favPlaces);

const  reversedOrder = [...favPlaces].reverse();
console.log(reversedOrder)

const  OriginalOrder = [...reversedOrder].reverse();
console.log(OriginalOrder);

const alphabeticalOrder = [...OriginalOrder].sort()
console.log(alphabeticalOrder)

const againReverse =[...alphabeticalArray].sort().reverse();
console.log(againReverse)

 