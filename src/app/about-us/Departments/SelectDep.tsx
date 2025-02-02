'use client'

import React, { useState, useCallback , useEffect, useMemo } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Department from './department';
import styles from "./styles.module.css";
import {departments} from "../data"  


export default function SelectDpt () {
  
  const departmentsTitles = Object.keys(departments)
  const [selectedDpt, setSelectedDpt] = useState<string>(departmentsTitles[0]);

  function selectDPT(title : string) {
    setSelectedDpt(title)
  }

      const department = useMemo(()=> (departments[selectedDpt]), [selectedDpt]);

  return <div  className={styles.selectDpt}>
  <ButtonGroup variant="contained" aria-label="Basic button group" >
    {departmentsTitles.map(title =>  

  <Button onClick={() => selectDPT(title)} key={title} className={styles.btnSselectDpt}>{title}</Button>
    )

  }
  </ButtonGroup>
  <Department key={department.title} title={department.title} responsabilities={department.responsabilities} people={department.people}/>
</div>
}