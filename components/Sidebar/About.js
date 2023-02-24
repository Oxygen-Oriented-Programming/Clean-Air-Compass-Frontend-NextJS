import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import harper from "public/harper.png";
import oliver from "public/oliver.png";
import deshon from "public/deshon.png";
import jason from "public/jason.png";
import dennis from "public/dennis.png";

export default function About({handleReturnClick, returnAnimation, showAbout}) {
  return (
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
          transform: returnAnimation ? "translateY(100%)" : "translateY(0%)",
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
          <li className="mt-4 mb-2 text-4xl font-bold transition-all">About</li>
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
            className="pb-2 h-[9.1vw] w-[9vw] rounded-3xl transition-all "
            src={dennis}
            alt=""
            text="dennis nichols"
          />
        </Link>
        <li className="m-1 text-center transition-all">
          Software development student with @codefellows. Former US Navy
          servicemember and @CDCgov public health professional.
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
            className="pb-2 h-[9vw] w-fit rounded-3xl "
            src={harper}
            alt=""
            text="harper foley"
          />
        </Link>
        <li className="m-1 text-center">
          As a software developer with a diverse background in Tech M&A, NFTs,
          and Navy Special Operations, I bring a unique perspective and skill
          set to the table. With over 8 years of professional experience , I
          have a proven track record of delivering results and driving growth
          for my clients and employers.
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
            className="pb-2 h-fit w-[9vw] rounded-3xl "
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
            className="w-[9vw] pb-2 h-fit rounded-3xl "
            src={deshon}
            alt=""
            text="deshon dixon"
          />
        </Link>
        <li className="m-1 text-center">
          Software Development Student and Army Veteran offering a strong
          foundation in software development and programming principles across
          multiple platforms.
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
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={jason}
            alt=""
            text="jason christopher"
          />
        </Link>
        <li className="m-1 text-center transition-all">
          Software developer specializing in JavaScript and Python. Air Force
          veteran with 10+ years of experience with leading teams of combat
          aviators. Squadron’s top instructor and “Top Graduate” of multiple
          military training courses. Subject-matter expert selected to validate
          software updates, manage courseware development, and author 1,600
          pages of courseware and governing documents for the $2.9 billion E-3G
          fleet upgrade.
        </li>
      </ol>
    </>
  );
}
