import React from 'react';
import useResource from '../../hooks/useResource.js';
import { useSession } from 'next-auth/react';

export default function MyAlerts(){
  const { createResource, updateResource, deleteResource, resources } = useResource();
  console.log(resources)
  const { data: session} = useSession();
  const user = session.auth_token.user_id;
  const alerts = resources || [];

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
    const phoneNumberValidation = validateAndGetDigits(e.target.phoneNumber.value)
    if (phoneNumberValidation) {
      const newSmsAlert = {
        user: user,
        location: e.target.location.value,
        air_quality_threshold: e.target.airQualityThreshold.value,
        phone_number: phoneNumberValidation,
      };
  
      createResource(newSmsAlert);
    } else {
      alert('Not a valid phone number. Please enter a 10 digit US phone number.')
    }
  }
  
  function handleDelete(id) {
    deleteResource(id);
  }

  function handleUpdate(id, info) {
    updateResource(id, info);
  }

  return(
    <>
      <h3>My Alerts</h3>
      <form onSubmit={createNewSmsAlertHandler} className='w-full md:w-2/3 p-2 mx-auto my-4 bg-emerald-300 border-2 border-emerald-600'>
        <div className="flex justify-around items-center p-1 my-2">
          <div className="flex flex-col items-center w-3/5">
            <label htmlFor='location' className='text-xs text-center mb-1'> Location</label>
            <input name='location' id='location' type='text' placeholder='Enter a City' className='w-full pl-1 text-sm'/>
          </div>
          <div className='mx-1 w-1/3'>
            <label htmlFor='phoneNumber' className='block text-sm text-center'>Phone Number</label>
            <input name='phoneNumber' id='phoneNumber' type='text' placeholder='(xxx) xxx-xxxx' className='block text-sm text-center w-full' />
          </div>
          <div>
          <label htmlFor="airQualityThreshold">Air Quality:</label>
            <select id="airQualityThreshold" name="airQualityThreshold">
              <option value="Good" selected>Good</option>
              <option value="Moderate">Moderate</option>
              <option value="Unhealthy for Sensitive Groups">Unhealthy for Sensitive Groups</option>
              <option value="Unhealthy">Unhealthy</option>
              <option value="Very Unhealthy">Very Unhealthy</option>
              <option value="Hazardous">Hazardous</option>
            </select>
          </div>
          <button type='submit' className='px-10 py-1 bg-emerald-700 text-gray-50 hover:bg-red-500 mx-1'>Create Alert</button>
        </div>
      </form>
      
      <div>
        {!alerts.length ? 
          <></>
          :
          <>
            {alerts.map((alert, i) => (
              <>
                <p key={i}>{alert.location} - {alert.air_quality_threshold}</p>
                <button onClick={() => handleDelete(alert.id)} className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-5 mr-2 hover:text-red-200 text-red-600 hover:pt-0 cursor-pointer transition-all duration-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
                <button onClick={() => handleUpdate(alert.id)} className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:text-blue-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </button>
              </>
            ))}
          </>  
        }
      </div>
    </>
  )
}
