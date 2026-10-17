// ============================================================
// PART D: LOGICAL OPERATORS  ( &&  ||  ! )
// ============================================================

// 1. Logical AND &&
let storedUsername = "admin";
let storedUserPass = 1234;
let isValidLogin = storedUsername === "admin" && storedUserPass === 1234;
console.log(isValidLogin);

let isLoggedIn = true;
let hasPermission = true;
let canAccessPage = isLoggedIn && hasPermission;
console.log(canAccessPage);

let inStock = true;
let productPrice = 800;
let canBeBought = inStock && productPrice < 1000;
console.log(canBeBought);

let studentScore = 75;
let studentAttendance = 80;
let hasPassedCourse = studentScore > 65 && studentAttendance > 70;
console.log(hasPassedCourse);

let isWeekend = true;
let isHoliday = false;
let canPartyHappen = isWeekend && isHoliday;
console.log(canPartyHappen);

// Additional Questions (Logical AND &&)
let andA = 0;
let andB = 10;
let andRes1 = andA && andB;
console.log(andRes1); // 0

let andX = 5;
let andY = 10;
let andRes2 = (andX > 3 && andY) || 0;
console.log(andRes2); // 10

let andP = "Hello";
let andQ = "";
let andR = "World";
let andRes3 = andP && andQ && andR;
console.log(andRes3); // ""

let andVal = 5;
let andCondition = andVal && (andVal = 0);
console.log(andCondition); // 0
console.log(andVal); // 0

let andX2 = 10;
let andY2 = 20;
let andRes4 = (andX2 && andY2) && (andX2 > andY2);
console.log(andRes4); // false


// 2. Logical OR ||
let passwordCorrect = true;
let otpValid = false;
let isLoginAllowed = passwordCorrect || otpValid;
console.log(isLoginAllowed);

let isMember = false;
let hasCoupon = true;
let isDiscountApplied = isMember || hasCoupon;
console.log(isDiscountApplied);

let personAge = 16;
let personHeight = 155;
let isEntryAllowed = personAge > 18 || personHeight > 150;
console.log(isEntryAllowed);

let emailGiven = true;
let phoneGiven = false;
let isFormValid = emailGiven || phoneGiven;
console.log(isFormValid);

let gameScoreValue = 900;
let timeBonusCollected = true;
let isLevelOpen = gameScoreValue > 1000 || timeBonusCollected;
console.log(isLevelOpen);

// Additional Questions (Logical OR ||)
let orA = 0;
let orB = false;
let orC = "";
let orD = null;
let orE = 42;
let orRes1 = orA || orB || orC || orD || orE;
console.log(orRes1); // 42

let orX = "Hello" || 0;
let orY = 0 || "Hi";
console.log(orX, orY); // "Hello" "Hi"

let orA2 = 10;
let orB2 = 20;
let orRes2 = (orA2 < 5) || (orB2 > 15);
console.log(orRes2); // true

let orM = null;
let orN = undefined;
let orRes3 = orM || orN;
console.log(orRes3); // undefined

let orP = "";
let orQ = "default";
let orRes4 = orP || orQ;
console.log(orRes4); // "default"


// 3. Logical NOT !   (NOTE: Claude ne likha hai)
let isUserLoggedIn = false;
let showLoginButton = !isUserLoggedIn;
console.log(showLoginButton); // true

let hasItemsInCart = true;
let isCartEmpty = !hasItemsInCart;
console.log(isCartEmpty); // false

let isAccountBlocked = false;
let canTransferMoney = !isAccountBlocked;
console.log(canTransferMoney); // true

let isDarkMode = true;
let isLightMode = !isDarkMode;
console.log(isLightMode); // false

let isEmailVerified = false;
let needsVerification = !isEmailVerified;
console.log(needsVerification); // true

// Additional Questions (Logical NOT !)
let notA = 0;
console.log(!notA); // true

let notX = "";
console.log(!notX); // true

let notP = "0";
console.log(!notP); // false (non-empty string is truthy)

let notM = [];
console.log(!notM); // false (empty array is truthy)

let notVal = null;
console.log(!!notVal); // false (double NOT converts to boolean)

