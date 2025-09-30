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
    return text === selectedDPT ? styles.underlined : ''
  }

  return (
<ul className={styles.myList}>
  {departmentsTitles.map(
    title => 
  <div className={styles.blackBox} onClick={() => selectDPT(title)} key={title}><li className={isUnderlined(title)}><a href="#" >{title}</a></li></div>
  )}
</ul>
  );

}