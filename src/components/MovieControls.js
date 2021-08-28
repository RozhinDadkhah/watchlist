import React, { useContext } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { GlobalContext } from '../context/GlobalState'

const MovieControls = ({ movie, type }) => {

    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatch } = useContext(GlobalContext)

    return (
        <div className='inner-card-controls'>
            {type === 'watchlist' && (
                <>
                    <button className='ctrl-btn'
                        onClick={() => addMovieToWatched(movie)}
                    >
                        <AiFillEye />
                    </button>
                    <button className='ctrl-btn'
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >
                        <FaTimes />
                    </button>
                </>
            )}

            {type === 'watched' &&
                (
                    <>
                        <button className='ctrl-btn'
                            onClick={() => moveToWatchlist(movie)}
                        >
                            <AiFillEyeInvisible />
                        </button>
                        <button className='ctrl-btn'
                            onClick={() => removeFromWatch(movie.id)}
                        >
                            <FaTimes />
                        </button>
                    </>
                )}
        </div>
    )
}

export default MovieControls
