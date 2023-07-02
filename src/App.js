/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Facilidades from './componentes/Facilidades';
import Novidades from './componentes/Novidades';
import Rodape from './componentes/Rodape';
import Produto from './componentes/Produto';
import Navbar from './componentes/Navbar';

function App() {
  function tipoTela() {
    const largura = window.innerWidth
    let resultado = 'Mobile'
    console.log(largura)
    largura < 376
      ? (resultado = 'Mobile')
      : largura < 769
        ? (resultado = 'Tablet')
        : (resultado = 'Desktop')


    return resultado
  }

  const [dispositivo, setDispositivo] = useState(tipoTela())

  window.addEventListener('resize', () => setDispositivo(tipoTela()))

  return (
    <>
      <Navbar />
      <Banner dispositivo={dispositivo} />
      <Categoria />
      <Produto />
      <Facilidades />
      <Novidades />
      <Rodape />
    </>
  );
}

export default App;
