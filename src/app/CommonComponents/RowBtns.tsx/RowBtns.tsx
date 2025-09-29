import * as React from 'react';
import Button from '@mui/material/Button';

import styles from "./styles.module.css";
interface RowBtnsProps {
    departmentsTitles: string[],
    selectedDPT: string,
    selectDPT: (title: string) => void,
    
}
export default function RowBtns({ departmentsTitles, selectedDPT, selectDPT }: RowBtnsProps ) {

  const isUnderlined = (text: string) => {
    if (text === selectedDPT) return 'underline'
    return 'none'
  }

  return (
<ul className={styles.myList}>
  <div className={styles.blackBox} ><li><a href="#" >Welcome to my website</a></li></div>
  <div className={styles.blackBox} ><li className={styles.underlined}><a href="#" >Welcome to my website</a></li></div>
  <div className={styles.blackBox} ><li><a href="#"> Welcome to my website</a></li></div>
</ul>
  );

}