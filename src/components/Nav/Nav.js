import Search from "./Search/Search";

import logo from "../../../public/logo.png";

export default function Nav(props) {
  return (
    <nav>
      <img src={logo}/>
      <Search/>
    </nav>
  )
}