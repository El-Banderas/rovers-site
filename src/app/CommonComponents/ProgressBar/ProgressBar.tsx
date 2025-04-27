
import LinearProgress from '@mui/material/LinearProgress';
import styles from './styles.module.css'

interface ProgressBarProps {
  progression: number,
}

export default function ProgressBar({ progression }: ProgressBarProps) {
  return <div className={styles.barWNumber}>
    <div className={styles.progressBarBorder}>
    <LinearProgress
      sx={{
        backgroundColor: 'white',
        '& .MuiLinearProgress-bar': {
          backgroundColor: 'black'
        }
      }}
      className={styles.progressBar}
      variant="determinate" value={progression} />
  </div>

    <p className={styles.progressionText}>{progression}%</p>
  </div>
}