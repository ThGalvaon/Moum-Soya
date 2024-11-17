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

function validateForm() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Verifique se os elementos existem
    if (!email || !password) {
        alert('Erro: um ou mais campos não foram encontrados!');
        return false;
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|br)$/;
    if (!emailRegex.test(email.value)) {
        alert('O email deve conter "@" e terminar com ".com" ou ".br".');
        return false;
    }

    // Validação da senha
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)/;
    if (!passwordRegex.test(password.value)) {
        alert('A senha deve conter pelo menos uma letra maiúscula e um número.');
        return false;
    }

    return true; // Se todas as validações passarem
}

// Adicionando o evento de submit ao formulário
document.getElementById('login_form').addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});

function entrar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    // Verificando se as credenciais passaram nas validações
    if (validateForm()) {
        // Lógica para verificar se é o administrador
        if (email === 'adm01@gmail.com' && senha === 'Moumsoy@09') {
            window.location.href = "../bobia/public/index.html";  // Redireciona para a página do administrador (Bobia)
            alert('Administrador logado com sucesso!');
        } else {
            // Para qualquer outro usuário, redireciona para a dashboard
            window.location.href = "./dashboard/dashboard.html";  // Redireciona para a dashboard
            alert('Usuário logado com sucesso!');
        }
    }
}
