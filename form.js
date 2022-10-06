var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
    var erros = validaPacientes(paciente);
console.log(erros);
if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}
