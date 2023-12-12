import React from 'react'
import styles from '../page.module.css'


export default function Header() {
  return (
    <header>
        <div>
          <span className={styles.logo}>House Staff</span></div>
          <ul className={styles.nav}>
            <li>Contact</li>
            <li>About us</li>
            <li>Room</li>
          </ul>
        <div className={styles.presentation}></div>
    </header>
  )
}
