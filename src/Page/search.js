import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';

class Search extends React.Component{
    render() {
        return (
            <>
                <div>

                    <h1>Showing repositories for {this.props.username}</h1>
                </div>
            </>
        )
           
    }
}