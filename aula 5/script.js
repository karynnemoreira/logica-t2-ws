//Estrutura básica de uma função tradicional

//function: Palavra chave usada para criar uma função

//nomeDaFuncao: Esse nome é o nome da função. Geralmente, escolhemos um nome que descreva o que a função faz, como: mostrarMensagem, calcularSoma, mostrarDesenho

// Parênteses () Parâmetros, é onde reservamos um espaço para receber um valor futuro.

//Chaves {} Dentro das chaves fica o código que a função vai executar

function nomeDaFuncao() {
  //  console.log("Olá");
}
nomeDaFuncao(); //Ativando a função

//Exemplos com a sintaxe básica

//----
function mensagem() {
  //console.log("Segundou com a Carol querendo invadir o ciclo Be Digital");
}

mensagem();

//----
function batata() {
  // console.log("Batata frita é muito bom");
}

batata();

//----- Função utilizando parâmetros e argumentos ---

//No exemplo, reservamos o parâmetro para receber o valor (fruta), porém, ainda não sabemos qual fruta vai ser recebida. Damos o valor dentro do parâmetro de ativar função (argumento)

function mostrarFruta(fruta) {
  // console.log(fruta);
}
mostrarFruta("morango");

//---

function mostrarAnimais(animal1, animal2, animal3) {
  //console.log(animal1, animal2, animal3);
  //console.log(animal2)
}

mostrarAnimais("gato", "cachorro", "zebra");

//-- Utilizando operadores matemáticos

function soma(num1, num2) {
  // console.log(num1 + num2);
}

soma(3, 4);

//--

function subtracao(num1, num2) {
  //console.log(num1 - num2);
}
subtracao(5, 6);

//---

function multiplicacao(num1, num2) {
  //console.log(num1 * num2);
}
multiplicacao(5, 6);

//---
function divisao(num1, num2) {
  //console.log(num1 / num2);
}
divisao(5, 6);

//Função anônima, é uma função que não tem nome, ou seja, você cria uma função, mas não dá um nome pra ela.

//Ex 1

//function (a,b) é a função anônima. Atribuimos ela a uma variável chamada somar. É como se fosse uma função sem identidade.

const somar = function (a, b) {
  return a + b;
};

//console.log(somar(2,3))

//Ex2

//Variável const, nome da variável, recebe uma função sem nome (guarda o valor1 , valor2){retorno, o que eu quero que faça}
const comprarIngresso = function (nome, idade) {
  //console.log(nome, idade)
};

comprarIngresso("Mariah", 22);

//Ex3

const mostrarNome = function (espacoReservado1, espacoReservado2) {
  //console.log(espacoReservado1,espacoReservado2)
};

mostrarNome("Rebeca", "Laís");

//Ex4

const informacoes = function (nome, idade, cidade) {
  //console.log(nome, idade, cidade)
};

informacoes("Lua", "8 anos", "Rio de Janeiro");

//--Arrow function ()=>{}

//Ex1, mais compacto e simples sem a necessidade de utilizar return ou chaves {}
const somaArrowFunction = (a, b) => a + b;
console.log(somaArrowFunction(10, 2));

//Ex2, um pouquinho mais comprida utilizando o return{}
const diminuirArrowFunction = (a, b) => {
  return a - b;
};
console.log(diminuirArrowFunction(10, 2));

//Declarando uma arrowFunction dentro de uma outra função

function funcaoPai() {
  const filho = () => {
    console.log("Oi, eu sou a arrow function, sou complicado, mas sou legal.");
  };

  filho();
}

funcaoPai();

//Ex 2

function mensagem() {
  console.log("Segundou com a Carol querendo invadir o ciclo Be Digital");

  const taLiberado = () => console.log("Eu te empresto meus filhos, Carol <3 ");
  taLiberado();
}

mensagem();
