import React, {Component} from 'react';
import './App.css';

import Nav from "./components/Nav";
import Results from "./components/Results";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.main`
  flex: 1;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: "",
      lastSearchQuery: "",
      page: 0,
      totalResults: 0,
      nominations: [],
      totalPages: null,
      modalOpen: false
    }
  }


  componentDidMount = () => {
    const savedNominations = JSON.parse(localStorage.getItem("nominations") || "[]");
    this.setState({nominations: savedNominations});
    if (localStorage.getItem("modalOpenedInit")) {
      this.setState({modalOpen: false});
    } else {
      this.setState({modalOpen: true});
      localStorage.setItem("modalOpenedInit", true);
    }
  }

  handleSubmit = async (event) => {
    this.setState({lastSearchQuery: this.state.searchQuery})
    event.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.searchQuery}&page=1`);
      if (response.data.Error) {
        console.log("No results")
      } else {
        this.setState({page: 1})
        this.setState({searchResults : response.data.Search});
        this.setState({totalResults: response.data.totalResults });
        this.setState({totalPages: Math.ceil(this.state.totalResults / 10)});
        this.setState({searchQuery: ""});
      }
    } catch(err) {
      console.log(err);
      return err;
    }
  }

  loadMore = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.lastSearchQuery}&page=${this.state.page + 1}`);
      this.setState({page: this.state.page + 1})
      this.setState({searchResults : [...this.state.searchResults, ...response.data.Search]});
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
        localStorage.setItem("nominations", JSON.stringify(this.state.nominations));
      }
    }
  }

  //if nomination is already nominated - disabled button

  removeNomination = (event) => {
    let filterNomArr = this.state.nominations.filter(nom => nom['imdbID'] !== event.target.value);
    this.setState({nominations: filterNomArr});
    localStorage.setItem("nominations", JSON.stringify(filterNomArr));
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const {searchQuery, searchResults, totalResults, nominations, page, modalOpen} = this.state;
    return (
      <Container>
        <Modal
          modalOpen={modalOpen}
          closeModal={this.closeModal}
        />
        <Nav 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
        />
        <Main>
        <Nominations 
          nominations={nominations}
          removeNomination={this.removeNomination}
        />
        <Results
          searchResults={searchResults}
          totalResults={totalResults}
          handleNominate={this.handleNominate}
          loadMore={this.loadMore}
          page={page}
        />
        </Main>
        <Footer/>
      </Container>
    );
  }
}

export default App;
