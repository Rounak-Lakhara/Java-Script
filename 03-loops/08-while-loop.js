// ============================================================
// WHILE LOOP
// NOTE: Ye questions Claude ne likhe hain (same style me).
// Apni assignment sheet se match kar lena.
// ============================================================


// 1. Print numbers from 1 to 10
{
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// 2. Sum of numbers from 1 to 100
{
    let i = 1;
    let sum = 0;
    while (i <= 100) {
        sum += i;
        i++;
    }
    console.log(sum); // 5050
}

// 3. Count digits of a number
{
    let num = 4729;
    let count = 0;
    while (num > 0) {
        count++;
        num = Math.floor(num / 10);
    }
    console.log(count); // 4
}

// 4. Reverse a number
{
    let num = 1234;
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    console.log(reversed); // 4321
}

// 5. Factorial of a number
{
    let n = 5;
    let fact = 1;
    while (n > 1) {
        fact *= n;
        n--;
    }
    console.log(fact); // 120
}

// 6. while with break: first multiple of 7 greater than 50
{
    let i = 51;
    while (true) {
        if (i % 7 === 0) {
            console.log(i); // 56
            break;
        }
        i++;
    }
}

// 7. while with continue: print only odd numbers from 1 to 15
{
    let i = 0;
    while (i < 15) {
        i++;
        if (i % 2 === 0) continue;
        console.log(i);
    }
}

// 8. Sum of digits using while
{
    let num = 4729;
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(sum); // 22
}
