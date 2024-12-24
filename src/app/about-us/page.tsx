import Image from "next/image";
import styles from "./styles.module.css";
import Graph from "./graph"
import Department from "./department"


import firstImg from '/public/AboutUs.jpg'
import ImageWText from "../CommonComponents/ImageWText/ImageWText";

export default function Home() {
  return (
    <main className={styles.fullPage} >
      
      <ImageWText image={firstImg} title="About us" description="Lorem Ipsum is simply dummy text" />
     
    <Graph/>
    <Department responsabilities={[]}/>
   </main>
  );
}
