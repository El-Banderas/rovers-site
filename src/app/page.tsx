import Image from "next/image";
import styles from "./page.module.css";
import AboutUs from "./mainPage/AboutUs";
import Contacts from "./mainPage/Contacts";

import mainPage from '/public/MainPage_LQ.jpg'
import ImageWText from "./CommonComponents/ImageWText/ImageWText";



export default function Home() {
  return (
    <main className={styles.main}>
      <ImageWText image={mainPage} title="Where Strength meets the stars" />

            <AboutUs />
            <Contacts />
   </main>
  );
}
