import React, { Component } from 'react';

class SearchBar extends Component {
    state = { userInput: "" }

    handleSubmit = (e) => {
        e.preventDefault();
        // add in data from api
    }
    
    handleChange = e => {
        this.setState({ userInput: e.target.value })
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Search" />
                </form>
            
            </div>
        )
    }
}

export default SearchBar; 

