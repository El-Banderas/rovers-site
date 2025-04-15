
import styles from './styles.module.css'
import news from './project.json'
import Images from './Images/Images'

export default function Page() {
    

  return <div>
    <h1 className={styles.title} >Current Project</h1>
    <Images />
    

    </div>;
}