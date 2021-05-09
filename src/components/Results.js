import styled from "styled-components";

const ResultsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  position: relative;
  #error {
    height: 300px;
    width: auto;
    p {
      text-align: center;
    }
  }
  #header {
    background: black;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 10px;
    position: absolute;
    top: -50px;
  }
  #results-num {
    margin-top: 30px;
  }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns:  repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  width: 100%;
  padding: 0 50px 0 0px;
  max-width: 1400px;
`

const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 10px 10px rgb(189 188 188 / 50%);
  height: auto;
  position: relative;
  background-color: white;
  border-radius: 20px;
  .img-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 20px 20px 0 0;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 20px 20px 0 0;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    text-align: center;
    .title {
      margin-bottom: 7px;
      font-weight: bold;
    }
    }
  }
`

const Button = styled.button`
  border: 1px solid black;
  background-color: black;
  border-radius: 15px;
  color: white;
  padding: 10px;
  margin: 10px;
  width: 150px;
  transition: .2s;
  &:hover {
    box-shadow: -5px 5px;
  }
`

const Badge = styled.a`
  position: absolute;
  z-index: 1;
  top: -30px;
  right: -30px;
  height: 100px;
  width: auto;
  transition: transform .2s;
  img {
    height: 105px;
    width: auto;
    position: relative;
  }
  p {
    position: absolute;
    top: 24px;
    right: 25px;
    width: 50%;
    text-align: center;
    color: white;
    z-index: 1;
    font-size: 12px;
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20deg);
  }
  &:hover {
    transform: scale(1.1);
  }
`


export default function Results({searchResults, totalResults, handleNominate, loadMore, page, noResultsError, allLoaded}) {
  return (
    <ResultsContainer>
      <div id="header">Search Results</div>
      {totalResults ? <div id="results-num">{totalResults} results</div>: ""}
      <CardsContainer>
        {searchResults && !noResultsError && searchResults.map((result) => (
          <Card className="tv" key={result.imdbID}>
            <Badge className="tv" href={`http://imdb.com/title/${result.imdbID}`} target="_blank" rel="noreferrer">
              <p>VIEW ON IMDB</p>
              <img src="/starburst.png" alt="badge"/>
            </Badge>
            <div className="img-container">
              <img src={result.Poster && result.Poster !== "N/A" ? result.Poster : "./poster-placeholder.png"} alt={result.Title}/> 
            </div>
            <div className="description">
              <div className="title">{result.Title}</div>
              <div className="year">{result.Year}</div>
              <Button className="tv" type="button" onClick={() => handleNominate(result)}>NOMINATE</Button>
            </div>
          </Card>
        ))}
      </CardsContainer>
      {page === 0 ? "" : <Button type="button" className="tv" onClick={loadMore}>Show me more!</Button>}
      {allLoaded && <div>This is the end of the line</div>}
      {noResultsError && <ResultsContainer><p>Nothing matched your search, sorry</p></ResultsContainer>}
      {totalResults === 0 && 
      <ResultsContainer>
        <img src="/sadness.png" id="error" alt="no-results"/>
        <p>There is nothing here, why don't you search something up</p>
      </ResultsContainer>
      }
      </ResultsContainer>
  )
}