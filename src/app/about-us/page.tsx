import Image from "next/image";
import styles from "./styles.module.css";
import Graph from "./graph"
import Department from "./department"


import roverLandPage from '/public/roverLandPage.jpg'
import ImageWText from "../CommonComponents/ImageWText/ImageWText";

export default function Home() {
  return (
    <main className={styles.fullPage} >
      
      <ImageWText image={roverLandPage} title="About us" description="Lorem Ipsum is simply dummy text" />
     
    <Graph/>
    <Department/>
   </main>
  );
}
