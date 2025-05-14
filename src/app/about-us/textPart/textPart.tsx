'use client'

import React from 'react';
import styles from "./styles.module.css";
import {firstText, texts} from "../data"
import Chapter from "./chapter"


export default function TextPart () {

  return <div className={styles.accordions} >
    <p className={styles.accordionIntroduction}>{firstText}</p>
    { Object.keys(texts).map(title => ( 
      <Chapter key={title} title={title} content={texts[title]} />
      
        ))}
    </div>;
}