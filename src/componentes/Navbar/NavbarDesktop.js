import React from 'react'
import NavbarLinks from './NavbarLinks'
import styles from './Navbar.module.css'


function NavbarDesktop() {
  return (
    <nav className={styles.navbar__desktop}>
        <NavbarLinks />
    </nav>
  )
}

export default NavbarDesktop