function printSquare(n) {
    for (let eilute = 1; eilute <= n; eilute++) {
        let string = "";

        for (let stulpelis = 1; stulpelis <= n; stulpelis++) {
            string += stulpelis * eilute +" | ";
        }
        console.log(string)
    }

}
printSquare(6);