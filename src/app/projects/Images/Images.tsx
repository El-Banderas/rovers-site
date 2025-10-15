'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import zenith_logo from '/public/zenith_logo.png'

export default function Images() {
  return <div className={styles.line}>
     <Image
      src={zenith_logo}
      style={{
        width: '20%',
        height: 'auto',
      }}
      alt="Project 1"
    />      
  </div>;
}