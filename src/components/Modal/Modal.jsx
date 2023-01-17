import React from 'react';
import ReactModal from 'react-modal';
import styles from './Modal.module.css';

ReactModal.setAppElement('#root');

const Modal = ({ modalOpen, setModalOpen, id, nome, deleteFunc }) => {
  return (
    <ReactModal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      contentLabel="Example Modal"
      id={id}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <h2>Deseja deletar o filme "{nome}"? Clique em "OK" para confirmar.</h2>
      <button onClick={(e) => deleteFunc(e)}>OK</button>
      <button onClick={() => setModalOpen(false)}>Cancelar</button>
    </ReactModal>
  );
};

export default Modal;
