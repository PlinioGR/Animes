import styles from './grid.module.css';
import ItemCard from './animeCard';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export default function AnimesGrid(){
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/top/anime", {
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then(data => {
            setAnimes(data.data);
            setLoading(false);
        });
    }, []);


    if(loading){
        return(
            <div className={styles.containerSpinner}>
                <ClipLoader
                    color="#ffffff"
                    size={70}
                />
            </div>
        );
    }

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
