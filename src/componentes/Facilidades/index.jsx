import React from 'react';
import styles from './Facilidades.module.css';

function Facilidades() {
  const facilidades = [
    {
      id: 1,
      titulo: 'PAGUE PELO PIX',
      descricao: 'Ganhe 5% OFF em pagamentos via PIX',
      imagem: 'pix'
    },
    {
      id: 2,
      titulo: 'TROCA GRÁTIS',
      descricao: 'Fique livre para trocar em até 30 dias.',
      imagem: 'troca'
    },
    {
      id: 3,
      titulo: 'SUSTENTABILIDADE',
      descricao: 'Moda responsável, que respeita o meio ambiente.',
      imagem: 'sustentabilidade'
    }
  ];

  return (
    <section className={styles.facilidades}>
      <h3>Conheça as nossas facilidades</h3>
      <div className={styles.container}>
        {facilidades.map((facilidade) => (
          <div className={styles.facilidades__container}>
            <img
              className={styles.facilidades__containerImg}
              src={`/assets/Facilidades/${facilidade.imagem}.png`}
              alt={`Imagem do ${facilidade.imagem}`}
            />

            <div className={styles.facilidades__containerConteudo}>
              <h4 className={styles.facilidades__containerConteudoTitulo}>
                {facilidade.titulo}
              </h4>
              <p className={styles.facilidades__containerConteudoDescricao}>
                {facilidade.descricao}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilidades;
