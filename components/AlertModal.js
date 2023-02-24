import Modal from 'react-modal';
Modal.setAppElement('#__next');
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import MyAlerts from './Sidebar/MyAlerts';
import SetDefaultLocation from './Sidebar/SetDefaultLocation';

export default function AlertModal(props) {
  const { data: session } = useSession();
  const [curdDefault, setCrudDefault] = useState();
  const sessionDefault = session?.auth_token?.default_location;
  
  function defaultCrud(newDefault) {
    setCrudDefault(newDefault);
  }

  return (
    <>
      <Modal
        isOpen={props.isModalOpen}
        onRequestClose={props.toggleModal}
        contentLabel="Example Modal"
        overlayClassName="overlay"
        className="fixed w-[50vw] transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-3xl modal top-1/2 left-1/2 max-h-3/4"
      >
        <div className="flex flex-col items-center mt-10 mb-5 font-mono text-2xl text-white justify-evenly">
          {!curdDefault && sessionDefault && (
            <div>
              <label
                htmlFor="first_name"
                className="flex text-lg font-bold text-white dark:text-white"
              ></label>
              Current Default Location: {sessionDefault}
            </div>
          )}
          <div>
            {curdDefault && <>Successfully Changed To: {curdDefault}</>}
          </div>
          {session && (
            <SetDefaultLocation
              user_id={session.auth_token.user_id}
              auth_token={session.auth_token.tokens}
              defaultCrud={defaultCrud}
            />
          )}
        </div>

        <button
          className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
          onClick={props.toggleModal}
        >
          X
        </button>
        <MyAlerts />
        {/* <style jsx global>{`
        .modal {
          position: absolute;
          // top: 50%;
          // left: 50%;
          transform: translate(-50%, -50%);
          padding: 2rem;
          border-radius: 0.5rem;
          width: 600px;
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
      `}</style> */}
      </Modal>
    </>
  );
}
