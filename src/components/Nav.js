import Search from "./Search"; 
import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  height: 100px;
  padding: 20px;
  margin: 0px 20px;
  a {
    width: auto;
    height: 100%;
  }
  img {
    height: 100%;
    width: auto;
  }
`

export default function Nav({handleChange, handleSubmit, searchQuery}) {
  return (
    <Header>
      <a href="/">
        <img src="/logo-plain.png" alt="header-logo"/>
      </a>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
    </Header>
  )
}