import React from 'react';
import {Link} from 'react-router-dom';

const CategoryButton = (properties) =>{
    return (
        
        <button>
           <Link to={`/Category/${properties.id}`}  className='main-logo'>{properties.name}</Link> 
        </button>
    )
}
export default CategoryButton;