'use client'

import React, { useState,  useMemo } from 'react';

import Department from './department';
import styles from "./styles.module.css";
import { departments } from "../data"
import RowBtns from '@/app/CommonComponents/RowBtns.tsx/RowBtns';


export default function SelectDpt() {

  const departmentsTitles = Object.keys(departments)
  const [selectedDpt, setSelectedDpt] = useState<string>(departmentsTitles[0]);

  function selectDPT(title: string) {
    setSelectedDpt(title)
  }

  const department = useMemo(() => (departments[selectedDpt]), [selectedDpt]);

  return <div className={styles.selectDpt}>

    <h1 className={styles.titleDepartments}>Departments</h1>
   <RowBtns departmentsTitles={departmentsTitles} selectedDPT={selectedDpt} selectDPT={selectDPT} />
    <Department key={department.title} title={department.title} responsabilities={department.responsabilities} people={department.people} />
  </div>
}