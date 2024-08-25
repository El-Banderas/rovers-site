'use client'

import Image from "next/image";
import styles from "./Contacts.styles.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import { useRouter } from 'next/navigation'

export default function Contacts() {

  const router = useRouter()
    return (<div className={styles.contacts}>
        <div className={styles.content}>
            <h1>Do you have any questions?<br />Contact us</h1>
            <div className={styles.flexHorizontal}>
                <Image
                    src="/Contact.png"
                    alt="Contact us"
                    width={600}
                    height={400}
                />
                <div className={styles.contactsColumn}>
                    <div>
                        Phone<br />999 999 999
                    </div>
                    <div>
                        Mail<br />hello@reallygreatsite.com
                    </div>
                    <div></div>
                    <div>Social</div>

                    <div className={styles.flexHorizontal}>
                        <div onClick={() => router.push("/instagram")} style={{cursor: 'pointer'}}>
                            <LinkedInIcon />
                        </div>
                        <div onClick={() => router.push("/linkedin")} style={{cursor: 'pointer'}}>
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
