const myChart = document.getElementById('barCanvas');

new Chart(myChart, {
  type: 'line',
  data: {
    labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    datasets: [{
      label: 'views',
      data: [10050, 11190, 11290, 12560, 11860, 11200, 13120],
      tension: 0.5,
      borderWidth: 1,
      borderColor: '#fff',
    }]
  },
  options: {
    scales: {
      y: {
        display: false,
        ticks: {
          beginAtZero: false,
          min: 8000,
          display: false
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      x: {
        display: true,
        ticks: {
          display: true,
          color: '#000', // Couleur des labels de l'axe des abscisses (X)
          font: {
            weight: '600' // Ajoute du gras aux labels de l'axe des abscisses (X)
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      }
    },
    layout: {
      padding: 20
    },
    plugins: {
      legend: {
        display: false
      }
    },
    elements: {
      line: {
        fill: false
      }
    }
  }
});