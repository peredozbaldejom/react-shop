import React, { useState } from 'react'
import styles from '../page.module.css'
import { FaShoppingCart} from 'react-icons/fa'
import Order from './order'

export default function Header({ order, delOrd }) {
  const [openCart, setOpenCart] = useState(false)

  const showOrder = (order) => {
    let summa = 0;
    order.forEach(el => summa += Number.parseFloat(el.price))
    return (
      <div>
        {order.map(item => <Order key={item.id} item={item} delOrd={delOrd}/>)}
        <p className={styles.summa}>Total price: {summa} $</p>
      </div>)
  }

  const showNothing = () => {
    return <h2 className={styles.empty}>No goods</h2>
  }

  return (
    <header className={styles.header}>
        <div>
          <span className={styles.logo}>House Staff</span></div>
          <ul className={styles.nav}>
            <li>Contact</li>
            <li>About us</li>
            <li>Room</li>
          </ul>
          <FaShoppingCart className={`${styles.shopCartBut} ${openCart && styles.active}`} onClick={() => {setOpenCart(!openCart)}}/>
          {openCart && <div className={styles.shopCart}>{order.length > 0 ? showOrder(order) : showNothing()}</div>}
        <div className={styles.presentation}></div>
    </header>
  )
}
