//Escopo Global
let amigoManeiro = "Samuca";

//Escopo Local
function amigoManeiro() {
  let amigo = "Silverio";
  console.log(amigo);
}
amigoManeiro();

//Case sensite: O uso de letras maiúsculas e minúsculas faz diferença, tem que ser exatamente do mesmo jeito.

let instrutor = "Samuel";
let Instrutor = "Silverio";
let INSTRUTOR = "Prata";

//console.log(instrutor)
//console.log(INSTRUTOR)

//Camel case: É uma escrita que lembra a corcunda de um camelo. A primeira palavra é minúscula, a primeira letra das palavras seguintes é maiúscula.

let sobreNome = "Santos";
let corFavoritaDaGabi = "Arco iris";
//console.log(corFavoritaDaGabi)

//Simbologias nas variáveis _ e $
let _cachorro = "Vira Lata";
let $cachorro = "Poodle";

//Redeclarando variáveis
let aluno1 = "Felipe";
let aluno2 = "Lais";
const aluno3 = "Yuri"; //Constante não pode ser redeclarada, é o valor único. Não pode ser mudado.

aluno1 = "Luciana";
aluno2 = "Cauê";
//aluno3 = "Raphael"

//console.log(aluno1)

//-----Tipos
const anoNascimento = 2004;
let _anoNascimento = 2004;

_anoNascimento = 2022;
//console.log(typeof _anoNascimento)

//--------type of = Saber o tipo
let idade = 23; //number
let fruta = "morango"; //string
let animal = "cachorro"; //string
let cidade = `Rio de Janeiro`; //string
let brasileiro = true; //boleano
let estrangeiro = false; //boleano

//console.log(typeof idade)
//console.log(typeof fruta)
//console.log(typeof brasileiro)

//Tipo string/textual são atribuidas com '' , "" ou ``

//TemplateString `${}`  É uma forma mais elegante, mais potente de uma string. Consigo armazenar dados de uma outra variável
let meuNome = "Karynne";
let _sobreNome = "Moreira";
let nomeCompleto = `Meu nome é ${meuNome} ${_sobreNome}, e tenho ${idade} eu gosto de ${fruta} e moro no ${cidade}`;

//console.log(typeof nomeCompleto)

//Exemplo 2 - TemplateString

let carro1 = "uninho";
let carro2 = "celtinha";

let carros = `Eu adoro carros antigos, tenho um ${carro1} e um ${carro2}`;

carro1 = "palinho";
carro2 = "astrinha";

carros = `Eu adoro carros antigos, tenho um ${carro1} e um ${carro2}`;

console.log(carros);

//Alguns tipos de erros e mensagens

let tipo = null; // Algo vazio, propositalmente. Não há valor no momento.

let _tipo = undefined; // Algo não está definido.

let $tipo = NaN; //Not a Number, algo que não é um número.
