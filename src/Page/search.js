import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';
// import { getData } from '../actions';


class Search extends Component{
    
    getData = username => {this.props.getData(username)}
    
    render() {
        return (
            <>
                <div>
                <SearchBar getResult={ this.getData } />
                    <h3>Showing repositories for {this.props.data}</h3>
                    <ul>
                        
                    </ul>
                </div>
            </>
        )
           
    }
}
export const mSTP = state => ({
    result: state.result,
    data: state.data
})
export const mDTP = dispatch => ({ getData: name => dispatch({ type: 'LOAD_SEARCH', payload: name})});
export default connect(mSTP, mDTP) (Search);