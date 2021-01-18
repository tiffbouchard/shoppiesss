import Modal from 'react-modal';
import styled from "styled-components";

const customStyles = {
  content : {
  }
};

export default function WelcomeModal({closeModal, modalOpen}) {
  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button onClick={closeModal}>x</button>
        <img src="logo.png"/>
        <div>Welcome to the Shoppies!</div>
      </Modal>
    </div>
  )
}