'use client'

import React, { useState, useEffect, useMemo } from 'react';
import styles from './sponsors.module.css'
import next from 'next';
import Image from "next/image";

import { sponsors, Partner } from './partners'
import PartnerBox from './partnerBox';

export default function Sponsors() {

  return (
    <div className={styles.box}>

        { Object.entries(sponsors).map(([level, listPartners]) => {
        return <div key={level} className={styles.level} data-aos='zoom-in'>
          <h3
            key={level}
            className={`${styles.item} ${styles[level]}` }
          >
            {level}
          </h3>
          <div className={styles.partnersRow}>
           {listPartners.partners.map(partner => <PartnerBox key={partner.name} partner={partner} /> )}
          </div>
          </div>
        })
      }
     
    </div>
  );
};