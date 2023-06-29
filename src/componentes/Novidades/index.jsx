import React from "react";
import styles from "./Novidades.module.css";

const Novidades = () => {
  return (
    <section className={styles.newsletter}>
      <div className={styles.containerBox}>
        <h4 className={styles.newsletter__texto}>
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </h4>
        <form action="" className={styles.newsletter__formulario}>
          <input type="email" name="" id="" placeholder="Digite seu email" className={styles.newsletter__formularioInput}/>
          <button className={styles.newsletter__formularioBotao}>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Novidades;
