import React from 'react'
import styles from './ProdutoCard.module.css'

const ProdutoCard = ({ nome, descricao, preco, foto }) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__imagem} src={`/assets/Produtos/${foto}`} alt={`Foto de ${nome}`} />

            <div className={styles.card__detalhes}>
                <h4>{nome}</h4>
                <p className={styles.card__detalhesDescricao}>{descricao}</p>
                <h4>R$ {preco}</h4>
                <a className={styles.card__detalhesBotao} href="#">Ver Mais</a>
            </div>

        </div>
    )
}

export default ProdutoCard