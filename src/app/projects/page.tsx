
import ProjectCard  from './projectCard';
import styles from './styles.module.css'
import news from './project.json'


export default function Page() {
    

  return <div>
    <h1 className={styles.title} >Projects</h1>
    <div className={styles.columnNews}>
      {
        news.map((oneNew) => (<ProjectCard id={oneNew.id} key={oneNew.id} title={oneNew.title} summary={oneNew.summary}/>))
      }
    </div>

    </div>;
}