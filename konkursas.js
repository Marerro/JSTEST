function skaiciuotiMarskinelius(a, b) {
    let laimetojuSkaicius = 0;

    for(let skaicius = a; skaicius <= b; skaicius++) {
        if (skaicius % 6 === 0) {
            laimetojuSkaicius++;
        }
    }
    return laimetojuSkaicius;
}

let a = parseInt(prompt("Įveskite intervalo pradžią (a)"));
let b = parseInt(prompt("Įveskite intervalo pabaigą (b)"));
let marskineliuSkaicius = skaiciuotiMarskinelius (a, b); 
document.getElementById('resultatas').textContent = marskineliuSkaicius + " marškinėliai";

