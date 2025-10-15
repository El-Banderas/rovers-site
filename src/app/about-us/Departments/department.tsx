'use client'
import styles from "./department.styles.module.css";
import { useEffect } from "react";
import Image from "next/image";
import Fade from '@mui/material/Fade';
import photo from '/public/Person.jpg'
import { useRouter } from 'next/navigation'
import { Person } from '@/app/about-us/data'
export default function Department({ title, responsabilities, people }: { title: string, responsabilities: string[], people: Person[] }) {
  const router = useRouter()
  const listReponsabilities = responsabilities.map(point =>
    <li key={point} className={styles.responsability}>{point}</li>
  );


  const director = people[0]
  const others = people.slice(1)
  const persons = others.map(person =>
    <div className={styles.person} key={person.name}>
      <Image
        src={person.photo}
        alt={person.name}
        width={170}
        height={302}
        className={styles.imgLeader}
      />
      {person.name}
    </div>
  );
  return <section id={title}>

    <div className={styles.content} data-aos="fade-up" data-aos-duration="1500" >
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
          <p className={styles.subtitle}>Head of Department</p>
        </div>
        <div className={styles.description}>
          <ul >
            {listReponsabilities}
          </ul>
        </div>
      </div>

      {
        others.length > 0 &&
        <div className={styles.persons}>
          {persons}
        </div>
      }
    </div>

  </section>
    ;
}