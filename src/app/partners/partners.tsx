
import partner1 from '/public/partner1.jpg'
import partner2 from '/public/partner2.png'

const type = new Set<string>(['partners', 'sponsors']);

export interface Partner {
  name: string;
  url: string;
  image: any;
}
export const partners : Partner[]  = [
 {
    "name" : "P1",
            "url" : "www.google.com",
            "image" : partner1
        },
         {
    "name" : "P2",
            "url" : "www.google.com",
            "image" : partner2
        },
         {
    "name" : "P3",
            "url" : "www.google.com",
            "image" : partner1
        },
         {
    "name" : "P4",
            "url" : "www.google.com",
            "image" : partner2
        },
         {
    "name" : "P5",
            "url" : "www.google.com",
            "image" : partner1
        }
]

export const sponsors : {[level : string] : Partner[]} ={
        "Gold" : [
            {
            "name" : "S1",
            "url" : "www.google.com",
            "image" : partner1
        },
         {
            "name" : "S2",
            "url" : "www.google.com",
            "image" : partner1
        },
    ]    
}
