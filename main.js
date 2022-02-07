function validaForm() {
    const volumeLitrosTanque = document.getElementById("volumeLitrosTanque").value;  
    const kmTanqueGasolina = document.getElementById("kmTanqueGasolina").value;
    const kmTanqueAlcool = document.getElementById("kmTanqueAlcool").value;
    const resultado = document.getElementById("resultado");

    if(volumeLitrosTanque == "" || kmTanqueGasolina == "" || kmTanqueAlcool == "") {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
    } else {
        exibeResultado();
    }
}


function retornaVolumeLitrosTanque() {
    return volumeLitrosTanque = document.getElementById("volumeLitrosTanque").value;
}

function calculaConsumoGasolina() { 
    const kmTanqueGasolina = document.getElementById("kmTanqueGasolina").value;
    return consumoGasolina = (kmTanqueGasolina / retornaVolumeLitrosTanque()).toFixed(2);    
}

function calculaConsumoAlcool() {
    const kmTanqueAlcool = document.getElementById("kmTanqueAlcool").value;
    return consumoAlcool = (kmTanqueAlcool / retornaVolumeLitrosTanque()).toFixed(2);
}

function exibeResultado() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Resultado: <br>Gasolina: " + calculaConsumoGasolina() + " km/litro <br>Álcool: " + calculaConsumoAlcool()+ " km/litro";
}