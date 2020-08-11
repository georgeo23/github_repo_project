const initState = { username: "" };

const gitHubReducer = (state=initState, action) => {
    switch(action.type){
        case 'SEARCH':
            return { username: action.payload}
        case 'LOAD_SEARCH':
            return { ...state, result: action.payload}
        default:
            return state
    }
}

export default gitHubReducer;