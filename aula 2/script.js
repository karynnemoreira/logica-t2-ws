//Operadores Aritméticos
let numero = 5;

// console.log(numero + numero)
// console.log(numero - numero)
// console.log(numero * numero)
// console.log(numero / numero)
// console.log(numero % numero)

//Operadores de comparação
let variavel1 = 2; // number
let variavel2 = "2"; //string, texto

//console.log(variavel1, variavel2);
//              2
//console.log(variavel1 == 2); //true (verdade) pois o valor que está sendo guardado na variavel1 é o mesmo que 2

//console.log(variavel1 === variavel2); //false, pois são tipos diferentes, apesar de ter o mesmo valor. 2 é diferente de "2" um é number e o outro é string.

//              2
//console.log(variavel2 != 2); //false, pq eles são iguais e não diferentes. 2 é igual a 2

//              "2"
//console.log(variavel2 !== 2); //true, pq é verdade que eles são diferentes.

let variavel3 = 7; //number
let variavel4 = 2; //number

//              7           2
//console.log(variavel3 > variavel4)// True, pq é verdade que 7 é MAIOR que 2

//              7           2
//console.log(variavel3 < variavel4)//False, pq 7 é maior que 2

//               7           2
//console.log(variavel3 >= variavel4)//True, pq 7 é maior que 2

//              2            7
//console.log(variavel4 <= variavel3 )

//              2             2
//console.log(variavel1 < variavel4) //false, pq 2 é igual a 2 e não menor que 2

//console.log(variavel1 <= variavel4)//true, pq 2 não é menor que 2, porém, 2 é igual a 2.

//Condicionais

//sintaxe

// if(condição){
//     console.log("retorno")
// }

let idade = 18;

//SE idade for maior ou igual a 18, retorna pra mim "Você é maior de idade"
if (idade >= 18) {
  //console.log("Você é maior de idade")
}

let samuel = 16;
let felipe = 17;

// SE samuel for maior ou igual a 18 OU felipe for maior ou igual a 18
if (samuel >= 18 || felipe >= 18) {
  console.log("Vocês estão liberados para tomar um guaravita");
} else {
  // console.log("Vaza do meu restaurante")
}

//-----Else If , nos dá mais opções de respostas

let numeroDaSorte = 3;

if (numeroDaSorte === 7) {
  console.log("Você ganhou uma pizza");
} else if (numeroDaSorte === 9) {
  console.log("Você ganhou ingresso para ver lagoa azul");
} else if (numeroDaSorte === 2) {
  console.log("Você ganhou um guaravita");
} else {
  console.log("A banca sempre ganha");
}

//Exemplo2 - else if

let animal = "leão";

if (animal === "girafa") {
  console.log("Você ganhou 10 moedas vnw");
} else if (animal === "leão") {
  console.log("Você ganhou 8 moedas vnw");
} else if (animal === "macaco") {
  console.log("Você ganhou 5 moedas vnw");
} else {
  console.log("Você não ganhou nenhuma moeda vnw");
}



