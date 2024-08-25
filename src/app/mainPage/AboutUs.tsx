'use client'
import MyButton from "../CommonComponents/MyButton/MyButton";
import styles from "./AboutUs.styles.module.css";
import Image from "next/image";

import { useRouter } from 'next/navigation'

export default function AboutUs() {
  const router = useRouter()
  return <div className={styles.page}>
    <h1>About us</h1>
    <div className={styles.aboutUsContent}>
      <div className={styles.text}>
        <h3>Descrição pequena - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostra qui officia deserunt mollit anim id est laborum."
        </h3>
        <div className={styles.buttonCenter}>
        <MyButton text="Saber mais" onClick={() => router.push("/news")}></MyButton>
        </div>
      </div>
      <Image
        src="/aboutUsIMG.jpg"
        alt="About us img"
        width={500}
        height={500}
      />

    </div>
  </div>;
}