/* const getPokemon = async () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then((response) => response.json())
} */


const configureData = () => {
  return {
    labels: ['HP', 'Attack', 'Special Attack', 'Speed', 'Special Defense', 'Defense'],
    datasets: [{
      label: 'example',
      data: [70, 80, 60, 50, 80, 100],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
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
      }
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
