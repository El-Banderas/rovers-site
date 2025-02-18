'use client'

import React, { useState, useMemo } from 'react';
import styles from './scroll.module.css'
import Image from "next/image";

import {partners} from './partners'

export default function HorizontalScroll() {
  

  const [idxPartner, setIdxPartner] = useState<number>(0);

    /*
    const visiblePartners = useMemo(
    () => filterTodos(todos, tab),
    [idxPartner]
  );*/

  return <div className={styles.scroll}>
<div>
  Esq
</div>
      {partners.map(partner =>
        <div key={partner.name}  className={styles.partner}>
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
<div>
Dir
</div>
    </div>;
}