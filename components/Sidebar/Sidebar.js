import React from 'react';
import Link from 'next/link';
import Form from './Form';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import SetDefaultLocation from './SetDefaultLocation';
import { useState } from 'react';
import About from './About';
import Features from './Features';

export default function Sidebar(props) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [returnAnimation, setReturnAnimation] = useState(false);

  const handleFeaturesClick = () => {
    setShowFeatures(true);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowFeatures(false);
  };

  const handleReturnClick = () => {
    setReturnAnimation(true);
    setTimeout(() => {
      setShowAbout(false);
      setShowFeatures(false);
      setReturnAnimation(false);
    }, 500); // Wait for the animation to complete
  };

  return (
    <>
      <div className='h-screen bg-black'>
        <div
          className={
            showFeatures || showAbout
              ? 'min-h-screen w-72 px-2 space-y-2.5 text-white bg-black inset-y-0 relative transition duration-200 ease-in-out'
              : 'w-72 px-2 space-y-2.5 text-white inset-y-0 relative bg-black transition duration-200 ease-in-out'
          }
        >
          <NavTitle />
          <button
            className='fixed mr-5 text-purple-500 border-white rounded-md left-56 top-1'
            onClick={() => props.set_show(!props.sidebar_show)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='fixed z-40 w-6 h-6 left-64'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>

          <div className='flex flex-col'>
            <nav
              className='space-y-1'
              style={{
                transform:
                  showFeatures || showAbout
                    ? 'translateY(-100%)'
                    : 'translateY(0%)',
                opacity: showFeatures || showAbout ? 0 : 1,
                height: showFeatures || showAbout ? 0 : 'auto',
                overflow: 'hidden',
                transition: 'all 0.5s ease-in-out',
                transitionDelay: showFeatures || showAbout ? '0.5s' : '0s',
              }}
            >
              <Form
                loading={props.loading}
                handleLocationInput={props.handleLocationInput}
                handleSubmit={props.handleSubmit}
              />
              {!showFeatures && !showAbout && (
                <NavLinks
                  handleFeaturesClick={handleFeaturesClick}
                  handleAboutClick={handleAboutClick}
                  handleReturnClick={handleReturnClick}
                  toggleModal={props.toggleModal}
                />
              )}
            </nav>

            {/* Features section */}

            {showFeatures && (
              <Features
                handleReturnClick={handleReturnClick}
                returnAnimation={returnAnimation}
                showFeatures={showFeatures}
                showAbout={showAbout}
              />
            )}

            {/* About section */}
            {showAbout && (
              <About
                handleReturnClick={handleReturnClick}
                returnAnimation={returnAnimation}
                showAbout={showAbout}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
