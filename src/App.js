import React, {Component} from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import Nominations from "./components/Nominations/Nominations";
import Footer from "./components/Footer/Footer";

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: "",
      page: 1,
      totalResults: null,
      nominations: []
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.searchQuery}&page=${this.state.page}`);
      this.setState({searchResults : response.data.Search});
      this.setState({totalResults: response.data.totalResults });
      this.setState({searchQuery: ""});
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleNominate = (result) => {
    if (this.state.nominations.length === 5) {
      console.log("You already have 5 nominations ☺ thank you!")
    } else {
      if (this.state.nominations.some( nom => nom['imdbID'] === result.imdbID )) {
        console.log("You already added this movie!")
      } else {
        this.setState({nominations: [...this.state.nominations, result]});
      }
    }
  }

  //if nomination is already nominated - disabled button

  removeNomination = (event) => {
    let filterNomArr = this.state.nominations.filter(nom => nom['imdbID'] !== event.target.value);
    this.setState({nominations: filterNomArr});
  }

  render() {
    const {searchQuery, searchResults, totalResults, nominations} = this.state;
    return (
      <div className="App">
        <Nav 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
        />
        <Results
          searchResults={searchResults}
          totalResults={totalResults}
          handleNominate={this.handleNominate}
        />
        <Nominations
          nominations={nominations}
          removeNomination={this.removeNomination}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
