// ============================================================
// VARIABLES & DATA TYPES
// var / let / const, primitive types, null vs undefined,
// objects, arrays, functions, naming rules
// ============================================================

var name = "Rahul";
let age = 20;
const PI = 3.14159;
console.log(name, age, PI);

let score = 0;
score += 10;
console.log(score);
score += 5;
console.log(score);
score -= 3;
console.log(score);
const maxScore = 100;
console.log(maxScore);

let myNumber = 42;
let myDecimal = 3.14;
let myText = "Hello";
let isReady = true;
let notReady = false;
let nothing;
let emptyValue = null;
let myBigInt = 123456789012345678901234567890n;
console.log(myNumber, typeof myNumber);
console.log(myDecimal, typeof myDecimal);
console.log(myText, typeof myText);
console.log(isReady, typeof isReady);
console.log(notReady, typeof notReady);
console.log(nothing, typeof nothing);
console.log(emptyValue, typeof emptyValue);
console.log(myBigInt, typeof myBigInt);

let x;
let y = null;
console.log(x, y);
console.log(typeof x, typeof y);
console.log(x == y, x === y);

let student = { name: "Rahul", age: 19, isEnrolled: true };
console.log(student);
console.log(student.name);
console.log(student.age);

let numbers = [10, 20, 30, 40, 50];
let mixed = [100, "JavaScript", true, null];
console.log(numbers[0], numbers[numbers.length - 1]);
console.log(mixed);

function greet(name) {
  return "Hello, " + name + "!";
}
let message1 = greet("Amit");
let message2 = greet("Priya");
console.log(message1, message2);

let a = 10;
let b = "10";
let c = true;
let d;
let e = null;
let f = { name: "Ali" };
let g = [1, 2, 3];
let h = function() { return 5; };
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);
console.log(h, typeof h);

let firstName;
let _private;
let $element;
let user123;
console.log(firstName, _private, $element, user123);

let message;
console.log(message);
message = "Hello, World!";
console.log(message);

let user_name = "Alice";
let user_age = 25;
let isStudent = true;
const MAX_USERS = 100;
console.log(user_name, user_age, isStudent, MAX_USERS);

let count = 0;
let scoreOne = 1;
let scoreTwo = 2;
let scoreThree = 3;
const PI_CONST = 3.14159;
let userName = "John";
let itemCount = 0;
console.log(count, scoreOne, scoreTwo, scoreThree, PI_CONST, userName, itemCount);
