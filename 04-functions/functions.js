// ============================================================
// FUNCTIONS
// Q16, Q17, Q19, Q20 Claude ne add kiye hain (baaki aapke).
// ============================================================

// Q1
// What is a function in JavaScript?
// A function is a reusable block of code designed to perform a particular task. 
// It executes when something invokes (calls) it.

// Four advantages of using functions:
// 1. Reusability: Write code once and run it multiple times.
// 2. Maintainability: Easier to update and debug specific logic in one place.
// 3. Modularity: Breaks down large complex programs into smaller, manageable parts.
// 4. Avoids duplication: Keeps code DRY (Don't Repeat Yourself).



// Q2
function greetStudent(name) {
  return `Hello ${name}, welcome to CodingGita!`;
}

console.log(greetStudent("Rounak"));
console.log(greetStudent("Amit"));


// Q3
greetMe("Rounak");

function greetMe(name) {
  console.log(`Hello ${name}`);
}


// Q4
let calculateAverage = function(a, b, c) {
  return (a + b + c) / 3;
};

console.log(calculateAverage(80, 90, 70));


// Q5
function multiply(x, y) {
  return x * y;
}
console.log(multiply(12, 5));


// Q6
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(24));
console.log(isEven(17));


// Q7
function findPercentage(obtainedMarks, totalMarks) {
  return (obtainedMarks / totalMarks) * 100;
}

console.log(findPercentage(456, 500));


// Q8
function testFunc() {
  let x = 10;
}
console.log(testFunc());


// Q9
let calculateSimpleInterest = function(principal, rate, time) {
  return (principal * rate * time) / 100;
};

console.log(calculateSimpleInterest(10000, 5, 2));


// Q10
let getStudentMsg = function(name, marks) {
  return `Student ${name} has scored ${marks} marks.`;
};

console.log(getStudentMsg("Rounak", 85));
console.log(getStudentMsg("Rahul", 92));


// Q11
let course = "JavaScript";

function displayAge() {
  let age = 20;
  console.log(age);
  console.log(course);
}

displayAge();


// Q12
function analyzeStudent(name, m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;
  return `${name} scored total ${total} with average ${average}`;
}

console.log(analyzeStudent("Rounak", 80, 85, 90));
console.log(analyzeStudent("Aman", 70, 75, 80));


// Q13
function studentReport(name, m1, m2, m3) {
  function total() {
    return m1 + m2 + m3;
  }
  return `${name} total marks: ${total()}`;
}

console.log(studentReport("Rounak", 85, 90, 95));
console.log(studentReport("Aman", 70, 75, 80));


// Q14
function generateReport(name, m1, m2, m3) {
  let total = m1 + m2 + m3;
  let average = total / 3;
  let result = average >= 40 ? "Pass" : "Fail";
  return `Name: ${name}, Total: ${total}, Average: ${average}, Result: ${result}`;
}

console.log(generateReport("Rounak", 85, 90, 95));
console.log(generateReport("Aman", 30, 35, 25));


// Q15
function sumOfThree(a, b, c) {
  return a + b + c;
}

function averageOfTwo(x, y) {
  return (x + y) / 2;
}

function maxOfTwo(a, b) {
  return a > b ? a : b;
}

function fullName(first, last) {
  return `${first} ${last}`;
}

console.log(sumOfThree(10, 20, 30));
console.log(averageOfTwo(40, 60));
console.log(maxOfTwo(45, 89));
console.log(fullName("Rounak", "Lakhara"));


// Q16  
function getGrade(marks) {
  if (marks >= 90) return "A+";
  else if (marks >= 75) return "A";
  else if (marks >= 60) return "B";
  else if (marks >= 40) return "C";
  return "Fail";
}

console.log(getGrade(95));
console.log(getGrade(68));
console.log(getGrade(32));


// Q17  
const squareArrow = (n) => n * n;
const addArrow = (a, b) => a + b;
const greetArrow = name => `Hello ${name}!`;

console.log(squareArrow(9));
console.log(addArrow(15, 25));
console.log(greetArrow("Rounak"));


// Q18
let celsiusToFahrenheit = function(c) {
  return (c * 9 / 5) + 32;
};

let fahrenheitToCelsius = function(f) {
  return (f - 32) * 5 / 9;
};

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(77));

// Q19 
function calculateArea(length, width = length) {
  return length * width;
}

console.log(calculateArea(5, 4));
console.log(calculateArea(6));


// Q20
function processNumber(num, callback) {
  return callback(num);
}

console.log(processNumber(5, (n) => n * 2));
console.log(processNumber(5, (n) => n ** 2));
