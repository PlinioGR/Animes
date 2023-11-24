import styles from './animeDetail.module.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { getAnime } from '../utils/httpClient';

export default function AnimeDetail(){
    const { animeId } = useParams();
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const path = "anime/" + animeId;
        getAnime(path).then(data => {
            setAnime(data.data);
            setLoading(false);
        });
        
    }, [animeId]);

    if(loading){
        return(
            <div className={styles.loader}> 
                <ClipLoader
                    color="#ffffff"
                    size={70}
                />
            </div>
        );
    }

    if (anime.length !== 0 ){
    return(
        <div className={styles.content}>
            <div>
                <img src={anime.images.jpg.image_url} alt={anime.title} className={styles.image}/>
                <h2>{anime.title}</h2> 
            </div>
            <div>
                <p><b>Year: </b>{anime.year}</p>
                <p><b>Score: </b>{anime.score}</p>
                <p><b>Type: </b>{anime.type}</p>
                <p><b>Genres: </b>
                    {anime.genres.map((genre, index, array) => {

                        if(index === array.length - 1){
                            return genre.name;
                        }
                        else{
                            return genre.name+", ";
                        }
                        
                    })}
                </p>
                <p><b>Episodes: </b>{anime.episodes}</p>
                <p><b>Duration: </b>{anime.duration}</p>
                <p><b>Status: </b>{anime.status}</p>
            
                <h4>Synopsis</h4>
                <p>{anime.synopsis}</p>
            </div>
            
        </div>
        );
    }

}