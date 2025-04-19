import { Phase} from "../data";
import Image from 'next/image'
import LinearProgress from '@mui/material/LinearProgress';
import styles from './styles.module.css'

interface IPhase {
    phase : Phase
} 

export default function Department(props : IPhase) {
    
  return <div className={styles.phase}>
    <div className={styles.left}>

                <h1>{props.phase.name}</h1>
                {
                    "image" in props.phase && (
<Image
      src={props.phase.image}
      style={{
        width: '70%',
        height: 'auto',
      }}
      alt={props.phase.name}
    />
                    )
                }
    </div>

    <div className={styles.right}>

        
                          <LinearProgress variant="determinate" value={props.phase.progression} />
                    <h1>{props.phase.description}</h1>
    </div>
        
    </div>;
}