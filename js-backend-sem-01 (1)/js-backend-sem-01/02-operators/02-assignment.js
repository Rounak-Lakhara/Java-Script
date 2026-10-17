// ============================================================
// PART B: ASSIGNMENT OPERATORS  ( =  +=  -=  *=  /=  %=  **= )
// ============================================================

// 1. Simple Assignment =
let userAge = 20;
console.log(userAge);

let penPrice = 15;
console.log(penPrice);

let daysInWeek = 7;
console.log(daysInWeek);

let cityName = "Ahmedabad";
console.log(cityName);

let piValue = 3.14159;
console.log(piValue);

// Additional Questions (Simple Assignment =)
let assignA, assignB, assignC;
assignA = assignB = assignC = 10;
console.log(assignA, assignB, assignC); // 10 10 10

let assignX = 5;
let assignY = assignX;
assignX = 10;
console.log(assignX, assignY); // 10 5

let assignP = 100;
let assignQ = assignP;
let assignR = assignQ;
console.log(assignP, assignQ, assignR); // 100 100 100

let assignM = "Hello";
let assignN = assignM;
assignM = "World";
console.log(assignM, assignN); // "World" "Hello"

let assignVal1 = 25;
let assignVal2 = assignVal1;
let assignVal3 = assignVal2;
console.log(assignVal1, assignVal2, assignVal3); // 25 25 25


// 2. Add and Assign +=
let studentMarks = 200;
studentMarks += 35;
console.log(studentMarks);

let bankBalance = 5000;
bankBalance += 1200;
console.log(bankBalance);

let batteryLevel = 45;
batteryLevel += 30;
console.log(batteryLevel);

let playerScore = 1250;
playerScore += 375;
console.log(playerScore);

let totalLibraryBooks = 840;
totalLibraryBooks += 160;
console.log(totalLibraryBooks);

// Additional Questions (Add and Assign +=)
let addAssignA = "10";
addAssignA += 5;
console.log(addAssignA); // "105"

let addAssignX = 5;
addAssignX += "3";
console.log(addAssignX); // "53"

let addAssignP = 0;
addAssignP += false;
console.log(addAssignP); // 0

let addAssignM = 10;
addAssignM += true;
console.log(addAssignM); // 11

let addAssignVal = "Hello";
addAssignVal += "World";
console.log(addAssignVal); // "HelloWorld"


// 3. Subtract and Assign -=
let tankWater = 1000;
tankWater -= 375;
console.log(tankWater);

let studentPocketMoney = 500;
studentPocketMoney -= 180;
console.log(studentPocketMoney);

let phoneBattery = 90;
phoneBattery -= 45;
console.log(phoneBattery);

let totalWarehouseBoxes = 2400;
totalWarehouseBoxes -= 950;
console.log(totalWarehouseBoxes);

let gamePoints = 2000;
gamePoints -= 625;
console.log(gamePoints);

// Additional Questions (Subtract and Assign -=)
let subAssignA = "20";
subAssignA -= 5;
console.log(subAssignA); // 15

let subAssignX = "100";
subAssignX -= "50";
console.log(subAssignX); // 50

let subAssignP = 10;
subAssignP -= "abc";
console.log(subAssignP); // NaN

let subAssignM = 5;
subAssignM -= true;
console.log(subAssignM); // 4

let subAssignVal = 20;
subAssignVal -= false;
console.log(subAssignVal); // 20


// 4. Multiply and Assign *=
let townPopulation = 5000;
townPopulation *= 3;
console.log(townPopulation);

let factoryProduction = 120;
factoryProduction *= 4;
console.log(factoryProduction);

let totalSavings = 2000;
totalSavings *= 2;
console.log(totalSavings);

let gardenPlantCount = 50;
gardenPlantCount *= 5;
console.log(gardenPlantCount);

let currentScore = 150;
currentScore *= 3;
console.log(currentScore);

// Additional Questions (Multiply and Assign *=)
let mulAssignA = "10";
mulAssignA *= 2;
console.log(mulAssignA); // 20

let mulAssignX = "5";
mulAssignX *= "4";
console.log(mulAssignX); // 20

let mulAssignP = "hello";
mulAssignP *= 2;
console.log(mulAssignP); // NaN

let mulAssignM = 5;
mulAssignM *= "0";
console.log(mulAssignM); // 0

let mulAssignVal = 3;
mulAssignVal *= "4";
console.log(mulAssignVal); // 12


// 5. Divide and Assign /=
let clothLength = 1200;
clothLength /= 4;
console.log(clothLength);

let projectBudget = 80000;
projectBudget /= 8;
console.log(projectBudget);

let sugarGram = 960;
sugarGram /= 6;
console.log(sugarGram);

let tripDistance = 450;
tripDistance /= 5;
console.log(tripDistance);

let totalGroupMarks = 2500;
totalGroupMarks /= 10;
console.log(totalGroupMarks);

// Additional Questions (Divide and Assign /=)
let divAssignA = "100";
divAssignA /= 5;
console.log(divAssignA); // 20

let divAssignX = "200";
divAssignX /= "4";
console.log(divAssignX); // 50

let divAssignP = 10;
divAssignP /= 0;
console.log(divAssignP); // Infinity

let divAssignM = -10;
divAssignM /= 0;
console.log(divAssignM); // -Infinity

let divAssignVal = 0;
divAssignVal /= 0;
console.log(divAssignVal); // NaN


// 6. Modulus and Assign %=
let totalShopCandies = 137;
totalShopCandies %= 10;
console.log(totalShopCandies);

let totalCoachStudents = 250;
totalCoachStudents %= 7;
console.log(totalCoachStudents);

let projectTotalDays = 1000;
projectTotalDays %= 7;
console.log(projectTotalDays);

let totalHallChairs = 89;
totalHallChairs %= 5;
console.log(totalHallChairs);

let loanDurationMonths = 365;
loanDurationMonths %= 12;
console.log(loanDurationMonths);

// Additional Questions (Modulus and Assign %=)
let modAssignA = 10;
modAssignA %= 0;
console.log(modAssignA); // NaN

let modAssignX = 0;
modAssignX %= 5;
console.log(modAssignX); // 0

let modAssignP = -10;
modAssignP %= 3;
console.log(modAssignP); // -1

let modAssignM = 10;
modAssignM %= -3;
console.log(modAssignM); // 1

let modAssignVal = -10;
modAssignVal %= -3;
console.log(modAssignVal); // -1


// 7. Exponentiation and Assign **=
let gardenSideLength = 10;
gardenSideLength **= 2;
console.log(gardenSideLength);

let cubeBoxEdge = 4;
cubeBoxEdge **= 3;
console.log(cubeBoxEdge);

let imageGrowthFactor = 3;
imageGrowthFactor **= 2;
console.log(imageGrowthFactor);

// Additional Questions (Exponentiation and Assign **=)
let expAssignSide = -2;
expAssignSide **= 2;
console.log(expAssignSide); // 4

let expAssignBase = 2;
expAssignBase **= -1;
console.log(expAssignBase); // 0.5

let expAssignVal = 2;
expAssignVal **= -2;
console.log(expAssignVal); // 0.25

let expAssignX = 3;
expAssignX **= 0;
console.log(expAssignX); // 1

let expAssignA = 10;
expAssignA **= 1;
console.log(expAssignA); // 10
