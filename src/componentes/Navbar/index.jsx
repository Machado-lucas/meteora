import React from 'react'
import styles from './Navbar.module.css'
import NavbarMobile from './NavbarMobile'
import NavbarDesktop from './NavbarDesktop'

const Navbar = () => {
    return (
        <header className={styles.header}>
            <a href="#">
                <img src="assets/logo.png" alt="Logo da Meteora" />
            </a>
            <NavbarDesktop />
            <NavbarMobile />
            

            <ul className={styles.navbar__pesquisa}>
                <li>
                    <input type="text" placeholder='Digite o produto' className={styles.navbar__pesquisaInput} />
                </li>
                <li>
                    <button className={styles.navbar__pesquisaBuscar}>Buscar</button>
                </li>
            </ul>
        </header>
    )
}

export default Navbar