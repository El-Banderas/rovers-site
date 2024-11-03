
import NewCard from './newCard';
import styles from './styles.module.css'
import news from './news.json'

const news1 = [{title: "New 1", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..." }, 
{title: "New 2", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..." }, 
{title: "New 3", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea..." }, 
]

export default function Page() {
    

  return <div className={styles.content}>
    <h1 className={styles.title} >News Page</h1>
    <div className={styles.columnNews}>
      {
        news.map((oneNew) => (<NewCard id={oneNew.id} key={oneNew.id} title={oneNew.title} summary={oneNew.summary}/>))
      }
    </div>

    </div>;
}