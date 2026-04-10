function convertir() {
            let input = document.getElementById("celsiusInput").value;
            let celsius = parseFloat(input);

            if (isNaN(celsius)) {
                alert("Error: Debes ingresar un numero valido");
                return;
            }
            
            let fahrenheit = (celsius * 9/5) + 32;
            let kelvin = celsius + 273.15;

            fahrenheit = fahrenheit.toFixed(2);

            console.log("Grados Celsius:", celsius);
            console.log("Grados Fahrenheit:", fahrenheit);
            console.log("Grados Kelvin:", kelvin);

           document.getElementById("resultados").innerHTML = `
           Resultados para ${celsius}°C:<br>
           Grados Fahrenheit: ${fahrenheit}<br>
           Grados Kelvin: ${kelvin}
           `;
        }