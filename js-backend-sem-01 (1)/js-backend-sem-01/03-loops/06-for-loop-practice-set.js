// ============================================================
// FOR LOOP PRACTICE SET (Q1 - Q29)
// Har question apne block { } me hai, taaki variable names na takraye.
// ============================================================

// Q1
{
    for (let i = 50; i >= 1; i--) {
        if (i % 3 === 0 && i % 9 !== 0) {
            console.log(i);
        }
    }
}

// Q2
{
    let arr = [12, 45, 7, 23, 56, 89, 34];
    let largest = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 50 && arr[i] > largest) {
            largest = arr[i];
        }
    }
    console.log(largest);
}

// Q3
{
    let num = 4729;
    let product = 1;
    for (let temp = num; temp > 0; temp = Math.floor(temp / 10)) {
        let digit = temp % 10;
        if (digit % 2 !== 0) {
            product *= digit;
        }
    }
    console.log(product);
}

// Q4
{
    let str = "Programming";
    let vowels = "aeiouAEIOU";
    let resultStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        if (!vowels.includes(char)) {
            resultStr += char;
        }
    }
    console.log(resultStr);
}

// Q5
{
    let fib = [0, 1];
    for (let i = 2; i < 15; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    for (let i = fib.length - 1; i >= 0; i--) {
        console.log(fib[i]);
    }
}

// Q6
{
    let numPal = 121;
    let original = numPal;
    let reversed = 0;
    for (let temp = numPal; temp > 0; temp = Math.floor(temp / 10)) {
        let digit = temp % 10;
        reversed = reversed * 10 + digit;
    }
    console.log(original === reversed ? "Palindrome number" : "Not a palindrome");
}

// Q7
{
    let temperatures = [32, 28, 41, 19, 35, 27, 38];
    let counts = 0;
    for (let i = temperatures.length - 1; i >= 0; i--) {
        if (temperatures[i] < 30) {
            counts++;
        }
    }
    console.log(counts);
}

// Q8
{
    let numBin = 13;
    let binResult = "";
    for (let temp = numBin; temp > 0; temp = Math.floor(temp / 2)) {
        binResult += (temp % 2);
    }
    console.log(binResult);
}

// Q9
{
    let scores = [90, 85, 70, 95, 60, 88, 75];
    for (let i = scores.length - 1; i >= 0; i--) {
        if (scores[i] > 80) {
            console.log(`Score: ${scores[i]}, Index: ${i}`);
            break;
        }
    }
}

// Q10
{
    for (let i = 40; i >= 1; i--) {
        let sqrt = Math.sqrt(i);
        if (sqrt === Math.floor(sqrt)) {
            continue;
        }
        console.log(i);
    }
}

// Q11
{
    let num11 = 4729;
    let sum11 = 0;
    for (let temp = num11; temp > 0; temp = Math.floor(temp / 10)) {
        sum11 += temp % 10;
    }
    console.log(sum11);
}

// Q12
{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

// Q13
{
    let str13 = "JavaScript";
    let vowels13 = "aeiouAEIOU";
    let res13 = "";
    for (let i = 0; i < str13.length; i++) {
        if (!vowels13.includes(str13[i])) {
            res13 += str13[i];
        }
    }
    console.log(res13);
}

// Q14
{
    let arr14 = [12, 45, 22, 89, 56, 89, 34];
    let firstMax = -Infinity, secondMax = -Infinity;
    for (let i = 0; i < arr14.length; i++) {
        if (arr14[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr14[i];
        } else if (arr14[i] > secondMax && arr14[i] < firstMax) {
            secondMax = arr14[i];
        }
    }
    console.log(secondMax);
}

// Q15
{
    let n15 = 28;
    let sumDiv = 0;
    for (let i = 1; i < n15; i++) {
        if (n15 % i === 0) {
            sumDiv += i;
        }
    }
    console.log(sumDiv === n15);
}

// Q16
{
    let term = 1;
    for (let i = 1; i <= 8; i++) {
        console.log(term);
        term *= 2;
    }
}

// Q17
{
    let fib = [0, 1];
    for (let i = 2; i < 20; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
}

// Q18
{
    let scores18 = [45, 78, 90, 32, 56, 88];
    let total = 0;
    for (let i = 0; i < scores18.length; i++) {
        total += scores18[i];
    }
    let avg = total / scores18.length;
    let aboveAvgCount = 0;
    for (let i = 0; i < scores18.length; i++) {
        if (scores18[i] > avg) {
            aboveAvgCount++;
        }
    }
    console.log(`Average: ${avg}, Above Avg: ${aboveAvgCount}`);
}

// Q19
{
    let num19 = 13;
    let bin19 = "";
    for (let temp = num19; temp > 0; temp = Math.floor(temp / 2)) {
        bin19 = (temp % 2) + bin19;
    }
    console.log(bin19 || "0");
}

// Q20
{
    let arr20 = [4, 9, 2, 7, 15, 3];
    for (let i = 0; i < arr20.length; i++) {
        if (arr20[i] === 7) {
            console.log(i);
            break;
        }
    }
}

// Q21
{
    let attempts = 0;
    let correctPass = "secret123";
    let userInputs = ["pass1", "admin", "secret123", "wrong", "hello"];
    for (let i = 0; i < 5; i++) {
        attempts++;
        if (userInputs[i] === correctPass) {
            console.log("Access granted");
            break;
        }
        if (attempts === 5) {
            console.log("Account locked");
        }
    }
}

// Q22
{
    let sum22 = 0, lastAdded = 0;
    for (let i = 1; ; i++) {
        sum22 += i;
        if (sum22 > 100) {
            lastAdded = i;
            break;
        }
    }
    console.log(lastAdded);
}

// Q23
{
    let names23 = ["Rahul", "Amit", "Sumit", "Neha"];
    for (let i = 0; i < names23.length; i++) {
        if (names23[i][0] === "S") {
            console.log(names23[i]);
            break;
        }
    }
}

// Q24
{
    for (let i = 1; i <= 50; i++) {
        let sqrt = Math.sqrt(i);
        if (sqrt === Math.floor(sqrt) && i > 20) {
            console.log(i);
            break;
        }
    }
}

// Q25
{
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0) continue;
        console.log(i);
    }
}

// Q26
{
    let arr26 = [-5, 10, -2, 20, 15];
    let sum26 = 0;
    for (let i = 0; i < arr26.length; i++) {
        if (arr26[i] < 0) continue;
        sum26 += arr26[i];
    }
    console.log(sum26);
}

// Q27
{
    let str27 = "Hello World";
    let res27 = "";
    for (let i = 0; i < str27.length; i++) {
        if (str27[i] === " ") continue;
        res27 += str27[i];
    }
    console.log(res27);
}

// Q28
{
    for (let i = 1; i <= 12; i++) {
        let prod = 6 * i;
        if (prod % 5 === 0) continue;
        console.log(prod);
    }
}

// Q29
{
    let ages29 = [12, 18, 25, 15, 30, 17, 22];
    for (let i = 0; i < ages29.length; i++) {
        if (ages29[i] < 18) continue;
        console.log(ages29[i]);
    }
}
