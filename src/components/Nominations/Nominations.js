import styled from "styled-components";

const NominationContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  #title {
    position: absolute;
    top: -20px;
    background: black;
    color: white;
    padding: 10px;
    font-weight: bold;
  }
`

const NominationCards= styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  `
  
  const NominationCard = styled.div`
  margin: 10px;
  height: auto;
  width: 170px;
  border: solid 1px black;
  img {
    height: auto;
    width: 100%;
    object-fit: cover;
    border-bottom: 1px solid black;
  }
  .description {
    width: 100%;
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

export default function Nominations({removeNomination, nominations}) {
  return (
    <NominationContainer>
      <div id="title">Nominations</div>
      <NominationCards>
        {nominations && nominations.map((nom) => (
          <NominationCard className="tv" key={nom.Title}>
            <img src={nom.Poster !== "N/A" ? nom.Poster : "./poster-placeholder.png"} alt={nom.Title}/>
            <div className="description">
              <div>{nom.Title}</div>
              <div>{nom.Year}</div>
            </div>
            <Button className="tv" onClick={removeNomination} value={nom.imdbID}>Remove</Button>
          </NominationCard>
        ))}
      </NominationCards>
    </NominationContainer>
  )
} 