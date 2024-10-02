
// Function tipo užrašymas:
function printSquare(n) {
    for (let a = 1; a <= n; a++) {
        console.log("*".repeat(a));
    }
}

printSquare(6);

// Function Arrow užrašymo būdas su simboliu =>
const printSq = (n) => {
    for (let a = 1; a <= n; a++) {
    console.log("*".repeat(a));
    }
}

printSq(5);


//string = string+(stulpelis * eilute +" ");
//string += stulpelis * eilute +" ";