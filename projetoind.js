import readlineSync from "readline-sync";


const lista = [];
let   respostaDaLista = "";

const adicionarNaLista = (prop) => {
  lista.push(prop);
};

const ordenar = () => {
  lista.sort();
};

const Verificarlista = () => {
  //console.log(lista); //Lista como objeto array
  //console.log(lista.toString()); //Lista array de string
  lista.forEach((elemento)=> { console.log(elemento); }); //Lista por linha como string
};


while (true) {
  respostaDaLista = readlineSync.question("Digite a propriedade CSS ou 'SAIR' para exibir a listagem e encerrar: ");
 
  if (respostaDaLista.toLowerCase() == "sair") {
    ordenar();
    Verificarlista();
	  break;
  	
  }
  else if (respostaDaLista.toLowerCase() !== "sair" && respostaDaLista !=="") {
    adicionarNaLista(respostaDaLista);
  }
}
