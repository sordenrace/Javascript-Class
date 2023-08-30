const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to calculate the average of an array of numbers
function calculateAverage(marks) {
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  return totalMarks / marks.length;
}

// Function to assign a grade based on the average
function assignGrade(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Ask for the student's marks in 5 subjects
rl.question("Enter marks for subject 1: ", mark1 => {
  rl.question("Enter marks for subject 2: ", mark2 => {
    rl.question("Enter marks for subject 3: ", mark3 => {
      rl.question("Enter marks for subject 4: ", mark4 => {
        rl.question("Enter marks for subject 5: ", mark5 => {
          const marks = [parseFloat(mark1), parseFloat(mark2), parseFloat(mark3), parseFloat(mark4), parseFloat(mark5)];
          const average = calculateAverage(marks);
          const grade = assignGrade(average);
          
          console.log(`Average marks: ${average.toFixed(2)}`);
          console.log(`Grade: ${grade}`);

          rl.close();
        });
      });
    });
  });
});
