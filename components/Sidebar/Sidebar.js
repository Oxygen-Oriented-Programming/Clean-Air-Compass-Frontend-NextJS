import React from 'react';
import Link from 'next/link';
import SearchForm from './SearchForm';
import AboutFeaturesButtons from './AboutFeaturesButtons';
import NavTitle from './NavTitle';
import SetDefaultLocation from './SetDefaultLocation';
import { useState } from 'react';
import About from './About';
import Features from './Features';
import HideSidebarButton from './HideSidebarButton';
import { useSession } from 'next-auth/react';
import Login from './Login';
import ModalButton from './ModalButton';

export default function Sidebar(props) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [returnAnimation, setReturnAnimation] = useState(false);
  const { data: session, status } = useSession();

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
          {/* ShowSidebarButton opens the sidebar when it is collapsed */}
          <HideSidebarButton set_show={props.set_show} sidebar_show = {props.sidebar_show}/>
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
              <SearchForm
                loading={props.loading}
                handleLocationInput={props.handleLocationInput}
                handleSubmit={props.handleSubmit}
                inputRef= {props.inputRef}
              />
              {!showFeatures && !showAbout && (
                <AboutFeaturesButtons
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
          {/* modalbutton opens alerts and locations modal  */}
          {status === 'authenticated' && <ModalButton toggleModal={props.toggleAlertModal}/>}
          <Login/>
          </div>
        </div>
      </div>
    </>
  );
}
