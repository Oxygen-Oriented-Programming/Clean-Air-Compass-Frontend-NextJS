import Link from "next/link";
import React from "react";
import Image from "next/image";
import harper from "public/harper.png";
import oliver from "public/oliver.png";
import deshon from "public/deshon.png";
import jason from "public/jason.png";
import dennis from "public/dennis.png";

export default function About({
  handleReturnClick,
  returnAnimation,
  showAbout,
}) {
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
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-blue-500 hover:text-blue-900">
          <a href="https://github.com/orgs/Oxygen-Oriented-Programming/repositories" target="_blank"> Project GitHub </a>
        </li>
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-white">
          Oliver Speir
        </li>
        <div className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900">
          <Image
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={oliver}
            alt="Picture of Oliver Speir"
            text="Oliver Speir"
          />
        </div>
        <li>
          <a
            href="https://github.com/OliverSpeir"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/oliverspeir/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://OliverSpeir.com"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Portfolio
          </a>
        </li>
        <li className="m-1 text-center transition-all">
          I am open to network, freelance or work full-time at the right company,
          please feel free to connect with me.
        </li>
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-white">
          Harper Foley
        </li>
        <div className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900">
          <Image
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={harper}
            alt="Picture of Harper Foley"
            text="Harper Foley"
          />
        </div>
        <li>
          <a
            href="https://github.com/hfoley2013"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/harper-e-foley/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://harperfoley.vercel.app/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Portfolio
          </a>
        </li>
        <li className="m-1 text-center transition-all">
          I am a full stack engineer with experience in FinTech and blockchain
          technologies. Currently, I am bringing greater insights into the
          gaming NFT marketplace at Rainier Racing NFT.
        </li>
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-white">
          DeShon Dixon
        </li>
        <div className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900">
          <Image
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={deshon}
            alt="Picture of DeShon Dixon"
            text="DeShon Dixon"
          />
        </div>
        <li>
          <a
            href="https://github.com/deshondixon"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/deshondixon/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://deshondixon.vercel.app/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Portfolio
          </a>
        </li>
        <li className="m-1 text-center transition-all">
          Software Engineer and Army Veteran offering a strong foundation in
          software development and programming principles across multiple
          platforms.
        </li>
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-white">
          Dennis Nichols
        </li>
        <div className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900">
          <Image
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={dennis}
            alt="Picture of DeShon Dixon"
            text="DeShon Dixon"
          />
        </div>
        <li>
          <a
            href="https://github.com/dennis-nichols"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/dennisgnichols/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://dennis-nichols-portfolio.vercel.app/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Portfolio
          </a>
        </li>
        <li className="m-1 text-center transition-all">
          My goal is to bring web development and data science skills to bear on
          the challenges of renewable energy, sustainability, and public health.
        </li>
        <li className="flex h-fit px-4 py-2.5 font-normal text-2xl rounded transition-all text-white">
          Jason Christopher
        </li>
        <div className="flex px-2 pt-2 m-auto text-2xl font-normal text-white transition-all h-fit rounded-3xl hover:bg-gray-900">
          <Image
            className="pb-2 h-fit w-[9vw] rounded-3xl "
            src={jason}
            alt="Picture of DeShon Dixon"
            text="DeShon Dixon"
          />
        </div>
        <li>
          <a
            href="https://github.com/jason-christopher"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            Github
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/jasonchristopher24/"
            target="_blank"
            className="text-blue-500 hover:text-blue-900"
          >
            LinkedIn
          </a>
        </li>
        <li className="m-1 text-center transition-all">
          Software developer specializing in JavaScript and Python. Air Force
          veteran with 10+ years of experience with leading teams of combat
          aviators.
        </li>
      </ol>
    </>
  );
}
