// ============================================================
// PART A: ARITHMETIC OPERATORS  ( +  -  *  /  %  ** )
// ============================================================

// 1. Addition +
let c1 = 15000;
let c2 = 12500;
let totalCollection = c1 + c2;
console.log(totalCollection);

let morningPages = 18;
let eveningPages = 25;
let totalPages = morningPages + eveningPages;
console.log(totalPages);

let monItems = 125;
let tueItems = 178;
let totalItems = monItems + tueItems;
console.log(totalItems);

// Additional Questions (Addition +)
let addA = "10";
let addB = 5;
let addRes1 = addA + addB;
console.log(addRes1); // "105"

let addX = 5;
let addY = "3";
let addRes2 = addX + addY;
console.log(addRes2); // "53"

let addP = "Hello";
let addQ = "World";
let addRes3 = addP + " " + addQ;
console.log(addRes3); // "Hello World"

let addM = 0;
let addN = false;
let addRes4 = addM + addN;
console.log(addRes4); // 0

let addVal1 = 100;
let addVal2 = "200";
let addVal3 = addVal1 + addVal2;
console.log(addVal3); // "100200"


// 2. Subtraction -
let totalBusSeats = 80;
let occupiedBusSeats = 53;
let emptySeats = totalBusSeats - occupiedBusSeats;
console.log(emptySeats);

let totalStudentMarks = 500;
let lostMarks = 35;
let finalMarks = totalStudentMarks - lostMarks;
console.log(finalMarks);

let warehouseBoxes = 2500;
let sentBoxes = 875;
let remainingBoxes = warehouseBoxes - sentBoxes;
console.log(remainingBoxes);

// Additional Questions (Subtraction -)
let subA = "10";
let subB = 3;
let subRes1 = subA - subB;
console.log(subRes1); // 7

let subX = "20";
let subY = "5";
let subRes2 = subX - subY;
console.log(subRes2); // 15

let subP = "abc";
let subQ = 1;
let subRes3 = subP - subQ;
console.log(subRes3); // NaN

let divM = 10;
let divN = 0;
let divRes = divM / divN;
console.log(divRes); // Infinity

let nanVal = 0 / 0;
console.log(nanVal); // NaN


// 3. Multiplication *
let notebookPrice = 45;
let notebookQty = 8;
let totalNotebookCost = notebookPrice * notebookQty;
console.log(totalNotebookCost);

let bottlesPerHour = 120;
let productionHours = 6;
let totalBottles = bottlesPerHour * productionHours;
console.log(totalBottles);

let gardenRows = 7;
let plantsPerRow = 15;
let totalPlants = gardenRows * plantsPerRow;
console.log(totalPlants);

// Additional Questions (Multiplication *)
let mulA = "5";
let mulB = 4;
let mulRes1 = mulA * mulB;
console.log(mulRes1); // 20

let mulX = "10";
let mulY = "2";
let mulRes2 = mulX * mulY;
console.log(mulRes2); // 20

let mulP = "hello";
let mulQ = 2;
let mulRes3 = mulP * mulQ;
console.log(mulRes3); // NaN

let mulM = 5;
let mulN = "0";
let mulRes4 = mulM * mulN;
console.log(mulRes4); // 0

let mulVal1 = 3;
let mulVal2 = "4";
let mulVal3 = mulVal1 * mulVal2;
console.log(mulVal3); // 12


// 4. Division /
let totalPencils = 144;
let totalStudents = 12;
let pencilsPerStudent = totalPencils / totalStudents;
console.log(pencilsPerStudent);

let trainDistance = 360;
let trainTime = 6;
let avgSpeed = trainDistance / trainTime;
console.log(avgSpeed);

let companyBudget = 72000;
let departments = 9;
let budgetPerDept = companyBudget / departments;
console.log(budgetPerDept);

// Additional Questions (Division /)
let divA = "20";
let divB = 4;
let divRes1 = divA / divB;
console.log(divRes1); // 5

let divX = "100";
let divY = "5";
let divRes2 = divX / divY;
console.log(divRes2); // 20

let divP = 10;
let divQ = 0;
let divRes3 = divP / divQ;
console.log(divRes3); // Infinity

let divM2 = -10;
let divN2 = 0;
let divRes4 = divM2 / divN2;
console.log(divRes4); // -Infinity

let nanVal2 = 0 / 0;
console.log(nanVal2); // NaN


// 5. Modulus %
let totalClassStudents = 53;
let groupSize = 5;
let leftoverStudents = totalClassStudents % groupSize;
console.log(leftoverStudents);

let totalCandies = 128;
let boxCapacity = 10;
let unpackedCandies = totalCandies % boxCapacity;
console.log(unpackedCandies);

let userNumber = 7;
let isEven = userNumber % 2 === 0;
console.log(isEven);

let totalFactoryToys = 237;
let toyBoxCapacity = 6;
let leftoverToys = totalFactoryToys % toyBoxCapacity;
console.log(leftoverToys);

let waitingPassengers = 185;
let busCapacity = 40;
let leftoverPassengers = waitingPassengers % busCapacity;
console.log(leftoverPassengers);

// Additional Questions (Modulus %)
let modA = 10;
let modB = 0;
let modRes1 = modA % modB;
console.log(modRes1); // NaN

let modX = 0;
let modY = 5;
let modRes2 = modX % modY;
console.log(modRes2); // 0

let modP = -10;
let modQ = 3;
let modRes3 = modP % modQ;
console.log(modRes3); // -1

let modM = 10;
let modN = -3;
let modRes4 = modM % modN;
console.log(modRes4); // 1

let modVal1 = -10;
let modVal2 = -3;
let modVal3 = modVal1 % modVal2;
console.log(modVal3); // -1


// 6. Exponentiation **
let cubeSide = 6;
let cubeVolume = cubeSide ** 3;
console.log(cubeVolume);

let initialBacteria = 1;
let hoursPassed = 4;
let finalBacteria = initialBacteria * (2 ** hoursPassed);
console.log(finalBacteria);

let gridSide = 9;
let totalCells = gridSide ** 2;
console.log(totalCells);

let powerResult = 5 ** 4;
console.log(powerResult);

let imageSidePixels = 1024;
let totalImagePixels = imageSidePixels ** 2;
console.log(totalImagePixels);

// Additional Questions (Exponentiation **)
let expSide = -2;
let expArea = expSide ** 2;
console.log(expArea); // 4

let expBase = 2;
let expPower = -1;
let expRes1 = expBase ** expPower;
console.log(expRes1); // 0.5

let expVal = 2 ** -2;
console.log(expVal); // 0.25

let expX = 3;
let expY = 2;
let expZ = expX ** expY;
console.log(expZ); // 9

let expA = 10;
let expB = 0;
let expRes2 = expA ** expB;
console.log(expRes2); // 1
