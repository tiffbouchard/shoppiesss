import styled from 'styled-components';

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px;
  input {
    height: 30px;
    width: 100%;
    border: solid 1px black;
    box-shadow: -5px 5px;
    padding: 6px;
    border-radius: 10px;
  }
  button {
    font-size: 40px;
    border: none;
    background-color: transparent;
    color: black;
    margin-left: 5px;
    &:hover {
      cursor: pointer;
    }
  }
`

export default function SearchBar(props) {
  return (
      <SearchForm onSubmit={props.handleSubmit}>
        <input type="text" value={props.searchQuery} onChange={props.handleChange} name="searchQuery" placeholder="Just keep s̶w̶i̶m̶m̶i̶n̶g̶ searching..."/>
        <button type="submit">➭</button>
      </SearchForm>
  );
}

