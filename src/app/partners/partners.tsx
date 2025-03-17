
import partner1 from '/public/partner1.jpg'
import partner2 from '/public/partner2.png'

const type = new Set<string>(['partners', 'sponsors']);

export interface Partner {
    name: string;
    url: string;
    image: any;
}
const url = "https://www.google.com"
export const partners: Partner[] = [
    {
        "name": "P1",
        "url": url,
        "image": partner1
    },
    {
        "name": "P2",
        "url": url,
        "image": partner2
    },
    {
        "name": "P3",
        "url": url,
        "image": partner1
    },
    {
        "name": "P4",
        "url": url,
        "image": partner2
    },
    {
        "name": "P5",
        "url": url,
        "image": partner1
    }
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
                "image": partner1
            },
            {
                "name": "S2",
                "url": url,
                "image": partner2
            },
        ]
    },
    "silver": {
        
        color: "grey",
        partners: [
        {
            "name": "S3",
            "url": url,
            "image": partner1
        },
        {
            "name": "S4",
            "url": url,
            "image": partner2
        },
    ]},
    "bronze": {
        color: "orange",
        partners: [
        {
            "name": "S4",
            "url": url,
            "image": partner1
        },
        {
            "name": "S5",
            "url": url,
            "image": partner2
        },
{
            "name": "S6",
            "url": url,
            "image": partner1
        },
        {
            "name": "S7",
            "url": url,
            "image": partner2
        },
    ]}
}
