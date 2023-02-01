const readlineSync = require("readline-sync");

const lista = [];
let   resp = "";

const adicionarNaLista = (prop) => {
  lista.push(prop);
};

const ordenar = () => {
  lista.sort();
};

const listar = () => {
  //console.log(lista); //Lista como objeto array
  //console.log(lista.toString()); //Lista array de string
  lista.forEach((elemento)=> { console.log(elemento); }); //Lista por linha como string
};


while (true) {
  resp = readlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");
 
  if (resp.toLowerCase() == "sair") {
    ordenar();
    listar();
	  break;
  	
  } else if (resp.toLowerCase() !== "sair" && resp !=="") {
    adicionarNaLista(resp);
  }
}
