const humidityData = [45, 55, 50, 65, 70, 85, 78, 90, 92, 88, 95];
const timeLabels = ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40', '00:45', '00:50'];

const sensorStatusData = {
    labels: ['Ativos', 'Inativos', 'Manutenção'],
    datasets: [{
        data: [12, 5, 3],
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
        data: [60, 70, 75, 68, 80, 72, 78, 85, 90, 88, 82, 76],
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
                display: false
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 70,
                        yMax: 70,
                        borderColor: 'red',
                        borderWidth: 2,
                        label: {
                            enabled: true,
                            content: 'Limite Máximo (70%)',
                            position: 'end'
                        }
                    }
                }
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