import React, { useRef, useState } from 'react';
import "./Additional.scss";
import { BsDropletHalf,BsBrightnessHigh,BsSunset,BsSunrise } from "react-icons/bs";
import { GoTriangleUp } from "react-icons/go";
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,LineElement,CategoryScale,LinearScale,PointElement,Tooltip} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
);

const Additional = () => {
    const data=useSelector(state=>state.weatherDataReducer.weatherData);
    const temps = data?.forecast?.forecastday?.at(0).hour?.map(item => item.temp_c);
    const hours = data?.forecast?.forecastday?.at(0).hour?.map(item => item.time.split(" ")[1]);
    const chartData={
        labels: hours,
        datasets:[{
            lablel:`Weather data for ${data?.location?.name}`,
            data:temps,
            borderWidth: 3,
            borderColor: "blueviolet",
            backgroundColor: "#fff",
            tension:.4
        }]

    }
    const options={
        scales: {
            x: {
                grid: {
                  display: false
                },
                ticks: {
                    font: {
                        size: 16,
                    }
                }
              },
              y: {
                grid: {
                  display: false
                }
              }
        }
    }


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
    <div className="additional">
        <div className="additional__left">
                <div className="more__info">
                    <div className="more__info-left">
                        <div className="more__info-content">
                        <BsDropletHalf/>
                            <div>
                                <b>Humidity</b>
                                <p>{data?.current?.humidity} %</p>
                            </div>
                        </div>

                        <div className="more__info-content">
                        <BsBrightnessHigh/>
                            <div>
                                <b>UV index</b>
                                <p>{data?.current?.uv} out of 10</p>
                            </div>
                        </div>
                    </div>
                    <span></span>
                     
                    <div className="more__info-right">
                        <div className="more__info-content">
                        <BsSunset/>
                            <div>
                                <b>Sunset</b>
                                <p>{data?.forecast?.forecastday[0].astro.sunset}</p>
                            </div>
                        </div>

                        <div className="more__info-content">
                        <BsSunrise/>
                            <div>
                                <b>Sunrise</b>
                                <p>{data?.forecast?.forecastday[0].astro.sunrise}</p>
                            </div>
                        </div>
                    </div>

                </div>


                    <div className="compass">
                        <div className="air__pressure">
                            {data?.current?.pressure_mb} Pa
                        </div>
                        <div className="air__direction">
                            <div style={{rotate:`${data?.current?.wind_degree}deg`}} className="arrow"><GoTriangleUp/></div>
                        </div>
                    </div>

        </div>

        <div className="additional__right">
                <div className="chart__wrapper">
                    <h4>Today's weather data for {data?.location?.name}</h4>
                    <Line className='canvas' data={chartData} options={options}/>
                </div>

                <div className="day__info">
                {
                        data?.forecast?.forecastday?.map((day,i) =>
                        
                            <div key={i} className="day__info-wrapper">
                                <h4>{checkDay(+new Date(day.date).getDay()).slice(0, 3).toUpperCase()}</h4>
                                <img  src={day.day.condition.icon}/>
                                <p>{day.day.avgtemp_c} °</p>
                            </div>
                        )
                            
                }
                </div>
        </div>
    </div>
  )
}

export default Additional