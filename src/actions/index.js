
export const loadResult = ({ results: { userData } }) => ({ 
    type: 'SEARCH',
    payload: { userData } 
});

export const getData = searchTerm => {
    return async dispatch => {
        try {
            const userData = await fetchUserData(searchTerm);
            dispatch(loadResult(userData))
        } catch (err) {
            console.warn(err.message);
        };
    };
};

// Helpers
const fetchUserData = async searchTerm => {
    try {
        // const resp = await fetch(`https://geocode.xyz/${searchTerm}?json=1`);
        const resp = await fetch(`https://api.github.com/${userInput}/repos`);
        const data = await resp.json();
        return data;
    } catch(err) {
        throw new Error(err.message)
    }
}