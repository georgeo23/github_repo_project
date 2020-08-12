// import React from 'react'
// import renderResults from '../Components/SearchBar'
export const loading = username => ({ type: "SEARCH", payload: username})

export const loadResult = (userData) => ({
    type: "LOAD_SEARCH",
    payload:  userData 
})


export const getData = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm))
        try {
            const userData = await fetchUserData(searchTerm);
            // console.log(userData)
            dispatch(loadResult(userData));
        } catch (err) {
            console.warn(err.message);
        };
    };
};

// Helpers
const fetchUserData = async searchTerm => {
    try {
        const resp = await fetch(`https://api.github.com/users/${searchTerm}/repos`);
        const data = await resp.json();
        
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}