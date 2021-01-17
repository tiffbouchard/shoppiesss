import Search from "../Search/Search"; 
import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  height: 100px;
  border-bottom: 1px solid black;
  padding: 20px;
  img {
    height: 100%;
    width: auto;
  }
`

export default function Nav({handleChange, handleSubmit, searchQuery}) {
  return (
    <Header>
      <img src="/logo-plain.png" alt="header-logo"/>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
    </Header>
  )
}