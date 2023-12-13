import Image from 'next/image'

export default function Item({ el }) {

    return (
    <div>
        <h1>{el.title}</h1>
        <p>{el.desc}</p>
        <Image src='/mt.jpg' alt='pic' width={70} height={70} />
        <p>{el.price}</p>
    </div>
  )
}
