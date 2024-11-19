import Image from "next/image";
import styles from "./page.module.css";
import AboutUs from "./mainPage/AboutUs";
import Contacts from "./mainPage/Contacts";

import roverLandPage from '/public/roverLandPage.jpg'
import ImageWText from "./CommonComponents/ImageWText/ImageWText";



export default function Home() {
  return (
    <main className={styles.main}>
      <ImageWText image={roverLandPage} title="Where Strenght meets the stars" />

            <AboutUs />
            <Contacts />
   </main>
  );
}
