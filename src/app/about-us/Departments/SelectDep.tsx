'use client'

import React, { useState, useCallback , useEffect } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from "./styles.module.css";
import {departments} from "../data"  


export default function SelectDpt () {
  
  const departmentsTitles = departments.map((dep) => dep.title)

  return <div  className={styles.selectDpt}>
  <ButtonGroup variant="contained" aria-label="Basic button group" >
    {departmentsTitles.map(title =>  

  <Button className={styles.btnSselectDpt}>{title}</Button>
    )

  }
  </ButtonGroup>
</div>
}