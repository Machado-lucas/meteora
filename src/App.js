import Banner from 'componentes/Banner';
import Navbar from './componentes/Navbar';
import Categoria from 'componentes/Categoria';
import Facilidades from 'componentes/Facilidades';
import Novidades from 'componentes/Novidades';
import Rodape from 'componentes/Rodape';
import Produto from 'componentes/Produto';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categoria />
      <Produto />
      <Facilidades />
      <Novidades />
      <Rodape />
    </>
  );
}

export default App;
