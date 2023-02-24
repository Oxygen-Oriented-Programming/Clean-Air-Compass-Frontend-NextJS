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
        contentLabel='Example Modal'
        className='fixed w-[28vw] p-5 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-md modal top-1/2 left-1/2 max-h-3/4'
        overlayClassName='overlay fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50'
      >
        <div className='flex flex-col items-center space-y-2.5 w-full max-h-3/4 justify-evenly'>
          <SetDefaultLocation
            user_id={session?.auth_token?.user_id}
            auth_token={session?.auth_token?.tokens}
            defaultCrud={defaultCrud}
          />
          <div>{curdDefault && <>Default changed to: {curdDefault}</>}</div>
          {!curdDefault && (
            <div className='px-1 text-center transition-all duration-300 bg-transparent rounded-md cursor-pointer w-fit'>
              <label
                htmlFor='first_name'
                className='flex text-2xl font-bold text-gray-900 dark:text-white'
              ></label>
              {session?.auth_token?.default_location}
            </div>
          )}
          <button
            className='absolute pr-6 text-2xl font-bold text-white top-4 right-4 hover:text-gray-400'
            onClick={props.toggleModal}
          >
            X
          </button>
          <MyAlerts />
        </div>
      </Modal>
    </>
  );
}
