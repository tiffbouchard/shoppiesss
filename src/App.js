import React, {Component} from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: "",
      page: 1
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.searchQuery}&page=${this.state.page}`);
      this.setState({searchResults : response.data.Search});
      console.log(this.state.searchResults);
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
        {/* navbar */}
        {/* main component */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="searchQuery"/>
        </form>
       {/* footer */}
      </div>
    );
  }
}

export default App;
