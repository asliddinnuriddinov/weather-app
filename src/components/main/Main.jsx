import React, { useState } from 'react'
import "./Main.scss"
import { useSelector } from 'react-redux'

const Main = () => {
    const data=useSelector(state=>state.weatherDataReducer.weatherData);
    const currentDate=new Date();
    const day=currentDate.getDay();

    function checkDay(dayIndex) {
        switch(dayIndex){
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }
    }

  return (
    <div className='main'>
        <div className="main__left">
                <img src={data?.current?.condition?.icon} alt="" />
                <h2>{data?.current?.temp_c}°</h2>
                <p>{data?.location?.country}, {data?.location?.name}</p>
            </div>

            <div className="main__right">
                <p>{data?.forecast?.forecastday?.at(0).astro?.sunset}</p>
                <span>Sunset Time,  {checkDay(day)}</span>
            </div>    
        </div>       
  )
}

export default Main