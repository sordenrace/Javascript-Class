// Prompt the user for their age
var userAge = prompt("Please enter your age:");

// Convert the user input to a number
userAge = parseInt(userAge);

// Check the age and provide appropriate response
if (userAge < 18) {
    alert("You're too young to view adult content.");
} else {
    alert("Welcome!");
}
