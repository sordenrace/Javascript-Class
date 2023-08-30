const readline = require('readline');

// Define quiz questions with values and expected data types
const quizQuestions = [
  { value: "Hello, world!", dataType: "string" },
  { value: 42, dataType: "number" },
  { value: true, dataType: "boolean" },
  { value: ["apple", "banana", "orange"], dataType: "object" },
  { value: { name: "John", age: 30 }, dataType: "object" },
  { value: undefined, dataType: "undefined" }
];

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to start the quiz
function startQuiz() {
  console.log("Welcome to the Data Type Quiz!\n");

  askQuestion(0);
}

// Function to ask a question
function askQuestion(index) {
  if (index < quizQuestions.length) {
    const question = quizQuestions[index];
    rl.question(`What data type is this value? ${getDisplayValue(question.value)}\n`, userAnswer => {
      checkAnswer(question, userAnswer);
      askQuestion(index + 1);
    });
  } else {
    console.log("Quiz completed. Thank you for playing!");
    rl.close();
  }
}

// Function to get a displayable value
function getDisplayValue(value) {
  if (typeof value === "object") {
    return JSON.stringify(value);
  } else {
    return value;
  }
}

// Function to check user's answer
function checkAnswer(question, userAnswer) {
  if (userAnswer.toLowerCase() === question.dataType) {
    console.log("Correct!");
  } else {
    console.log(`Incorrect. The correct data type is ${question.dataType}.`);
  }
}

// Start the quiz
startQuiz();
