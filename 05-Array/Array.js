// Assignment : Arrays in JavaScript


// ===================== Part 1 : What Is an Array? =====================

// Q1
// An array is a single variable that stores multiple values in an ordered list.

// Q2
// The position of a value inside an array is called its index.

// Q3
// Index always starts from 0.

// Q4
{
    let numbers = [10, 20, 30, 40];
    console.log(numbers[2]); // 30
}

// Q5
{
    let numbers = [10, 20, 30, 40];
    console.log(numbers.indexOf(40)); // 3
}


// ===================== Part 2 : Creating Arrays =====================

// Q1
// Two ways: array literal  []  and the Array constructor  new Array()

// Q2
// Array literal [] is the recommended one.

// Q3
let students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];

// Q4
let marks = new Array(85, 90, 78);

// Q5
// The "new" keyword.


// ===================== Part 3 : Accessing Values in an Array =====================

// Q1
// We use the index number inside square brackets, like arr[0].

// Q2
{
    let students = ["Jenil", "Mahir", "Priyesha"];
    console.log(students[0]); // Jenil
}

// Q3
{
    let students = ["Jenil", "Mahir", "Priyesha"];
    console.log(students[2]); // Priyesha
}

// Q4
{
    let students = ["Jenil", "Mahir", "Priyesha"];
    console.log(students[10]); // undefined
}

// Q5
{
    let colors = ["Red", "Blue", "Green"];
    console.log(colors[0]); // Red
}


// ===================== Part 4 : Updating Values =====================

// Q1
// Just assign a new value to that index, like arr[1] = value.

// Q2
let marks4 = [80, 75, 90];
marks4[1] = 95;

// Q3
console.log(marks4); // [ 80, 95, 90 ]

// Q4
// False. No special method like update() is needed, simple assignment works.

// Q5
// Yes, we can. JS will not throw an error. The array grows and the
// gap in between is filled with empty slots.
{
    let arr = [1, 2, 3];
    arr[6] = 99;
    console.log(arr);        // [ 1, 2, 3, <3 empty items>, 99 ]
    console.log(arr.length); // 7
}


// ===================== Part 5 : Array Length =====================

// Q1
// The length property.

// Q2
{
    let arr = [1, 2, 3, 4];
    console.log(arr.length); // 4
}

// Q3
{
    let empty = [];
    console.log(empty.length); // 0
}

// Q4
// It tells us how many items are there, so we can use it in loops
// (i < arr.length) and also to get the last index (arr.length - 1)
// without hardcoding the size.

// Q5
// It is a property, not a function. So no parentheses: arr.length


// ===================== Part 6 : Looping Through Arrays =====================

// Q1
// The for loop and the while loop.

// Q2
// i < students.length

// Q3
// The i++ is placed after the array access statement, at the end of the
// loop body. If we put it before, we would skip the first element.

// Q4
{
    let students = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

// Q5
// The loop runs one extra time with i equal to students.length, which is
// out of bounds, so it prints undefined at the end.
{
    let students = ["Jenil", "Mahir"];
    for (let i = 0; i <= students.length; i++) {
        console.log(students[i]); // Jenil, Mahir, undefined
    }
}

// Q6
{
    let subject = ["Maths", "Science", "English"];
    for (let item of subject) {
        console.log(item);
    }
}

// Q7
// for...of gives the value directly, so the code is shorter and cleaner.
// No need to manage i, check the length or write arr[i].

// Q8
// As written in the question, the code will not run. There is a missing
// closing bracket and indexOf is called without the array. Fixed version:
{
    let colors = ["Red", "Blue", "Green"];
    for (let color of colors) {
        console.log(color, colors.indexOf(color));
    }
    // Red 0
    // Blue 1
    // Green 2
}


// ===================== Part 7 : Adding Elements to Arrays =====================

// Q1
// push()

// Q2
// unshift()

// Q3
let nums7 = [1, 2, 3];
nums7.push(4);
console.log(nums7); // [ 1, 2, 3, 4 ]

// Q4
nums7.unshift(0);
console.log(nums7); // [ 0, 1, 2, 3, 4 ]

// Q5
// True. Both push() and unshift() change the original array.


// ===================== Part 8 : Removing Elements =====================

// Q1
// pop()

// Q2
// shift()

// Q3
let nums8 = [100, 200, 300, 400, 500];
nums8.pop(); // removes 500
console.log(nums8); // [ 100, 200, 300, 400 ]

// Q4
nums8.shift(); // removes 100
console.log(nums8); // [ 200, 300, 400 ]

// Q5
// Both of them return the removed element and also modify the array.


// ===================== Part 9 : Searching in Arrays =====================

// Q1
// It returns the index of the first match.

// Q2
// It returns -1.

// Q3
let names = ["Jenil", "Mahir", "Arjun"];
console.log(names.indexOf("Mahir")); // 1

// Q4
console.log(names.indexOf("Krishna")); // -1

// Q5
let studentsList = ["Jenil", "Mahir", "Priyesha", "Yashvi"];
console.log(studentsList.indexOf("Priyesha")); // 2


// ===================== Part 10 : Array with Different Data Types =====================

// Q1
// Yes, a JS array can hold different data types together.

// Q2
let data = [100, "Hello", true, null];

// Q3

for (let i = 0; i < data.length; i++) {
    console.log(typeof data[i]); // number, string, boolean, object
}

// Q4
console.log(typeof data[0]); // number

// Q5
console.log(typeof data[2]); // boolean


// ===================== Part 11 : Array of Arrays (Matrix) - 2D Arrays =====================

// Q1
// It is commonly used to store data in rows and columns, like a table,
// a matrix, a game board or a seating plan.

// Q2
{
    let matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    console.log(matrix[2][1]); // 6
}

// Q3
{
    let grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log(grid[1][2]); // 6
}

// Q4
{
    let arr = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    console.log(arr[2][2]); // 90
}

// Q5
{
    let table = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    table[1][1] = 100;
    console.log(table); // [ [ 1, 2, 3 ], [ 4, 100, 6 ] ]
}