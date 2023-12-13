'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Footer from './ui/footer'
import Header from './ui/header'
import { useState } from 'react'
import Items from './ui/Items'
import item from './ui/item'

export default function Home() {
  const [values, setValues] = useState({
    items: [
      {
        id: 1,
        title: 'arma',
        desc: 'very good arma',
        img: '1.jpg',
        price: '90'
      },
      {
        id: 2,
        title: 'zabor',
        desc: 'zabor ohuennuy',
        img: '2.jpg',
        price: '69'
      },
      {
        id: 3,
        title: 'montaj',
        desc: 'vmantaj zabora dolbaebami',
        img: '3.jpg',
        price: '909'
      },
      {
        id: 4,
        title: 'shveller',
        desc: 'sveller po pizdec huevoi cene',
        img: '4.jpg',
        price: '910'
      },
      {
        id: 5,
        title: 'гайка',
        desc: 'нахер ненужная гайка еще и за дорого блять',
        img: '5.jpg',
        price: '80'
      }
    ]
  })

  return (
    <main className={styles.wrapper}>
      <Header />
      <Items items={values.items}/>
      <Footer />
    </main>
  )
}
