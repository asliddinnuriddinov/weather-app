const initialState ={
    weatherData:[]
}

 const weatherDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'WEATHER_DATA':
            return ({
                weatherData:action.weatherData
            })
        default:
            return state
    }
}

export default weatherDataReducer