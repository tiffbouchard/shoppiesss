export default function Nominations({removeNomination, nominations}) {
  return (
    <div>
      {nominations && nominations.map((nom) => (
        <div key={nom.Title}>
          <img src={nom.Poster !== "N/A" ? nom.Poster : "./poster-placeholder.png"} alt={nom.Title}/>
          <div>{nom.Title}</div>
          <div>{nom.Year}</div>
          <a href={`http://imdb.com/title/${nom.imdbID}`} target="_blank" rel="noreferrer">View on IMDB</a>
          <button onClick={removeNomination} value={nom.imdbID}>Remove</button>
        </div>
      ))}
    </div>
  )
}