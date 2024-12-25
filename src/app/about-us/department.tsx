'use client'
import styles from "./department.styles.module.css";
import Image from "next/image";

import photo from '/public/Person.jpg'
import { useRouter } from 'next/navigation'
import {Person} from './data'
export default function Department({title, responsabilities, people }: { title : string, responsabilities : string[], people : Person[] }) {
  const router = useRouter()

  const listReponsabilities = responsabilities.map(point =>
    <li>{point}</li>
  );

  const director = people[0]
  const others = people.slice(1)
  return <div className={styles.content}>
    <h1 className="">{title}</h1>
    <div className={styles.firstRow}>
      <Image
        src={director.photo}
        alt="Leader"
        width={200}
        height={354}
        className={styles.imgLeader}
      />
      <div className={styles.personDescription}>
        <h2 className={styles.headName}>{director.name}</h2>
        <p className={styles.subtitle}>Department Coordinator</p>
      </div>
      <div className={styles.description}>
        <ul>
{listReponsabilities}
</ul>
      </div>
    </div>

  </div>;
}