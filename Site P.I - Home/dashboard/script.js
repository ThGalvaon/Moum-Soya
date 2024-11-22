const linha = document.getElementById('chart_linha');

new Chart(linha, {
    type: 'line',
    data: {
      labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
      datasets: [
        {
          label: 'Presença de Gás',
          data: [0, 0, 0, 0, 10, 15, 15],
          borderColor: '#E5446D',
          backgroundColor: 'red',
          borderWidth: 1
        },
        {
          label: 'Limite de Segurança (2%)',
          data: [2, 2, 2, 2, 2, 2, 2],
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 16,
          title: {
            display: true,
            text: 'Quantidade de Gás'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Horário'
          }
        }
      }
    }
  });
  function cozinhaB(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    cozinha_selecionada.innerHTML = ` 2`
    inicio_vazamento.innerHTML = `10:00`
    dashboard_a.style.display = 'none';
    inicio_vazamento.style.color = 'red'
  //  status_mensagem.innerHTML = `Vazamento crítico ativo, risco de explosões!`
  //  status_mensagem.style.backgroundColor = 'rgba(150, 24, 24, 0.63)'
    
    dashboardB.style.display = 'flex';
    dashboard_safe.style.display = 'none';
    dashboard_warning.style.display = 'none';
  }
  function cozinhaA(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'none';
    dashboard_a.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` 1`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
        
    // status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  //  status_mensagem.style.fontSize = `1.3vw`
 
  }
  function cozinhaC(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_a.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` 3`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
      
    stativosus_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
 
  }
  function cozinhaD(){

    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboard_a.style.display = 'none';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'none';
    dashboard_warning.style.display = 'flex';

    inicio_vazamento.style.color = 'rgb(145, 145, 28)'
    cozinha_selecionada.innerHTML = ` 4`
    inicio_vazamento.innerHTML = `07:00`
    
    // status_mensagem.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'
  //  status_mensagem.style.fontSize = `1.3vw`

  
  }
  function cozinhaE(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_a.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` 5`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
    
    
    // status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  //  status_mensagem.style.fontSize = `1.3vw`
  //  status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
  }

  const linha_safe = document.getElementById('chart_linha_safe');

  new Chart(linha_safe, {
      type: 'line',
      data: {
        labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
        datasets: [
          {
            label: 'Presença de Gás',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 1
          },
          {
            label: 'Limite de Segurança (2%)',
            data: [2, 2, 2, 2, 2, 2, 2],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 1,
            borderDash: [5, 5],
            pointRadius: 0
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 3,
            title: {
              display: true,
              text: 'Quantidade de Gás'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Horário'
            }
          }
        }
      }
    });

    // grafico pra deixar dinamico

    const linha_a = document.getElementById('chart_linha_a');

  new Chart(linha_a, {
      type: 'line',
      data: {
        labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
        datasets: [
          {
            label: 'Presença de Gás',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderColor: 'green',
            backgroundColor: 'green',
            borderWidth: 1
          },
          {
            label: 'Limite de Segurança (2%)',
            data: [2, 2, 2, 2, 2, 2, 2],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.1)',
            borderWidth: 1,
            borderDash: [5, 5],
            pointRadius: 0
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 3,
            title: {
              display: true,
              text: 'Quantidade de Gás'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Horário'
            }
          }
        }
      }
    });
    
    
const linha_warning = document.getElementById('chart_linha_warning');

new Chart(linha_warning, {
    type: 'line',
    data: {
      labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
      datasets: [
        {
          label: 'Presença de Gás',
          data: [0, 0.5, 1, 1.2, 1, 2, 2],
          borderColor: 'yellow',
          backgroundColor: 'yellow',
          borderWidth: 1
        },
        {
          label: 'Limite de Segurança (2%)',
          data: [2, 2, 2, 2, 2, 2, 2],
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
          borderWidth: 1,
          borderDash: [5, 5],
          pointRadius: 0
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 3,
          title: {
            display: true,
            text: 'Quantidade de Gás'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Horário'
          }
        }
      }
    }
  });

function barras(){
  todas_dash.style.display = 'none';
  cont_barras.style.display = 'flex';
  dash_cozinhas.style.display = 'none';
}

const barra = document.getElementById('chart_barra_mes').getContext('2d');

new Chart(barra, {
  type: 'bar',
  data: {
    labels: ['Cozinha A', 'Cozinha B', 'Cozinha C', 'Cozinha D', 'Cozinha E'],
    datasets: [{
      label: '', // Deixe vazio para não mostrar no gráfico
      data: [5, 3, 2, 4, 1], // Exemplo de dados para cada cozinha
      backgroundColor: [
        'rgba(75, 192, 192, 1)', // Cores sólidas
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)', // Cores sólidas
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y', // Define o gráfico como horizontal
    scales: {
      x: {
        beginAtZero: true,
        stepSize: 1, // Define o incremento para números inteiros
        title: {
          display: true,
          text: 'Vazamento em Litros'
        },
        ticks: {
          precision: 0 // Garante que exibe apenas números inteiros
        }
      },
      y: {
        title: {
          display: true,
          text: 'Cozinhas'
        }
      }
    },
    plugins: {
      legend: {
        display: false // Remove a legenda do gráfico
      },
      title: {
        display: true,
        text: 'Comparação de Vazamento nas Cozinhas - Outubro'
      }
    }
  }
});


const linha_ano = document.getElementById('chart_linha_ano');

new Chart(linha_ano, {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro'],
      datasets: [
        {
          label: 'Quantidade de Vazamentos',
          data: [10, 9, 8, 12, 7, 13, 10, 5, 8, 14],
          borderColor: '#092B43',
          backgroundColor: '#092B43',
          borderWidth: 3
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 15,
          title: {
            display: true,
            text: 'Quantidade de Vazamentos'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Ano de 2024'
          }
        }
      }
    }
  });





  // lógica para o login

  var logado = false;
  



  function logar(){

    var email_login = ipt_email_login.value 
    var senha_login = ipt_senha_login.value

    if(email_login == 'admin@admin' && senha_login == 'admin'){
      localStorage.setItem("logado", "true"); // Armazena o valor "true" no localStorage
      window.location.href = 'dashboard.html'

      p_mensagem_login.innerHTML = ''
    }else{
      p_mensagem_login.innerHTML = `&times; Usuário ou senha incorretos, tente novamente!<br><br>`
    }
  }
// Função que verifica algo quando a página é carregada
function verificarLogin() {
  
  if (localStorage.getItem("logado") !== "true") {
    box_loginCadastro.style.display = 'none';
  } 


  if (localStorage.getItem("logado") !== "true") {
    alert("Você precisa estar logado para acessar essa página.");
    window.location.href = 'login.html'; // Redireciona para a página de login, se não estiver logado
}
}




// Adiciona um listener para o evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', verificarLogin);



/*LÓGICA DO GUEST*/
// Obtendo elementos do DOM
const modal = document.getElementById('modal');
const guestCircle = document.getElementById('guestCircle');
const spanClose = document.getElementsByClassName('close')[0];

// Quando o mouse entra no círculo do guest, o modal é aberto
guestCircle.addEventListener('mouseover', function() {
    modal.style.display = 'block';
});

// Quando o mouse sai do círculo do guest, o modal é fechado
guestCircle.addEventListener('mouseout', function() {
    modal.style.display = 'none';
});

// Também fecha o modal ao clicar no "X"
spanClose.onclick = function() {
    modal.style.display = 'none';
};

// Quando o usuário clica fora do modal, ele também é fechado
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}