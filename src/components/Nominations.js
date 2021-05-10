import styled from "styled-components";

const NominationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 100px 0;
  #header {
    background: black;
    color: white;
    padding: 15px;
    font-weight: bold;
    border-radius: 10px;
    margin-bottom: 20px;
    @media (max-width: 690px) {
      position: absolute;
      top: 0;
      margin-bottom: 9px;
      width: 100%;
      text-align: center;
    }
  }
  #no-noms {
    text-align: center;
    margin: 50px 0px;
  }
  @media (max-width: 690px) {
    padding: 0;
  }

`

const NominationCards= styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 690px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    width: 100%;
    justify-content: space-around;
    gap: 10;
    padding-top: 55px;
  }
`
  
  const NominationCard = styled.div`
  @media (max-width: 690px) {
    height: 100px;
  }
  border-radius: 20px;
  height: 100%;
  width: 100%;
  box-shadow: 0px 10px 10px rgb(189 188 188 / 50%);
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0 0 20px 20px;
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsla(0,0%,72.2%,.5);
    backdrop-filter: blur(2px);
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: 0px;
    height: auto;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    #title {
      font-weight: bold;
      margin-bottom: 10px;
    }
    @media (max-width: 690px) {
      display: none ;
    }
  }
  animation: fadeIn 0.5s;
  -webkit-animation: fadeIn 0.5s;
  -moz-animation: fadeIn 0.5s;
  -o-animation: fadeIn 0.5s;
  -ms-animation: fadeIn 0.5s;
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
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
    margin-left: 5px;
    cursor: pointer;
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