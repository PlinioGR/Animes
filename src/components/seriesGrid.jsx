import styles from './grid.module.css';
import ItemCard from './animeCard';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SeriesGrid(){
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime", {
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then(data => {
            setSeries(data.data);
        });
    }, []);

    return(
        <div className={styles.container}>
            {series.map((serie) => (
                <ItemCard serie={serie} />
            ))}
            
        </div>
    );
}
