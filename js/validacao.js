// ==================== VALIDAÇÃO DO FORMULÁRIO ====================

function inicializarValidacao() {

    // O formulário só existe depois que a página Cadastro é carregada
    const formulario = document.getElementById("form-cadastro");

    if (!formulario) {
        return;
    }

    const alertaSucesso = formulario.querySelector(".alerta-sucesso");
    const alertaInfo = formulario.querySelector(".alerta-info");

    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const email = document.getElementById("email");

    // Esconde as mensagens ao abrir o cadastro
    alertaSucesso.style.display = "none";
    alertaInfo.style.display = "none";


    // ==================== MENSAGENS DE ERRO ====================

    cpf.addEventListener("invalid", function() {

        if (cpf.validity.valueMissing) {
            cpf.setCustomValidity("Preencha o CPF.");
        }

        else if (cpf.validity.patternMismatch) {
            cpf.setCustomValidity(
                "CPF inválido. Use o formato 000.000.000-00."
            );
        }

    });


    telefone.addEventListener("invalid", function() {

        if (telefone.validity.valueMissing) {
            telefone.setCustomValidity("Preencha o telefone.");
        }

        else if (telefone.validity.patternMismatch) {
            telefone.setCustomValidity(
                "Telefone inválido. Use o formato (00) 00000-0000."
            );
        }

    });


    cep.addEventListener("invalid", function() {

        if (cep.validity.valueMissing) {
            cep.setCustomValidity("Preencha o CEP.");
        }

        else if (cep.validity.patternMismatch) {
            cep.setCustomValidity(
                "CEP inválido. Use o formato 00000-000."
            );
        }

    });


    email.addEventListener("invalid", function() {

        if (email.validity.valueMissing) {
            email.setCustomValidity("Preencha o e-mail.");
        }

        else if (email.validity.typeMismatch) {
            email.setCustomValidity(
                "Digite um endereço de e-mail válido."
            );
        }

    });


    // ==================== MÁSCARAS ====================

    cpf.addEventListener("input", function() {

        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;
        cpf.setCustomValidity("");

    });


    telefone.addEventListener("input", function() {

        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.slice(0, 11);

        valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

        telefone.value = valor;
        telefone.setCustomValidity("");

    });


    cep.addEventListener("input", function() {

        let valor = cep.value.replace(/\D/g, "");

        valor = valor.slice(0, 8);

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
        cep.setCustomValidity("");

    });


    email.addEventListener("input", function() {
        email.setCustomValidity("");
    });


    // ==================== ENVIO DO FORMULÁRIO ====================

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        if (formulario.checkValidity()) {

            // Salva no localStorage
            salvarCadastro();

            // Feedback de sucesso
            alertaSucesso.style.display = "block";
            alertaInfo.style.display = "none";

            // Limpa o formulário
            formulario.reset();

        }

        else {

            alertaSucesso.style.display = "none";
            alertaInfo.style.display = "block";

            formulario.reportValidity();

        }

    });

}