'use client'

import React, { useState, useCallback , useEffect } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';


import styles from "./styles.module.css";
import {texts, IChapter} from "../data"


export default function Chapter ({title, content}: { title : string, content : IChapter }) {
  
  const list = content.points?.map((point, index) => (
  <li key={index}>{point}</li>
));
  const listWHeaders = content.pointsWHeaders?.map((point, index) => (
  <li key={index}><b>{point[0]}</b>:{point[1]}</li>
));

  return <div className={styles.accordion}>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id={`chapter-${title}`}
        >
          <div>{title}</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.accordionText}>
        {content.text}
         {list && <ul>{list}</ul>}
         {listWHeaders && <ul>{listWHeaders}</ul>}
</div>
        </AccordionDetails>
      </Accordion>
    </div>;
}