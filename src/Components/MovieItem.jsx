import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../Styles/movie-item.css'

class MovieItem extends Component {
    getPosterUrl(){
        return `https://image.tmdb.org/t/p/w300/${this.props.posterUrl}`
    }

    render () {
        
        return (
                 <div className='flip-container'>
                    <div className='flipper'>
                            <img src={this.getPosterUrl()} alt="undefined poster" className="front"/>
                            <div className="back">
                                    <h3>{this.props.title}</h3>
                                    <p>{this.props.startDate}</p>
                                    <p>{this.props.descriptionString}</p>
                                    <Link to={`/details/${this.props.id}`} href={`/movie/${this.props.id}`}>
                                    Details
                                    </Link>
                            </div>
                    </div>
                 </div>
        )
    }
}

export default MovieItem