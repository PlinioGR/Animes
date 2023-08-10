import { useState } from 'react';
import { Form, useNavigate } from "react-router-dom";
import styles from './searchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/?search=' + searchText);

    };

    return(
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input type="text" placeholder="Write an anime" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className={styles.search}/>
            <button type="submit" className={styles.button}><AiOutlineSearch/></button>
        </form>
       
    );
}