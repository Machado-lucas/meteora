// eslint-disable-next-line import/no-unresolved
import ProdutoCard from 'componentes/ProdutoCard';
import React from 'react';
import styles from './Produto.module.css';

function Produto() {
  const produtos = [
    {
      id: 1,
      nome: 'Camiseta Conforto',
      descricao:
        'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.',
      preco: '70,00',
      foto: 'Camiseta.png'
    },
    {
      id: 2,
      nome: 'Calça Alfaiataria',
      descricao:
        'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!',
      preco: '180,00',
      foto: 'Calça.png'
    },
    {
      id: 3,
      nome: 'Tênis Chunky',
      descricao:
        'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.',
      preco: '250,00',
      foto: 'Tenis.png'
    },
    {
      id: 4,
      nome: 'Jaqueta Jeans',
      descricao:
        'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!',
      preco: '150,00',
      foto: 'Jaqueta.png'
    },
    {
      id: 5,
      nome: 'Óculos Redondo',
      descricao:
        'Armação metálica em grafite com lentes arredondadas. Sem erro!',
      preco: '120,00',
      foto: 'Óculos.png'
    },
    {
      id: 6,
      nome: 'Bolsa coringa',
      descricao:
        'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!',
      preco: '120,00',
      foto: 'Bolsa.png'
    }
  ];

  return (
    <section className={styles.produtos}>
      <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
      <div className={styles.produtos__container}>
        {produtos.map((produto) => (
          <ProdutoCard
            key={produto.id}
            nome={produto.nome}
            descricao={produto.descricao}
            preco={produto.preco}
            foto={produto.foto}
          />
        ))}
      </div>
    </section>
  );
}

export default Produto;
