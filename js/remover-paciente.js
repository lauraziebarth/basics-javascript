var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dbclick", function(event){
    event.target.parentNode.remove();
});