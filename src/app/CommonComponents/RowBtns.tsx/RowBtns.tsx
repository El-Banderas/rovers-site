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
 <div className={styles.selectDptBtns}>
      {departmentsTitles.map(title =>

        <Button onClick={() => selectDPT(title)} key={title} className={styles.btnDpt}
          sx={{ textDecoration: isUnderlined(title) }}
        >{title}</Button>
      )

      }
    </div>
  );

}