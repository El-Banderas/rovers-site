import Image from "next/image";
import styles from "./page.module.css";
import AboutUs from "./mainPage/AboutUs";
import Contacts from "./mainPage/Contacts";


import roverLandPage from '/public/roverLandPage.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
<Image
              src={roverLandPage}
              alt="Rover img"
              className={styles.vercelLogo}
              width={0}
  height={0}
  style={{ width: '99vw'}} // optional
              priority
            />

            <AboutUs />
            <Contacts />
   </main>
  );
}
