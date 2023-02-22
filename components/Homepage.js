import Map from "./Map";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import RightSidebarButton from "./RightSidebarButton";
import RightSidebar from "./RightSidebar";


export default function Homepage() {
  const [showRightSidebar, setShowRightSidebar] = useState(false);

<<<<<<< Updated upstream
    const [locationName, setLocationName] = useState('');
    const [locationData, setLocationData] = useState('');
    const [loading, setLoading] = useState(false);
    const [map, setMap] = useState(null);

    function handleLocationInput(e) {
        setLocationName(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const zipRegex = /^\d{5}(-\d{4})?$/;
        const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
            setLoading(true);
            let baseUrl = "https://dolphin-app-ebj76.ondigitalocean.app/points/";
            let url = baseUrl + locationName;
            try {
                const response = await fetch(url);
                const apiData = await response.json();
                map.flyTo([apiData.center_point[1], apiData.center_point[0]], 12, {
                    animate: true,
                    duration: 5
                });
                setLocationData(apiData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                alert("An error occurred while fetching data from the API");
            }
        } else {
            alert("This is not a valid city name or zip code");
        }
=======
  const [locationName, setLocationName] = useState("");
  const [locationData, setLocationData] = useState("");
  const [loading, setLoading] = useState(false);

  function handleLocationInput(e) {
    setLocationName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const zipRegex = /^\d{5}(-\d{4})?$/;
    const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
    if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
      setLoading(true);
      let baseUrl = "https://dolphin-app-ebj76.ondigitalocean.app/points/";
      let url = baseUrl + locationName;
      console.log(url);
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setLocationData(apiData);
        console.log(response);
        console.log(apiData);
        console.log(locationData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        alert("An error occurred while fetching data from the API");
      }
    } else {
      alert("This is not a valid city name or zip code");
>>>>>>> Stashed changes
    }
  }

<<<<<<< Updated upstream
    return (
        <>
            <div className='relative min-h-screen md:flex '>
                <Sidebar handleLocationInput={handleLocationInput} handleSubmit={handleSubmit} loading={loading} />
                <div className='flex-1 '>
                    <Map locationData={locationData} setMap={setMap}/>
                </div>
            </div>
        </>
    );
=======
  return (
    <>
      <div className="relative min-h-screen md:flex ">
        <Sidebar
          handleLocationInput={handleLocationInput}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Map className="" locationData={locationData} />
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
            text = 'More Info'
          />
        ) : null}
      </div>
    </>
  );
>>>>>>> Stashed changes
}
