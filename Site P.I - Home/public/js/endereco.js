const mode = document.getElementById('mode_icon');
const form = document.getElementById('cadastro_form');

// Alternar entre modo claro e escuro
mode.addEventListener('click', () => {
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

// Seleciona os campos do formulário
var ipt_endereco = document.getElementById('cidade');
var ipt_complemento = document.getElementById('logradouro');
var ipt_numero = document.getElementById('numero');
var ipt_cep = document.getElementById('cep');

// Validação do CEP
function validarCEP() {
    var cep = ipt_cep.value.trim();
    if (cep.length === 8 && !isNaN(cep)) { // CEP deve ter 8 dígitos numéricos
        ipt_cep.style.border = "2px solid #08a708";
        return true;
    } else {
        ipt_cep.style.border = "2px solid #f70000";
        return false;
    }
}

// Validação do Endereço
function validarEndereco() {
    var endereco = ipt_endereco.value.trim();
    if (endereco.length >= 3) { // Endereço deve ter pelo menos 3 caracteres
        ipt_endereco.style.border = "2px solid #08a708";
        return true;
    } else {
        ipt_endereco.style.border = "2px solid #f70000";
        return false;
    }
}

// Validação do Número
function validarNumero() {
    var numero = ipt_numero.value.trim();
    if (numero.length > 0 && !isNaN(numero)) { // Número deve ser preenchido e numérico
        ipt_numero.style.border = "2px solid #08a708";
        return true;
    } else {
        ipt_numero.style.border = "2px solid #f70000";
        return false;
    }
}

// Validação do Complemento (opcional)
function validarComplemento() {
    var complemento = ipt_complemento.value.trim();
    // Complemento sempre válido, mas mantém borda verde se preenchido
    if (complemento.length >= 0) {
        ipt_complemento.style.border = "2px solid #08a708";
        return true;
    }
}

// Validação geral
function validarCadastro(event) {
    event.preventDefault();

    var cepValido = validarCEP();
    var enderecoValido = validarEndereco();
    var numeroValido = validarNumero();
    var complementoValido = validarComplemento();

    if (cepValido && enderecoValido && numeroValido && complementoValido) {
        window.location.replace("../dashboard/dashSoya.html");
    } else {
        alert("Revise os campos em vermelho!");
    }
}

// Eventos para validação instantânea
ipt_cep.addEventListener('input', validarCEP);
ipt_endereco.addEventListener('input', validarEndereco);
ipt_numero.addEventListener('input', validarNumero);
ipt_complemento.addEventListener('input', validarComplemento);

// Submissão do formulário
form.addEventListener('submit', validarCadastro);
