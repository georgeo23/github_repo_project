import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';
import { getData } from '../actions';
import Result from '../Components/Result.js'

class Search extends Component{

    getData = username => {this.props.getData(username)}

    renderResult = () => (
        <p>{this.props.results.userData[0]}</p>)

    componentDidMount = () => this.props.getData('getfutureproof')
    
    render() {
         
           
        return (
            <>
                <div>
                <SearchBar getData={ this.getData } />
                    
                {this.props.loading ? <p>no search</p>  : <h3>These are the repos for {this.props.username}</h3> }
                    
                    
                        
                </div>
            </>
        )
           
    }
}
export const mSTP = state => ({
    results: state.results,
    username: state.username,
    loading: state.loading
})

export default connect(mSTP, {getData}) (Search);