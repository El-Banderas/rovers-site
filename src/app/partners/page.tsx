'use client'

import React, { useState } from 'react';
import styles from './styles.module.css'
import HorizontalScroll from './horizontalScroll';
import Sponsors from './sponsors';


export default function Page() {

  const [option, setOption] = useState<string>("Sponsors");

  function selectOption(selected: string) {
    setOption(selected)
  }
  return <div className={styles.content}>
    <h1 className={styles.title}>
      Our ?Amazing? Supporters
    </h1>
    <div className={styles.toggle}>
      {["Partners", "Sponsors"].map(thisOption =>
        <div key={thisOption} className={`${styles.option} ${option === thisOption && styles.selectedOption}`} onClick={() => selectOption(thisOption)}>{thisOption}</div>
      )
      }
    </div>
    {
      option === "Partners" ?
      <HorizontalScroll />
      :
      <Sponsors />

    }
  </div>;
}