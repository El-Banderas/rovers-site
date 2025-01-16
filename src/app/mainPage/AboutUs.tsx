'use client'
import MyButton from "../CommonComponents/MyButton/MyButton";
import styles from "./AboutUs.styles.module.css";
import Image from "next/image";

import abousUsImg from '/public/aboutUsIMG.jpg'
import { useRouter } from 'next/navigation'

export default function AboutUs() {
  const router = useRouter()
  return <div className={styles.page}>
    <div className={styles.textPart }>

    <h1 className={styles.title}>About us</h1>
    <div className={styles.aboutUsContent}>
      <div className={styles.text}>
        <h3>
          Taurus Space is a youth association passionate about development of space and military technologies.<br/>
We aim to inspire, innovate, and collaborate to push the boundaries of what young engineers can achieve. <br/>
Our focus is on mobile robotic and autonomous systems, a highly specialized field where we stand out as pioneers among youth organizations.<br/>
<p/>
In other words: we are <strong>UNIQUE</strong>!

        </h3>
        <div className={styles.buttonCenter}>
        <MyButton text="Learn more" onClick={() => router.push("/about-us")}></MyButton>
        </div>
      </div>
      </div>
      </div>
      <Image
        src={abousUsImg}
        alt="About us img"
        width={500}
        height={500}
        className={styles.imgAboutUs}
      />
  </div>;
}