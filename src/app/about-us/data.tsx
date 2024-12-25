
import person from '/public/Person.jpg'

export interface Person {
  name: string;
  photo: any;
}

export const departments = [
    {
        "title": "Mechanics Department",
        "responsabilities": [
            "Responsible for the dynamics, kinematics, simulation and development of the robotic arm;",
            "Focus on the mechanical and structural design of the robotic explorers (chassis & suspension);",
            "Development of a sampler for drilling and extraction of regolith."
        ],
        "people": [{
            "name": "José Miguel Ferreira Morete da Silva Raposo",
            "photo": person
        },
        {
            "name": "Gabriel Ferreira Ribeiro",
            "photo": person
        },

        {
            "name": "Guilherme Cardoso Costa Santos",
            "photo": person
        },
        {
            "name": "Miguel Brás Batista",
            "photo": person
        },
        {
            "name": "Tiago Filipe Ribeiro Santos",
            "photo": person
        }]
    },
    {
        "title": "Eletronics Department",
        "responsabilities": [
            "Integration and development of electronics, CAD designs and sensor systems;",
            "Responsible for the rover's power suppliage;",
            "Development of communication systems, ensuring reliable data transmission."
        ],
        "people": [{
            "name": "Ângelo José Couto Pinheiro",
            "photo": person
        }]
    },
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
            "name": "Tiago Alexandre Sousa de Sá Pereira",
            "photo": person
        },
            {
            "name": "Diogo Manuel Brito Pires",
            "photo": person
        },
            {
            "name": "Guilherme André Martins Zenha",
            "photo": person
        },
            {
            "name": "Luís Miguel Pinto da Cunha",
            "photo": person
        },
            {
            "name": "Ricardo Lopes Araújo",
            "photo": person
        },
    ]
    },
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
            "name": "João Miguel Rodrigues Mirra",
            "photo": person
        },
     
            {
            "name": "Ana Isabel Coelho de Oliveira",
            "photo": person
        },
            {
            "name": "André Emanuel da Silva",
            "photo": person
        },
            {
            "name": "Arlindo Dinis Pereira de Carvalho",
            "photo": person
        },
            {
            "name": "Maria João Ferreira Rocha",
            "photo": person
        },
            {
            "name": "Tiago Ricardo Coelho Alves",
            "photo": person
        }],
    }
]

