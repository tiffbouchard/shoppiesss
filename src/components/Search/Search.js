export default function SearchBar(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} name="searchQuery"/>
      </form>
    </div>
  );
}

