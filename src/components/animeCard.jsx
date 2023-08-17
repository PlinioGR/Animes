import styles from './animesGrid.module.css';
import { Link } from 'react-router-dom';

export default function ItemCard({anime}){
    return(
    <div className={styles.item}>
        <Link to = {"/anime/" + anime.mal_id} className={styles.link}> 
        <img src={anime.images.jpg.image_url} alt={anime.title} className={styles.image}/>
        <p className={styles.score}>{anime.score}</p>
        <p className={styles.title}>{anime.title}</p>
       </Link>
    </div>
    );

}