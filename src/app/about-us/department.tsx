'use client'
import styles from "./department.styles.module.css";
import Image from "next/image";

import photo from '/public/whiteGoldenLogo.jpg'
import { useRouter } from 'next/navigation'

export default function Department() {
  const router = useRouter()
  return <div>
    <h1 className="">Department</h1>
      <Image
        src={photo}
        alt="Leader"
        width={500}
        height={500}
        className={styles.imgLeader}
      />

  </div>;
}