import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../Components/SearchBar';
import { getData } from '../actions';
import Result from '../Components/Result.js'

class Search extends Component{
    state = {
        data: []
    }

    getData = username => {this.props.getData(username)}

    renderResult = () =>  console.log(this.props.results.userData)

    componentDidMount = () => this.props.getData('getfutureproof')
   
    render() {
         
           
        return (
            <>
                <div>
                <SearchBar getData={ this.getData } />
                    <h3>These are the repos for {this.props.username}</h3>
                    
                    {this.props.loading ? <p>pls work</p> : this.renderResult() }
                    
                   {/* {this.renderResult()} */}
                    
                    
                        
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

// import React, { Component } from "react";
// import FilmCard from "../components/FilmCard";

// class FilmCards extends Component {
//   state = {
//     films: [],
//   };
//   componentDidMount() {
//     fetch("https://ghibliapi.herokuapp.com/films")
//       .then((r) => r.json())
//       .then((data) => this.setState({ films: data }));
//   }
//   render() {
//     const renderFilms = this.state.films.map((f) => (
//       <FilmCard key={f.id} film={f} />
//     ));

//     return <section className="Films">{renderFilms}</section>;
//   }
// }

// export default FilmCards;
