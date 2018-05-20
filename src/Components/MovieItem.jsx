import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class MovieItem extends Component {
    getPosterUrl(){
        return `https://image.tmdb.org/t/p/w300/${this.props.posterUrl}`
    }

    render () {
        return (
            <div>
              <Link to={`/details/${this.props.id}`} className="movieLink" href={`/movie/${this.props.id}`}>
                <img src={this.getPosterUrl()} 
                alt="undefined poster" 
                className="imgResponsive"/>
                     <div className="movieInfo">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.startDate}</p>
                    </div>
             </Link>
            </div>
        )
    }
}

export default MovieItem