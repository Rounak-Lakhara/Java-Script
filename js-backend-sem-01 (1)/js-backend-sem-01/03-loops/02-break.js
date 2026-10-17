// ============================================================
// PART I-a: BREAK INSIDE FOR LOOP
// ============================================================

// Q1
{
    let arr = [2, 4, 7, 9, 7];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 7) {
            console.log("Index:", i);
            break;
        }
    }
}

{
    let correctPassword = "abc123";
    let access = false;
    // Node.js me prompt() nahi hota, isliye inputs yahan simulate kiye hain.
    // Browser me: let password = enteredPasswords[i - 1];
    const enteredPasswords = ["pass1", "hello", "abc123"];

    for (let i = 1; i <= 5; i++) {
        let password = enteredPasswords[i - 1];

        if (password === correctPassword) {
            console.log("Access granted");
            access = true;
            break;
        }
    }

    if (!access) console.log("Account locked");
}

{
    let sum = 0;

    for (let i = 1; ; i++) {
        sum += i;

        if (sum > 100) {
            console.log("Last number added:", i);
            break;
        }
    }
}

{
    let names = ["Amit", "Rahul", "Sahil", "Sneha"];

    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toLowerCase() === "s") {
            console.log(names[i]);
            break;
        }
    }
}

{
    for (let i = 1; i <= 50; i++) {
        if (Number.isInteger(Math.sqrt(i)) && i > 20) {
            break;
        }
        console.log(i);
    }
}
