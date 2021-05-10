import React, {Component} from 'react';
import './App.css';

import Nav from "./components/Nav";
import Results from "./components/Results";
import Modal from "./components/Modal";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  @media (max-width: 690px) {
    flex-direction: column;
  }
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
      totalPages: 0,
      modalOpen: false,
      noResultsError: false,
      allLoaded: false
    }
  }

  notify = (message) => toast(message);

  componentDidMount = () => {
    const savedNominations = JSON.parse(localStorage.getItem("nominations") || "[]");
    this.setState({nominations: savedNominations});
    if (sessionStorage.getItem("modalOpenedInit")) {
      this.setState({modalOpen: false});
    } else {
      this.setState({modalOpen: true});
      sessionStorage.setItem("modalOpenedInit", true);
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.searchQuery}&page=1`);
      if (response.data.Error) {
        this.setState({noResultsError: true});
        this.setState({searchQuery: ""});
        this.setState({page: 0})
        this.setState({searchResults : []});
        this.setState({totalResults: 0});
        this.setState({totalPages: 0});
        this.setState({lastSearchQuery: ""})
        this.notify("No results!");
      } else {
        this.setState({noResultsError: false});
        this.setState({page: 1})
        this.setState({searchResults : response.data.Search});
        this.setState({totalResults: response.data.totalResults });
        this.setState({totalPages: Math.ceil(this.state.totalResults / 10)});
        this.setState({lastSearchQuery: this.state.searchQuery})
        this.setState({searchQuery: ""});
        this.setState({allLoaded: false});
      }
    } catch(err) {
      this.notify(err.message);
      return err;
    }
  }

  loadMore = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${this.state.lastSearchQuery}&page=${this.state.page + 1}`);
      if (this.state.totalPages > this.state.page  ) {
        this.setState({page: this.state.page + 1})
        this.setState({searchResults : [...this.state.searchResults, ...response.data.Search]});
      } else {
        this.setState({allLoaded: true});
      }
    } catch(err) {
      this.notify(err.message);
      return err;
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleNominate = (result) => {
    if (this.state.nominations.length === 5) {
      this.notify("You already have 5 nominations ☺ thank you!");
    } else if (this.state.nominations.some( nom => nom['imdbID'] === result.imdbID )) {
        this.notify("You already added this movie!");
    } else {
      const newNomArr = [result, ...this.state.nominations];
      localStorage.setItem("nominations", JSON.stringify(newNomArr));
      this.setState({nominations: [result, ...this.state.nominations]});
      this.notify("Yay! Added movie successfully");
    }
  }


  removeNomination = (event) => {
    let filterNomArr = this.state.nominations.filter(nom => nom['imdbID'] !== event.target.value);
    console.log(filterNomArr)
    this.setState({nominations: filterNomArr});
    localStorage.setItem("nominations", JSON.stringify(filterNomArr));
    this.notify("Aw man you removed a movie from your nominations");
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }



  render() {
    const {searchQuery, searchResults, totalResults, nominations, page, modalOpen, noResultsError, allLoaded} = this.state;
    return (
      <Container>
        <ToastContainer />
        <Modal
          modalOpen={modalOpen}
          closeModal={this.closeModal}
        />
        <Nav 
          nominations={nominations}
          removeNomination={this.removeNomination}
        />
        <Main>
        <Results
          noResultsError={noResultsError}
          searchResults={searchResults}
          totalResults={totalResults}
          handleNominate={this.handleNominate}
          loadMore={this.loadMore}
          page={page}
          allLoaded={allLoaded}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          searchQuery={searchQuery}
        />
        </Main>
        {/* <Footer/> */}
      </Container>
    );
  }
}

export default App;
