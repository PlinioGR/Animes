import styles from './animeDetail.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function AnimeDetail(){
    const { animeId } = useParams();
    const [anime, setAnime] = useState([]);

    useEffect(() => {
        fetch("https://api.jikan.moe/v4/anime/" + animeId, {
            headers: {
                "Content-Type" : "application/json;charset=utf-8",
            },
        }).then((result) => result.json()).then(data => {
            setAnime(data.data);
        });
    }, []);

    if (anime.length !== 0 ){
    return(
        <div className={styles.content}>
            <img src={anime.images.jpg.image_url} alt={anime.title} className={styles.image}/>
            <h2>{anime.title}</h2> 
            <p><b>Year: </b>{anime.year}</p>
            <p><b>Score: </b>{anime.score}</p>
            <p><b>Type: </b>{anime.type}</p>
            <p><b>Genres: </b>{anime.genres.map(genre => {
                return genre.name+", "
            })}</p>
            <p><b>Episodes: </b>{anime.episodes}</p>
            <p><b>Duration: </b>{anime.duration}</p>
            <p><b>Status: </b>{anime.status}</p>
        
            <h4>Synopsis</h4>
            <p>{anime.synopsis}</p>
        </div>
        );
    }

}