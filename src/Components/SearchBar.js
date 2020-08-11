import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index'

class SearchBar extends Component {
    state = { username: "" }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.username(this.state.username)
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

const mDTP = dispatch => ({
    username: (name) => dispatch(getData(name))
})

export default connect(null, mDTP) (SearchBar); 

