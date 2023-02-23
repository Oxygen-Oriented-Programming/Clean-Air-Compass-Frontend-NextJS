import Modal from 'react-modal';
Modal.setAppElement('#__next');
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import MyAlerts from './Sidebar/MyAlerts';
import SetDefaultLocation from './Sidebar/SetDefaultLocation';

export default function AlertModal(props) {
  const { data: session } = useSession();
  const [curdDefault, setCrudDefault] = useState();

  function defaultCrud(newDefault) {
    setCrudDefault(newDefault);
  }

  return (
    <>
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={props.toggleModal}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50"
    >
      <div className="flex flex-col items-center space-y-2.5 w-full max-h-3/4 justify-evenly">
        <div className="p-3 px-4 mt-3 text-center duration-300 rounded-md cursor-pointer bg-violet-900 w-fit">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Logged in as:
          </label>
          {session?.user?.name}{" "}
        </div>
        <SetDefaultLocation
          user_id={session?.auth_token?.user_id}
          auth_token={session?.auth_token?.tokens}
          defaultCrud={defaultCrud}
        />
        <div>{curdDefault && <>Default changed to: {curdDefault}</>}</div>
        {!curdDefault && (
          <div className="p-3 px-4 mt-3 text-center duration-300 bg-transparent rounded-md cursor-pointer w-fit">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Saved Default Location:
            </label>
            {session?.auth_token?.default_location}
          </div>
        )}
        <MyAlerts />
        <button
          className="px-4 py-2 m-auto font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
      <button className="absolute top-4 right-4" onClick={props.toggleModal}>
        Close Modal
      </button>
    </Modal>
     <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 2rem;
          width: 60%;
          border-radius: 0.5rem;
          max-height: 90%;
        
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 9999;
        }
      `}</style>
      </>
  );
}
