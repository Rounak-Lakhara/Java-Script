// ============================================================
// DO-WHILE LOOP
// NOTE: Ye questions Claude ne likhe hain (same style me).
// Apni assignment sheet se match kar lena.
// ============================================================


// 1. do-while runs at least once, even if the condition is false
{
    let i = 10;
    do {
        console.log("Runs once, i =", i);
        i++;
    } while (i < 5);
}

// 2. Print numbers from 1 to 5
{
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

// 3. Keep adding 10 until the total is greater than 50
{
    let total = 0;
    do {
        total += 10;
    } while (total <= 50);
    console.log(total); // 60
}

// 4. Countdown from 5 to 1
{
    let i = 5;
    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

// 5. Menu simulation: repeat until the user chooses "exit"
{
    const choices = ["view", "add", "exit", "view"];
    let index = 0;
    let choice;
    do {
        choice = choices[index];
        console.log("Choice:", choice);
        index++;
    } while (choice !== "exit");
}

// 6. Sum of digits using do-while
{
    let num = 358;
    let sum = 0;
    do {
        sum += num % 10;
        num = Math.floor(num / 10);
    } while (num > 0);
    console.log(sum); // 16
}
