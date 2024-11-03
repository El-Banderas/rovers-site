import Image from "next/image";
import styles from "./styles.module.css";


import roverLandPage from '/public/roverLandPage.jpg'

export default function Home() {
  return (
    <main >
      <div className={styles.img}>
<Image
              src={roverLandPage}
              alt="Rover img"
              className={styles.vercelLogo}
              priority
            />
  <h1 className={styles.title}>Abous us</h1>
  <h4 className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
</div>
   </main>
  );
}
