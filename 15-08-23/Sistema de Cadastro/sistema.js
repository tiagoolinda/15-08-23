/* Criando a função Menu */

function menu() {

    opcao = parseInt(prompt(
        "-------<Menu Principal---------\n\n" +
        "1 - Cadastro de Cliente \n" +
        "2 - Cadastro de Colaborador \n" +
        "3 - Cadastro de Produto \n" +
        "4 - Sair do sistema \n"
    ));

    switch (opcao) {
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

while (x.toUpperCase() != "S") {
    id = parseInt(prompt("Digite o id do Cliente"));
    nome = prompt("Digite o nome do Cliente");
    endereco = prompt("Digite o endereço do Cliente");
    relatorio = relatorio + "<br>+-----------------------------------------------------------+<br><br>"+
    "ID : " + id + "<br>" +
    "NOME : " + nome + "<br>"+
    "ENDERECO : " + endereco + "<br>+-----------------------------------------------------------+<br><br>"

    confirme = prompt("Finalizar Cadastro - S para sim ou N - Não?");
    if (confirme.toUpperCase() == "S") {
        x = "S";
    };

    document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";
}

}

/* Função cadastrar colaborador */

function cadastrar_colaborador() {
    let x = "n";
    relatorio = "*- Relatório de Colaborador -* <br> ";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o cracha do colaborador"));
        nome = prompt("Digite o nome do Colaborador");
        funcao = prompt("Digite a função do Colaborador");
        relatorio = relatorio + "<br>+-----------------------------------------------------------+<br><br>"+
        "ID : " + id + "<br>" +
        "NOME : " + nome + "<br>"+
        "FUNCAO : " + funcao + "<br>+-----------------------------------------------------------+<br><br>"
    
        confirme = prompt("Finalizar Cadastro - S para sim ou N - Não?");
        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
    
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";
    }
}

/* Função cadastrar produto */

function cadastrar_produto() {
    let x = "n";
    relatorio = "*- Relatório de Produto -* <br> ";

    while (x.toUpperCase() != "S") {
        id = parseInt(prompt("Digite o codigo do produto"));
        nome = prompt("Digite o nome do Produto");
        marca = prompt("Digite a marca do produto");
        localizacao = prompt("Digite a localização do produto");

        relatorio = relatorio + "<br>+-----------------------------------------------------------+<br><br>"+
        "ID : " + id + "<br>" +
        "NOME : " + nome + "<br>"+
        "MARCA : " + marca + "<br>"+
        "LOCALIZAÇÃO : " + localizacao + "<br>+-----------------------------------------------------------+<br><br>"
    
        confirme = prompt("Finalizar Cadastro - S para sim ou N - Não?");
        if (confirme.toUpperCase() == "S") {
            x = "S";
        };
    
        document.getElementById("relatorio").innerHTML = "<p>" + relatorio + "<p>";
    }
}