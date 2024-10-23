const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('cadastro_form');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

// Seleciona os campos apenas uma vez e os armazena em variáveis
var ipt_razao = razao_social; // Campo Razão social
var ipt_nomeFant = nome_fantasia; // Campo Nome fantasia
var ipt_CNPJ = cnpj; // Campo CNPJ
var ipt_rep = Representante; // Campo Representante legal
var ipt_email = email; // Campo email
var ipt_senha = password; // Campo senha
var ipt_confirm = confirm_password; // Campo confirmação de senha

// Função para validar a razão social
function validarRazao() {
    var social = ipt_razao.value; // Obtém o valor do campo
    // Remove caracteres especiais indesejados
    ipt_razao.value = social.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento é maior ou igual a 3 e não contém caracteres especiais
    if (social.length >= 3 && !/[!@#$%¨&*()]/.test(social)) {
        ipt_razao.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_razao.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar o nome fantasia
function validarFantasia() {
    var fantasia = ipt_nomeFant.value; // Obtém o valor do campo
    // Remove caracteres especiais indesejados
    ipt_nomeFant.value = fantasia.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento é maior ou igual a 3
    if (fantasia.length >= 3) {
        ipt_nomeFant.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_nomeFant.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar CNPJ
function validarCNPJ() {
    var CNPJ = ipt_CNPJ.value; // Obtém o valor do campo

    // Verifica se o CNPJ contém exatamente 14 dígitos e se são numéricos
    if (CNPJ.length == 14 && !isNaN(CNPJ)) {
        ipt_CNPJ.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_CNPJ.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar representante legal
function validarRepresentante() {
    var Repre = ipt_rep.value; // Obtém o valor do campo
    // Remove caracteres especiais indesejados
    ipt_rep.value = Repre.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento é maior ou igual a 3
    if (Repre.length >= 3) {
        ipt_rep.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_rep.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar email
function validarEmail() {
    var email = ipt_email.value; // Obtém o valor do campo
    var possui_arroba = email.includes("@"); // Verifica se contém '@'
    var termina_com = email.endsWith('.com'); // Verifica se termina com '.com'
    var termina_br = email.endsWith('.br'); // Verifica se termina com '.br'
    var termina_net = email.endsWith('.net'); // Verifica se termina com '.net'

    // Verifica se o comprimento é maior que 3 e contém '@'
    if (email.length > 3 && possui_arroba && (termina_com || termina_br || termina_net)) {
        ipt_email.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_email.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar senha
function validarSenha() {
    var senha = ipt_senha.value; // Obtém o valor do campo
    var possui_numero = /\d/.test(senha); // Verifica se contém números
    var possui_letra_maiuscula = /[A-Z]/.test(senha); // Verifica se contém letra maiúscula
    var possui_letra_minuscula = /[a-z]/.test(senha); // Verifica se contém letra minúscula
    var possui_caracter_especial = /[!@#$%¨&*()]/.test(senha); // Verifica se contém caracteres especiais

    // Verifica se a senha tem pelo menos 8 caracteres e contém os requisitos
    if (senha.length >= 8 && possui_numero && possui_letra_maiuscula && possui_letra_minuscula && possui_caracter_especial) {
        ipt_senha.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_senha.style.border = "1px solid #f70000";
        alert('senha precisa pousuir mais de 8 caracteres, precisa de um numero e um caracter especial') // Estilo inválido (vermelho)
    }
}

// Função para validar confirmação de senha
function validarConfirmacao() {
    var senha = ipt_senha.value; // Obtém o valor da senha
    var confirmacao = ipt_confirm.value; // Obtém o valor da confirmação

    // Verifica se a confirmação é igual à senha
    if (confirmacao == senha && confirmacao.length >= 8) {
        ipt_confirm.style.border = "1px solid #08a708"; // Estilo válido (verde)
    } else {
        ipt_confirm.style.border = "1px solid #f70000"; // Estilo inválido (vermelho)
    }
}

// Função para validar todos os campos de cadastro
function validarCadastro(event) {
    event.preventDefault(); // Previne o envio do formulário
    correto = true; // Reseta a variável de controle
    validarRazao(); // Valida razão social
    validarFantasia(); // Valida nome fantasia
    validarCNPJ(); // Valida CNPJ
    validarRepresentante(); // Valida representante legal
    validarEmail(); // Valida email
    validarSenha(); // Valida senha
    validarConfirmacao(); // Valida confirmação de senha

    // Se todos os campos forem válidos, redireciona para outra página
    if (correto) {
        window.location.replace("../login.html");
    } else {
        alert("Informações Inválidas, revise os campos em vermelho."); // Mensagem de erro
    }
}

// Adiciona o evento de submissão ao formulário
// cadastro_form.addEventListener('submit', validarCadastro);

// // Adiciona eventos de input aos campos para validação instantânea
// ipt_razao.addEventListener('input', validarRazao);
// ipt_nomeFant.addEventListener('input', validarFantasia);
// ipt_CNPJ.addEventListener('input', validarCNPJ);
// ipt_rep.addEventListener('input', validarRepresentante);
// ipt_email.addEventListener('input', validarEmail);
// ipt_senha.addEventListener('input', validarSenha);
// ipt_confirm.addEventListener('input', validarConfirmacao);




