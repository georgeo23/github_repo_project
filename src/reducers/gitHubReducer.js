const initState = { username: "", results: { }, loading: false };

const gitHubReducer = (state=initState, action) => {
    switch(action.type){
        case 'SEARCH':
            return { username: action.payload, loading: true}
        case 'LOAD_SEARCH':
            return { ...state, results: action.payload, loading: false}
        default:
            return state
    }
}

export default gitHubReducer;