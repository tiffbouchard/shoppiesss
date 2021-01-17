import React, {Component} from 'react';
import './App.css';

export default function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={this.handleChange} name="searchQuery"/>
      </form>
    </div>
  );
}

