import styles from './grid.module.css';

export default function ItemCard({serie}){
    return(
    <div className={styles.item}>
        <img src={serie.images.jpg.image_url} alt={serie.title} className={styles.image}/>
         <p className={styles.score}>{serie.score}</p>
        <p className={styles.title}>{serie.title}</p>
       
    </div>
    );

}