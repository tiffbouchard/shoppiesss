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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  
`

const Card = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  width: 190px;
  height: auto;
  position: relative;
  background-color: white;
  .img-container {
    height: 300px;
    border-bottom: 1px solid black;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
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
  &::before {
    transform: translate(-8px, 8px);
    z-index: -1;
    background-color: white;
    border: 1px solid black;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

const Button = styled.button`
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 10px;
  margin: 10px;
  width: 150px;
  transition: .2s;
  &:hover {
    box-shadow: -3px 3px;
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


export default function Results({searchResults, totalResults, handleNominate, loadMore, page}) {
  return (
    <ResultsContainer>
      <div id="header">Search Results</div>
      {totalResults ? <div id="results-num">{totalResults} results</div>: ""}
      <CardsContainer>
        {searchResults && searchResults.map((result) => (
          <Card className="tv" key={result.imdbID}>
            <Badge className="tv" href={`http://imdb.com/title/${result.imdbID}`} target="_blank" rel="noreferrer">
              <p>VIEW ON IMDB</p>
              <img src="/starburst.png"/>
            </Badge>
            <div class="img-container">
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
      {page === 0 ? "" : <Button type="button" className="tv" onClick={loadMore}>Gimme more</Button>}
      {totalResults === 0 && 
      <ResultsContainer>
        <img src="/sadness.png" id="error"/>
        <p>There is nothing here, why don't you search something up</p>
      </ResultsContainer>
      }
      </ResultsContainer>
  )
}