'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import rocket from '/public/rocket.jpeg'

export default function Images() {
  const images = [rocket, rocket, rocket]
  return <div className={styles.line}>
      {
        images.map((image, idx) => (
     <Image
      src={image}
      key={idx}
      style={{
        width: '20%',
        height: 'auto',
      }}
      alt="Project 1"
    />      
        ))
      }
  </div>;
}