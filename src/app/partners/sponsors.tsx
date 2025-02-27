'use client'

import React, { useState, useEffect, useMemo } from 'react';
import styles from './sponsors.module.css'
import next from 'next';
import Image from "next/image";

import { partners, sponsors } from './partners'

export default function Sponsors() {
  const levels = Object.keys(sponsors)
  const [selectedLevel, setSelectedLevel] = useState<string>(levels[0]);

  const clickLevel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedLevel(event.currentTarget.innerText.toLowerCase());
  };
  return (
    <div className={styles.box}>

      <div className={styles.listContainer}>
        {levels.map((level) => (
          <h3
            key={level}
            className={`${styles.item} ${styles[level]} ${level === selectedLevel ? styles.removing : ''}`}
            onClick={clickLevel}
          >
            {level}
          </h3>
        ))}
      </div>
      <div className={styles.sponsorsTable}>
        {sponsors[selectedLevel]["partners"].map(sponsor => (
          <div className={styles.sponsor}  onClick={() => window.location.replace(sponsor.url)} style={{ cursor: 'pointer' }}>
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={70}
              height={70}
            />
            <h2
            >
              {sponsor.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};