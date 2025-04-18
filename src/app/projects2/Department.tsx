import { PhaseListProps  } from "./data";

export default function Department({department} : PhaseListProps) {
    console.log("???")
    console.log(department)
  return <div>
        Department
        {department["phases"][0]["name"]}
        
    </div>;
}