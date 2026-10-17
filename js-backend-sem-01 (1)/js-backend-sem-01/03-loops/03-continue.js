// ============================================================
// PART I-b: CONTINUE INSIDE FOR LOOP
// ============================================================

// Q1
{
    for (let i = 1; i <= 30; i++) {
        if (i % 4 === 0) continue;
        console.log(i);
    }
}

{
    let arr = [10, -5, 20, -3, 7, -8];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) continue;
        sum += arr[i];
    }
    console.log(sum);
}

{
    let str = "Hello World";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") continue;
        console.log(str[i]);
    }
}

{
    for (let i = 1; i <= 12; i++) {
        let product = 6 * i;

        if (product % 5 === 0) continue;
        console.log("6 x", i, "=", product);
    }
}

{
    let ages = [12, 18, 25, 15, 30, 17, 22];

    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < 18) continue;
        console.log(ages[i]);
    }
}
