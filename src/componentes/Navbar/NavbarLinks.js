/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Navbar.module.css'


function NavbarLinks() {
    return (

        <ul className={styles.navbar__menu}>
            <li className={styles.navbar__menuItem}><a href="#">Home</a></li>
            <li className={styles.navbar__menuItem}><a href="#">Nossas lojas</a></li>
            <li className={styles.navbar__menuItem}><a href="#">Novidades</a></li>
            <li className={styles.navbar__menuItem}><a href="#">Promoções</a></li>
        </ul>

    )
}

export default NavbarLinks