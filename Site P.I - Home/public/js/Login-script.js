// // const mode = document.getElementById('mode_icon');

// // mode.addEventListener('click', () => {
// //     const form = document.getElementById('login_form');
// //     if (mode.classList.contains('fa-moon')) {
// //         mode.classList.remove('fa-moon');
// //         mode.classList.add('fa-sun');
// //         form.classList.add('dark');
// //         return;
// //     }

// //     mode.classList.add('fa-moon');
// //     mode.classList.remove('fa-sun');
// //     form.classList.remove('dark');
// // });

// function entrar() {
//     var email = document.getElementById('email');
//     var password = document.getElementById('password');

//     // Verifique se os elementos existem
//     if (email == '' || password == '') {
//         alert('Erro: um ou mais campos não foram encontrados!');
//     } else {
//         fetch("/usuario/autenticar", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 emailServer: email.value,
//                 senhaServer: password.value
//             }),
//         }).then(function (resposta) {
//             console.log("resposta: ", resposta);

//             if (resposta.ok) {
//                 alert('Login autenticado com sucesso! Redirecionando para tela da dashboard...');

//                 setTimeout(() => {
//                     window.location = "index.html";
//                 }, "2000");
//             }
//             else {
//                 alert('deu erro')
//                 throw "Houve um erro ao tentar realizar o login!";
//             }
//         }).catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//         });
//     }
// }

// // fetch("/usuarios/autenticar", {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json"
// //     },
// //     body: JSON.stringify({
// //         emailServer: emailVar,
// //         senhaServer: senhaVar
// //     })
// //  })
