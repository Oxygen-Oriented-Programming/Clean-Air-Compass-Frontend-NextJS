import Modal from 'react-modal';
Modal.setAppElement('#__next');

export default function AlertModal(props) {
  return (
    <div>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
        contentLabel='Example Modal'
        className='modal'
        overlayClassName='overlay'
      >
        <h1 className='mb-4 text-2xl font-bold'>Modal Title</h1>
        <p className='mb-4'>Modal content goes here.</p>
        <button onClick={props.toggleModal}>Close Modal</button>
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 2rem;
          border-radius: 0.5rem;
          width: 400px;
          max-width: 100%;
          transition: all;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          transition: all;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}
