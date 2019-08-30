import React, {useState} from 'react';
import '../index.css';
import Loader from './Loader.js';

const App = () =>{


  return(
    <div className='appWrapper'>
      <div className='weatherBlock'>
        <Loader/>
      </div>
    </div>
  )
}

export default App
