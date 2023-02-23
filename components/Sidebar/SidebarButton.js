import React from 'react';
import Link from 'next/link';
import Form from './Form';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import SetDefaultLocation from './SetDefaultLocation';
import { useState } from 'react';

export default function SidebarButton(props) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [returnAnimation, setReturnAnimation] = useState(false);

  const handleFeaturesClick = () => {
    setShowFeatures(true);
  };

  const handleReturnClick = () => {
    setReturnAnimation(true);
    setTimeout(() => {
      setShowFeatures(false);
      setReturnAnimation(false);
    }, 500); // Wait for the animation to complete
  };
  return (
    <>
      <div className=' w-fit h-fit px-2 space-y-2.5 text-white bg-black relative transition duration-200 ease-in-out'>
        <div>
          <NavTitle />
          <div className='flex flex-col p-3'>
            <nav
              className='space-y-2'
              style={{
                transform: showFeatures
                  ? 'translateY(-100%)'
                  : 'translateY(0%)',
                opacity: showFeatures ? 0 : 1,
                height: showFeatures ? 0 : 'auto',
                overflow: 'hidden',
                transition: 'all 0.5s ease-in-out',
                transitionDelay: showFeatures ? '0.5s' : '0s',
              }}
            >
              <Form
                loading={props.loading}
                handleLocationInput={props.handleLocationInput}
                handleSubmit={props.handleSubmit}
              />
              {!showFeatures && (
                <NavLinks handleFeaturesClick={handleFeaturesClick} />
              )}
            </nav>
            {showFeatures && (
              <>
                <button
                  className='z-50 w-auto h-auto p-3 mt-4 font-medium text-black transition-transform duration-500 ease-in-out bg-white rounded-md return-button hover:bg-purple-600 hover:text-white'
                  onClick={handleReturnClick}
                  style={{
                    transform: returnAnimation
                      ? 'translateY(100%)'
                      : 'translateY(0%)',
                  }}
                >
                  Close Features
                </button>
                <ol
                  className='flex flex-col items-center justify-around text-sm inside'
                  style={{
                    height: '100%',
                    transform: returnAnimation
                      ? 'translateY(100%)'
                      : 'translateY(0%)',
                    opacity: showFeatures ? 1 : 0,
                    transition: 'all 0.5s ease-in-out',
                    overflow: 'visible',
                  }}
                >
                  <li className='mt-4 mb-2 font-bold'>MAP</li>
                  <li className='m-1'>
                    Clean Air Compass currently uses data from the
                    <span className='font-bold text-purple-600'>
                      &nbsp;Purple Air
                    </span>{' '}
                    network of air quality monitoring sensors.
                  </li>
                  <li className='m-1'>
                    This information is used to estimate and display
                    <span className='font-bold text-purple-600'>
                      &nbsp;PM 2.5
                    </span>{' '}
                    air pollution across a wide area rather than just displaying
                    readings at individual sensor locations.
                  </li>
                  <li className='m-1'>
                    Users can search for either a city or postal code within the
                    US and get back an air quality map. International support is
                    not available...YET.
                  </li>
                  <li className='mt-4 mb-2 font-bold'>ALERTS</li>
                  <li className='m-1'>
                    Users can sign up for{' '}
                    <span className='font-bold text-purple-600'>
                      text alerts
                    </span>{' '}
                    to stay informed about air quality risks in their area.
                  </li>
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
