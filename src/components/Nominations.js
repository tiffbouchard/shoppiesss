import styled from "styled-components";

const NominationContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  padding: 20px 0;
  #header {
    position: absolute;
    top: -20px;
    background: black;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 10px;
  }
  #no-noms {
    text-align: center;
    margin: 50px 0px;
  }
`

const NominationCards= styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
`
  
  const NominationCard = styled.div`
  border-radius: 20px;
  margin: 10px;
  height: 150px;
  width: 150px;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .description {
    position: absolute;
    bottom: 0;
    height: auto;
    width: 100%;
    text-align: center;
    margin: 20px 0;
    #title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    @media (max-width: 690px) {
      font-size: 10px;
    }
  }
`

const FakeNav = styled.div`
  height: 35px;
  background: black;
  border-radius: 18px 18px 0 0;
  button {
    background: transparent;
    color: white;
    border: none;
    font-size: 20px;
  }

`

export default function Nominations({removeNomination, nominations}) {
  return (
    <NominationContainer>
      <div id="header">Your Nominations</div>
      <NominationCards>
        {nominations && nominations.map((nom) => (
          <NominationCard className="tv" key={nom.imdbID}>
            <FakeNav><button onClick={removeNomination} value={nom.imdbID} className="tv">x</button></FakeNav>
            <img src={nom.Poster !== "N/A" ? nom.Poster : "./poster-placeholder.png"} alt={nom.Title}/>
            <div className="description">
              <div id="title">{nom.Title}</div>
              <div>{nom.Year}</div>
            </div>
          </NominationCard>
        ))}
      </NominationCards>
      {!nominations.length && 
      <div id="no-noms">
        <p>There's nothing to see here ☹</p>
        <small>Search and nominate 5 of your all-time favourite movies to be considered for a Shoppie</small>
      </div>
      }
    </NominationContainer>
  )
} 