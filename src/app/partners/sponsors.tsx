'use client'

import React, { useState, useEffect, useMemo } from 'react';
import styles from './sponsors.module.css'
import next from 'next';

// https://codepen.io/hanahina/pen/xxZgXqE
/*
Ou meter a animação a aparecer/desaparecer, e metê-los juntinhos para parecer que é transição
E não aparecer e desaparecer :) 
*/
export default function Sponsors () {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);
  

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const cachedValue = useMemo(() => [prevItem(), items[currentIndex], nextItem()], [currentIndex])
   setTimeout(() => {
    setCurrentIndex((old) => old+1)
      }, 1500); // Match the transition duration in the CSS

  return (
    <div>
      <button>Remove Item</button>
      <div className={styles.listContainer}>
        {items.map((item) => (
          <div
            key={item}
            className={`${styles.item} ${item === currentIndex-2  ? styles.removing : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};