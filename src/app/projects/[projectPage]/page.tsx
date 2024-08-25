
import news from './../project.json'
import styles from './styles.module.css'

import Image from 'next/image'
import rocket from '/public/rocket.jpeg'

export default function Page ({params: {newPage}}: { params: { newPage: string } }) {

const thisNew = news.find(p => p.id.toString() === newPage)
  if (!thisNew ) {
    return <div>Notícia Not found</div>
  }
    

  return <div className={styles.centerContent}>
        <h1>{thisNew.title}</h1>
<Image
      src={rocket}
       style={{
          width: '40%',
          height: 'auto',
        }}
      //width={100}
      //height={50}
      alt="Rocket image"
    />
    <div className={styles.newContent}>{thisNew.summary}</div>
        </div>;
}