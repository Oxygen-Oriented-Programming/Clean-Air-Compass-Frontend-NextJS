import React from 'react';
import { useRef } from 'react';
import useResource from '../../hooks/useResource.js';
import { useSession } from 'next-auth/react';

export default function MyAlerts() {
  const { createResource, updateResource, deleteResource, resources } =
    useResource();
  const { data: session } = useSession();
  const user = session.auth_token.user_id;
  const alerts = resources || [];
  const formRef = useRef(null);

  function validateAndGetDigits(input) {
    // Remove all non-digit characters
    const digitsOnly = input.replace(/\D/g, '');

    // Check if the result has exactly 10 digits
    if (digitsOnly.length !== 10) {
      return false;
    }

    // Return the 10 digits with no hyphens or special characters
    return digitsOnly;
  }

  function createNewSmsAlertHandler(e) {
    e.preventDefault();
    const phoneNumberValidation = validateAndGetDigits(
      e.target.phoneNumber.value
    );
    if (phoneNumberValidation) {
      const newSmsAlert = {
        user: user,
        location: e.target.location.value,
        air_quality_threshold: e.target.airQualityThreshold.value,
        phone_number: phoneNumberValidation,
      };

      createResource(newSmsAlert);
      formRef.current.reset();
    } else {
      alert(
        'Not a valid phone number. Please enter a 10 digit US phone number.'
      );
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
      <div className='flex flex-col transition-all items-center w-full h-full space-y-2.5 bg-transparent pb-2'>
        <h3 className='my-4 text-lg font-bold text-center text-white '>
          My Alerts
        </h3>
        <form
          onSubmit={createNewSmsAlertHandler}
          className='flex flex-col items-center justify-center w-full p-2 mx-auto my-4 text-white rounded-xl md:w-2/3 '
          ref={formRef}
        >
          <div className='flex flex-col items-center justify-center w-full px-2 round-4xl sm:w-1/2 md:w-3/5 sm:px-4'>
            <label
              htmlFor='location'
              className='flex pt-3 text-2xl font-bold text-center'
            >
              Location
            </label>
            <input
              name='location'
              id='location'
              type='text'
              className='h-10 text-lg font-normal text-center transition-all bg-gray-800 rounded-lg'
              placeholder='Enter a City'
            />
          </div>
          <div className='flex flex-col items-center justify-center w-full px-2 round-4xl sm:w-1/2 md:w-3/5 sm:px-4'>
            <label
              htmlFor='phoneNumber'
              className='block mb-1 text-xl font-bold text-center '
            >
              Phone Number
            </label>
            <input
              name='phoneNumber'
              id='phoneNumber'
              type='text'
              className='h-10 text-lg font-normal text-center transition-all bg-gray-800 rounded-lg'
              placeholder='(xxx) xxx-xxxx'
            />
          </div>
          <div className='flex flex-col items-center p-4 pt-2 w-fit sm:w-1/2 sm:px-5 w-[20vw]'>
            <label
              htmlFor='airQualityThreshold'
              className='block mb-1 text-lg font-bold text-center '
            >
              Air Quality
            </label>
            <select
              id='airQualityThreshold'
              name='airQualityThreshold'
              className='w-auto py-1 pb-2 text-sm text-center rounded-md bg-gradient-to-b from-green-400 to-red-800'
            >
              <option value='Good' className='bg-green-400'>
                Good
              </option>
              <option value='Moderate' className='bg-yellow-400'>
                Moderate
              </option>
              <option
                value='Unhealthy for Sensitive Groups'
                className='bg-yellow-500'
              >
                Unhealthy for Sensitive Groups
              </option>
              <option value='Unhealthy' className='bg-red-500'>
                Unhealthy
              </option>
              <option value='Very Unhealthy' className='bg-red-600'>
                Very Unhealthy
              </option>
              <option value='Hazardous' className='bg-red-800'>
                Hazardous
              </option>
            </select>
          </div>
          <button
            type='submit'
            className='px-4 py-2 font-bold text-white transition-all bg-transparent border-2 border-blue-900 rounded hover:bg-blue-900 hover:border-transparent hover:animate-none animate-pulse'
          >
            Create Alert
          </button>
        </form>{' '}
        <div className='flex flex-col items-center p-3 my-8'>
          {!alerts.length ? (
            <p>No alerts found</p>
          ) : (
            alerts.map((alert, i) => (
              <div
                key={i}
                className='flex items-center justify-between w-full px-2 mb-2 bg-gray-100 rounded-md sm:px-4'
              >
                <p className='text-sm'>
                  {alert.location} - {alert.air_quality_threshold}
                </p>
                <div className='flex justify-end'>
                  <button
                    onClick={() => handleDelete(alert.id)}
                    className='px-2 py-1 mx-2 text-red-600 transition-colors duration-300 rounded-md hover:text-red-200 hover:bg-red-600'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-5 h-5'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleUpdate(alert.id)}
                    className='px-2 py-1 text-blue-600 transition-colors duration-300 rounded-md hover:text-blue-300'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
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
