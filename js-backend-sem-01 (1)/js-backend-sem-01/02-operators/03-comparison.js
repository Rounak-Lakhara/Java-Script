// ============================================================
// PART C: COMPARISON & RELATIONAL OPERATORS  ( ==  !=  ===  !==  >  <  >=  <= )
// ============================================================

// 1. Loose Equality ==
let savedPassword = 1234;
let enteredPassword = "1234";
let isPasswordMatch = savedPassword == enteredPassword;
console.log(isPasswordMatch);

let userAnswer = 0;
let defaultAnswer = false;
let isAnswerEqual = userAnswer == defaultAnswer;
console.log(isAnswerEqual);

let userInput = "";
let submittedFlag = false;
let isInputEqual = userInput == submittedFlag;
console.log(isInputEqual);

let backendValue = null;
let frontendValue = undefined;
let isBothNoValue = backendValue == frontendValue;
console.log(isBothNoValue);

let device1Score = 500;
let device2Score = "500";
let isScoreEqual = device1Score == device2Score;
console.log(isScoreEqual);

// Additional Questions (Loose Equality ==)
let looseEqA = 0;
let looseEqB = false;
console.log(looseEqA == looseEqB); // true

let looseEqX = "";
let looseEqY = false;
console.log(looseEqX == looseEqY); // true

let looseEqP = "0";
let looseEqQ = 0;
console.log(looseEqP == looseEqQ); // true

let looseEqM = [];
let looseEqN = 0;
console.log(looseEqM == looseEqN); // true

let looseEqVal1 = [];
let looseEqVal2 = false;
console.log(looseEqVal1 == looseEqVal2); // true


// 2. Loose Inequality !=
let code1 = "SAVE10";
let code2 = "SAVE20";
let isCodeDifferent = code1 != code2;
console.log(isCodeDifferent);

let userRole = "admin";
let defaultRole = "guest";
let isRoleDifferent = userRole != defaultRole;
console.log(isRoleDifferent);

let correctAnswer = 42;
let enteredUserAnswer = "40";
let isAnswerDifferent = correctAnswer != enteredUserAnswer;
console.log(isAnswerDifferent);

let emailInput = "";
let emptyFlag = false;
let isEmailDifferent = emailInput != emptyFlag;
console.log(isEmailDifferent);

let userId = null;
let validId = 101;
let isIdDifferent = userId != validId;
console.log(isIdDifferent);

// Additional Questions (Loose Inequality !=)
let looseIneqA = 0;
let looseIneqB = false;
console.log(looseIneqA != looseIneqB); // false

let looseIneqX = "";
let looseIneqY = false;
console.log(looseIneqX != looseIneqY); // false

let looseIneqP = "0";
let looseIneqQ = 0;
console.log(looseIneqP != looseIneqQ); // false

let looseIneqM = null;
let looseIneqN = undefined;
console.log(looseIneqM != looseIneqN); // false

let looseIneqVal1 = [];
let looseIneqVal2 = 0;
console.log(looseIneqVal1 != looseIneqVal2); // false


// 3. Strict Equality ===
let storedPass = 1234;
let enteredPass = "1234";
let isStrictPassMatch = storedPass === enteredPass;
console.log(isStrictPassMatch);

let account1 = 1234567890;
let account2 = 1234567890;
let isAccountMatch = account1 === account2;
console.log(isAccountMatch);

let featureFlag = true;
let requiredState = 1;
let isStateMatch = featureFlag === requiredState;
console.log(isStateMatch);

let dbValue = null;
let cacheValue = undefined;
let isDbCacheMatch = dbValue === cacheValue;
console.log(isDbCacheMatch);

let score1 = 85;
let score2 = 85;
let isScoreStrictMatch = score1 === score2;
console.log(isScoreStrictMatch);

// Additional Questions (Strict Equality ===)
let strictEqA = 0;
let strictEqB = false;
console.log(strictEqA === strictEqB); // false

let strictEqX = "";
let strictEqY = false;
console.log(strictEqX === strictEqY); // false

let strictEqP = "0";
let strictEqQ = 0;
console.log(strictEqP === strictEqQ); // false

let strictEqM = null;
let strictEqN = undefined;
console.log(strictEqM === strictEqN); // false

let strictEqVal = NaN;
console.log(strictEqVal === strictEqVal); // false


// 4. Strict Inequality !==
let stringId = "101";
let numberId = 101;
let isStrictIdNotEqual = stringId !== numberId;
console.log(isStrictIdNotEqual);

let booleanStatus = true;
let numericStatus = 1;
let isStatusNotEqual = booleanStatus !== numericStatus;
console.log(isStatusNotEqual);

let passwordInput = "abc123";
let confirmPasswordInput = "abc124";
let isPasswordNotEqual = passwordInput !== confirmPasswordInput;
console.log(isPasswordNotEqual);

let serverData = null;
let localData = undefined;
let isDataNotEqual = serverData !== localData;
console.log(isDataNotEqual);

let player1Id = 10;
let player2Id = 20;
let isPlayerIdNotEqual = player1Id !== player2Id;
console.log(isPlayerIdNotEqual);

// Additional Questions (Strict Inequality !==)
let strictIneqA = 0;
let strictIneqB = false;
console.log(strictIneqA !== strictIneqB); // true

let strictIneqX = "";
let strictIneqY = false;
console.log(strictIneqX !== strictIneqY); // true

let strictIneqP = "0";
let strictIneqQ = 0;
console.log(strictIneqP !== strictIneqQ); // true

let strictIneqM = null;
let strictIneqN = undefined;
console.log(strictIneqM !== strictIneqN); // true

let strictIneqVal = NaN;
console.log(strictIneqVal !== strictIneqVal); // true


// 5. Greater Than >
let age = 20;
let votingAge = 18;
let canVote = age > votingAge;
console.log(canVote);

let cartTotal = 650;
let freeShippingLimit = 500;
let isShippingFree = cartTotal > freeShippingLimit;
console.log(isShippingFree);

let playerScoreValue = 1200;
let requiredScoreValue = 1000;
let isLevelUnlocked = playerScoreValue > requiredScoreValue;
console.log(isLevelUnlocked);

let monthlyIncome = 40000;
let minimumRequiredIncome = 30000;
let isLoanApproved = monthlyIncome > minimumRequiredIncome;
console.log(isLoanApproved);

let stepsToday = 11000;
let targetSteps = 10000;
let isTargetExceeded = stepsToday > targetSteps;
console.log(isTargetExceeded);

// Additional Questions (Greater Than >)
let gtA = 5;
let gtB = 5;
console.log(gtA > gtB); // false

let gtX = "10";
let gtY = "2";
console.log(gtX > gtY); // false

let gtP = "5";
let gtQ = 10;
console.log(gtP > gtQ); // false

let gtM = null;
let gtN = 0;
console.log(gtM > gtN); // false

let gtVal = undefined;
console.log(gtVal > 0); // false


// 6. Less Than <
let studentMarksObtained = 30;
let failThreshold = 35;
let hasFailed = studentMarksObtained < failThreshold;
console.log(hasFailed);

let totalExpenses = 8000;
let maxBudget = 10000;
let isUnderBudget = totalExpenses < maxBudget;
console.log(isUnderBudget);

let itemsLeft = 7;
let lowStockLimit = 10;
let isStockLow = itemsLeft < lowStockLimit;
console.log(isStockLow);

let vehicleSpeed = 40;
let minimumSpeedLimit = 50;
let isTooSlow = vehicleSpeed < minimumSpeedLimit;
console.log(isTooSlow);

let remainingTime = 4;
let warningLimit = 5;
let isWarningNeeded = remainingTime < warningLimit;
console.log(isWarningNeeded);

// Additional Questions (Less Than <)
let ltA = 5;
let ltB = 5;
console.log(ltA < ltB); // false

let ltX = "10";
let ltY = "2";
console.log(ltX < ltY); // true

let ltP = null;
let ltQ = 1;
console.log(ltP < ltQ); // true

let ltM = null;
let ltN = 0;
console.log(ltM < ltN); // false

let ltVal = undefined;
console.log(ltVal < 0); // false


// 7. Greater Than or Equal >=
let voterAge = 18;
let minVotingAge = 18;
let isEligibleToVote = voterAge >= minVotingAge;
console.log(isEligibleToVote);

let studentPercentage = 75;
let minScholarshipPercent = 75;
let isScholarshipGranted = studentPercentage >= minScholarshipPercent;
console.log(isScholarshipGranted);

let appUserAge = 14;
let minSubAge = 13;
let isSubscriptionAllowed = appUserAge >= minSubAge;
console.log(isSubscriptionAllowed);

let gamerScore = 500;
let minPassScore = 500;
let canProceed = gamerScore >= minPassScore;
console.log(canProceed);

let workExperience = 3;
let requiredExperience = 2;
let isCandidateEligible = workExperience >= requiredExperience;
console.log(isCandidateEligible);

// Additional Questions (Greater Than or Equal >=)
let gteA = 5;
let gteB = 5;
console.log(gteA >= gteB); // true

let gteX = null;
let gteY = 0;
console.log(gteX >= gteY); // true

let gteP = undefined;
let gteQ = 0;
console.log(gteP >= gteQ); // false

let gteM = "5";
let gteN = 5;
console.log(gteM >= gteN); // true

let gteVal = "10";
let gteLimit = 5;
console.log(gteVal >= gteLimit); // true


// 8. Less Than or Equal <=
let liftPeopleCount = 7;
let maxLiftCapacity = 8;
let isLiftSafe = liftPeopleCount <= maxLiftCapacity;
console.log(isLiftSafe);

let fileSizeMB = 5;
let maxAllowedMB = 5;
let isUploadAllowed = fileSizeMB <= maxAllowedMB;
console.log(isUploadAllowed);

let participantAge = 12;
let maxJuniorAge = 12;
let isJuniorQualify = participantAge <= maxJuniorAge;
console.log(isJuniorQualify);

let dataUsedGB = 9.5;
let dataLimitGB = 10;
let isWithinDataLimit = dataUsedGB <= dataLimitGB;
console.log(isWithinDataLimit);

let classStrength = 40;
let maxClassCapacity = 40;
let isValidCapacity = classStrength <= maxClassCapacity;
console.log(isValidCapacity);

// Additional Questions (Less Than or Equal <=)
let lteA = 5;
let lteB = 5;
console.log(lteA <= lteB); // true

let lteX = null;
let lteY = 0;
console.log(lteX <= lteY); // true

let lteP = undefined;
let lteQ = 0;
console.log(lteP <= lteQ); // false

let lteM = "5";
let lteN = 5;
console.log(lteM <= lteN); // true

let lteVal = "3";
let lteLimit = 5;
console.log(lteVal <= lteLimit); // true
