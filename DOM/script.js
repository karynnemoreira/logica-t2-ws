//querySelector("seletor/tag") Retorna apenas o primeiro elemento que corresponde ao seletor/tag.

//getElementById("id") Retorna um único elemento

//getElementByClassName("class") Retorna uma coleção de elementos

//Utilizando o h1 para mudar o seu conteúdo
document.querySelector("h1").textContent = "A chuva tá chegando";
document.querySelector("h1").style.color = "violet";

//ID, Seleciona um único elemento pela a id

let titulo = document.getElementById("titulo");
titulo.style.color = "red"; //Muda a cor do texto para vermelho
titulo.style.fontSize = "45px"; //Muda o tamanho da letra
titulo.textContent = "Amanhã é dia de softSkills"; //Mudando o conteudo do texto

//Class, Seleciona vários elementos

let mensagem = document.getElementsByClassName("mensagem");
mensagem[0].style.color = "orange";
mensagem[1].style.color = "green";
mensagem[1].style.fontWeight = "bold";
mensagem[1].style.fontSize = "30px";

//Ex: 2
let teste = document.getElementsByClassName("teste");
teste[1].textContent = "Eu sou a braba";
