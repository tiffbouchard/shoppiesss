import Search from "../Search/Search";

export default function Nav(props) {
  return (
    <nav>
      <img src="/logo.png"/>
      <Search
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </nav>
  )
}