
    function calcular(){
        // 'Resetar' o conteúdo da div caso a gente queira fazer cálculos em sequência
        div_resultado.innerHTML = ''
    
        // Recebendo os valores dos inputs para cálculo de vazamento
        var consumo_queimador = Number(input_queimador.value);
        var tempo_uso = Number(input_minutos.value);
        var capacidade_botijao = Number(input_capacidade.value);
        var preco_botijao = Number(input_preco.value);
    
        // Recebendo os valores dos inputs para cálculo de multas e prejuízos
        var m2 = Number(inp_m2.value);
        var multaM2 = (5 * 1,1 * m2 * 35.36)
    
        // multa por metro²: 5 (Infração Grave) * 1,1 (Carga de Incêndio Fator de Risco Grave)* 
        // àrea da edificação (m2) * R$35,36 (UFESP 2024) = R$ Valor da Multa
        
        var qtd_funcionarios = Number(input_funcionarios.value);
        var media_salarial = Number(input_media_salarial.value);
    
        // Fazendo as contas para calcular prejuízos e multas em caso de acidentes
        var salario_total = qtd_funcionarios * media_salarial;
        var multa = (salario_total * 2) / 3;
        var gastos_totais = multa + multaM2 + salario_total + preco_botijao;
        var patrimonial = gastos_totais.toFixed(2);
    
    
        // (((T/60) x Kg/h)/B) x PB -> fórmula para calcular o gasto por dia
        // Contas relacionadas ao vazamento
        var gasto_dia = (((tempo_uso/60) * consumo_queimador) / capacidade_botijao) * preco_botijao;
        var gasto_mes = gasto_dia * 30;
        var gasto_ano = gasto_mes * 12;
    
        // Considerando que o gás esteja vazando e que o vazamento cause um aumento de 25%
        var consumo_queimador_25 = consumo_queimador + (consumo_queimador * 0.25);
        var gasto_dia_25 = (((tempo_uso/60) * consumo_queimador_25) / capacidade_botijao) * preco_botijao;
        var gasto_mes_25 = gasto_dia_25 * 30;
        var gasto_ano_25 = gasto_mes_25 * 12;

        var multa_dobrada = patrimonial * 2


        
    
        div_resultado.style.display =  'block'
        // Exibindo o resultado dos gastos adicionais esperados
        div_resultado.innerHTML += `
                                  <h3> Gastos adicionais relacionados à vazamento: </h3>
                                  Com um consumo de queimador de <span>${consumo_queimador} Kg/h</span> , utilizando-o por <span>${tempo_uso}</span>  minutos,
                                  usando um botijão de <span>${capacidade_botijao}  kg</span> e pagando em média <span>R$${preco_botijao}</span> 
                                  
                                <br>A sua economia será de <span>R$${(gasto_ano_25) - (gasto_ano)}</span> com a <span>redução de 25% do vazamento por ano</span>`
                                  
        // Exibindo o resultado de multas e prejuízos em caso de acidente
        div_resultado.innerHTML += `
        <br><br>
                                   <h3> Gastos com multas e em caso de acidentes: </h3>
                                    Em caso de fiscalização em seu estabelecimento e for constatado que não há nenhum tipo de monitoramento de prevenção de incêndios, as <span>multas</span> aplicadas podem atingir o valor estimado de <span>R$${patrimonial}.</span><br> Além disso, caso o estabelecimento não se regularizar em uma nova inspeção, o valor da multa poderá dobrar, chegando à <span>R$${multa_dobrada}!</span><br> Na terceira inspeção, há ainda o risco de <span>suspensão temporária das atividades da sua empresa</span> até que as exigências de segurança sejam cumpridas, gerando um prejuízo diário .<br>
                                  O prejuízo em relação à infraestrutura e investimentos relacionados à equipamentos será de <span>100% de todo dinheiro investido! </span><br>
                                  
                                  
                                  </span>`
    
        div_resultado.innerHTML += `<br>
                                    Com a LeakGas, em caso de vazamento avisaremos à você <span>em até 5 minutos</span>, evitando prejuízos e dores de cabeça!`
                                
      }

      
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



 // PARA NAVEGAR ENTRE A DASHBOARD

  function cozinhaB(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    cozinha_selecionada.innerHTML = ` B`
    inicio_vazamento.innerHTML = `10:00`
    dashboard_a.style.display = 'none';
    inicio_vazamento.style.color = 'red'

    termino_vazamento.innerHTML = `<img class='leak_vermelho' src="./assets/leak_vermelho.png">`
   status_mensagem.innerHTML = `Vazamento crítico ativo, risco de explosões!`
   status_mensagem.style.backgroundColor = 'rgba(150, 24, 24, 0.63)'
    
    dashboardB.style.display = 'flex';
    dashboard_safe.style.display = 'none';
    dashboard_warning.style.display = 'none';
  }


// ADICIONAR A DASHBOARD DINÂNMINCA (calace)

  function cozinhaA(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'none';
    dashboard_a.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` A`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
    
    termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`
    
    status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
   status_mensagem.style.fontSize = `1.3vw`
   status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
   
  }

  function cozinhaC(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_a.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` C`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
    
    termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`
    
    stativosus_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
   status_mensagem.style.fontSize = `1.3vw`
   status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
  }
  function cozinhaD(){

    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboard_a.style.display = 'none';
    dashboardB.style.display = 'none';
    dashboard_safe.style.display = 'none';
    dashboard_warning.style.display = 'flex';

    inicio_vazamento.style.color = 'rgb(145, 145, 28)'
    cozinha_selecionada.innerHTML = ` D`
    inicio_vazamento.innerHTML = `07:00`
    termino_vazamento.innerHTML = `<img class='leak_amarelo' src="./assets/leak_amarelo.png">`
    
    status_mensagem.style.backgroundColor = 'rgba(145, 145, 28, 0.623)'
   status_mensagem.style.fontSize = `1.3vw`
   status_mensagem.innerHTML = `Vazamento médio ativo, podendo se agravar!`
  }
  function cozinhaE(){
    todas_dash.style.display = 'none';
    dash_cozinhas.style.display = 'flex';
    dashboardB.style.display = 'none';
    dashboard_a.style.display = 'none';
    dashboard_safe.style.display = 'flex';
    dashboard_warning.style.display = 'none';

    inicio_vazamento.style.color = 'green'
    cozinha_selecionada.innerHTML = ` E`
    inicio_vazamento.innerHTML = `Sem vazamentos ativos`
    termino_vazamento.innerHTML = `Sem vazamentos ativos`
    
    termino_vazamento.innerHTML = `<img class='leak_azul' src="./assets/leak_azul.png">`
    
    status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
   status_mensagem.style.fontSize = `1.3vw`
   status_mensagem.innerHTML = `Nenhum vazamento ativo, ambiente seguro!`
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

    // grafico pra deixar dinamico (calace)

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