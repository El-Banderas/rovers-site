import Image from "next/image";
import styles from "./styles.module.css";
import SelectDpt from "./Departments/SelectDep"
import TextPart  from "./textPart/textPart"
import {departments} from './data'


import firstImg from '/public/AboutUs.jpg'
import ImageWText from "../CommonComponents/ImageWText/ImageWText";

export default function Home() {
  
  return (
    <main className={styles.fullPage} >
      
      <ImageWText image={firstImg} title="About us" description="Lorem Ipsum is simply dummy text" />
     
    <TextPart/>
     <SelectDpt />
   </main>
  );
}
