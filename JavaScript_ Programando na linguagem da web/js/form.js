
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //previne o comportamento padrão do botão que é de recarregar a pág

    var form = document.querySelector("#form-adiciona");

    // Extraindo informações do paciente do form
    var paciente = pacienteDoForm(form);

    function pacienteDoForm(form) {
        var paciente = {
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value)
        }
        return paciente;
    }

    // cria a tr e a td do paciente
    var pacienteTr = montaTr(paciente);
    pacienteTr.classList.add("paciente");

    function montaTr(paciente) {
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
        return pacienteTr;
    }

    function montaTd(dado, classe) {
        var pacienteTd = document.createElement("td");
        pacienteTd.textContent = dado;
        pacienteTd.classList.add(classe)
        return pacienteTd;
    }

    // Validação de paciente adicionado 
    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        mensagensErros(erros);
        return;
    }

    function mensagensErros(erros) {
        var ul = document.querySelector("#mensagens-erro");

        ul.innerHTML = "";

        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li); 
        });
    }

    function validaPaciente(paciente) {

        var erros = [];

        if(paciente.nome.length == 0){
            erros.push("Preencha o campo nome!");
        }

        if (!validaPeso(paciente.peso)) {
            erros.push("Peso inválido!");
        }

        if(paciente.peso.length == 0){
            erros.push("Preencha o campo peso!");
        }

        if (!validaAltura(paciente.altura)) {
            erros.push("Altura inválida!");
        }

        if(paciente.altura.length == 0){
            erros.push("Preencha o campo altura!");
        }

        if(paciente.gordura.length == 0){
            erros.push("Preencha o campo % de gordura!");
        }

        return erros;
    }

    // adiciona as Td dentro da Tr ex: <tr><td></td></tr>
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    // adicionando o paciente na tabela


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    form.reset();  // apaga o formulário após apertar o botão para inserir

});