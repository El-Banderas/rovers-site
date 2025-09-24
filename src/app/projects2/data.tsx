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
const mechanicsPhases: PhaseListProps = {
    "phases": [
        {
            "name": "Chassis",
            "progression": 70,
            "image": chassis,
            "description": `
             We decided to use slot T-bars due to their wide availability in the market, their lightweight nature, and their ability to support the required loads. 
             To protect the suspension, we decided to use a system with the differential inside the chassis.
             Additionally, the design of the wheels is currently under evaluation, considering the simulation results.
            `,
        },
        {
            "name": "Robotic Arm",
            "progression": 60,
            "description": `
            We are analyzing the claw in detail, considering many available options, and the main objective is hold objects.
            The main restriction relative to the arm is the lower motor power.
            `
        },
        {
            "name": "Drill",
            "progression": 35,
            "description": `
            The drill development is on hold, because we are waiting for the science department to decide between the best options: 
            suction solution, such as a suction cup, 
            or an archimedes screw system.`
        },

        {
            "name": "Drill",
            "progression": 50,
            "description": `
            Missing.
            `
        }
    ]
}
const Software: PhaseListProps = {
    "phases": [
        {
            "name": "GNC",
            "progression": 10,
            "description": `
            Não sei o que é.
            `,
        },

        {
            "name": "HMI",
            "progression": 20,
            "description": `
            Não sei o que é.
            `,
        },
    ]
}

const genericListPhases: PhaseListProps = {
    "phases": [
        {
            "name": "phase 1",
            "progression": 25,
            "description": "É suposto meter aqui, ou meto só disabled?"
        },
        
    ]
}

export const departments: { [depName: string]: PhaseListProps; } = {
    "Mechanics": mechanicsPhases,
    "Eletronics": genericListPhases,
    "Software": genericListPhases,
}

export const description = `
Our current project is the rover xxx, that will be used in contests. It's construction is divided by some departments.
Some parts are awaiting for supplies from our partners and sponsors.
`