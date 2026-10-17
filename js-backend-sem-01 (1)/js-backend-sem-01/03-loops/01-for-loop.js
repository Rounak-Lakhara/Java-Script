// ============================================================
// PART I: FOR LOOP
// ============================================================

// Q1
{
    let temperatures = [28, 32, 25, 40, 18, 35];
    let count = 0;

    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > 30) count++;
    }
    console.log(count);
}

{
    let num = 4729;
    let sum = 0;

    for (; num > 0; num = Math.floor(num / 10)) {
        sum += num % 10;
    }
    console.log(sum);
}

{
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
            console.log(i);
        }
    }
}

{
    let str = "JavaScript";
    let consonants = "";

    for (let i = 0; i < str.length; i++) {
        if (!"aeiou".includes(str[i].toLowerCase())) {
            consonants += str[i];
        }
    }
    console.log(consonants);
}

{
    let arr = [10, 40, 20, 50, 30];
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }
    console.log(secondLargest);
}

{
    let n = 28;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    console.log(sum === n ? "Perfect number" : "Not a perfect number");
}

{
    let value = 1;

    for (let i = 1; i <= 8; i++) {
        console.log(value);
        value *= 2;
    }
}

{
    let a = 0, b = 1;

    for (let i = 1; i <= 20; i++) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

{
    let scores = [45, 78, 90, 32, 56, 88];
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    let average = sum / scores.length;
    let count = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > average) count++;
    }

    console.log("Average:", average);
    console.log("Above average:", count);
}

{
    let decimal = 13;
    let binary = "";

    if (decimal === 0) binary = "0";

    for (; decimal > 0; decimal = Math.floor(decimal / 2)) {
        binary = (decimal % 2) + binary;
    }
    console.log(binary);
}
