import React, {Component} from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: "",
      page: 1,
      totalResults: null
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.searchQuery}&page=${this.state.page}`);
      this.setState({searchResults : response.data.Search});
      this.setState({totalResults: response.data.totalResults })
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  render() {
    return (
      <div className="App">
        <Nav 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Results
          searchResults={this.state.searchResults}
          totalResults={this.state.totalResults}
        />
        {/* main component */}
       {/* footer */}
      </div>
    );
  }
}

export default App;
