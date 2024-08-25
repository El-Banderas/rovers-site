'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import rocket from '/public/rocket.jpeg'
import { useRouter } from 'next/navigation'


export default function NewCard ({ id, title, summary }: { id : number, title: string , summary: string}) {
  const router = useRouter()
  return <div className={styles.line}>

 <Image
      src={rocket}
       style={{
          width: '10%',
          height: 'auto',
        }}
      //width={100}
      //height={50}
      alt="Taurus Space logo"
    />
    <div className={styles.columnContent}>
    <h2 onClick={() => router.push(`/news/${id}`) }className={styles.titleNews}>{title}</h2>
    {summary}
</div>
    </div>;
}