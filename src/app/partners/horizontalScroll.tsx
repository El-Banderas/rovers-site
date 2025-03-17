'use client'

import React, { useState, useMemo, useEffect } from 'react';
import styles from './scroll.module.css'
import Image from "next/image";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {partners} from './partners'
import PartnerBox from './partnerBox'
import { checkIsMobile } from '../utils/isMobile';

export default function HorizontalScroll() {
  

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [idxPartner, setIdxPartner] = useState<number>(0);
  const [direction, setDirection] = useState<string>('fade-left');

  useEffect(() => {
    console.log(typeof window)
    setIsMobile(checkIsMobile(window))
  }, []
  );


    const visiblePartners = useMemo(
    () => {
      const idx = idxPartner
      const length = partners.length
      const previous = idx == 0 ? partners[length - 1] : partners[(idx-1) % length];  
      const current = partners[idx % length];
      const next = partners[(idx+1) % length]
      if (isMobile) return [current]
      else return [previous, current, next]
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
  <ArrowLeftIcon sx={{ fontSize: 60 }}  onClick={incrementIdx} />
      {visiblePartners.map(partner =>
        <PartnerBox key={partner.name} direction={direction} partner={partner} />
      )
      }
<ArrowRightIcon sx={{ fontSize: 60 }}  onClick={decrementIdx} />
    </div>;
}