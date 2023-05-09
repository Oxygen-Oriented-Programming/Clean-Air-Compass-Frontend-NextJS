import Modal from "react-modal";
import { useState } from "react";
import { useSession } from "next-auth/react";
import SetDefaultLocation from "./Sidebar/SetDefaultLocation";

export default function LocationModal(props) {
  const { data: session } = useSession();
  const [defaultChanged, setDefaultChanged] = useState();
  const [defaultSet, setDefaultSet] = useState();
  const sessionDefault = session?.auth_token?.default_location;

  function defaultChange(newDefault) {
    setDefaultChanged(newDefault);
  }
  function firstDefaultSet(newDefault) {
    setDefaultSet(newDefault);
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
          {!defaultChanged && sessionDefault && (
            <div>
              <label
                htmlFor="first_name"
                className="flex text-lg font-bold text-white dark:text-white"
              ></label>
              Current Default Location: {sessionDefault}
            </div>
          )}
          <div>
            {defaultSet && !defaultChanged && <>Successfully Set</>}
            {defaultChanged && <>Successfully Changed To: {defaultChanged}</>}
          </div>
          {session && (
            <SetDefaultLocation
              user_id={session.auth_token.user_id}
              auth_token={session.auth_token.tokens}
              defaultChange={defaultChange}
              defaultSet={firstDefaultSet}
              setMessage={props.setMessage}
              message={props.message}
            />
          )}
        </div>

        <button
          className="absolute px-2 text-lg font-bold text-center transition-all duration-300 border border-white rounded-md top-4 right-4 hover:text-red-500 hover:border-red-500 text-violet-700"
          onClick={props.toggleModal}
        >
          X
        </button>
      </Modal>
    </>
  );
}
