import Modal from 'react-modal';
import styled from "styled-components";

const customStyles = {
  content : {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0", 
    border: "solid 1px black",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: 100
  }
};

const Logo = styled.img`
  height: 100px;
  width: auto;
`

const Header = styled.div`
  width: 100%;
  background: black;
  margin-bottom: 20px;
  button {
    background: transparent;
    border: none;
    color: white;
    margin: 10px;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`

const Intro = styled.div`
  margin: 0px 80px;
  text-align: center;
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
    cursor: pointer;
  }
`

export default function WelcomeModal({closeModal, modalOpen}) {
  return (
    <div className="tv">
      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Header>
          <button onClick={closeModal}>x</button>

        </Header>
        <Logo src="logo.png"/>
        <Intro>
          <h3>Welcome to the Shoppies!</h3>
          <p>We are so excited to announce The Shoppies. A new movie award show brought to you by Shopify. You have been chosen to have your voice heard in this years award show, we know you're busy so this won't take long!</p>
          <Button onClick={closeModal}>LETS GO!</Button>
        </Intro>
      </Modal>
    </div>
  )
}