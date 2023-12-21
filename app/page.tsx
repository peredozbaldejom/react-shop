'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Footer from './ui/footer'
import Header from './ui/header'
import { useState } from 'react'
import Items from './ui/Items'
import item from './ui/item'

export default function Home() {
  const [order, setOrder] = useState([]);
  const items = [
    {
      id: 1,
      title: 'arma',
      desc: 'арматура очень охуенна',
      img: '1.jpg',
      price: '90'
    },
    {
      id: 2,
      title: 'zabor',
      desc: 'забор тожа очень хороши',
      img: '2.jpg',
      price: '69'
    },
    {
      id: 3,
      title: 'montaj',
      desc: 'сделать забор охуенная чтобы красиво',
      img: '3.jpg',
      price: '909'
    },
    {
      id: 4,
      title: 'shveller',
      desc: 'моталка разная запчасти полюбому хороший дешево',
      img: '4.jpg',
      price: '910'
    },
    {
      id: 5,
      title: 'гайка',
      desc: 'водитель охуенная красиво сделает привезет беспалато брат',
      img: '5.jpg',
      price: '80'
    }
  ]

  const addToOrder = (item) => {
    let isArr = false;
    let nextOrder = [...order];
    order.forEach(el => {
      if (el.id === item.id) {
        isArr = true
      }
    })
    if (!isArr) {
      nextOrder = [...order, item]
    }
    setOrder(nextOrder);
  }

  const deleteOrder = (item) => {
    setOrder(order.filter(el => el.id !== item.id))
  }

  return (
    <div className={styles.wrapper}>
      <Header order={order} delOrd={deleteOrder}/>
      <Items items={items} onAdd={addToOrder}/>
      <Footer />
    </div>
  )
}
