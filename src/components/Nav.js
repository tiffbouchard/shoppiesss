import Nominations from "./Nominations"; 
import styled from "styled-components";

const Header = styled.nav`
  overflow: scroll;
  height: 100px;
  padding: 20px;
  position: fixed;
  z-index: 10;
  background-color: #f4f4f4;
  height: 100vh;
  width: 200px;
  a {
    width: auto;
    height: 100%;
    @media (max-width: 690px) {
      display: none;
    }
  }
  #logo {
    height: 200px;
    width: auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 690px) {
    flex-direction: row;
    width: 100%;
    height: 200px;
    bottom: 0;
    margin: 0;
    padding: 10px 0;
    box-shadow: 10px -10px 10px rgb(189 188 188 / 50%);
  }
`

export default function Nav({removeNomination, nominations}) {
  return (
    <Header>
      <a href="/">
        <img src="/logo.png" alt="header-logo" id="logo"/>
      </a>
      <Nominations
        nominations={nominations}
        removeNomination={removeNomination}
      />
    </Header>
  )
}