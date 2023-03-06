import Modal from "react-modal";
import MyAlerts from "./Sidebar/MyAlerts";

export default function AlertModal(props) {
  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
        className="fixed w-[50vw] transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-3xl modal top-1/2 left-1/2 max-h-3/4"
      >
        <button
          className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
          onClick={props.toggleModal}
        >
          X
        </button>
        <MyAlerts />
      </Modal>
    </>
  );
}
