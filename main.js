import { getEstoque, transacaoNoEstoque, limpaEstoque } from "./estoque.js";

const olJoao = document.querySelector("#joao");
const olMaria = document.querySelector("#maria");


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('buttonLimparLista').addEventListener('click', () => {
        limpaEstoque();
        atualizaTela();
    });
});

