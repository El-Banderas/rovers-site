'use client'
import React, { useState, useMemo, useEffect } from 'react';
import styles from './styles.module.css'
import Image from 'next/image'
import zenith_logo from '/public/zenith_logo.png'
import { checkIsMobile } from '../../utils/isMobile';

export default function Images() {
  const [isMobile, setIsMobile] = useState<boolean>(false);


  useEffect(() => {
    setIsMobile(checkIsMobile(window))
  }, []
  );
   const widthImg = useMemo(
    () => {
      return isMobile ? '70%' : '20%'
    },
    [isMobile]
  );


  return <div className={styles.line}>
     <Image
      src={zenith_logo}
      style={{
        width: widthImg,
        height: 'auto',
      }}
      alt="Project 1"
    />      
  </div>;
}