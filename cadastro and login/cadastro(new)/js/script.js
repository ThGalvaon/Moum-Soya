const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
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

// Função para validar o formulário
function validateForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const cpf = document.getElementById('cpf').value.replace(/[-\. ]/g, ''); // Removendo caracteres especiais
    const telefone = document.getElementById('telefone').value;

    // Validação do nome
    if (nome.length < 4) {
        alert('O nome deve ter mais de 3 caracteres.');
        return false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|br)$/;
    if (!emailRegex.test(email)) {
        alert('O email deve conter "@" e terminar com ".com" ou ".br".');
        return false;
    }

    // Validação da senha
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password)) {
        alert('A senha deve conter pelo menos uma letra maiúscula e um número.');
        return false;
    }

    // Validação da confirmação da senha
    if (password !== confirmPassword) {
        alert('A confirmação da senha não corresponde à senha.');
        return false;
    }

    // Validação do CPF
    if (cpf.length !== 11) {
        alert('O CPF deve ter exatamente 11 caracteres.');
        return false;
    }

    // Validação do telefone
    if (telefone.length < 8) {
        alert('O telefone deve ter pelo menos 8 caracteres.');
        return false;
    }

    alert('Usuario cadastrado com sucesso')
    return true; // Se todas as validações passarem
}

// Adicionando o evento de submit ao formulário
document.getElementById('login_form').addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});