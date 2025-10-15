import { Phase, PhaseListProps  } from "./data";
import PhaseInfo from './Phase/PhaseInfo'
import styles from './styles.module.css'

interface IDepartment {
    department : PhaseListProps
} 

export default function Department(props : IDepartment) {
  return <div className={styles.gap}>
        {
            props.department.phases.map((phase :Phase ) => (
                <PhaseInfo key={phase.name} phase={phase} />
            ))
        }
        
    </div>;
}