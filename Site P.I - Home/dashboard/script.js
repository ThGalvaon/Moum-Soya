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
        datasets: [{
            label: 'Umidade Relativa (%)',
            data: humidityData,
            borderColor: 'rgba(60, 179, 113, 1)',
            fill: false,
        }]
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
