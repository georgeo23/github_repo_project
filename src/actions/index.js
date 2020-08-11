import React from 'react'
let userData;
export const loadResult = ({ results: { name } }) => ({
    type: "LOAD_SEARCH",
    payload: { name }
})


export const getData = searchTerm => {
    return async dispatch => {
        try {
            userData = await fetchUserData(searchTerm);
            console.log(userData[0].name)
            dispatch(loadResult(userData[0].name))
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