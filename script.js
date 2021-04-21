const getPokemon = async (pokemonName) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then((response) => response.json())
  .catch((error) => error);
}

const configureChartData = (stats, pokemonName) => {
  const baseStats = stats.map((stat) => stat.base_stat);
  const [hp, atk, def, spAtk, spDef, speed] = baseStats;
  return {
    labels: ['HP', 'Attack', 'Special Attack', 'Speed', 'Special Defense', 'Defense'],
    datasets: [{
      label: `${pokemonName}`,
      data: [hp, atk, spAtk, speed, spDef, def],
      fill: true,
      backgroundColor: 'rgb(3, 4, 94, 0.2)',
      borderColor: '#03045eff',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#03045eff',
      pointHoverBackgroundColor: '#03045eff',
      pointHoverBorderColor: '#fff'
    }]
  }
};

const configureChart = (callback, stats, pokemonName) => {
  return {
    type: 'radar',
    data: callback(stats, pokemonName),
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      plugins: {
        title: {
            display: true,
            text: `${pokemonName} Base Stats`
        }
      }
    },
  }
};

const addEventButton = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', fetchPokemon)
}

const fetchPokemon = async () => {
  try {
    const chart = document.getElementById('myChart');
    if (chart) chart.remove(); 
    const inputText = document.querySelector('input').value.toLowerCase();
    const pokemon = await getPokemon(inputText);
    renderChart(pokemon);
  } catch (error) {
    alert('Pokémon inválido');
  }
}

const createCanvas = () => {
  const chartContainer = document.getElementById('chart-container');
  const canvas = document.createElement('canvas');
  canvas.id = 'myChart';
  chartContainer.appendChild(canvas);
  return canvas;
}

const renderChart = (pokemon) => {
  //pokemon request
  const { stats, name } = pokemon;
  const nameCapitalizing = name.replace(/^\w/, name[0].toUpperCase());

  //create new chart
  const newCanvas = createCanvas();
  const chartConfigurations = configureChart(configureChartData, stats, nameCapitalizing);
  const myChart = new Chart(newCanvas, chartConfigurations);
};

window.onload = () => {
  addEventButton();
};
