const linha = document.getElementById('chart_linha');

// new Chart(linha, {
//   type: 'line',
//   data: {
//     labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//     datasets: [
//       {
//         label: 'Umidade do ar',
//         data: [40, 59, 60, 79, 90, 84, 78],
//         borderColor: 'blue',
//         backgroundColor: 'blue',
//         borderWidth: 1
//       },
//       {
//         label: 'Alerta Preocupante (50%)',
//         data: [60, 60, 60, 60, 60, 60, 60],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave (70%)',
//         data: [70, 70, 70, 70, 70, 70, 70],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Preocupante Baixo (40%)',
//         data: [40, 40, 40, 40, 40, 40, 40],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave Baixo (30%)',
//         data: [30, 30, 30, 30, 30, 30, 30],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: 'Umidade do ar'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Horário'
//         }
//       }
//     }
//   }
// });

home.style.display = 'none'

function talhaoB() {
  todas_dash.style.display = 'none';
  dash_talhao.style.display = 'flex';
  talhao_selecionada.innerHTML = ` 2`
  tempo_alerta.innerHTML = `10:00`
  dashboard_a.style.display = 'none';
  tempo_alerta.style.color = 'red'
  home.style.display = 'flex'

  dashboardB.style.display = 'flex';
  dashboard_safe.style.display = 'none';
  dashboard_warning.style.display = 'none';
   
}
// function talhaoA() {
//   todas_dash.style.display = 'none';
//   dash_talhao.style.display = 'flex';
//   talhao_selecionada.innerHTML = `1`;
//   tempo_alerta.innerHTML = `10:00`
//   dashboardB.style.display = 'none';
//   dashboard_safe.style.display = 'none';
//   dashboard_a.style.display = 'flex';
//   dashboard_warning.style.display = 'none';

//   tempo_alerta.style.color = 'green'
//   tempo_alerta.innerHTML = `Sem alertas ativos`
//   termino_alerta.innerHTML = `Sem alertas ativos`
//   home.style.display = 'flex'

// }
function talhaoC() {
  todas_dash.style.display = 'none';
  dash_talhao.style.display = 'flex';

  dashboardB.style.display = 'none';
  dashboard_a.style.display = 'none';
  dashboard_safe.style.display = 'flex';
  dashboard_warning.style.display = 'none';
  home.style.display = 'flex'

  tempo_alerta.style.color = 'green'
  talhao_selecionada.innerHTML = ` 3`
  tempo_alerta.innerHTML = `Sem alertas ativos`
  termino_alerta.innerHTML = `Sem alertas ativos`

  stativosus_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'

}
function talhaoD() {

  todas_dash.style.display = 'none';
  dash_talhao.style.display = 'flex';
  dashboard_a.style.display = 'none';
  dashboardB.style.display = 'none';
  dashboard_safe.style.display = 'none';
  dashboard_warning.style.display = 'flex';
  home.style.display = 'flex'

  tempo_alerta.style.color = 'rgb(145, 145, 28)'
  talhao_selecionada.innerHTML = ` 4`
  tempo_alerta.innerHTML = `07:00`
}
function talhaoE() {
  todas_dash.style.display = 'none';
  dash_talhao.style.display = 'flex';
  dashboardB.style.display = 'none';
  dashboard_a.style.display = 'none';
  dashboard_safe.style.display = 'flex';
  dashboard_warning.style.display = 'none';
  home.style.display = 'flex'

  tempo_alerta.style.color = 'green'
  talhao_selecionada.innerHTML = ` 5`
  tempo_alerta.innerHTML = `Sem alertas ativos`
  termino_alerta.innerHTML = `Sem alertas ativos`


  // status_mensagem.style.backgroundColor = 'rgba(30, 105, 30, 0.479)'
  //  status_mensagem.style.fontSize = `1.3vw`
  //  status_mensagem.innerHTML = `Nenhum alerta ativo, ambiente seguro!`
}

// const linha_safe = document.getElementById('chart_linha_safe');

// new Chart(linha_safe, {
//   type: 'line',
//   data: {
//     labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//     datasets: [
//       {
//         label: 'Umidade do ar',
//         data: [40, 59, 60, 79, 90, 84, 78],
//         borderColor: 'blue',
//         backgroundColor: 'blue',
//         borderWidth: 1
//       },
//       {
//         label: 'Alerta Preocupante (60%)',
//         data: [60, 60, 60, 60, 60, 60, 60],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave (70%)',
//         data: [70, 70, 70, 70, 70, 70, 70],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Preocupante Baixo (40%)',
//         data: [40, 40, 40, 40, 40, 40, 40],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave Baixo (30%)',
//         data: [30, 30, 30, 30, 30, 30, 30],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: 'Umidade do ar'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Horário'
//         }
//       }
//     }
//   }
// });

// const linha_warning = document.getElementById('chart_linha_warning');

// new Chart(linha_warning, {
//   type: 'line',
//   data: {
//     labels: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
//     datasets: [
//       {
//         label: 'Umidade do ar',
//         data: [40, 59, 60, 79, 90, 84, 78],
//         borderColor: 'blue ',
//         backgroundColor: 'blue',
//         borderWidth: 1
//       },
//       {
//         label: 'Alerta Preocupante (60%)',
//         data: [60, 60, 60, 60, 60, 60, 60],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave (70%)',
//         data: [70, 70, 70, 70, 70, 70, 70],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Preocupante Baixo (40%)',
//         data: [40, 40, 40, 40, 40, 40, 40],
//         borderColor: 'orange',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       },
//       {
//         label: 'Alerta Grave Baixo (30%)',
//         data: [30, 30, 30, 30, 30, 30, 30],
//         borderColor: 'red',
//         borderDash: [5, 5], // Linha pontilhada
//         borderWidth: 2,
//         fill: false
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         title: {
//           display: true,
//           text: 'Umidade do ar'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Horário'
//         }
//       }
//     }
//   }
// });


function voltar(){
    todas_dash.style.display = 'flex';
    dash_talhao.style.display = 'none';
    dashboardB.style.display = 'none';
    dashboard_a.style.display = 'none';
    home.style.display = 'none'
    alertasTalhoes.style.display = 'none'
    verAlertas.style.display = 'block'
}
// Dados fictícios para os talhões
const talhoes = {
    "Talhão A": [5, 8, 6, 7], // Horas em alerta por semana
    "Talhão B": [3, 4, 5, 6],
    "Talhão C": [4, 6, 5, 8],
    "Talhão D": [2, 3, 4, 3],
    "Talhão E": [7, 6, 8, 9]
};

 // Variável para armazenar o gráfico

function toggleAlertas() {
    const alertasTalhoes = document.getElementById("alertasTalhoes");
    let graficoAlerta;

    if (alertasTalhoes.style.display === "none") {
        alertasTalhoes.style.display = "block";    
        todas_dash.style.display = 'none';
        dash_talhao.style.display = 'none';
        dashboardB.style.display = 'none';
        dashboard_a.style.display = 'none';
        home.style.display = 'flex'
        verAlertas.style.display = 'none'

        if (!graficoAlerta) {
            const ctx = document.getElementById('graficoAlertas').getContext('2d');
            graficoAlerta = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'], // Semanas do mês
                    datasets: Object.keys(talhoes).map((talhao, index) => ({
                        label: talhao,
                        data: talhoes[talhao], // Dados do talhão
                        backgroundColor: `rgba(${(index + 1) * 50}, ${100 + index * 30}, ${150 + index * 20}, 0.5)`,
                        borderColor: `rgba(${(index + 1) * 50}, ${100 + index * 30}, ${150 + index * 20}, 1)`,
                        borderWidth: 1,
                    })),
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Tempo em Alerta por Talhão (em horas)'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Horas'
                            }
                        }
                    },
                },
            });
        }
    }
}
