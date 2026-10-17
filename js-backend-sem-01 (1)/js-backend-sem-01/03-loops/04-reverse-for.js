// ============================================================
// PART I-c: REVERSE FOR LOOP
// ============================================================

// Q1
{
    for (let i = 50; i >= 1; i--) {
        if (i % 3 === 0 && i % 9 !== 0) {
            console.log(i);
        }
    }
}

{
    let arr = [12, 45, 7, 23, 56, 89, 34];
    let largest = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 50 && arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

{
    let num = 4729;
    let product = 1;
    let found = false;

    for (; num > 0; num = Math.floor(num / 10)) {
        let digit = num % 10;

        if (digit % 2 !== 0) {
            product *= digit;
            found = true;
        }
    }
    console.log(found ? product : 0);
}

{
    let str = "Programming";
    let consonants = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (!"aeiou".includes(str[i].toLowerCase())) {
            consonants += str[i];
        }
    }
    console.log(consonants);
}

{
    for (let i = 14; i >= 0; i--) {
        let a = 0, b = 1;

        for (let j = 0; j < i; j++) {
            let next = a + b;
            a = b;
            b = next;
        }
        console.log(a);
    }
}

{
    let num = 12321;
    let original = num;
    let reversed = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        reversed = reversed * 10 + num % 10;
    }

    console.log(original === reversed ? "Palindrome" : "Not palindrome");
}

{
    let temperatures = [32, 28, 41, 19, 35, 27, 38];
    let count = 0;

    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (temperatures[i] < 30) count++;
    }
    console.log(count);
}

{
    let decimal = 13;
    let binary = "";

    if (decimal === 0) binary = "0";

    for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
        binary += decimal % 2;
    }
    console.log(binary);
}

{
    let scores = [90, 85, 70, 95, 60, 88, 75];

    for (let i = scores.length - 1; i >= 0; i--) {
        if (scores[i] > 80) {
            console.log("Score:", scores[i]);
            console.log("Index:", i);
            break;
        }
    }
}

{
    for (let i = 40; i >= 1; i--) {
        if (Number.isInteger(Math.sqrt(i))) continue;
        console.log(i);
    }
}
