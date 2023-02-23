import Map from "./Map";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import RightSidebarButton from "./RightSidebarButton";
import RightSidebar from "./RightSidebar";
import Chart from "./Chart";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// console.log(BASE_URL);

export default function Homepage({BASE_URL}) {
    const [showRightSidebar, setShowRightSidebar] = useState(false);

    const [locationName, setLocationName] = useState("");
    const [locationData, setLocationData] = useState("");
    const [loading, setLoading] = useState(false);
    const [map, setMap] = useState(null);
    const baseUrl = BASE_URL
    
    function handleLocationInput(e) {
        setLocationName(e.target.value);
    }

    function fly_animation(apiData) {
        map.flyTo([apiData.center_point[1], apiData.center_point[0]], 12, {
        animate: true,
        duration: 5,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(baseUrl);

        const zipRegex = /^\d{5}(-\d{4})?$/;
        const cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
        if (zipRegex.test(locationName) || cityRegex.test(locationName)) {
            setLoading(true);
            let path = baseUrl;
            let url = path + locationName;
            try {
                const response = await fetch(url);
                const apiData = await response.json();
                setLoading(false);
                fly_animation(apiData);
                setTimeout(() => {
                    setLocationData(apiData);
                }, 5100);
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
                <Sidebar
                    handleLocationInput={handleLocationInput}
                    handleSubmit={handleSubmit}
                    loading={loading}
                />

                <Map
                    className=""
                    locationData={locationData}
                    setMap={setMap}
                    map={map}
                />
                
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
                    text="More Info"

                    />
                ) : null}
                <Chart />
            </div>
        </>
    );
}
