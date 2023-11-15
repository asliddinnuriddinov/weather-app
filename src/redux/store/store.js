import { createStore,combineReducers } from "redux";
import weatherDataReducer from "../reducer/weatherDataReducer";
import themeReducer from "../reducer/themeReducer";

    const rootReducer=combineReducers({
        weatherDataReducer,
        themeReducer,
    })

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;