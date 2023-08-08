import styles from './searchBar.module.css'
import { AiOutlineSearch } from "react-icons/ai";
export default function SearchBar() {
    return(
        <div className={styles.searchBar}>
            <input type="text" placeholder="Write an anime" name="search" className={styles.search}/>
            <button type="submit"className={styles.button}><AiOutlineSearch/></button>
        </div>
    );
}