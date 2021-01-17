import Search from "../Search/Search";

export default function Nav({handleChange, handleSubmit, searchQuery}) {
  return (
    <nav>
      <img src="/logo.png"/>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchQuery={searchQuery}
      />
    </nav>
  )
}