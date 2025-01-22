'use client'

import React, { useState, useCallback , useEffect } from 'react';
import styles from "./styles.module.css";
import {texts} from "../data"
import Chapter from "./chapter"


export default function TextPart () {

  return <div className={styles.accordions} >
    { Object.keys(texts).map(title => ( 
      <Chapter key={title} title={title} content={texts[title]} />
      
        ))}
    </div>;
}