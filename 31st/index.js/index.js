"use strict";
//  well there was no array in 28 . so how can i make sure that it was empty by if you will put ! sign in if statement in 4 line . question 31 output will show.
const ahmedAge = 17;
if (ahmedAge) {
    if (ahmedAge < 2) {
        console.log("The person is a baby");
    }
    else if (ahmedAge >= 2 && ahmedAge < 4) {
        console.log("The person is a toodler");
    }
    else if (ahmedAge >= 4 && ahmedAge < 13) {
        console.log("The person is a kid");
    }
    else if (ahmedAge >= 13 && ahmedAge < 20) {
        console.log("The person is a teenager");
    }
    else if (ahmedAge >= 20 && ahmedAge < 65) {
        console.log("The person is an adult");
    }
    else {
        console.log("The person is an elder");
    }
}
else {
    console.log("we need to find some Users Age");
}
