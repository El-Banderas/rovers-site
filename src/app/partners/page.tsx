'use client'

import React, { useState} from 'react';
import styles from './styles.module.css'
import partners from './partners'


export default function Page() {
    
  const [option, setOption] = useState<string>("Partners");

  function selectOption(selected : string) {
    setOption(selected)
    console.log(selected)
  }
  return <div className={styles.content}>
    <h1 className={styles.title}>
    Our ?Amazing? Supporters
</h1>
<div className={styles.toggle}>
  {["Partners", "Sponsors"].map(thisOption =>  
  <div className={`${styles.option} ${option === thisOption && styles.selectedOption}` } onClick={() => selectOption(thisOption)}>{thisOption}</div>
    )
  }
</div>
    </div>;
}