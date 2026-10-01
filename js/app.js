import { templates } from "./templates.js";
import { inicializarValidacao } from "./validacao.js";

// ==================== ROTEAMENTO DA SPA ====================

const conteudo = document.getElementById("conteudo");

// Guarda a página inicial original
const templateInicio = conteudo.innerHTML;


// Função responsável por carregar as páginas
function carregarPagina(rota, atualizarHistorico = true) {

    // Página inicial
    if (rota === "inicio") {
        conteudo.innerHTML = templateInicio;
    }

    // Quem Somos
    else if (rota === "sobre") {
        conteudo.innerHTML = templates.sobre;
    }

    // Campanhas de Doação
    else if (rota === "doacoes") {
        conteudo.innerHTML = templates.doacoes;
    }

    // Voluntariado
    else if (rota === "voluntariado") {
        conteudo.innerHTML = templates.voluntariado;
    }

    // Contato
    else if (rota === "contato") {
        conteudo.innerHTML = templates.contato;
    }

    // Cadastro
    else if (rota === "cadastro") {
        conteudo.innerHTML = templates.cadastro;
        inicializarValidacao();
    }

    // Se a rota não existir, encerra a função
    else {
        return;
    }

    // Atualiza o histórico do navegador
    if (atualizarHistorico) {
        history.pushState(
            { rota: rota },
            "",
            "#" + rota
        );
    }

    // Volta para o início da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==================== HISTÓRICO DO NAVEGADOR ====================

window.addEventListener("popstate", function(event) {

    const rota =
        event.state?.rota ||
        window.location.hash.replace("#", "") ||
        "inicio";

    carregarPagina(rota, false);

});

// ==================== CARREGAMENTO INICIAL DA ROTA ====================

window.addEventListener("DOMContentLoaded", function() {

    const rotaInicial =
        window.location.hash.replace("#", "") || "inicio";

    carregarPagina(rotaInicial, false);

});

// Captura os cliques nos links que possuem data-rota
document.addEventListener("click", function(event) {

    const link = event.target.closest("[data-rota]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const rota = link.dataset.rota;

    carregarPagina(rota);

    // Fecha o menu mobile depois de escolher uma página
    const menuToggle = document.getElementById("menu-toggle");

    if (menuToggle) {
        menuToggle.checked = false;
    }

});
// ==================== DROPDOWN DE PROJETOS ====================

const dropdown = document.querySelector(".dropdown");
const dropdownBotao = document.querySelector(".dropdown-botao");

dropdownBotao.addEventListener("click", function(event) {

    event.stopPropagation();

    dropdown.classList.toggle("aberto");

});

// Fecha o dropdown ao clicar fora dele
document.addEventListener("click", function(event) {

    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("aberto");
    }

});