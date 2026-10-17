// ============================================================
// PART I-d: NESTED FOR LOOP (patterns)
// ============================================================

// Q1
{
    let num = 1;

    for (let i = 1; i <= 4; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += num + " ";
            num++;
        }
        console.log(line.trim());
    }
}

{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 0; j < i; j++) {
            line += String.fromCharCode(65 + j) + " ";
        }
        console.log(line.trim());
    }
}

{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === 5) {
                line += "* ";
            } else {
                line += "  ";
            }
        }
        console.log(line.trimEnd());
    }
}

{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}

{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }
        console.log(line.trim());
    }
}

{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }
        console.log(line.trim());
    }
}

{
    let num = 15;

    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            line += String(num).padStart(2, " ") + " ";
            num--;
        }
        console.log(line.trimEnd());
    }
}

{
    for (let i = 5; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= i; j++) {
            if (i === 5 || j === 1 || j === i) {
                line += "* ";
            } else {
                line += "  ";
            }
        }
        console.log(line.trimEnd());
    }
}

{
    for (let i = 1; i <= 5; i++) {
        let line = "";

        for (let j = 1; j <= 5; j++) {
            if (i === j) line += "  ";
            else line += "* ";
        }
        console.log(line);
    }
}

{
    for (let i = 1; i <= 5; i++) {
        console.log("Table of", i);

        for (let j = 1; j <= 10; j++) {
            let product = i * j;

            if (product % 2 === 0) {
                console.log(i + " x " + j + " = " + product);
            }
        }
    }
}

{
    let n = 5;

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = 0; j < n; j++) {
            line += Math.abs(i - j) + " ";
        }
        console.log(line.trim());
    }
}

{
    for (let i = 1; i < 10; i++) {
        for (let j = i + 1; j <= 10; j++) {
            let sum = i + j;

            if (Number.isInteger(Math.sqrt(sum))) {
                console.log("(" + i + ", " + j + ")");
            }
        }
    }
}

{
    let n = 5;

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let s = 1; s <= n - i; s++) line += " ";
        for (let j = 1; j <= i; j++) line += j;
        for (let j = i - 1; j >= 1; j--) line += j;

        console.log(line);
    }

    for (let i = n - 1; i >= 1; i--) {
        let line = "";

        for (let s = 1; s <= n - i; s++) line += " ";
        for (let j = 1; j <= i; j++) line += j;
        for (let j = i - 1; j >= 1; j--) line += j;

        console.log(line);
    }
}

{
    let n = 6;
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];

        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }

    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    let value = 1;

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = value++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = value++;
        }
        right--;

        for (let j = right; j >= left; j--) {
            matrix[bottom][j] = value++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = value++;
        }
        left++;
    }

    for (let i = 0; i < n; i++) {
        let line = "";

        for (let j = 0; j < n; j++) {
            line += String(matrix[i][j]).padStart(2, " ") + " ";
        }
        console.log(line);
    }
}

{
    for (let i = 0; i < 8; i++) {
        let line = "";

        for (let s = 0; s < 7 - i; s++) {
            line += " ";
        }

        for (let j = 0; j <= i; j++) {
            let coefficient = 1;

            for (let k = 1; k <= j; k++) {
                coefficient = coefficient * (i - k + 1) / k;
            }

            line += coefficient + " ";
        }
        console.log(line);
    }
}

{
    let rows = 5;
    let cols = 6;

    for (let i = 0; i < rows; i++) {
        let line = "";

        for (let j = 0; j < cols; j++) {
            let value;

            if ((i + j) % 3 === 0) {
                value = 2;
            } else if (
                i === 0 || i === rows - 1 ||
                j === 0 || j === cols - 1
            ) {
                value = 1;
            } else {
                value = 0;
            }

            line += value + " ";
        }
        console.log(line.trim());
    }
}
