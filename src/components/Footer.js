import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  background-color: black;
  color: white;
  padding-left: 200px;
  img {
    height: 80px;
    width: auto;
    margin: 10px;
  }
  a {
    color: white;
  }
  @media (max-width: 690px) {
    display: none;
  }
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <img src="/logo-plain.png" alt="footer-logo"/>
      <div>Made with&nbsp;💚 &nbsp;by <a href="http://github.com/tiffbouchard">Tiffany</a> for Shopify&nbsp;🛍️ </div>
    </FooterContainer>
  )
}