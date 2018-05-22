import React, { Component } from 'react'
import SearchBox from './_SearchBox';
import '../Styles/App.css'
import MoviesContainer from './_MoviesContainer';
import ENV from '../config'



class Home extends Component {

 
  constructor(props){
    super(props);
    this.state ={ popularFilmArray:[]}
}

componentDidMount(){
    fetch(ENV.release_api_url)
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