import React from 'react';
import Link from 'next/link';
import Form from './Form';
import NavLinks from './NavLinks';
import NavTitle from './NavTitle';
import SetDefaultLocation from './SetDefaultLocation';
import { useState } from 'react';
import Image from 'next/image';
import harper from 'public/harper.png';
import oliver from 'public/oliver.png';
import deshon from 'public/deshon.png';
import jason from 'public/jason.png';
import dennis from 'public/dennis.png';

export default function SidebarButton(props) {
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
      <div
        className={
          showFeatures || showAbout
            ? "min-h-screen w-64 px-2 space-y-2.5 text-white bg-black inset-y-0 relative transition duration-200 ease-in-out"
            : "w-64 min-h-screen px-2 space-y-2.5 text-white bg-black inset-y-0 relative transition duration-200 ease-in-out"
        }
      >
        <div>
          <NavTitle />
          <button
            className="fixed mr-5 text-purple-500 border-white rounded-md left-56 top-1"
            onClick={() => props.set_show(!props.sidebar_show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <div className="flex flex-col flex-1 flex-grow h-full p-3">
            <nav
              className="space-y-2 "
              style={{
                transform:
                  showFeatures || showAbout
                    ? "translateY(-100%)"
                    : "translateY(0%)",
                opacity: showFeatures || showAbout ? 0 : 1,
                height: showFeatures || showAbout ? 0 : "auto",
                overflow: "hidden",
                transition: "all 0.5s ease-in-out",
                transitionDelay: showFeatures || showAbout ? "0.5s" : "0s",
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
              <>
                <button
                  className="px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
                  onClick={handleReturnClick}
                  style={{
                    transform: returnAnimation
                      ? "transition-all translateY(100%)"
                      : "transition-all translateY(0%)",
                  }}
                >
                  Close Features
                </button>
                <ol
                  className="flex flex-col items-center justify-around text-sm inside "
                  style={{
                    height: "100%",
                    transform: returnAnimation
                      ? "transition-all translateY(100%)"
                      : "transition-all translateY(0%)",
                    opacity: showFeatures || showAbout ? 1 : 0,
                    transition: "all 0.5s ease-in-out",
                    overflow: "visible",
                  }}
                >
                  <li className="mt-4 mb-2 font-bold">MAP</li>
                  <li className="m-1">
                    Clean Air Compass currently uses data from the
                    <span className="font-bold text-purple-600">
                      &nbsp;Purple Air
                    </span>{" "}
                    network of air quality monitoring sensors.
                  </li>
                  <li className="m-1">
                    This information is used to estimate and display
                    <span className="font-bold text-purple-600">
                      &nbsp;PM 2.5
                    </span>{" "}
                    air pollution across a wide area rather than just displaying
                    readings at individual sensor locations.
                  </li>
                  <li className="m-1">
                    Users can search for either a city or postal code within the
                    US and get back an air quality map. International support is
                    not available...YET.
                  </li>
                  <li className="mt-4 mb-2 font-bold">ALERTS</li>
                  <li className="m-1">
                    Users can sign up for{" "}
                    <span className="font-bold text-purple-600">
                      text alerts
                    </span>{" "}
                    to stay informed about air quality risks in their area.
                  </li>
                </ol>
              </>
            )}

            {/* About section */}
            {showAbout && (
              <>
                <button
                  className="px-4 py-2 font-bold text-white transition-all bg-transparent border border-purple-500 rounded hover:bg-purple-700 hover:border-transparent"
                  onClick={handleReturnClick}
                  style={{
                    transform: returnAnimation
                      ? "transition-all translateY(100%)"
                      : "transition-all translateY(0%)",
                  }}
                >
                  Close About
                </button>
                <ol
                  className="flex flex-col items-center justify-around text-sm text-center inside"
                  style={{
                    height: "100%",
                    transform: returnAnimation
                      ? "translateY(100%)"
                      : "translateY(0%)",
                    opacity: showAbout ? 1 : 0,
                    transition: "all 0.5s ease-in-out",
                    overflow: "visible",
                  }}
                >
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all duration-100 hover:cursor-pointer hover:text-gray-500 text-white "
                    href="https://github.com/orgs/Oxygen-Oriented-Programming/repositories"
                    target="_blank"
                  >
                    <li className="mt-4 mb-2 text-4xl font-bold transition-all">
                      About
                    </li>
                  </Link>
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all hover:text-purple-700 text-white "
                    href="https://github.com/dennis-nichols"
                    target="_blank"
                  >
                    Dennis Nichols
                  </Link>
                  <Link
                    className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/dennisgnichols/"
                    target="_blank"
                  >
                    <Image
                      className="pb-2 h-[9.1vw] w-[9vw] rounded-3xl transition-all animate-pulse hover:animate-none"
                      src={dennis}
                      alt=""
                      text="dennis nichols"
                    />
                  </Link>
                  <li className="m-1 text-center transition-all">
                    Software development student with @codefellows. Former US
                    Navy servicemember and @CDCgov public health professional.
                  </li>
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all hover:text-purple-700 text-white"
                    href="https://github.com/hfoley2013"
                    target="_blank"
                  >
                    Harper Foley
                  </Link>
                  <Link
                    className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/harper-e-foley/"
                    target="_blank"
                  >
                    <Image
                      className="pb-2 h-[9vw] w-fit rounded-3xl animate-pulse hover:animate-none"
                      src={harper}
                      alt=""
                      text="harper foley"
                    />
                  </Link>
                  <li className="m-1 text-center">
                    As a software developer with a diverse background in Tech
                    M&A, NFTs, and Navy Special Operations, I bring a unique
                    perspective and skill set to the table. With over 8 years of
                    professional experience , I have a proven track record of
                    delivering results and driving growth for my clients and
                    employers.
                  </li>
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all hover:text-purple-700 text-white"
                    href="https://github.com/OliverSpeir"
                    target="_blank"
                  >
                    Oliver Speir
                  </Link>
                  <Link
                    className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/oliverspeir/"
                    target="_blank"
                  >
                    <Image
                      className="pb-2 h-fit w-[9vw] rounded-3xl animate-pulse hover:animate-none"
                      src={oliver}
                      alt=""
                      text="Oliver Speir"
                    />
                  </Link>
                  <li className="m-1 text-center transition-all">
                    Full Stack Software Engineer | Continuous Improver
                  </li>
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all hover:text-purple-700 text-white"
                    href="https://github.com/deshondixon"
                    target="_blank"
                  >
                    DeShon Dixon
                  </Link>
                  <Link
                    className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/deshondixon/"
                    target="_blank"
                  >
                    <Image
                      className="w-[9vw] pb-2 h-fit rounded-3xl animate-pulse hover:animate-none"
                      src={deshon}
                      alt=""
                      text="deshon dixon"
                    />
                  </Link>
                  <li className="m-1 text-center">
                    Software Development Student and Army Veteran offering a
                    strong foundation in software development and programming
                    principles across multiple platforms.
                  </li>
                  <Link
                    className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all hover:text-purple-700 text-white"
                    href="https://github.com/jason-christopher"
                    target="_blank"
                  >
                    Jason Christopher
                  </Link>
                  <Link
                    className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900 hover:cursor-pointer"
                    href="https://www.linkedin.com/in/jasonchristopher24/"
                    target="_blank"
                  >
                    <Image
                      className="pb-2 h-fit w-[9vw] rounded-3xl animate-pulse hover:animate-none"
                      src={jason}
                      alt=""
                      text="jason christopher"
                    />
                  </Link>
                  <li className="m-1 text-center transition-all">
                    Software developer specializing in JavaScript and Python.
                    Air Force veteran with 10+ years of experience with leading
                    teams of combat aviators. Squadron’s top instructor and “Top
                    Graduate” of multiple military training courses.
                    Subject-matter expert selected to validate software updates,
                    manage courseware development, and author 1,600 pages of
                    courseware and governing documents for the $2.9 billion E-3G
                    fleet upgrade.
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
