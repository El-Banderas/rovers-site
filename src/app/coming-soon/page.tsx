"use client"

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import LinearProgress from '@mui/material/LinearProgress';

export default function ComingSoon() {
  const [progress, setProgress] = useState(0);
  const router = useRouter()
const milisecondsRedirect = 5000
const numDivisions = 100
  useEffect(() => {
    setTimeout(()=> router.push("/"),milisecondsRedirect*1.1);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        return oldProgress + (100 / numDivisions)
      });
    }, milisecondsRedirect / numDivisions);

    return () => {
      clearInterval(timer);
    };
  }, []);

        return <div className={styles.content}>
                <div className={styles.centered}>

                Coming soon
                      <LinearProgress variant="determinate" value={progress} />
                </div>
                </div>
}