# JavaScript for Backend - Semester 1 (Assignments)

## Repo Structure

```text
js-backend-sem-01/
├── README.md
├── 01-variables-and-datatypes/
│   └── variables-and-datatypes.js
├── 02-operators/
│   ├── 01-arithmetic.js
│   ├── 02-assignment.js
│   ├── 03-comparison.js
│   └── 04-logical.js
├── 03-loops/
│   ├── 01-for-loop.js
│   ├── 02-break.js
│   ├── 03-continue.js
│   ├── 04-reverse-for.js
│   ├── 05-nested-for.js
│   ├── 06-for-loop-practice-set.js
│   ├── 07-pattern-practice.js
│   ├── 08-while-loop.js
│   └── 09-do-while-loop.js
├── 04-functions/
│   ├── functions.js
│   └── scope.js
└── 05-Array/
    └── Array.js
```

## How to Run

Node.js install hona chahiye (v18 ya usse upar).

```bash
# ek file
node 02-operators/01-arithmetic.js

# ek folder ki saari files
for f in 03-loops/*.js; do echo "== $f =="; node "$f"; done
```

---

## 1. Variables and Data Types

File: `01-variables-and-datatypes/variables-and-datatypes.js`

| Concept | Kya dikhaya gaya hai |
|---------|----------------------|
| `var`, `let`, `const` | Declaration, reassignment (`score += 10`), constant values |
| Primitive types | number, decimal, string, boolean, `undefined`, `null`, BigInt, with `typeof` |
| `null` vs `undefined` | `x == y` true, `x === y` false |
| Object | `student = { name, age, isEnrolled }`, dot notation |
| Array | Index access, last element, mixed array |
| Function | `greet(name)` alag-alag arguments ke saath |
| Naming rules | `firstName`, `_private`, `$element`, `user123`, snake_case, UPPER_CASE constants |

Important notes:
- `typeof null` aur `typeof []` dono `"object"` dete hain.
- Variable bina value ke declared ho to `undefined` hota hai.
- `const` ko dobara assign nahi kiya ja sakta.

---

## 2. Operators

Har operator ke real-life examples, uske baad tricky cases (type coercion, `NaN`, `Infinity`, `null`, `undefined`) cover kiye gaye hain.

| File | Operators |
|------|-----------|
| `01-arithmetic.js` | `+` `-` `*` `/` `%` `**` |
| `02-assignment.js` | `=` `+=` `-=` `*=` `/=` `%=` `**=` |
| `03-comparison.js` | `==` `!=` `===` `!==` `>` `<` `>=` `<=` |
| `04-logical.js` | `&&` `||` `!` |

**Tricky results**

| Expression | Result | Wajah |
|------------|--------|-------|
| `"10" + 5` | `"105"` | `+` string ko concatenate karta hai |
| `"10" - 3` | `7` | `-` conversion to number karta hai |
| `"abc" - 1` | `NaN` | invalid numeric conversion |
| `10 / 0` | `Infinity` | JavaScript error nahi deta |
| `0 / 0` | `NaN` | undefined mathematical result |
| `-10 % 3` | `-1` | remainder ka sign dividend ka hota hai |
| `2 ** -2` | `0.25` | `1 / (2 ** 2)` |
| `0 == false` | `true` | loose equality type conversion |
| `null == undefined` | `true` | dono no-value hain |
| `null === undefined` | `false` | strict equality me type alag hai |
| `NaN === NaN` | `false` | `NaN` khud ke barabar nahi |
| `null >= 0` | `true` | `null` ko `0` mana jata hai |
| `"10" < "2"` | `true` | strings dictionary order me compare hoti hain |
| `0 || "" || null || 42` | `42` | `||` pehli truthy value deta hai |
| `"Hello" && "" && "World"` | `""` | `&&` pehli falsy value deta hai |
| `!"0"` | `false` | non-empty string truthy hoti hai |

Rule of thumb: hamesha `===` aur `!==` use karo.

---

## 3. Loops

| File | Topic | Questions |
|------|-------|-----------|
| `01-for-loop.js` | for loop | 10 |
| `02-break.js` | break | 5 |
| `03-continue.js` | continue | 5 |
| `04-reverse-for.js` | reverse for loop | 10 |
| `05-nested-for.js` | nested for patterns and matrix logic | 16 |
| `06-for-loop-practice-set.js` | practice set Q1 - Q29 | 29 |
| `07-pattern-practice.js` | pattern practice 1 - 12 | 12 |
| `08-while-loop.js` | while loop | 8 |
| `09-do-while-loop.js` | do-while loop | 6 |

```js
for (let i = 0; i < n; i++) { }                   // start, condition, update
for (let i = n; i >= 1; i--) { }                  // reverse loop
for (; num > 0; num = Math.floor(num / 10)) { }   // digit loop
while (condition) { }                             // condition pehle check hoti hai
do { } while (condition);                         // kam se kam ek baar chalta hai
break;                                            // loop turant band
continue;                                         // is iteration ko skip karo
```

---

## 4. Functions

Files included:
- `04-functions/functions.js`
- `04-functions/scope.js`

### `functions.js`

**Q1:** Function reusable code ka block hai jo tab chalta hai jab usse call kiya jaye.
Advantages:
- reusability
- maintainability
- modularity
- duplication avoid karna (DRY)

| Q | Function / Topic | Concept |
|---|------------------|---------|
| Q2 | `greetStudent(name)` | Declaration with return |
| Q3 | `greetMe("Rounak")` | Hoisting |
| Q4 | `calculateAverage(a, b, c)` | Function expression |
| Q5 | `multiply(x, y)` | Parameters and return |
| Q6 | `isEven(num)` | Boolean return |
| Q7 | `findPercentage(obtained, total)` | Calculation |
| Q8 | `testFunc()` | Return missing => `undefined` |
| Q9 | `calculateSimpleInterest(p, r, t)` | Function expression |
| Q10 | `getStudentMsg(name, marks)` | Template literal |
| Q11 | `displayAge()` | Local vs global scope |
| Q12 | `analyzeStudent(...)` | Total and average |
| Q13 | `studentReport(...)` | Nested function |
| Q14 | `generateReport(...)` | Ternary for pass/fail |
| Q15 | `sumOfThree`, `averageOfTwo`, `maxOfTwo`, `fullName` | Multiple small functions |
| Q16 | `getGrade(marks)` | if / else if |
| Q17 | `squareArrow`, `addArrow`, `greetArrow` | Arrow functions |
| Q18 | `celsiusToFahrenheit`, `fahrenheitToCelsius` | Formula conversion |
| Q19 | `calculateArea(length, width = length)` | Default parameters |
| Q20 | `processNumber(num, callback)` | Callback |

### `scope.js`

This file covers:
- scope
- function scope
- block scope with `let`
- variable shadowing
- nested functions
- hoisting with `let` and function declarations
- closure

Important point: declaration hoist hoti hai, expression nahi. Return na likho to `undefined` milta hai.

---

## 5. Arrays

File: `05-Array/Array.js`

This assignment covers array basics in JavaScript:

- What is an array?
- Creating arrays
- Accessing array values using index
- Updating values
- `length` property
- Looping through arrays
- Adding elements with `push()` and `unshift()`
- Removing elements with `pop()` and `shift()`
- Searching using `indexOf()`
- Arrays with mixed data types
- 2D arrays / matrix concept

Example:

```js
let numbers = [10, 20, 30, 40];
console.log(numbers[2]); // 30
console.log(numbers.length); // 4
numbers.push(50);
console.log(numbers); // [10, 20, 30, 40, 50]
```

---

## Author

Rounak Lakhara - CodingGita x SU, Semester 1
