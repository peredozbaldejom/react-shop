import React from 'react'
import styles from '../page.module.css'


export default function Header() {
  return (
    <header>
        <div><span className={styles.logo}>House Staff</span></div>
        <div className={styles.presentation}></div>
    </header>
  )
}
