import Item from '@/app/ui/item'
import styles from './items.module.css'

export default function Items({ items, onAdd }) {

  return (
    <div>
        <div className={styles.items}>
          {items.map(elem => <div key={elem.id} className={styles.item}><Item el={elem} onAdd={onAdd}/></div>)}        
        </div>
    </div>
  )
}


