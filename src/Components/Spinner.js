import React, { Component } from 'react'
import loading from "./loading.gif"

const Spinner = () => {
 
    return (
      <div className='text-center'>
        <img className='my-3' style={{height:'100px'}} src={loading} alt='loading'/>
      </div>
    )
  
}
export default Spinner;
