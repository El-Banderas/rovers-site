'use client'

import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import styles from "./styles.module.css";
import { IChapter } from "../data"

interface Props {
  title: string;
  content: IChapter
}

export default function Chapter({ title, content }: Props) {

  const bulletPoints = content.points?.map((point : string, index : number) => (
    <li key={index}>{point}</li>
  ));

  const bulletPointsWTitles = content.pointsWHeaders?.map((point : string[], index : number) => (
    <li key={index}><b>{point[0]}</b>:{point[1]}</li>
  ));

  return <div className={styles.accordion}>
    <Accordion disableGutters>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className={styles.accordionHeader}
      >
        <div >{title}</div>
      </AccordionSummary>
      <hr className={styles.horizontalLine} />
      <AccordionDetails>
        <div className={styles.accordionText}>
          {content.text}
          {bulletPoints && <ul className={styles.bulletPoints}>{bulletPoints}</ul>}
          {bulletPointsWTitles && <ul className={styles.bulletPoints}>{bulletPointsWTitles}</ul>}
        </div>
      </AccordionDetails>
    </Accordion>
  </div>;
}