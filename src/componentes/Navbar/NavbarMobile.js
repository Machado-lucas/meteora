import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import NavbarLinks from './NavbarLinks'
import styles from './Navbar.module.css'



function NavbarMobile() {

  const [abrir, setAbrir] = useState(false)

  const iconeHamburger = <GiHamburgerMenu
    className={styles.hamburguer}
    size='25px'
    onClick={() => { setAbrir(!abrir) }}
  />

  const iconeFechar = <IoMdClose
    className={styles.hamburguer}
    size='25px'
    color='yellow'
    onClick={() => { setAbrir(!abrir) }}
  />

  return (
    <nav className={styles.navbar__mobile}>
      {abrir ? iconeFechar : iconeHamburger}
      {abrir && <NavbarLinks />}
    </nav>
  )
}

export default NavbarMobile