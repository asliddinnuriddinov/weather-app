import React, { useEffect, useRef, useState } from 'react';
import "./Nav.scss";
import { FiSearch } from "react-icons/fi";
import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import { useDispatch,useSelector } from 'react-redux';

const Nav = () => {
    const [search,setSearch]=useState("");
    const [weatherData,setWeatherData]=useState([]);
    const [mode,setMode]=useState(false);
    const API_KEY = "644f6ce0ca9e401ebb891832211707";
    const theme=useSelector(state=>state.themeReducer.themeState)
    const dispatch = useDispatch();
    let isFetching = false;
    
    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search==""?"Tashkent":search}&days=7&aqi=yes&alerts=yes`)
      .then(res=>res.json())
      .then(data=>setWeatherData(data))
      .catch(err=>console.error(err));     
      return()=>{
        isFetching=true;
      }
    },[]);

        useEffect(()=>{
            dispatch({weatherData:weatherData,type:"WEATHER_DATA"})
        },[weatherData])
        
    

    function reRenderWeatherData(e){
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=7&aqi=yes&alerts=yes`)
        .then(res=>res.json())
        .then(data=>{
            setWeatherData(data);
            setSearch("");
        })
        .catch(err=>console.error(err));

        dispatch({weatherData:weatherData,type:"WEATHER_DATA"})
    }
  return (
    <nav>
        <h1 className={theme=="dark"?"dark__title":null}>Weather App</h1>
        <div className="form">
            <form onSubmit={reRenderWeatherData}>
                <input value={search}  type="text" onChange={e=>e.target.value.trim()!=0?setSearch(e.target.value):null} placeholder='Search any city...' />
            </form>
            <FiSearch/>
        </div>
        <div className="mode__toggle" onClick={()=>{setMode(!mode);dispatch({themeState:mode?"light":"dark",type:"CHANGE_THEME"})}}>
            <div className={mode?"mode__btn__light":"mode__btn__dark"}>
                {
                    mode?
                    <BsFillMoonStarsFill />
                    :
                    <BsFillSunFill />
                }
            </div>
        </div>
    </nav>
  )
}

export default Nav