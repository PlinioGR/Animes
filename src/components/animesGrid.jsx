import styles from './animesGrid.module.css';
import ItemCard from './animeCard';
import { useEffect } from 'react';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useSearchParams } from 'react-router-dom';

export default function AnimesGrid(){
    const [animes, setAnimes] = useState([]);
    const [loading, setLoading] = useState(true);

    let [searchParams, setSearchParams] = useSearchParams();
    
    const query = searchParams.get('search');

    const search =  query
    ? "anime?q=" + query : "top/anime";
 

    useEffect(() => {
        setLoading(true);
        fetch("https://api.jikan.moe/v4/" + search, {
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then(data => {
            setAnimes(data.data);
            setLoading(false);
        });
    }, [search]);


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
