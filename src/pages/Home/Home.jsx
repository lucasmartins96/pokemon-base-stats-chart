import Button from 'react-bootstrap/Button';
import React from 'react';

function Home() {
  return (
    <div>
      <h1>Pokémon Base Status Chart</h1>
      <p>
        Informe o nome ou ID da National Dex do seu Pokémon favorito e visualize o status
        base.
      </p>
      <p>Você pode comparar o status base com outros Pokémon's se quiser.</p>
      <Button variant="primary">Start</Button>
    </div>
  );
}

export default Home;
