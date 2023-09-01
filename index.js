//exercicio 1 de interpretação de código

//a. O codigo prgunta um número para o usuario, se é par ou não.

//b. Ele imprime "Passou no teste" para números pares.

//c. Ele imprime "Não passou no teste " para números impares.

//exercicio 2 de interpretação de código

//a. O código serve pra informar o preço em reais da fruta que o usuário digitou.

//b. A mensagem será "O preço da fruta Maçã é R$ 2.25".

//c. A mensagem será "O preço da fruta Pêra é R$ 5",esse é o valor do default porque foi tirado o break do case "Pêra".


//exercicio 3 interpretação de código

//a. A primeira linha esta pedindo que o usuário digite um número,considerando ele um número.

//b. Com o número 10 vai aparecer a frase "Esse passou no teste", mas o segundo console.log não esta definido. Se for -10 vai aparecer um erro.

//c. o erro acontece pois let mensagem é um escopo global e precisa ficar fora do bloco if para ser executada.

/*exercicio 1 de escrita de código
a.b.c

const idade = Number(prompt("Qual sua idade? "))

if(idade >= 18) {
  console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

*/

/*exercicio 2 escrita de código

const pergunta = prompt("Em que turno vc estuda? M se for (matutino), V se for (vespertino) ou N se for (noturno) ").toUpperCase()

if(pergunta === "M") {
console.log("Bom Dia!")
} else if (pergunta === "V") {
    console.log("Boa Tarde!")
} else if (pergunta === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Por favor responda somente M, V, ou N")
}
*/

/*exercicio 3 escrita de código

const pergunta = prompt("Em que turno vc estuda? M se for (matutino), V se for (vespertino) ou N se for (noturno) ").toUpperCase()
    switch (pergunta) {
        case "M":
        console.log("Bom Dia!")
        break
        case "V":
        console.log("Boa Tarde!")
        break
        case "N":
        console.log("Boa Noite!")
        break
        default:
        console.log("Por favor responda somente M, V, ou N")
        break

    }
*/

/*exercicio 4 escrita de código

   const resposta = (generoFilme, valorIngresso) => {
        if (generoFilme === "fantasia" && valorIngresso < 15) {
            console.log("Bom filme!")
        } else {
            console.log("Escolha outro filme:(")
        }
    }
    const generoFilme = prompt("Qual o gênero do filme? ").toLocaleLowerCase()
    const valorIngresso = Number(prompt("Qual o valor do ingresso?"))
   resposta(generoFilme, valorIngresso)
*/
   
