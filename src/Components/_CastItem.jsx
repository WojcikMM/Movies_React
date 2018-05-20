import React from 'react';

const CastItem = (properties) =>{
    return (
        <figure>
            <img src={`https://image.tmdb.org/t/p/w300/${properties.url}`} alt='Cast person' className='img-rsp'/>
            <figcaption>{properties.name}</figcaption>
        </figure>
    )
}
export default CastItem;