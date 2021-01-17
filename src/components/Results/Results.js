export default function Results({searchResults, totalResults, handleNominate, loadMore, page}) {
  return (
    <div>
      <div>{totalResults}</div>
      {searchResults && searchResults.map((result) => (
        <div key={result.imdbID}>
          <img src={result.Poster && result.Poster !== "N/A" ? result.Poster : "./poster-placeholder.png"} alt={result.Title}/>
          <div>{result.Title}</div>
          <div>{result.Year}</div>
          <a href={`http://imdb.com/title/${result.imdbID}`} target="_blank" rel="noreferrer">View on IMDB</a>
          <button type="button" onClick={() => handleNominate(result)}>Nominate</button>
        </div>
      ))}
      {page == 0 ? "" : <button type="button" onClick={loadMore}>Load more</button>}
    </div>
  )
}