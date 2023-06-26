import React from 'react'
import styles from './Categoria.module.css'
import CategoriaCard from 'componentes/CategoriaCard'

const Categoria = () => {
  const categorias = [
    {
      "id": 1,
      "categoria": "Bolsas"
    },
    {
      "id": 2,
      "categoria": "Calças"
    },
    {
      "id": 3,
      "categoria": "Calçados"
    },
    {
      "id": 4,
      "categoria": "Camisetas"
    },
    {
      "id": 5,
      "categoria": "Casacos"
    },
    {
      "id": 6,
      "categoria": "Óculos"
    }
  ]


  return (
    <section className={styles.categoria}>
      <h3 >Busque por categoria:</h3>
      <ul>
        <div className={styles.categoria__container}>
          {categorias.map(categoria =>
            <CategoriaCard id={categoria.id} categoria={categoria.categoria} />
          )}
        </div>
      </ul>

    </section>
  )
}

export default Categoria