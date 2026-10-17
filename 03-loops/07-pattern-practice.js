// ============================================================
// PATTERN PRACTICE (1 - 12)
// ============================================================


// 1. Right-triangle number pattern
{
    let val1 = 1;
    for (let i = 1; i <= 4; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += val1 + " ";
            val1++;
        }
        console.log(row.trim());
    }
}

// 2. Right-triangle alphabet pattern
{
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += String.fromCharCode(65 + j) + " ";
        }
        console.log(row.trim());
    }
}

// 3. Hollow right-triangle star pattern
{
    let n3 = 5;
    for (let i = 1; i <= n3; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === n3) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row.trimEnd());
    }
}

// 4. Reverse right-angle star pattern
{
    for (let i = 5; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

// 5. Reverse right-angle pattern with repeated row number
{
    for (let i = 5; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row.trim());
    }
}

// 6. Reverse right-angle number pattern
{
    for (let i = 5; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row.trim());
    }
}

// 7. Reverse right-angle pattern with descending numbers (15 down to 1)
{
    let val7 = 15;
    for (let i = 5; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += val7 + " ";
            val7--;
        }
        console.log(row.trim());
    }
}

// 8. Hollow reverse right-angle star pattern
{
    let n = 5;
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === n) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row.trimEnd());
    }
}

// 9. Square of stars with the diagonal left empty
{
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 1; j <= 5; j++) {
            if (i === j) {
                row += "  ";
            } else {
                row += "* ";
            }
        }
        console.log(row.trimEnd());
    }
}

// 10. Tables 1 to 5: print only even products
{
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            let prod = i * j;
            if (prod % 2 === 0) {
                console.log(i + " * " + j + " = " + prod);
            }
        }
        console.log("");
    }
}

// 11. Absolute difference matrix (|i - j|)
{
    let n = 4;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += Math.abs(i - j) + " ";
        }
        console.log(row.trim());
    }
}

// 12. Pairs (i, j) from 1..10 whose sum is a perfect square
{
    for (let i = 1; i <= 10; i++) {
        for (let j = i + 1; j <= 10; j++) {
            let sum = i + j;
            let sqrt = Math.sqrt(sum);
            if (sqrt === Math.floor(sqrt)) {
                console.log("(" + i + ", " + j + ")");
            }
        }
    }
}
