import React from 'react';
import '../Styles/main-logo.css';
import {Link} from 'react-router-dom';

const MainLogo = (properties) =>{
    return (
        <div>
           <Link to="/"  className='main-logo'>
           <img alt='Logo strony' src={properties.logoUrl} className='center-logo'/>
           </Link> 
        </div>
    )
}
export default MainLogo