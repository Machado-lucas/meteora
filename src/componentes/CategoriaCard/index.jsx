import React from 'react'
import styles from './CategoriaCard.module.css'

const CategoriaCard = ({ id, categoria }) => {
    return (
        <li className={styles.categoria__card}>
            <img key={id}
                src={`/assets/Categorias/Mobile/${categoria}.png`}
            //    { srcSet={`/assets/Categorias/Mobile/${categoria}.png 375w,
            //             /assets/Categorias/Tablet/${categoria}.png 768w,
            //             /assets/Categorias/Desktop/${categoria}.png 1280w`}
            //     sizes='(max-width: 375px) 375px, (max-width: 768px) 768w, 1280px'}
                alt=""
                className={styles.categoria__imagemCard}
            />
            <p className={styles.categoria__titulo}>{categoria}</p>
        </li>
    )
}

export default CategoriaCard