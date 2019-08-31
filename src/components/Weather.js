import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Skycons from 'react-skycons';
import wind from '../img/wind.png';

const Weather = (props) =>{
      return(
        <React.Fragment>
            <React.Fragment>
              <h1>{props.timezone}</h1>
              <div className='weatherWrap'>
                <h3>{props.temp}°</h3>
                <div id='wind'><span>{props.wind} m/s</span><img src={wind} alt='wind'/></div>
                <h5>{props.summary}</h5>
                <span><Skycons color='#2a5885' icon={props.icon} autoplay='true'/></span>
              </div>
            </React.Fragment>
        </React.Fragment>
      )
}

export default Weather
