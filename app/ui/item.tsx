import Image from 'next/image';
import styles from './item.module.css';

export default function Item({ el, onAdd }) {

    return (
        <div className={styles.item}>
            <Image className={styles.img} src={`/${el.img}`} alt='pic' width={375} height={270} />
            <h2 className={styles.h2}>{el.title}</h2>
            <p className={styles.p}>{el.desc}</p>
            <b className={styles.b}>{el.price} $</b>
            <div className={styles.addCart} onClick={() => onAdd(el)}>+</div>
        </div>
  )
}
