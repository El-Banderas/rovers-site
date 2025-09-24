
import FADJP from '/public/partners/FADJP.png'
import NEEEICUM from '/public/partners/neeeicum.png'
import MESCC from '/public/partners/MESCC.jpg'
import N_EC from '/public/partners/N3EC.jpeg'

import Mauser from '/public/sponsors/Mauser.png'
import Norelem from '/public/sponsors/Norelem.png'
import PORMECALU from '/public/sponsors/PORMECALU.png'

const type = new Set<string>(['partners', 'sponsors']);

export interface Partner {
    name: string;
    url: string;
    image: any;
}
const url = "https://www.google.com"
export const partners: Partner[] = [
    {
        "name": "FADJP",
        "url": "https://fajdp.pt/",
        "image": FADJP
    },
    {
        "name": "NEEEICUM",
        "url": "https://neeeicum.dei.uminho.pt/",
        "image": NEEEICUM,
    },
    {
        "name": "MESCC",
        "url": "https://www.linkedin.com/company/mescc-isep/",
        "image": MESCC
    },
    {
        "name": "N3EC",
        "url": "https://n3ec.dee.isep.ipp.pt/",
        "image": N_EC,
    },
]

export interface SponsorInfo {
    color: string;
    partners: Partner[];
}

export const sponsors: { [level: string]: SponsorInfo } = {
    "Horizon": {
        color: "yellow",
        partners: [
            {
                "name": "Robert Mauser",
                "url": "https://mauser.pt/",
                "image": Mauser
            },
            {
                "name": "Norelem",
                "url": "https://norelem.es/pt/",
                "image": Norelem
            },
        ]
    },
    "Meridian": {
        color: "grey",
        partners: [
        {
            "name": "PORMECALU",
            "url": "https://pormecalu.com/",
            "image": PORMECALU
        },
    ]},
    "bronze": {
        color: "orange",
        partners: [
        {
            "name": "S4",
            "url": url,
            "image": NEEEICUM
        },

    ]}
}
