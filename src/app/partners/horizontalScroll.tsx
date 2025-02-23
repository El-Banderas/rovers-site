'use client'

import React, { useState, useMemo } from 'react';
import styles from './scroll.module.css'
import Image from "next/image";

import {partners} from './partners'

export default function HorizontalScroll() {
  

  const [idxPartner, setIdxPartner] = useState<number>(0);
  const [direction, setDirection] = useState<string>('fade-left');

    const visiblePartners = useMemo(
    () => {
      const idx = idxPartner
      const length = partners.length
      const previous = idx == 0 ? partners[length - 1] : partners[(idx-1) % length];  
      const current = partners[idx % length];
      const next = partners[(idx+1) % length]
      return [previous, current, next]
    },
    [idxPartner]
  );

  const incrementIdx = () => {
    setIdxPartner((prevIndx) => prevIndx+1)
    if (direction == 'fade-right') setDirection(() => 'fade-left')
  }

  const decrementIdx = () => {
    setIdxPartner((prevIndx) => (prevIndx == 0 ? partners.length-1 : prevIndx-1) )
    if (direction == 'fade-left') setDirection(() => 'fade-right')
  }

  return <div className={styles.scroll}>
<div onClick={decrementIdx}>
  Esq
</div>
      {visiblePartners.map(partner =>
        <div key={partner.name}  className={styles.partner} data-aos={direction}>
 <Image
        src={partner.image}
        alt={partner.name}
        width={170}
        height={170}
      />

          <div className={styles.partnerName}>
            {partner.name}
        </div>
        </div>
      )
      }
<div onClick={incrementIdx}>
Dir
</div>
    </div>;
}