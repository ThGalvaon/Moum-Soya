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

var ipt_cidade = document.getElementById('input_cidade');
var ipt_logradouro = document.getElementById('input_logradouro');
var ipt_numero = document.getElementById('input_numero');
var ipt_cep = document.getElementById('input_cep');
var ipt_talhoes = document.getElementById('input_talhoes');

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

function validarCidade() {
    var endereco = ipt_cidade.value.trim();
    if (endereco.length >= 3) { // Endereço deve ter pelo menos 3 caracteres
        ipt_cidade.style.border = "2px solid #08a708";
        return true;
    } else {
        ipt_cidade.style.border = "2px solid #f70000";
        return false;
    }
}

function validarLogradouro() {
    var logradouro = ipt_logradouro.value.trim();
    if (logradouro.length >= 3) { // Endereço deve ter pelo menos 3 caracteres
        ipt_logradouro.style.border = "2px solid #08a708";
        return true;
    } else {
        ipt_logradouro.style.border = "2px solid #f70000";
        return false;
    }
}

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

function validarTalhoes() {
    var talhoes = ipt_talhoes.value.trim();
    if (talhoes.length >= 0) {
        ipt_talhoes.style.border = "2px solid #08a708";
        return true;
    }
}

function validarCadastro(event) {
    event.preventDefault();

    var cepValido = validarCEP();
    var enderecoValido = validarCidade();
    var numeroValido = validarNumero();
    var logradouroValido = validarLogradouro();
    var talhoesValido = validarTalhoes()

    if (!cepValido || !enderecoValido || !numeroValido || !logradouroValido || !talhoesValido) {
        alert("Revise os campos em vermelho!");
    } else {
        var idUsuario = sessionStorage.getItem('idUsuario')
        var cep = validarCEP();
        var logradouro = validarLogradouro();
        var cidade = validarCidade();
        var numero = validarNumero();
        var talhoes = validarTalhoes()

        if (!cep || !cidade || !numero || !talhoes || !logradouro) {
            alert("Informações Inválidas, revise os campos em vermelho.");
        } else {
            fetch(`/usuario/cadastrar-endereco/${idUsuario}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cidadeServer: ipt_cidade.value,
                    logradouroServer: ipt_logradouro.value,
                    numeroServer: ipt_numero.value,
                    qtdTalhaoServer: ipt_talhoes.value,
                    cepServer: ipt_cep.value,
                }),
            }).then(async function (resposta) {
                if (resposta.ok) {
                    const dados = await resposta.json();

                    alert(`Endereço cadastrado! 
                        Redirecionando para a tela de login`)

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "1000");
                }
                else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        }
    }
}

cadastro_form.addEventListener('submit', validarCadastro);

ipt_cep.addEventListener('input', validarCEP);
ipt_cidade.addEventListener('input', validarCidade);
ipt_numero.addEventListener('input', validarNumero);
ipt_logradouro.addEventListener('input', validarLogradouro);
