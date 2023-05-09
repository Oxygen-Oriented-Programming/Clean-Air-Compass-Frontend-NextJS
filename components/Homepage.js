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
import { handleSubmit, useLocation } from "./homepageFunctions";

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
        {message && <AlertMessage message={message} setMessage={setMessage} />}
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
          setMessage={setMessage}
          message={message}
        />
      </div>
    </>
  );
}
