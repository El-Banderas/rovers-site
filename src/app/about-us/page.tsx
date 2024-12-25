import Image from "next/image";
import styles from "./styles.module.css";
import Graph from "./graph"
import Department from "./department"
import {departments} from './data'


import firstImg from '/public/AboutUs.jpg'
import ImageWText from "../CommonComponents/ImageWText/ImageWText";

export default function Home() {
  
  return (
    <main className={styles.fullPage} >
      
      <ImageWText image={firstImg} title="About us" description="Lorem Ipsum is simply dummy text" />
     
    <Graph/>
    {departments.map(department =>  

    <Department key={department.title} title={department.title} responsabilities={department.responsabilities} people={department.people}/>
    )}
   </main>
  );
}
