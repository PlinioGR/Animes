import styles from './grid.module.css';
import ItemCard from './animeCard';
import { useEffect } from 'react';
import { useState } from 'react';

export default function AnimesGrid(){
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime", {
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then(data => {
            setAnimes(data.data);
        });
    }, []);

    if(animes){

        return(
            <div className={styles.container}>
                {animes.map((anime) => (
                    <ItemCard anime={anime} />
                ))}
                
            </div>
        );
    }
}
