import SearchBar from './searchBar';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link to = {"/"} className={styles.title}> 
                <h1>Anime library</h1>
            </Link>
        <div className={styles.searchBar}>
            <SearchBar />
        </div>
        </header>
    )
}