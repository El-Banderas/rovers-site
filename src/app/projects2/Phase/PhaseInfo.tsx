import { Phase} from "../data";
import Image from 'next/image'
import styles from './styles.module.css'
import ProgressBar from "@/app/CommonComponents/ProgressBar/ProgressBar";

interface IPhase {
    phase : Phase
} 

export default function Department(props : IPhase) {
    
  return <div className={styles.phase}>
    <div className={styles.left}>

                <h1 className={styles.phaseName}>{props.phase.name}</h1>
                {
                    "image" in props.phase && (
<Image
      src={props.phase.image}
      className={styles.phaseImage}
      alt={props.phase.name}
    />
                    )
                }
    </div>

    <div className={styles.right}>

        
        <ProgressBar progression={props.phase.progression} />
                    <h3>{props.phase.description}</h3>
    </div>
        
    </div>;
}