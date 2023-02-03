import readlineSync from 'readline-sync';
import chalk from 'chalk';

const listaDoCss = [];
let respostaDaLista = ""; 

const empilharNaLista = (element) => {
    listaDoCss.push(element)
};

const organizarLista = () => {
    listaDoCss.sort();
}

const verificarLista = () => {
    listaDoCss.forEach((elen) => { console.log(chalk.green(elen)) });
}


console.log(chalk.bgGreenBright("App Iniciada!"));

while (true) {
    respostaDaLista = readlineSync.question(chalk.yellow("Digite a propriedade CSS que vai adicionar na lista e use 'sair' para finalizar o processo!"));

    if (respostaDaLista.toLowerCase() == "sair") {
        arrumarLista()
        verificarLista()
        console.log(chalk.yellow("Esta é a lista!"))
        break;

    }
    else if (respostaDaLista.toLocaleLowerCase() !== "sair" && respostaDaLista !== "") {
        empilharNaLista(respostaDaLista);
    }

}

console.log(chalk.bgGreenBright("App finalizada!"));