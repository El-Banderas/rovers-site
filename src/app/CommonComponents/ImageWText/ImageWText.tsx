'use client'

import styles from './styles.module.css'
import Image from 'next/image'
import rocket from '/public/rocket.jpeg'
import { useRouter } from 'next/navigation'

interface ImageWTextProps {
    image: any,
    title: string,
    description?: string
}

export default function ImageWText ({ image, title, description }: ImageWTextProps) {
  return <div className={styles.img}>
<Image
              src={image}
              alt="Rover img"
              className={styles.vercelLogo}
              priority
            />
  <h1 className={styles.title}>{title}</h1>
  <h4 className={styles.description}>{description}</h4>
</div>;
}