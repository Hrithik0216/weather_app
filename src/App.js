import React from 'react';
import axios from 'axios'
import { useState } from 'react';
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} from current weather api

function App() {
  const [data, setData] = useState({})  
  const [location, setLocation] = useState ('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=0cac675be7578b0ed2e2b1cf5f63aab1`;
  
  const searchLocation =(event)=>{
    if (event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('') //After pressing enter this clears and set the search box to empty string
    }
  }

  return (
    <div className="app">
      <div className='search'>
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyDown={searchLocation} 
        placeholder='Enter location'
        type = "text"></input>
      </div>
      <div className='container'>

        <div className='top'>
            <div className='location'>
            <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main? <h1>{data.main.temp.toFixed()}°F</h1> : null} 
            </div>
            <div className='description'>
              {data.weather ? <p>{data.weather[0].description}</p> : null}
            </div>
        </div>

{data.main !== undefined && 
  
      <div className='bottom'>
          <div className='feels'>
          {data.main ? <p  className='bold'>{data.main.feels_like.toFixed()}°F </p>:null}
          <p>Feels like</p>
      </div>
      <div className='humidity'>
          {data.main ? <p  className='bold'>{data.main.humidity} %</p>:null}
          <p>Humidity</p>
      </div>
      <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed}mph</p>: null}
       <p>Wind speed</p>
      </div>
    </div>
}
      </div>
    </div>
  );
}

export default App;

