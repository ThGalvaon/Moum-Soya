const mode = document.getElementById('mode_icon');

mode.addEventListener('click',() =>{
    const form = document.getElementById('login_form')
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
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
   
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
    alert('Usuário logado com sucesso!')
    return true; // Se todas as validações passarem exiba a mensagem 
}

// Adicionando o evento de submit ao formulário
document.getElementById('login_form').addEventListener('submit', (event) => {
    if (!validateForm()) {
        event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
});