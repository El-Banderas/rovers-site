
import person from '/public/Person.jpg'

export interface Person {
  name: string;
  photo: any;
}

export const departments = {
   "Mechanics Department" : {
        "title": "Mechanics Department",
        "responsabilities": [
            "Responsible for the dynamics, kinematics, simulation and development of the robotic arm;",
            "Focus on the mechanical and structural design of the robotic explorers (chassis & suspension);",
            "Development of a sampler for drilling and extraction of regolith."
        ],
        "people": [{
            "name": "José Raposo",
            "photo": person
        },
        {
            "name": "Gabriel Ribeiro",
            "photo": person
        },

        {
            "name": "Guilherme Santos",
            "photo": person
        },
        {
            "name": "Miguel Batista",
            "photo": person
        },
        {
            "name": "Tiago Santos",
            "photo": person
        }]
    },
    
        "Eletronics Department": {
        "title": "Eletronics Department",
        "responsabilities": [
            "Integration and development of electronics, CAD designs and sensor systems;",
            "Responsible for the rover's power suppliage;",
            "Development of communication systems, ensuring reliable data transmission."
        ],
        "people": [{
            "name": "Ângelo Pinheiro",
            "photo": person
        }]
    },
        "Software Department" :
    {
        "title": "Software Department",
        "responsabilities": [
            "Responsible for the low-level embedded software, RTOS integration, data filtering and estimation;",
"Creation of simulation environments, HMI applications, the robotic middleware and some conceptual art, if needed;",
"Development artificial intelligence algorithms and machine learning models;",
"Development of the official Taurus Space website."
        ],
        "people": [
            {
            "name": "Tiago Pereira",
            "photo": person
        },
            {
            "name": "Diogo Pires",
            "photo": person
        },
            {
            "name": "Guilherme Zenha",
            "photo": person
        },
            {
            "name": "Luís Cunha",
            "photo": person
        },
            {
            "name": "Ricardo Araújo",
            "photo": person
        },
    ]
    },

        "Business Department":
{
        "title": "Business Department",
        "responsabilities": [
"Management of the organization’s budget, financial planning and resource allocation;",
"Handling the organization’s online presence, public relations and partnerships.",
"Organization of events and coordination of the team's participation in various activities;",
"Responsible for coordinating storage and distribution of materials and equipment. Management of Taurus Space's schedule to support all activities."
        ],
        "people": [
            {
            "name": "João Mirra",
            "photo": person
        },
     
            {
            "name": "Ana Oliveira",
            "photo": person
        },
            {
            "name": "André Silva",
            "photo": person
        },
            {
            "name": "Arlindo Carvalho",
            "photo": person
        },
            {
            "name": "Maria Rocha",
            "photo": person
        },
            {
            "name": "Tiago Alves",
            "photo": person
        }],
    }
}

export interface IChapter {
  text: string
  points?: string[]
  pointsWHeaders?: string[][]
}
export const texts : { [title: string] : IChapter; } = {
    "???": {
        "text" : "Taurus Space is a youth-driven team dedicated to undertaking projects aimed at competition and/or research and investigation. Our mission extends beyond creating physical projects related to autonomous systems for space and defense; we can also tackle conceptual projects that push the boundaries of innovation and technology. By engaging in both practical and theoretical work, we aim to foster a comprehensive understanding of advanced systems among our members, preparing them for future challenges in the aerospace and defense industries.",
    },
    "Objectives": {
        "text": "Our team aims to fully develop, build, and deploy autonomous systems for space and defense applications. Our flagship project is a rover, named Zenith, which we aim to complete in 2 years. Throughout the development of our robotic systems, we intend to publish papers and articles regarding our approaches and considerations. We aim to participate in international competitions as well as use our products for field tests.",
    },
    "Mission": {
        "text": "Our mission is to inspire innovation and optimization for the sake of technological development and advancement. By gathering a team of young adults and students, we also aim to inspire proactivity within the youth as well as a fascination for space and extraterrestrial exploration. By measuring the impact of our project through the metrics of performance in competitions, partnerships formed, and the overall engagement of the youth in our projects, we intend to continuously improve our robotic systems and, when the time comes, embark on new challenges.",
    },
    "Vision": {
        "text": "Our vision is to spearhead student- and young adult-driven initiatives in Portugal for developing advanced robotic explorers and autonomous systems while also establishing a significant impact across Europe. Through our collective efforts, we envision a future where:",
        "points" : [
            "Our partnerships with industry leaders, educational and scientific institutions provide an ecosystem of innovation and advancements;",
            "Our creative and innovative approaches set new benchmarks for problem-solving in robotic space systems;",
            "Our research papers contribute a continuous stream of new studies and hold international relevance."
        ]
    },
    "Values": {
        "text": "Taurus Space's values can be summarized in the following points:",
        "pointsWHeaders" : [
            ["Professionalism", " We uphold the highest standards of professionalism in every aspect of our work, ensuring reliability and integrity."],
            ["Excellence", " We strive for excellence in all our endeavors, pushing the boundaries of what is possible."],
            ["Prestige", " Being the only Portuguese team focused on building autonomous systems for space and defense, our ambition drives us to explore new frontiers and achieve groundbreaking innovations."],
            ["Commitment", " We believe in the power of collaboration and compromise, working together to reach our common goals."],
            ["Robustness", " Our focus on robustness ensures that our solutions are resilient, reliable, and capable of withstanding any challenge without fail."],
        ]
    }
}