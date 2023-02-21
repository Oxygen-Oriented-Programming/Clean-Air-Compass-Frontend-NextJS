import Map from './Map';
import Form from './Form';
import MobileForm from './MobileForm';
import Login from '../components/Login';
import MobileLogin from '../components/MobileLogin';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';

export default function Homepage() {
    const [locationName, setLocationName] = useState('');
    const [locationData, setLocationData] = useState('');

    function handleLocationInput(e) {
        setLocationName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const zipRegex = /^\d{5}(-\d{4})?$/;
        const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
        let baseUrl = "https://dolphin-app-ebj76.ondigitalocean.app/points/";
        let url = baseUrl + locationName;
        console.log(url);
        try {
            const response = await fetch(url);
            const apiData = await response.json();
            setLocationData(apiData);
            
            console.log(response)
            console.log(apiData);
            console.log(locationData);
        } catch (error) {
            console.error(error);
            alert("An error occurred while fetching data from the API");
        }
        } else {
        alert("This is not a valid city name or zip code");
        }
    }

    return (
        <>
            <div className='relative min-h-screen md:flex '>
                {/* mobile menu bar */}
                <div className='flex items-center justify-between pl-3 text-gray-100 bg-black w-fit sm:w-screen md:hidden'>
                    <MobileForm
                        handleLocationInput={handleLocationInput}
                        handleSubmit={handleSubmit}
                    />
                    <Link
                        className='block px-4 py-2.5 text-sm font-normal rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
                        href='/'
                    >
                        Home
                    </Link>
                    <Link
                        className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
                        href='/'
                    >
                        About
                    </Link>
                    <Link
                        className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
                        href='/'
                    >
                        Features
                    </Link>
                    <Link
                        className='block px-4 py-2.5 font-normal text-sm rounded transition duration-100 hover:bg-gray-700 text-white bg-black'
                        href='/'
                    >
                        More
                    </Link>
                    <MobileLogin />
                </div>

                {/* Sidebar */}
                <div class='sidebar w-64 px-2 space-y-2.5 text-blue-100 bg-black absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out'>
                {/* Logo */}
                    <div className='flex items-center pt-2 space gap-x-2.5 '>
                        <Image className=' w-11 h-11' src={logo} alt='' />
                        <span className='text-lg font-extrabold text-white'>
                            <h1>CleanAir Compass</h1>
                        </span>
                        </div>
                        {/* Nav*/}
                        <nav>
                            <div className='space-y-2'>
                            {/* Search */}
                            <div className='flex flex-col items-center w-full space-y-2.5'>
                                <Form
                                    handleLocationInput={handleLocationInput}
                                    handleSubmit={handleSubmit}
                                />
                            </div>
                            {/* Page Links */}
                            <Link
                                className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
                                href='/'
                            >
                                Home
                            </Link>
                            <Link
                                className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
                                href='/'
                            >
                                About
                            </Link>
                            <Link
                                className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
                                href='/'
                            >
                                Features
                            </Link>
                            <Link
                                className='block px-4 py-2.5 font-normal rounded transition duration-100 hover:bg-gray-700 text-white'
                                href='/'
                            >
                                More
                            </Link>
                        </div>
                    </nav>
                    {/* Login */}
                    <div className='flex items-center bg-black'>
                        <Login />
                    </div>
                </div>
                {/* Map */}
                <div className='flex-1 '>
                <Map className='' locationData={locationData} />
                </div>
            </div>
        </>
    );
}
