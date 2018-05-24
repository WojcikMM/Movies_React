import React from 'react'
import MovieItem from './MovieItem';
import '../Styles/movie-container.css'

// const noneDescriptionTextPL ='Niestety nie mamy jeszcze opisu dla tego filmu, postaramy się naprawić to jak najszybciej...';
const noneDescriptionTextEN ='Unfortunately, we do not have a description for this movie yet, we will try to fix it as soon as possible ...';

const MoviesContainer = (properties) =>{

    return (
        <div>
           {properties.films.map(film => {
            return   <MovieItem key={film.id} id={film.id} posterUrl={film.poster_path.toString()}      title={film.title} startDate={film.release_date} 
            descriptionString={`${film.overview.length>0 ?film.overview.substring(0,250) : noneDescriptionTextEN}  ${film.overview.length>200?'...':''}`}/>
           })}
        </div>
    )
}
export default MoviesContainer