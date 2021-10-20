import '@testing-library/jest-dom';
import React from 'react';
import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './utils/renderWithRouter';
import paragraphsContent from './utils/paragraphsContent';

test('Deve renderizar 1 título, 1 botão e 2 parágrafos', () => {
  renderWithRouter(<App />);
  const p1 = screen.getByText(paragraphsContent.homeP1);
  const p2 = screen.getByText(paragraphsContent.homeP2);

  expect(
    screen.getByRole('heading', { name: /Pokémon Base Status Chart/ })
  ).toBeInTheDocument();
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();
});
