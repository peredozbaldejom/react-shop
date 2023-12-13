import Item from '@/app/ui/item'

export default function Items({ items }) {

  return (
    <div>
        <ul>
          {items.map(elem => <li key={elem.id}><Item el={elem}/></li>)}        
        </ul>
    </div>
  )
}


