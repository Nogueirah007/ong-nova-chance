// ==================== LOCAL STORAGE ====================

function salvarCadastro() {

    const cadastro = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        nascimento: document.getElementById("nascimento").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        endereco: document.getElementById("endereco").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        cep: document.getElementById("cep").value
    };

    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
}