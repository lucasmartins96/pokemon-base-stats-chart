/* const getPokemon = async () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => response.json())
} */


const configureData = () => {
  return {
    labels: ['HP', 'Attack', 'Special Attack', 'Speed', 'Special Defense', 'Defense'],
    datasets: [{
      label: '{pokemon}',
      data: [70, 80, 60, 50, 80, 100],
      fill: true,
      backgroundColor: 'rgb(3, 4, 94, 0.2)',
      borderColor: '#03045eff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#03045eff',
      pointHoverBackgroundColor: '#03045eff',
      // pointHoverBorderColor: '#fff'
    }]
  }
};

const configureChart = (data) => {
  return {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      plugins: {
        title: {
            display: true,
            text: '{Pokemon} Base Stats'
        }
      }
      /* layout: {
        padding: {
            bottom: 150
        }
      } */
    },
  }
};

const renderChart = () => {
  const ctx = document.getElementById('myChart');
  const data = configureData();
  const chartConfigurations = configureChart(data);
  const myChart = new Chart(ctx, chartConfigurations);
};

window.onload = () => {
  renderChart();
};
