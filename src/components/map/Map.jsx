import React from 'react';
import "./Map.scss";
import { useSelector } from 'react-redux';

const Map = () => {
    const data=useSelector(state=>state.weatherDataReducer.weatherData);
    console.log(data?.location?.name);
  return (
    <div className='map__wrapper'> 
            <iframe id="map" src={`https://maps.google.com/maps?q=${data?.location?.name}%20Dates%10Products&amp;t=&amp;z=30&amp&output=embed`} allowFullScreen style={{width:"100%",height:"250px"}}></iframe>

            {/* <iframe id="map" src="https://maps.google.com/maps?q=Moscow%20Dates%10Products&amp;t=&amp;z=30&amp;output=embed" style={{width:"100%",height:"250px"}}></iframe> */}
    </div>
  )
}

export default Map