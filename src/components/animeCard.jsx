import styles from './grid.module.css';
import { Link } from 'react-router-dom';

export default function ItemCard({serie}){
    return(
    <div className={styles.item}>
        <Link to = {"/detail/" + serie.mal_id}> 
        <img src={serie.images.jpg.image_url} alt={serie.title} className={styles.image}/>
        <p className={styles.score}>{serie.score}</p>
        <p className={styles.title}>{serie.title}</p>
       </Link>
    </div>
    );

}