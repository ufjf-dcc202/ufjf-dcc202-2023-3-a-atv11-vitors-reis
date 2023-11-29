import {getLista, limparLista} from "./lista.js";

const pEntrada = document.querySelector('#entrada');
const olSaida = document.querySelector('#saida')
const btnAdicionar = document.querySelector('#adicionar');
const btnLimpar = document.querySelector('#limpar');

btnLimpar.addEventListener('click', limparElementosDaLista);

olSaida.innerHTML = "";

atualizarItensDeLista();
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
