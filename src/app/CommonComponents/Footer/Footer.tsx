'use client'
import * as React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation'
import styles from "./Footer.styles.module.css";
import whiteLogo from '/public/Icon_logo_azul_dourado.png'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {

  const router = useRouter()

  return (
    <div className={styles.footer}>
<Image
            src={whiteLogo}
            alt="Logo"
            width={700}
            height={500}
            className={styles.imgWhiteLogo}
          />
            <div className={styles.aboveHorizontalLine}>
          

        <div className={styles.verticalFlex}>
          <h1 className={styles.lessVerticalPadding}>Taurus Space</h1>
          <p className={styles.lessVerticalPadding}>Where Strength meets the stars</p>
        </div>

        <div className={styles.verticalFlexCenter}>
          <h4 className={styles.othersLinks} onClick={() => router.push("/")}>Home</h4>
          <h4 className={styles.othersLinks} onClick={() => router.push("/about-us")}>About us</h4>
          <h4 className={styles.othersLinks} onClick={() => router.push("/contacts")}>Contacts</h4>
        </div>
        <div className={styles.verticalFlexRight}>
          <h4>Follow Taurus Space</h4>
          <div className={styles.horizontalFlex}>
          <div onClick={() => window.location.replace("https://www.linkedin.com/company/taurus-space/")} style={{ cursor: 'pointer' }}>
            <LinkedInIcon />
          </div>
          <div onClick={() => window.location.replace("https://www.instagram.com/taurusspaceprojects/")} style={{ cursor: 'pointer' }}>
            <InstagramIcon />
          </div>
 
          </div>
        </div>

      </div>

        <hr className={styles.hr} />
        <div className={styles.copyright}>
        Taurus Space  © 2024
        </div>
    </div>
  );

}