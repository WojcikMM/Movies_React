import React from 'react'
import MovieItem from './MovieItem';

const MoviesContainer = (properties) =>{
    return (
        <div>
           {properties.films.map(film => {
               console.log()
            return   <MovieItem key={film.id} id={film.id} posterUrl={film.poster_path.toString()} title={film.title} startDate={film.release_date}/>
           })}
        </div>
    )
}
export default MoviesContainer