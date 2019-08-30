import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getWeather} from '../actions/getWeather.js';
import Weather from './Weather.js';
import load from '../img/load.gif';

const Loader = (props) =>{

  const [isFetching, setFetching] = useState(true);

  useEffect(()=>{
    setFetching(props.weather.isFetching)
  },[props])

  useEffect(()=>{
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(position =>{
      lat = position.coords.latitude;
      long = position.coords.longitude;
      props.onGetWeather(lat,long)
    });
  },[])

  if(isFetching){
    return(
      <div id='loading'>
        <h1>Loading...</h1>
        <img src={load} alt='loading...'/>
      </div>
    )
  }else if(props.weather.data.code !== 400){
    let temp= Math.round((props.weather.data.currently.temperature-32)/1.8);
    let icon = props.weather.data.currently.icon.replace(/-/g, '_').toUpperCase();
    let wind = Math.round(props.weather.data.currently.windSpeed/2)
    return(
      <>
      <Weather temp={temp} timezone={(props.weather.data.timezone).split('/')[1]} summary={props.weather.data.currently.summary} icon={icon} wind={wind}/>
      </>
    )
  }else{
    return(
      <h1>h</h1>
    )
  }
}

export default connect(
  state =>({
    weather: state.weather,
  }),
  dispatch =>({
    onGetWeather: (lat, long) =>{
      dispatch(getWeather(lat, long))
    }
  })
)(Loader)
