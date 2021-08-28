import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const ResultCard = ({ movie }) => {

    const { addMovieToWatchedList, watchlist, watched, addMovieToWatched } = useContext(GlobalContext)

    let storedMovie = watchlist.find((o) => o.id === movie.id)
    let storedMovieWatched = watched.find((o) => o.id === movie.id)

    const watchedlistDisabled = storedMovie ? true : storedMovieWatched ? true : false;

    const watchedDisabled = storedMovieWatched ? true : false;

    return (
        <div className='result-card'>
            <div className='poster-wrapper'>
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`}
                    />
                ) : (
                    <div className='filler-poster'></div>
                )}
            </div>
            <div className='info'>
                <div className='header'>
                    <h3 className='title'>{movie.title}</h3>
                    <h4 className='release-date'>
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>
                <div className='controls'>
                    <button
                        className='btn'
                        onClick={() => addMovieToWatchedList(movie)}
                        disabled={watchedlistDisabled}
                    >
                        Add to watchList
                    </button>
                    <button
                        className='btn'
                        onClick={() => addMovieToWatched(movie)}
                        disabled={watchedDisabled}
                    >
                        Add to watched
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ResultCard
