import Image from 'next/image'
import styles from './page.module.css'
import Footer from './ui/footer'
import Header from './ui/header'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <Footer />
    </main>
  )
}
