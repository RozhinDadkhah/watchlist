import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)


    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);


    // action
    const addMovieToWatchedList = movie => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
    }

    const addMovieToWatched = (movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
    }

    const moveToWatchlist = (movie) => {
        dispatch({ type: 'MOVIE_TO_WATCHLIST', payload: movie });
    }

    const removeFromWatch = (id) => {
        dispatch({ type: 'REMOVE_FROM_WATCH', payload: id })
    }
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchedList,
                removeMovieFromWatchlist,
                addMovieToWatched,
                moveToWatchlist,
                removeFromWatch
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}