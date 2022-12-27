import React from 'react'
import { useSelector } from 'react-redux'

const Details = () => {

    const details = useSelector((state) => state.countryDetails.getDetails);
    console.log(details)
  return (
    <div>
        
    </div>
  ) 
}

export default Details