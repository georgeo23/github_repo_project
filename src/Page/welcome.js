import React from 'react'
import SearchBar from '../components/SearchBar'

const Welcome = () => (
    <>
        <h1>Welcome to GitHub Repo Search</h1>
        <h2>Please enter your username</h2>
        <SearchBar getResult={this.getResult}/>
    </>
)
export default Welcome;