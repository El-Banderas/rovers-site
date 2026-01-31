'use client'

import Image from "next/image";
import styles from "./Contacts.styles.module.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

//import contactUs from '/public/Contact.png'
import contactUs from '/public/Contact.jpg'
import { useRouter } from 'next/navigation'

export default function Contacts() {

    const router = useRouter()
    return (<div className={styles.contacts}>
        <div className={styles.content}>
            <h2>Do you have any questions?<br />Contact us</h2>
            <div className={styles.imageWContacts}>
                <Image
                    src={contactUs}
                    alt="Contact us"
                    width={500}
                    height={400}
                    className={styles.imgContactUs}
                />
                <div className={styles.contactsColumn}>
                    <div>
                        Mail<br />
                        <div className={styles.mailAdress}>
                            <div>
                                taurusspaceprojects</div><div>@gmail.com</div>
                        </div>
                    </div>
                    <div>
                        <div>Social</div>

                        <div className={styles.flexHorizontal}>
                            <div onClick={() => router.push("/instagram")} style={{ cursor: 'pointer' }}>
                                <LinkedInIcon />
                            </div>
                            <div onClick={() => router.push("/linkedin")} style={{ cursor: 'pointer' }}>
                                <InstagramIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
