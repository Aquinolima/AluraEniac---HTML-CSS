var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;

        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3.0){
        return true;
    }else {
        return false;
    }
}


function calculaImc(peso,altura) {
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}