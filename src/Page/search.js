import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';
import { getData } from '../actions';
import Result from '../Components/Result.js'

class Search extends Component{
    
    getData = username => {this.props.getData(username)}

    renderResult = () =>  <Result results={this.props.results} />

    componentDidMount = () => this.props.getData('getfutureproof')
   
    render() {
         
           
        return (
            <>
                <div>
                <SearchBar getData={ this.getData } />
                    <h3>These are the repos for {this.props.username}</h3>
                    
                    {this.props.results.length > 0 ? this.renderResult() : <p>no results</p> }
                    
                    
                    
                        
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