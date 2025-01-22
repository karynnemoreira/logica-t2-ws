//Método é um gatilho de um função que já tem uma funcionalidade embutida. Métodos de inclusão e exclusão de itens.

// MÉTODOS DE ARRAY
// Relembrando os 4 métodos de array

//push() Adiciona o item no final da array
//unshift() Adiciona o item no começo da array
//pop() Remove o último item da array
//shift() Remove o primeiro item da array

let cantoras = [
  "Beyoncé",
  "Alicia Keys",
  "Jennifer Lopez",
  "Shakira",
  "Madonna",
  "Avril Lavigne",
  "Mariah Carey",
  "Pink",
  "Britney",
  "Ariana Grande",
  "Lary Gaga",
];

//console.log(cantoras.length); //11 itens(quantidade)

cantoras.unshift("Taylor"); //Adiciona o item no começo da array
cantoras.push("Adele"); //Adiciona o item no final da array
cantoras.shift(); //Remove o primeiro item da array
cantoras.pop(); //Remove o último item da array

//console.log(cantoras);

//------SPLICE------
//O método splice() tem o poder de substituir, adicionar e remover.

//                    0         1      2        3
let instrutores = ["Karynne", "Joy", "João", "Samuca"];

//SUBSTITUIR - 1º É O ÍNDICE, O 2º É A QUANTIDADE, "VALOR"

//Ex1: Substituindo 1 elemento
instrutores.splice(1, 1, "Carol"); //No índice 1, substitua 1 elemento, por "Carol"
//console.log(instrutores)

//Ex2: Substituindo 2 elementos
instrutores.splice(2, 2, "Cris", "Dandara"); //O 1º é o índice, O 2º é a quantidade, "Valores" à partir do índice 2, substitua 2 elementos por: "Cris","Dandara"
//console.log(instrutores)

//----------------------------

//ATÉ O MOMENTO NOSSA ARRAY ESTÁ ASSIM:
// ['Karynne', 'Carol', 'Cris', 'Dandara']

//ADICIONAR - O 1º É O ÍNDICE, 0 ZERO QUER DIZER QUE NÃO QUERO REMOVER NENHUM, "VALOR"

instrutores.splice(2, 0, "Vini"); // No índice 2, não remova nada 0, e adicione "Vini"

instrutores.splice(3, 0, "João"); //No índice 3, não remova nada 0, e adicione "João"

instrutores.splice(4, 0, "Samuca", "Fernanda", "Marina"); //No índice 4, 0 não remova nada, e adicione "Samuca", "Fernanda", "Marina"
//['Karynne', 'Carol', 'Vini', 'João', 'Samuca', 'Fernanda', 'Marina', 'Cris', 'Dandara']

instrutores.splice(2, 0, "Kleber");
//console.log(instrutores)

//----------------------------
//REMOVER, 1º VALOR É O ÍNDICE, 2º VALOR É A QUANTIDADE

instrutores.splice(0, 1); //à partir do índice 0, apagou 1.  Nesse caso, está fazendo o mesmo trabalho o método shift()
//console.log(instrutores);

instrutores.splice(2, 2);
//['Carol', 'Kleber', 'Samuca', 'Fernanda', 'Marina', 'Cris', 'Dandara']
// à partir do índice 2, remova 2 elementos

//console.log(instrutores);

// instrutores.splice(0,9) //Joy vai saber disso. Diego apagou todos os instrutores.

//--------------------------

//SLICE, retorna uma cópia do array sem alterar o original. Começando pelo índice inicial (inclusivo) e indo até o índice final (exclusivo).

//console.log(instrutores.slice(0,1)) //No índice 0, retorna 1
//console.log(instrutores.slice(0,3)) //No índice 0, retorna 3

//Exemplo2 com slice()

//              0       1        2         3
let carros = ["uno", "palio", "siena", "doblo"];

console.log(carros.slice(1, 2)); //palio

//O índice inicial 1 é inclusivo, então ele pega o elemento.
//O índice final 2 é exclusivo, ou seja, ele para antes de incluir o elemento.

console.log(carros.slice(1, 3)); //palio, siena
