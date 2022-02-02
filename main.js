// Add condicional para só chamar a função se os inputs estiverem preenchidos


function calcularConsumo() {

    const volumeLitrosTanque = document.getElementById("volumeLitrosTanque").value;
    const kmTanqueGasolina = document.getElementById("kmTanqueGasolina").value;
    const kmTanqueAlcool = document.getElementById("kmTanqueAlcool").value;
    const resultado = document.getElementById("resultado");

    const consumoGasolina = kmTanqueGasolina / volumeLitrosTanque;
    const consumoAlcool = kmTanqueAlcool /volumeLitrosTanque;


    resultado.innerHTML = "Resultado: <br>Gasolina: " + consumoGasolina + " km/litro <br>Álcool: " + consumoAlcool + " km/litro";
}