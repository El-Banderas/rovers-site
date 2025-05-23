'use client'

import styles from './scroll.module.css'
import Image from "next/image";
import { Partner } from './partners'


interface PartnerBoxProps {
  direction?: string | null,
  partner: Partner
}

export default function PartnerBox(props: PartnerBoxProps ) {
  return <div key={props.partner.name} className={styles.partner} data-aos={props.direction} onClick={() => window.location.replace(props.partner.url)} style={{ cursor: 'pointer' }}>
    <Image
      src={props.partner.image}
      alt={props.partner.name}
      width={170}
      height={170}
    />

    <div className={styles.partnerName}>
      {props.partner.name}
    </div>
    </div>
}