import Image from 'next/image'
import rocket from '/public/rocket.jpeg'
import chassis from '/public/chassi.png'

export interface Phase {
  name: string;
  progression: number;
  image?: any; // assuming image is a URL
  description: string;
}

// Props interface for the component
export interface PhaseListProps {
  phases: Phase[];
}
const mechanicsPhases : PhaseListProps = {"phases": [
        {
            "name" : "Chassis",
            "progression" : 70,
            "image": chassis,
            "description": "Using slot t-bars, because they are widely available on the market, are light and capable of supporting the necessary loads. Also, the design of the wheel is being decided, based on simulations.",
        },
        {
            "name" : "Arm",
            "progression" : 65,
            "description": "SomethingWe are analyzing the claw in detail and will then move on to an analysis of the reduction systems needed for correct operation, using motors that are weaker in terms of torque and cheaper too."
        },
        {
            "name" : "Drill",
            "progression" : 0,
            "description": "On hold, waiting for the science department to decide between the best options: Suction solution, such as a suction cup; Archimedes screw system"
        },
      ]
    }
const genericListPhases : PhaseListProps = {"phases": [
        {
            "name" : "phase 1",
            "progression" : 25,
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
            "progression" : 85,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut ipsum hendrerit, rhoncus neque sed, tincidunt velit. Sed ultricies a felis quis facilisis. Sed a libero nec augue pharetra consequat."
        }
    ]    
}

export const departments : {[depName : string] : PhaseListProps ;} = {
   "Mechanics" : mechanicsPhases,
   "Eletronics" : genericListPhases,
   "Software" : genericListPhases,
}