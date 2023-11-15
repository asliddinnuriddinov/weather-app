const initialState ={
    themeState:"light"
}

 const themeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'CHANGE_THEME':
            return ({
                themeState:action.themeState
            })
        default:
            return state
    }
}

export default themeReducer