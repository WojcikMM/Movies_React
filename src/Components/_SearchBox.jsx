import React from 'react'
import '../Styles/searchbox.css'

const SearchBox = () =>{
    return (
        <div className='searchbox-container'>
            <img src="http://moviee.surge.sh/static/media/search.8a0c8c4e.svg" alt="search icon" className="searchIcon"/>
             <input type='text' placeholder='Search a movie' />
        </div>
    )
}
export default SearchBox