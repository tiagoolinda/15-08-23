/* Criando a função Menu */

function menu() {

    opcao = parseInt(prompt(
        "-------<Menu Principal---------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do sistema \n"
    ));

    switch (opca0) {
        case 1:
            cadastrar_cliente();
            break

        case 2:
            cadastrar_colaborador();
            break

        case 3:
            cadastrar_produto();
            break

        default:
            alert("finalizando o Sistema de Cadastro");
            document.getElementById("relatorio").innerHTML = "<p>Obrigado!!!</p>"
    };
}

/* Função cadastrar cliente */
function cadastrar_cliente() {
    let x = "n";
    relatorio = "*- Relatório de Cliente -* <br> ";
}
while (x.toupperCase() != "S") {
    id = parseInt(prompt("Digite o id do Cliente"));
    nome = parseInt(prompt("Digite o nome do Cliente"));
    endereco = parseInt(prompt("Digite o endereço do Cliente"));
    relatorio = relatorioa + "<br>+-----------------------------------------------------------+<br><br>"
    "ID : " + id + "<br>" +
    "NOME : " + nome + "<br>"
    "ENDERECO : " + endereco + "<br>+-----------------------------------------------------------+<br><br>"

    confirme = prompt("Finalizar Cadastro - S para sim ou N - Não?");
    if (conforme.toupperCase() == "S") {
        x = "S";
    };

    document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";

}