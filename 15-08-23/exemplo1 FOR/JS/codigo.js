/* 
FOR ([inicializacao]; [condicao1]);[expressao final]) {
    declaração
}

    Tipos de variavéis
    VAR = Global
    LET = Local
    CONST = Constante
*
function exemplo1() {
    let valor = "";
    for (let i = 0; i <= 10; i++) {
        valor += i + "<br>"
        resposta.innerHTML = valor;
    }
}
/*  */


    let valor = "";
    let valor2 = parseInt(prompt("Digite o valor"));
    for (let i = 1; i <= 10; i++) {

        valor += i + "x" + valor2 + "=" + i * valor2 + "<br>"
        resposta2.innerHTML = valor;
    }
