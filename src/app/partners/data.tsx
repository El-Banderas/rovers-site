
import FADJP from '/public/partners/FADJP.png'
import NEEEICUM from '/public/partners/neeeicum.png'
import MESCC from '/public/partners/MESCC.jpg'
import N_EC from '/public/partners/N3EC.jpeg'

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
    "gold": {
        color: "yellow",
        partners: [
            {
                "name": "S1",
                "url": url,
                "image": NEEEICUM
            },
            {
                "name": "S2",
                "url": url,
                "image": NEEEICUM
            },
        ]
    },
    "silver": {
        
        color: "grey",
        partners: [
        {
            "name": "S3",
            "url": url,
            "image": NEEEICUM
        },
        {
            "name": "S4",
            "url": url,
            "image": N_EC
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
        {
            "name": "S5",
            "url": url,
            "image": N_EC
        },
{
            "name": "S6",
            "url": url,
            "image": NEEEICUM
        },
        {
            "name": "S7",
            "url": url,
            "image": N_EC
        },
    ]}
}
