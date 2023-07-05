import styles from './grid.module.css';
import { Link } from 'react-router-dom';

export default function ItemCard({anime}){
    return(
    <div className={styles.item}>
        <Link to = {"/detail/" + anime.mal_id}> 
        <img src={anime.images.jpg.image_url} alt={anime.title} className={styles.image}/>
        <p className={styles.score}>{anime.score}</p>
        <p className={styles.title}>{anime.title}</p>
       </Link>
    </div>
    );

}