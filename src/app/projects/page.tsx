'use client'

import React, { useState,  useMemo } from 'react';
import styles from './styles.module.css'
import Images from './Images/Images'
import { departments, description } from "./data"
import RowBtns from '@/app/CommonComponents/RowBtns.tsx/RowBtns';
import Department from '@/app/projects/Department';

export default function Page() {
    
  const departmentsTitles = Object.keys(departments)
  const [selectedDpt, setSelectedDpt] = useState<string>(departmentsTitles[0]);

  function selectDPT(title: string) {
    setSelectedDpt(title)
  }

  const department = useMemo(() => (departments[selectedDpt]), [selectedDpt]);
  return <div>
    <h1 className={styles.title} >Current Project</h1>
    <Images />
    <div className={styles.departments}>
    <h4 className={styles.description}>{description}</h4>
   <RowBtns departmentsTitles={departmentsTitles} selectedDPT={selectedDpt} selectDPT={selectDPT} />
    </div>
    <Department department={departments[selectedDpt]}/>

    </div>;
}