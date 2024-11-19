import Image from "next/image";
import { Metadata } from 'next';
import styles from "./page.module.css";
import AboutUs from "./mainPage/AboutUs";
import Contacts from "./mainPage/Contacts";

import roverLandPage from '/public/roverLandPage.jpg'
import ImageWText from "./CommonComponents/ImageWText/ImageWText";

export const metadata: Metadata = {
  title: 'Taurus Space',
  description:
    'Where Strenght meets the stars',
};


export default function Home() {
  return (
    <main className={styles.main}>
      <ImageWText image={roverLandPage} title="Where Strenght meets the stars" />

            <AboutUs />
            <Contacts />
   </main>
  );
}
