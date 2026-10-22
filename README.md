# JavaScript for Backend - Semester 1 (Assignments)


## Repo Structure

```
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
└── 04-functions/
    └── functions.js
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

Yaad rakho: `typeof null` aur `typeof []` dono `"object"` dete hain. Bina value ka declared variable `undefined` hota hai. `const` dobara assign nahi hota.

---

## 2. Operators

Har operator ke real-life examples, uske baad "Additional Questions" me tricky cases (type coercion, `NaN`, `Infinity`, `null`, `undefined`).

| File | Operators |
|------|-----------|
| `01-arithmetic.js` | `+`  `-`  `*`  `/`  `%`  `**` |
| `02-assignment.js` | `=`  `+=`  `-=`  `*=`  `/=`  `%=`  `**=` |
| `03-comparison.js` | `==`  `!=`  `===`  `!==`  `>`  `<`  `>=`  `<=` |
| `04-logical.js` | `&&`  `\|\|`  `!` |

**Tricky results**

| Expression | Result | Wajah |
|------------|--------|-------|
| `"10" + 5` | `"105"` | `+` string dikhe to concatenate karta hai |
| `"10" - 3` | `7` | `-` hamesha number me convert karta hai |
| `"abc" - 1` | `NaN` | "abc" number nahi ban sakta |
| `10 / 0` | `Infinity` | JS error nahi deta |
| `0 / 0` | `NaN` | Undefined math result |
| `-10 % 3` | `-1` | Remainder ka sign dividend ka hota hai |
| `2 ** -2` | `0.25` | 1 / (2 ** 2) |
| `0 == false` | `true` | Loose equality type convert karti hai |
| `null == undefined` | `true` | Loose equality me dono "no value" |
| `null === undefined` | `false` | Strict equality me type alag hai |
| `NaN === NaN` | `false` | `NaN` khud ke barabar bhi nahi |
| `null >= 0` | `true` | Comparison me `null` 0 ban jata hai |
| `"10" < "2"` | `true` | Dono strings hain, dictionary order se compare |
| `0 \|\| "" \|\| null \|\| 42` | `42` | `\|\|` pehli truthy value deta hai |
| `"Hello" && "" && "World"` | `""` | `&&` pehli falsy value deta hai |
| `!"0"` | `false` | Non-empty string truthy hoti hai |

Rule of thumb: hamesha `===` aur `!==` use karo.

---

## 3. Loops

| File | Topic | Questions |
|------|-------|-----------|
| `01-for-loop.js` | for loop | 10 |
| `02-break.js` | break | 5 |
| `03-continue.js` | continue | 5 |
| `04-reverse-for.js` | reverse for loop | 10 |
| `05-nested-for.js` | nested for (patterns, spiral matrix, Pascal triangle) | 16 |
| `06-for-loop-practice-set.js` | practice set Q1 - Q29 | 29 |
| `07-pattern-practice.js` | pattern practice 1 - 12 | 12 |
| `08-while-loop.js` | while loop (added) | 8 |
| `09-do-while-loop.js` | do-while loop (added) | 6 |

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

File: `04-functions/functions.js`

**Q1:** Function reusable code ka block hai jo tab chalta hai jab usse call kiya jaye.
Advantages: reusability, maintainability, modularity, avoids duplication (DRY).

| Q | Function | Concept |
|---|----------|---------|
| Q2 | `greetStudent(name)` | Declaration with return |
| Q3 | `greetMe("Rounak")` declaration se pehle call | Hoisting |
| Q4 | `calculateAverage(a, b, c)` | Function expression |
| Q5 | `multiply(x, y)` | Parameters and return |
| Q6 | `isEven(num)` | Boolean return |
| Q7 | `findPercentage(obtained, total)` | Calculation |
| Q8 | `testFunc()` bina return | Result `undefined` |
| Q9 | `calculateSimpleInterest(p, r, t)` | Function expression |
| Q10 | `getStudentMsg(name, marks)` | Template literal |
| Q11 | `displayAge()` | Local vs global scope |
| Q12 | `analyzeStudent(...)` | Total and average |
| Q13 | `studentReport(...)` | Nested function |
| Q14 | `generateReport(...)` | Ternary for Pass / Fail |
| Q15 | `sumOfThree`, `averageOfTwo`, `maxOfTwo`, `fullName` | Multiple small functions |
| Q16 | `getGrade(marks)` | if / else if (added) |
| Q17 | `squareArrow`, `addArrow`, `greetArrow` | Arrow functions (added) |
| Q18 | `celsiusToFahrenheit`, `fahrenheitToCelsius` | Formula conversion |
| Q19 | `calculateArea(length, width = length)` | Default parameters (added) |
| Q20 | `processNumber(num, callback)` | Callback (added) |

Yaad rakho: declaration hoist hoti hai, expression nahi. Return na likho to `undefined` milta hai.



## Author

Rounak Lakhara - CodingGita x SU, Semester 1
