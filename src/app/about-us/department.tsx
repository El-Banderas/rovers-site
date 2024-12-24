'use client'
import styles from "./department.styles.module.css";
import Image from "next/image";

import photo from '/public/Person.jpg'
import { useRouter } from 'next/navigation'

export default function Department({ responsabilities }: { responsabilities : string[] }) {
  const router = useRouter()

  const listReponsabilities = responsabilities.map(point =>
    <li>{point}</li>
  );

  return <div className={styles.content}>
    <h1 className="">Department of Mechanical</h1>
    <div className={styles.firstRow}>
      <Image
        src={photo}
        alt="Leader"
        width={200}
        height={354}
        className={styles.imgLeader}
      />
      <div className={styles.personDescription}>
        <h2 className={styles.headName}>Manuel dos Santos</h2>
        <p className={styles.subtitle}>Department Coordinator</p>
      </div>
      <div className={styles.description}>
      <ul>{listReponsabilities}</ul>
      </div>
    </div>

  </div>;
}