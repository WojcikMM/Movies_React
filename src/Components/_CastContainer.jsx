import React from 'react';
import CastItem from './_CastItem'

const CastContainer = (castArray) =>{
    console.log(castArray.castArray)
return castArray.castArray.slice(0,6).map(item=>  <CastItem key={item.id} url={item.profile_path} name={item.name}  /> );
}
export default CastContainer;