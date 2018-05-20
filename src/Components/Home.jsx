import React, { Component } from 'react'
import SearchBox from './_SearchBox';
import '../Styles/App.css'
import MoviesContainer from './_MoviesContainer';



class Home extends Component {

 
  constructor(props){
    super(props);
    this.state ={ popularFilmArray:[]}
}

componentDidMount(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=f3e9f7d1677c7aa63c9ab526381eeceb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-4-20&primary_release_date.lte=2018-5-20')
    .then(res => res.json())
    .then(jsonData=>this.setState({popularFilmArray: jsonData.results}))
    .catch(error=> console.dir('Upps Coś poszło nie tak...',error))
}

  render () {
    return (
      <div className="container">
     <SearchBox/>
     <section>
      <h2 className='center'>New releasess</h2>
      <MoviesContainer films={this.state.popularFilmArray}/>
      </section>
    </div>
    )
  }
}

export default Home