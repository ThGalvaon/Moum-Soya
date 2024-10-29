const humidityData = [45, 50, 55, 65, 60, 69, 67, 75, 78, 74, 68];
const timeLabels = ['12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50'];

const sensorStatusData = {
    labels: ['Quantidade Ativos', 'Quantidade que precisam de manutenção', 'Quantidade Inativos'],
    datasets: [{
        data: [16, 3, 1],
        backgroundColor: [
            'rgba(0, 128, 0, 0.8)',
            'rgb(255, 165, 0)', 
            'rgb(255, 0, 0)' 
        ],
    }]
};

const monthlyHumidityData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Umidade Média (%)',
        data: [60, 64, 68, 69, 70, 72, 70, 76, 78, 74, 80, 82],
        backgroundColor: 'rgba(0, 128, 0, 0.8)' ,
        borderColor: 'rgba(60, 179, 113, 0.6)',
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
            },
            {
                label: 'Nivel Preocupante (50%)',
                data: new Array(timeLabels.length).fill(50),
                borderColor: 'orange',
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

document.getElementById('toggleButton').addEventListener('click', function () {
    const limitDataset = {
        label: 'Limite Máximo (70%)',
        data: new Array(monthlyHumidityData.labels.length).fill(70),
        backgroundColor: 'rgb(255, 0, 0)'
    };

    const existingDatasetIndex = monthlyHumidityChart.data.datasets.findIndex(
        dataset => dataset.label === 'Limite Máximo (70%)'
    );



    if (existingDatasetIndex === -1) {
        monthlyHumidityChart.data.datasets.push(limitDataset);
        this.textContent = 'Remover Linha Limite';
    } else {
        monthlyHumidityChart.data.datasets.splice(existingDatasetIndex, 1);
        this.textContent = 'Mostrar Linha Limite';
    }

    monthlyHumidityChart.update();
});

document.getElementById("toggleButton").addEventListener("click", function () {
    const button = this;
    if (button.classList.contains("mostrar")) {
        button.classList.remove("mostrar");
        button.classList.add("remover");
        button.textContent = "Mostrar Linha Limite";
    } else {
        button.classList.remove("remover");
        button.classList.add("mostrar");
        button.textContent = "Remover Linha Limite";
    }
});

document.getElementById('tela2').style.display = 'none'
document.getElementById('home').style.display = 'none'


function ver() {
    document.getElementById('tela1').style.display = 'none';
    document.getElementById('tela2').style.display = 'flex';
    document.getElementById('dash-alert').style.display = 'none';
    document.getElementById('home').style.display = 'block';

    const alertData = {
        labels: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Alertas Criticos: maior que 70% de Umidade',
                data: [4, 3, 2, 2, 0, 1, 1],
                backgroundColor: 'red',
                borderColor: 'rgba(0, 128, 0, 1)',
                borderWidth: 1,
            },
            {
                label: 'Alertas Moderados: maior que 50% de Umidade',
                data: [5, 2, 4, 3, 4, 4, 3],
                backgroundColor: 'orange',
                borderColor: 'rgba(0, 128, 0, 1)',
                borderWidth: 1,
            }
        ]
    };

    const ctxBar = document.getElementById('alertChart').getContext('2d');
    const alertChart = new Chart(ctxBar, {
        type: 'bar',
        data: alertData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        color: 'black',
                        boxWidth: 15,
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 1, 
                    max: 10, 
                    title: {
                        display: true,
                        text: 'Quantidade de Alertas'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Dias da semana'
                    }
                }
            }
        }
    });
}    

function voltar() {
    document.getElementById('tela1').style.display = 'flex';
    document.getElementById('tela2').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('dash-alert').style.display = 'block';
}