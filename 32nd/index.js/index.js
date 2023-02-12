"use strict";
const current_Users = ["bhatti ", "shah", "HASHIR", "hamza", "usman"];
const new_Users = ["umer ", "Hashir", "Shah", "moiz", "Hamza"];
for (let i = 0; i < new_Users.length; i++) {
    let newUsername = new_Users[i].toLowerCase();
    let usernameTaken = false;
    for (let j = 0; j < current_Users.length; j++) {
        if (newUsername === current_Users[j].toLowerCase()) {
            usernameTaken = true;
            break;
        }
    }
    if (usernameTaken) {
        console.log(new_Users[i] + ' is already taken. Please enter a new username.');
    }
    else {
        console.log(new_Users[i] + ' is available.');
    }
}
