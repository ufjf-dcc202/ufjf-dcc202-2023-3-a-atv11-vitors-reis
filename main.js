import {getLista, limparLista} from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#itens');
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);
btnAdicionar.addEventListener('click',criarElementoNaLista);

atualizarItensDeLista();

function criarElementoNaLista(){
    const texto = pEntrada.textContent;
    adicionarNaLista(texto);
    atualizarItensDeLista();
    pEntrada.textContent="";
    pEntrada.focus();
}

function limparElementosDaLista(){
limparLista();
atualizarItensDeLista();
}

function atualizarItensDeLista() {
    const lista = getLista();
    for(let i = 0;i <lista.lenght;i++) {
        const item = lista[i];
        const li = document.createElement('li');
        li.textContent = item;
        olSaida.appendChild(li);
    }
}
