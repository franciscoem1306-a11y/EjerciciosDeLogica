function analizarNumeros(){

    let num1 = parseFloat(prompt("Ingresa el pimer numero:"));
    let num2 = parseFloat(prompt("Ingresa el segundo numero:"));
    let num3 = parseFloat(prompt("Ingresa el tercer numero:"));

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Error: debes de ingresar solo números válidos");
    return;
    }

    if (num1 === num2 && num2 === num3) {
        console.log("Los tres numeros son iguales:", num1, num2, num3);
        return;
    }

    let numeros = [num1, num2, num3];

    let menorMayor = [...numeros].sort((a, b) => a - b);

    let mayorMenor = [...numeros].sort((a, b) => b - a);

    console.log("De mayor a menor:", mayorMenor.join(","));
    console.log("De menor a mayor", menorMayor.join(","));
    }