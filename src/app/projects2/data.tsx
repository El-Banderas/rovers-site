import Image from 'next/image'
import rocket from '/public/rocket.jpeg'

interface Phase {
  name: string;
  progression: number;
  image?: any; // assuming image is a URL
  description: string;
}

// Props interface for the component
export interface PhaseListProps {
  phases: Phase[];
}

const genericListPhases : PhaseListProps = {"phases": [
        {
            "name" : "phase 1",
            "progression" : 75,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ipsum hendrerit, rhoncus neque sed, tincidunt velit. Sed ultricies a felis quis facilisis. Sed a libero nec augue pharetra consequat."
        },
        {
            "name" : "phase 2",
            "progression" : 75,
            "image": rocket,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ipsum hendrerit, rhoncus neque sed, tincidunt velit. Sed ultricies a felis quis facilisis. Sed a libero nec augue pharetra consequat."
        },
        {
            "name" : "phase 3",
            "progression" : 75,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ipsum hendrerit, rhoncus neque sed, tincidunt velit. Sed ultricies a felis quis facilisis. Sed a libero nec augue pharetra consequat."
        }
    ]    
}

export const departments : {[depName : string] : PhaseListProps ;} = {
   "Mechanics" : genericListPhases,
   "Eletronics" : genericListPhases,
   "Software" : genericListPhases,
}