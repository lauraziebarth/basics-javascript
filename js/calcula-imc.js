var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaEhValida = validaAltura(altura) 
var pesoEhValido = validaPeso(peso);

if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdPeso.textContent = "Peso inválido!";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
}

if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdAltura.textContent = "Altura inválida!";
    alturaEhValida = false;
    paciente.classList.add("paciente-invalido");
}

if (alturaEhValida && pesoEhValido) {
    var imc = calculaIMC(peso,altura);
    tdImc.textContent = imc;    
} else {
    tdImc.textContent = "Altura e/ou peso inválidos!"
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaIMC(peso,altura){
    var imc = 0
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}