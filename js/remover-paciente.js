var pacientes = documento.querySelectorAll(".paciente");

pacientes.forEach(function(){
    paciente.addEventListener("dbclick", function(){
        this.remove();
    });
});