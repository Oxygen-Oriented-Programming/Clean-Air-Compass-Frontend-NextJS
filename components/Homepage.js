import Map from "./Map";
import Sidebar from "./Sidebar/Sidebar";
import { useState, useRef } from "react";
import RightSidebarButton from "./RightSidebar/RightSidebarButton";
import RightSidebar from "./RightSidebar/RightSidebar";
import SidebarButton from "./Sidebar/Buttons/SidebarButton";
import Chart from "./Chart";
import AlertModal from "./AlertModal";
import LocationModal from "./LocationModal";
import AlertMessage from "./AlertMessage";
import { useSession } from "next-auth/react";
import {
  handleSubmit,
  useLocation
} from "./homepageFunctions";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Homepage() {
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [locationData, setLocationData] = useState("");
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState(null);
  const [message, setMessage] = useState("");
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const { data: session, status } = useSession();
  const inputRef = useRef();
  const [defaultMapLocation, setDefaultMapLocation] = useState([47.0, -122.0]);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  useLocation(
    status,
    session,
    isMapLoaded,
    map,
    setMessage,
    setLocationData,
    setDefaultMapLocation
  );
  const toggleLocationModal = () =>
    setIsLocationModalOpen(!isLocationModalOpen);
  const toggleAlertModal = () => setIsAlertModalOpen(!isAlertModalOpen);

  // function handleLocationInput(e) {
  //   setLocationName(e.target.value);
  //   console.log(locationName);
  // }

  // function fly_animation(apiData) {
  //   console.log(apiData);
  //   map.flyToBounds(apiData.bounds, {
  //     animate: true,
  //     duration: 5,
  //   });
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const zipRegex = /^\d{5}(-\d{4})?$/;
  //   const cityRegex = /^[a-zA-Z\s,.'-]{2,}$/;
  //   if (
  //     zipRegex.test(inputRef.current.value) ||
  //     cityRegex.test(inputRef.current.value)
  //   ) {
  //     setLoading(true);
  //     let path = BASE_URL;
  //     let url = path + inputRef.current.value;
  //     try {
  //       const response = await fetch(url);
  //       const apiData = await response.json();
  //       setMessage("");
  //       if (apiData.hasOwnProperty("message")) {
  //         setMessage(apiData.message);
  //         setLoading(false);
  //         return;
  //       }
  //       if (apiData.expanded_search) {
  //         setMessage(
  //           "No sensors found for the original location. Displaying nearby sensors from an expanded search."
  //         );
  //       }
  //       setLoading(false);

  //       fly_animation(apiData);
  //       setTimeout(() => {
  //         setLocationData(apiData);
  //       }, 5100);
  //     } catch (error) {
  //       // console.error(error);
  //       alert("An error occurred while fetching data from the API");
  //     }
  //   } else {
  //     alert("This is not a valid city name or zip code");
  //   }
  // }

  return (
    <>
      <div className="flex cursor-auto h-fit">
        {!hideSidebar && (
          <Sidebar
            sidebar_show={hideSidebar}
            set_show={setHideSidebar}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            loading={loading}
            toggleAlertModal={toggleAlertModal}
            toggleLocationModal={toggleLocationModal}
            setMessage={setMessage}
            setLoading={setLoading}
            setLocationData={setLocationData}
            map={map}
          />
        )}
        {hideSidebar && (
          <SidebarButton sidebar_show={hideSidebar} set_show={setHideSidebar} />
        )}
        {message && <AlertMessage message={message} />}
        <Map
          className=""
          locationData={locationData}
          setMap={setMap}
          map={map}
          defaultLocation={defaultMapLocation}
          isMapLoaded={isMapLoaded}
          setIsMapLoaded={setIsMapLoaded}
        />
        <Chart />
        {showRightSidebar && (
          <RightSidebar
            sidebar_show={showRightSidebar}
            set_show={setShowRightSidebar}
          />
        )}
        {!showRightSidebar && (
          <RightSidebarButton
            sidebar_show={showRightSidebar}
            set_show={setShowRightSidebar}
            text="More Info"
          />
        )}
        <AlertModal
          isModalOpen={isAlertModalOpen}
          toggleModal={toggleAlertModal}
        />
        <LocationModal
          isModalOpen={isLocationModalOpen}
          toggleModal={toggleLocationModal}
        />
      </div>
    </>
  );
}
