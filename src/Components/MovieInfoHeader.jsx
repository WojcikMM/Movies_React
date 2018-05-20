import React, { Component } from 'react'
import CategoryButton from './_CategoryButton';

class MovieInfoHeader extends Component {  
    
    render () {

    const Description = this.props.description===null||this.props.description===""?'Opis filmu nie dostępny...':this.props.description;
        return (
            <div>
                <h2>{this.props.title}</h2>
                <table>
                    <tbody>
                    <tr>
                        <td>Premiera:</td>
                        <td>{this.props.releaseDate}</td>
                    </tr>
                    <tr>
                        <td>Ocena:</td>
                        <td>{this.props.voteAvg}</td>
                    </tr>
                    <tr>
                        <td>Ilość głosów:</td>
                        <td>{this.props.votesCount}</td>
                    </tr>
                    <tr>
                        <td>Kategorie:</td>
                        <td>{
                            this.props.categoriesArray.map(category=> 
                                <CategoryButton key={category.id} id={category.id} name={category.name}/>)
                            }</td>
                    </tr>
                    </tbody>
                </table>
                <p>{Description}</p>
                <img src={`https://image.tmdb.org/t/p/w300/${this.props.posterUrl}`} alt='Movie Poster'/>
            </div>
        )
    }
}

export default MovieInfoHeader;