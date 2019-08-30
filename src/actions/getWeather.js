export function getWeatherSuccess(data){
  return{
    type: 'FETCH_WEATHER_DATA',
    data: data, isFetching: false
  }
}

export function getWeather(lat, long){
  return (dispatch)=>{
    setTimeout(()=>{
      fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8f2f993672f627f5cc108000ff1f78bd/${lat},${long}`, {method: 'GET'})
        .then(response =>{
          if(!response.ok){
            console.log('Error');
          }
            return response
        })
        .then(response => response.json())
        .then(data => dispatch(getWeatherSuccess(data)))
    }, 3000)
  }
}
