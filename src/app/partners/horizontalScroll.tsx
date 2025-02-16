
import styles from './scroll.module.css'
import Image from "next/image";

import {partners} from './partners'

export default function HorizontalScroll() {
  return <div className={styles.scroll}>

      {partners.map(partner =>
        <div key={partner.name} className={styles.partner } >
            {partner.name}
 <Image
        src={partner.image}
        alt={partner.name}
        width={170}
        height={170}
        className={styles.imgLeader}
      />
        </div>
      )
      }
    </div>;
}