
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

    // adiciona as Td dentro da Tr ex: <tr><td></td></tr>
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();  // apaga o formulário após apertar o botão para inserir

});