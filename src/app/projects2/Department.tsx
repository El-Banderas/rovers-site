import { Phase, PhaseListProps  } from "./data";
import PhaseInfo from './Phase/PhaseInfo'

interface IDepartment {
    department : PhaseListProps
} 

export default function Department(props : IDepartment) {
  return <div>
        {
            props.department.phases.map((phase :Phase ) => (
                <PhaseInfo key={phase.name} phase={phase} />
            ))
        }
        
    </div>;
}