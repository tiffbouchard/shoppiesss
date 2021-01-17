export default function Results({searchResults, totalResults}) {
  return (
    <div>
      <div>{totalResults}</div>
      {searchResults && searchResults.map((result) => (
        <div key={result.Title}>
          <img src={result.Poster} alt={result.Title}/>
          <div>{result.Title}</div>
          <div>{result.Year}</div>
          <a href={`http://imdb.com/title/${result.imdbID}`} target="_blank" rel="noreferrer">View on IMDB</a>
        </div>
      ))}
    </div>
  )
}