const humidityData = [45, 50, 55, 65, 60, 69, 67, 75, 79, 74, 71];
const timeLabels = ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50'];

const sensorStatusData = {
    labels: ['Quantidade de Ativos', 'Quantidade de Inativos', 'Quantidade capitando umidade alta'],
    datasets: [{
        data: [14, 2, 4],
        backgroundColor: [
            'rgba(0, 128, 0, 0.8)',
            'rgba(60, 179, 113, 0.6)', 
            'rgba(144, 238, 144, 0.4)' 
        ],
    }]
};


const monthlyHumidityData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Umidade Média (%)',
        data: [60, 64, 68, 69, 70, 72, 70, 76, 78, 74, 80, 82],
        backgroundColor: 'rgba(60, 179, 113, 0.6)',
        borderColor: 'rgba(0, 128, 0, 1)',
        borderWidth: 1,
    }]
};

const ctxLine = document.getElementById('humidityLineChart').getContext('2d');
const humidityLineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [
            {   label: 'Umidade Relativa (%)',
                data: humidityData,
                borderColor: 'rgba(60, 179, 113, 1)',
                fill: false,
            },
            {
                label: 'Limite Máximo (70%)',
                data: new Array(timeLabels.length).fill(70),
                borderColor: 'rgba(255, 0, 0, 0.7)',
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false,
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Umidade (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tempo'
                }
            }
        }
    }
});

const ctxPie = document.getElementById('sensorStatusChart').getContext('2d');
const sensorStatusChart = new Chart(ctxPie, {
    type: 'pie',
    data: sensorStatusData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});

const ctxBar = document.getElementById('monthlyHumidityChart').getContext('2d');
const monthlyHumidityChart = new Chart(ctxBar, {
    type: 'bar',
    data: monthlyHumidityData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Umidade Média (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Meses'
                }
            }
        }
    }
});

// Função para alternar a linha limite de 70
document.getElementById('toggleButton').addEventListener('click', function () {
    const limitDataset = {
        label: 'Limite Máximo (70%)',
        data: new Array(monthlyHumidityData.labels.length).fill(70),
        backgroundColor: 'rgba(255, 0, 0, 0.4)'
    };

    // Verifica se o dataset já foi adicionado ao gráfico
    const existingDatasetIndex = monthlyHumidityChart.data.datasets.findIndex(
        dataset => dataset.label === 'Limite Máximo (70%)'
    );

    if (existingDatasetIndex === -1) {
        // Adiciona o dataset de limite ao gráfico
        monthlyHumidityChart.data.datasets.push(limitDataset);
        this.textContent = 'Remover Linha Limite';
    } else {
        // Remove o dataset de limite do gráfico
        monthlyHumidityChart.data.datasets.splice(existingDatasetIndex, 1);
        this.textContent = 'Mostrar Linha Limite';
    }

    // Atualiza o gráfico para exibir/ocultar o novo dataset
    monthlyHumidityChart.update();
});


document.getElementById('tela2').style.display = 'none'
document.getElementById('home').style.display = 'none'


function ver(){
    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'block'
    document.getElementById('dash-alert').style.display = 'none'
    document.getElementById('home').style.display = 'block'



    const alertData = {
        labels: ['13:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
        datasets: [{
            label: 'alerts',
            data: [0, 0, 0, 0, 1, 1, 0],
            backgroundColor: 'red',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1,
        },
        {
            label: 'alerts',
            data: [0, 1, 0, 1, 2, 1, 0],
            backgroundColor: 'orange',
            borderColor: 'rgba(0, 128, 0, 1)',
            borderWidth: 1,
        }]
    };
    const ctxBar = document.getElementById('alertChart').getContext('2d');
const alertChart = new Chart(ctxBar, {
    type: 'bar',
    data: alertData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Quantidade de Alertas'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Intervalo/Hora'
                }
            }
        }
    }
})
}

function voltar(){
    document.getElementById('tela1').style.display = 'flex'
    document.getElementById('tela2').style.display = 'none'

    document.getElementById('home').style.display = 'none'
    document.getElementById('dash-alert').style.display = 'block'
}