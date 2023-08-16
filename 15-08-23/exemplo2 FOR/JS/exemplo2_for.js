/* 
FOR ([inicializacao]; [condicao1]);[expressao final]) {
    declaração
} 


let valor = "";
for (let i = 1; i <= 20; i++) {
    valor += "valor de i : " + i + "<br>";
    if(i==11){
        resposta.innerHTML = valor + "chegou no 11";

        /* O BREAK sai fora do laço */

        /*  

        break;

    }
    resposta.innerHTML = valor;
}
*/


let numero = 10;
let x = "";
while (numero<100){
    /* ira mostrando o valor acrescentando 1 */
    /* até que alcance o total de 100 */

    x  +="valor : " + numero + "<br>";
    numero++
}
resposta.innerHTML = x;

