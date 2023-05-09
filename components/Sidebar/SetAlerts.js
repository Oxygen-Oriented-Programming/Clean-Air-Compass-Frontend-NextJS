import React, { useRef } from "react";
import useResource from "../Hooks/useResource.js";
import { useSession } from "next-auth/react";

export default function SetAlerts() {
  const { createResource, updateResource, deleteResource, resources } =
    useResource();
  const { data: session } = useSession();
  const user = session.auth_token.user_id;
  const alerts = resources || [];
  const formRef = useRef(null);

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]+$/;
    return emailRegex.test(email.toLowerCase()) ? email.toLowerCase() : false;
  }

  function createNewAlertHandler(e) {
    e.preventDefault();
    const validInput = validateEmail(e.target.email.value);
    if (validInput) {
      const newAlert = {
        user: user,
        location: e.target.location.value,
        air_quality: e.target.airQualityThreshold.value,
        email_to_alert: validInput,
      };
      createResource(newAlert);
      formRef.current.reset();
    } else {
      alert("Invalid Email");
    }
  }

  function handleDelete(id) {
    deleteResource(id);
  }

  function handleUpdate(id, info) {
    updateResource(id, info);
  }

  return (
    <>
      <div className="flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-transparent pt-10 border-t border-white">
        <h3 className="font-mono text-2xl text-center text-white ">
          Alert Location
        </h3>
        <form
          onSubmit={createNewAlertHandler}
          className="flex flex-col items-center justify-center w-full p-2 mx-auto text-white rounded-xl md:w-2/3 "
          ref={formRef}
        >
          <div className="flex flex-col items-center justify-center px-2 mb-5 round-4xl sm:w-1/2 md:w-3/5 sm:px-4">
            <input
              name="location"
              id="location"
              type="text"
              className="px-10 py-4 font-mono text-lg text-center transition-all bg-gray-800 rounded-lg"
              placeholder="Enter a Location"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-mono text-2xl text-center text-white"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              type="text"
              className="px-10 py-4 font-mono text-lg text-center transition-all bg-gray-800 rounded-lg"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col items-center p-4 pt-2 font-mono sm:w-1/2 sm:px-5">
            <label
              htmlFor="airQualityThreshold"
              className="block mt-5 mb-1 font-mono text-2xl text-center text-white w-96"
            >
              Receive alerts when the air quality is:
            </label>
            <select
              id="airQualityThreshold"
              name="airQualityThreshold"
              className="py-3 text-xl text-center rounded-md bg-gray-800"
            >
              <option value="Good" className="bg-green-400">
                Good
              </option>
              <option value="Moderate" className="bg-yellow-400">
                Moderate
              </option>
              <option
                value="Unhealthy for Sensitive Groups"
                className="bg-yellow-500"
              >
                Unhealthy for Sensitive Groups
              </option>
              <option value="Unhealthy" className="bg-red-500">
                Unhealthy
              </option>
              <option value="Very Unhealthy" className="bg-red-600">
                Very Unhealthy
              </option>
              <option value="Hazardous" className="bg-red-800">
                Hazardous
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-2 mt-4 font-mono text-lg text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
          >
            Create Alert
          </button>
        </form>
        <div className="flex flex-col items-center p-3 my-8">
          {!alerts.length ? (
            <p>No alerts found</p>
          ) : (
            alerts.map((alert, i) => (
              <div
                key={i}
                className="flex items-center justify-between w-full px-2 mb-2 text-center text-white bg-gray-700 sm:px-4"
              >
                <p className="text-sm">
                  {alert.location} - {alert.air_quality_threshold}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleDelete(alert.id)}
                    className="px-2 py-1 mx-2 text-red-600 transition-colors duration-300 rounded-md hover:text-red-200 hover:bg-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleUpdate(alert.id)}
                    className="px-2 py-1 text-blue-600 transition-colors duration-300 rounded-md hover:text-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
