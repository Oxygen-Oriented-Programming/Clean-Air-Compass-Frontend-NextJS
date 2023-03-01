import Map from './Map';
import Sidebar from './Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import RightSidebarButton from './RightSidebar/RightSidebarButton';
import RightSidebar from './RightSidebar/RightSidebar';
import SidebarButton from './Sidebar/SidebarButton';
import Chart from './Chart';
import AlertModal from './AlertModal';
import AlertMessage from './AlertMessage';
import { useSession } from 'next-auth/react';
import { useRef } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Homepage({ BASE_URL }) {
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [locationName, setLocationName] = useState('');
  const [locationData, setLocationData] = useState('');
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState(null);
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [userGeoCoords, setUserGeoCoords] = useState('');
  const baseUrl = BASE_URL;
  const { data: session, status } = useSession();
  const inputRef = useRef();

  useEffect(()=> {
    if ("geolocation" in navigator && !session?.auth_token.default_location) {
      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
         const { latitude, longitude } = coords;
         // setUserGeoCoords([latitude, longitude]);
         const url = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
         await fetch(url)
             .then((response) => response.json())
             .then((data) =>
                 fetch(`${baseUrl}${data.address.state}`)
                     .then((response) => response.json())
                     .then((data) => setLocationData(data))
             );
     });
 }
  }, []);
  useEffect(() => {
      if (session && session.default_location){
        fetch(`${baseUrl}${session.default_location}`)
        .then((response) => response.json())
        .then((data) => setLocationData(data))
      }
  }, [session, baseUrl]);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleLocationInput(e) {
    setLocationName(e.target.value);
    // console.log(locationName);
  };

  function fly_animation(apiData) {
    map.flyTo([apiData.center_point[1], apiData.center_point[0]], 8, {
      animate: true,
      duration: 5,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const cityRegex = /^[a-zA-Z\s,.'-]{2,}$/;
    if (zipRegex.test(inputRef.current.value) || cityRegex.test(inputRef.current.value)) {
      setLoading(true);
      let path = baseUrl;
      let url = path + inputRef.current.value;
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        if (apiData.hasOwnProperty('message')) {
          setMessage(apiData.message);
          setLoading(false);
          return;
        }
        setLoading(false);
        setMessage('');
        fly_animation(apiData);
        setTimeout(() => {
          setLocationData(apiData);
        }, 5100);
      } catch (error) {
        // console.error(error);
        alert('An error occurred while fetching data from the API');
      }
    } else {
      alert('This is not a valid city name or zip code');
    }
  }
  console.log(inputRef)
  return (
    <>
      <div className='flex cursor-auto h-fit'>
        <div className=''>
          {!showSidebar && (
            <Sidebar
              sidebar_show={showSidebar}
              set_show={setShowSidebar}
              inputRef ={inputRef}
              handleLocationInput={handleLocationInput}
              handleSubmit={handleSubmit}
              loading={loading}
              toggleModal={toggleModal}
            />
          )}
          {showSidebar && (
            <SidebarButton
              sidebar_show={showSidebar}
              set_show={setShowSidebar}
              handleLocationInput={handleLocationInput}
              handleSubmit={handleSubmit}
              loading={loading}
              text='LEFT SIDEBAR'
              toggleModal={toggleModal}
            />
          )}
        </div>
        {message && <AlertMessage message={message} />}
        <Map
          className=''
          locationData={locationData}
          setMap={setMap}
          map={map}
          // userGeoCoords={userGeoCoords}
        />
        <Chart className='' />
        <div className=''>
          {showRightSidebar && (
            <RightSidebar
              sidebar_show={showRightSidebar}
              set_show={setShowRightSidebar}
            />
          )}
          {!showRightSidebar ? (
            <RightSidebarButton
              sidebar_show={showRightSidebar}
              set_show={setShowRightSidebar}
              text='More Info'
            />
          ) : null}
        </div>
        <AlertModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          toggleModal={toggleModal}
        />
      </div>
    </>
  );
}
