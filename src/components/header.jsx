import SearchBar from './searchBar';
import styles from './header.module.css';

export default function Header(){
    return(
        <header>
        <div className={styles.title}>
            <h1>Anime library</h1>
        </div>
        <div className={styles.searchBar}>
            <SearchBar />
        </div>
        </header>
    )
}