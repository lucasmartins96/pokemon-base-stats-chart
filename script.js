const getPokemon = async (pokemonName) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
}

const configureData = (stats, pokemonName) => {
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
      // pointHoverBorderColor: '#fff'
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
      /* layout: {
        padding: {
            bottom: 150
        }
      } */
    },
  }
};

const fetchPokemon = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', async () => {
    const inputText = document.querySelector('input').value;
    const pokemon = await getPokemon(inputText);
    await renderChart(pokemon);
  });
}

const renderChart = async (pokemon) => {
  //pokemon request
  const { stats, name } = pokemon;
  //chart.js
  const ctx = document.getElementById('myChart');
  const chartConfigurations = configureChart(configureData, stats, name);
  const myChart = new Chart(ctx, chartConfigurations);
};

window.onload = () => {
  fetchPokemon();
  // renderChart();
};
