let aluno = "Samuca"; //Uma caixinha que está guardando um único valor

//Objeto {} é uma coleção de informações ou propriedades. Pode guardar diferentes tipos, como: number, string, boolean...

let eu = {
  nome: "Karynne",
  sobrenome: "Moreira",
  nascimento: `2000`, //string/texto
  anoNascimento: 2000, //number
};

//Adicionando uma propriedade
// eu = objeto , fruta = propriedade , goiaba= valor
eu.fruta = "goiaba";

//Adicionando uma propriedade
// eu = objeto , amigaozao = propriedade , Samuca = valor
eu.amigaozao = "Samuca";

//Deletando através do operador delete
//delete eu=objeto . nascimento=propriedade
delete eu.nascimento;
//console.log(eu)

//----Outro exemplo

let carro = {
  marca: "Fiat",
  modelo: "Uninho",
  peso: "50kg",
  pesoComEscada: "65kg",
  velocidadeComEscada: "1000km/h",
  cor: "branca",
  preco: 50000,
};

//console.log(typeof carro.preco) //saber qual é o tipo da propriedade

//console.log(carro.velocidadeComEscada)

delete carro.peso;

carro.passageiro = "Betinho Carlos";
//console.log(carro)

//EXEMPLO COM OBJETO DENTRO DE OBJETO
let mae = {
  nome: "Carol",
  idade: 30,
  nacionalidade: "brasileira",
  professora: true,
  filhas: { filha1: "Débora", filha2: "Dafne" },
};

//console.log(mae.filhas) //acesse o objeto mae e depois mostre o que tem no objeto filhas
//console.log(mae.filhas.filha1) //acesse o objeto mae, acesse o objeto filhas e mostre o que tem no filha1

delete mae.nacionalidade;
//console.log(mae)

//EXEMPLO COM OBJETO DENTRO DE OBJETO
let cores = {
  cor1: "amarelo",
  cor2: "azul",
  _cores: { _cor1: "vermelho", $cor2: "cinza" },
};

//console.log(cores._cores)

//Array []

let lanchinhoDaTarde = [
  "misto-quente", // 0
  "Cafézinho", // 1
  "Pão doce", // 2
  "Pão com ovo", // 3
  "Coquinha", // 4
  "Pão com mortadela", //5
  "suco de manga", //6
  "Suco de beterraba", //7
  "biscoito", //8
  "bolacha", //9
  "sonho", //10
  "bisnaga", //11
  //bolos = {bolo1: "Bolo de cenoura", bolo2:"Bolo de bolo"} //12
];

//console.log(lanchinhoDaTarde[7])

//Array de objetos, vai ficar para a próxima aula
//console.log(lanchinhoDaTarde[12].bolo2)

//adicionam
lanchinhoDaTarde.push("pão de queijo"); //adiciona no final
lanchinhoDaTarde.unshift("pizza"); //adiciona no começo

//removem
lanchinhoDaTarde.pop(); //remove o último item
lanchinhoDaTarde.shift(); //remove o primeiro item

//console.log(lanchinhoDaTarde);

//Lenght retorna o número de elementos que tem em um array
//console.log(lanchinhoDaTarde.length);

//--------------Método sort é chatinho, mas é legal

//Método sort() realiza comparações de strings com base na ordem de código unicode, o que pode refletir na ordem alfabética com idiomas sem acentuação.

console.log(lanchinhoDaTarde.sort((a, b) => a.localeCompare(b, "pt-BR")));

let numeros = [31, 3, 20, 22, 7, 10, 11, 1, 4];

console.log(
  numeros.sort((a, b) => {
    return a - b;
  })
);
