import React from 'react';
import Image from 'next/image';
import styles from './item.module.css'
import { FaTrash } from 'react-icons/fa';

export default function Order({ item, delOrd }) {
  return (
    <div className={styles.ordItem}>            
        <Image className={styles.ordImg} src={`/${item.img}`} alt='pic' width={375} height={270} />
        <h2 className={styles.h2}>{item.title}</h2>
        <b className={styles.ordB}>{item.price} $</b>
        <FaTrash className={styles.delete} onClick={() => {delOrd(item)}}/>
    </div>
  )
}
