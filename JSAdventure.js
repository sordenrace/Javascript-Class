const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Introduction
console.log("Welcome to the Text-Based Adventure Game!");

// Ask for the user's name
rl.question("What's your name? ", name => {
  console.log(`Hello, ${name}! You find yourself standing at a crossroads.`);
  console.log("You have two paths in front of you: a 'forest' path and a 'cave' path.");

  // Ask the user to choose a path
  rl.question("Which path will you take? (forest/cave) ", pathChoice => {
    if (pathChoice.toLowerCase() === "forest") {
      console.log("You enter the forest and discover a hidden treasure chest!");
      console.log("Congratulations, you've won the game!");
      rl.close();
    } else if (pathChoice.toLowerCase() === "cave") {
      console.log("You enter the dark cave and encounter a ferocious dragon!");
      console.log("Do you want to 'fight' the dragon or 'run' away?");
      
      rl.question("What will you do? (fight/run) ", dragonChoice => {
        handleDragonChoice(dragonChoice);
      });
    } else {
      console.log("Invalid choice. You stand there, unsure of what to do.");
      console.log("The adventure ends.");
      rl.close();
    }
  });
});

// Function to handle the dragon choice
function handleDragonChoice(dragonChoice) {
  if (dragonChoice.toLowerCase() === "fight") {
    console.log("You bravely fight the dragon, but unfortunately, you are defeated.");
    console.log("Game over. Better luck next time!");
    rl.close();
  } else if (dragonChoice.toLowerCase() === "run") {
    console.log("You turn and run as fast as you can, narrowly escaping the dragon's reach.");
    console.log("You manage to find your way back to safety.");
    console.log("Congratulations, you've survived the adventure!");
    rl.close();
  } else {
    console.log("Invalid choice. The dragon catches you off guard.");
    console.log("Game over.");
    rl.close();
  }
}
