import React, { Component } from 'react';
import PropTypes from "prop-types";
import ENV from '../config'
import MovieInfoHeader from './MovieInfoHeader';
import CastContainer from './_CastContainer';

class Details extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  constructor(props, context) {
     super(props, context);
     this.state={movieDetails:null}
  }

  componentDidMount(){
    console.log(ENV.Config.movieApi.pre_url)
    console.log(process.env.REACT_APP_NODE_ENV)
    fetch(`${ENV.Config.movieApi.pre_url}movie/${this.props.match.params.id}?append_to_response=credits&${ENV.Config.movieApi.after_url}`)
    .then(res => res.json())
    .then(json=>this.setState({movieDetails: json}))
    .catch(error=> console.dir('Upps Coś poszło nie tak...',error))
}

//  componentDidUpdate(){
//    console.log(this.state.movieDetails)
//  }


  render() {
    const result = this.state.movieDetails;
    return (
      <div className="container">
      {result && <MovieInfoHeader title={result.title} releaseDate={result.release_date} voteAvg={result.vote_average} votesCount={result.vote_count} categoriesArray={result.genres} description={result.overview} posterUrl={result.poster_path} />}
    {result&& <CastContainer castArray={result.credits.cast} />}
    </div>
    );
  }
}
export default Details;