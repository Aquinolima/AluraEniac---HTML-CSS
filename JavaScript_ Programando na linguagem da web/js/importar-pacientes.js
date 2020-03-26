var botaoImportar = document.querySelector("#buscar-paciente");

botaoImportar.addEventListener("click", function () {
    console.log("buscando pacientes.");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
   
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
       var pacientes = JSON.parse(resposta);
       
       pacientes.forEach(function(paciente) {
           importaPacienteNaTabela(paciente);
       });
        }else {
           alert(xhr.status + "\n" + xhr.responseText);
        }
    });
    xhr.send(); 
});