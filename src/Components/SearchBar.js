import React, { Component } from 'react';


class SearchBar extends Component {
    state = { username: "" }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.username)
        this.props.getData(this.state.username)
        this.setState({username: ""})
    }
    
    handleChange = e => {
        this.setState({ username: e.target.value })
    }
   
   
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <input type="submit" value="Search" />
                </form>
            </div>
        )
    }
}


export default SearchBar; 

