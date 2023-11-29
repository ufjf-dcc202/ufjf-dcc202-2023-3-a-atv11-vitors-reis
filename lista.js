const lista = ["Um","Dois","Três"];

function getLista() {
    return lista;
}

export function limparLista(){
    lista.splice(0,3);
}

export{getLista};
