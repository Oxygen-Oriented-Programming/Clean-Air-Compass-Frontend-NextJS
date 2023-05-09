import { useEffect } from "react";

// this function flys to and renders geojson for the browser default location:
// 1. gets the lat and long from users browser 2. gets the name of the city their in from locationiq 3. sends that city to our fast api
// 4. if the return from the fast api isn't message it flys to that location and then renders the geoJson by setting locationData in state
// 5. if the return from fast api is message:
//            it sets the message state which displays a red alert type message on top of homepage
//            then it calls setDefaultMapLocation function which is part of DefaultMapLocation state which is normally set to seattle
// dev notes:  we could remove the try catch block on map.flyto if we wanted to
export const BrowserDefaultLocation = (
  setMessage,
  setLocationData,
  map,
  setDefaultMapLocation
) => {
  navigator.geolocation.getCurrentPosition(async ({ coords }) => {
    const { latitude, longitude } = coords;
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const locationQuery = data.address.city
          ? data.address.city
          : data.address.county;
        if (locationQuery) {
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${locationQuery}`)
            .then((response) => response.json())
            .then((data) => {
              if (!data.message) {
                try {
                  map.flyTo(
                    [data.center_point[1], data.center_point[0]],
                    handleZoom(data.bounds),
                    {
                      animate: true,
                      duration: 5,
                    }
                  );
                } catch (error) {
                  // console.log(error);
                }
                setTimeout(() => {
                  setLocationData(data);
                }, 5100);
              }
              if (data.message) {
                setDefaultMapLocation([latitude, longitude]);
                setMessage(
                  "Sorry! There are no sensors in the area sent by your browser. Try searching for a city nearby then logging in and setting it as your default location OR check out PurpleAir.com and learn how to set up your own sensor."
                );
              }
            });
        } else {
          setMessage(
            "We couldn't determine your location. Please try searching for a city nearby."
          );
        }
      });
  });
};

// this function flys to and renders the geojson for the users default location:
// 1. sends the default location to our fast api
// (we assume the default location they have set won't return message from the fast api)
// 2. flys to that location then renders the locationData
// dev notes:  we could remove the try catch block on map.flyto if we wanted to
export const UserDefaultLocation = (session, setLocationData, map) => {
  fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${session.auth_token.default_location}`
  )
    .then((response) => response.json())
    .then((data) => {
      try {
        // zoom setting is second param of flyTo (10 as of right now)
        map.flyTo(
          [data.center_point[1], data.center_point[0]],
          handleZoom(data.bounds),
          {
            animate: true,
            duration: 5,
          }
        );
      } catch (error) {}
      setTimeout(() => {
        setLocationData(data);
      }, 5100);
    });
};

//handleZoom is a helper Function for handleSubmit
function handleZoom(bounds) {
  // Extract latitude and longitude from bounds
  const lat1 = bounds[0][0];
  const lat2 = bounds[1][0];
  const lon1 = bounds[0][1];
  const lon2 = bounds[1][1];

  // Create a bounding box array using the extracted values
  const bbox = [lon1, lat1, lon2, lat2];
  const earthRadius = 6371008.8;
  const [west, south, east, north] = bbox;

  // Calculate the surface area
  const result =
    (earthRadius *
      earthRadius *
      Math.PI *
      Math.abs(Math.sin(rad(south)) - Math.sin(rad(north))) *
      (east - west)) /
    180;

  // rad function to convert degrees to radians
  function rad(num) {
    return (num * Math.PI) / 180;
  }

  // Get the dynamic zoom level based on the surface area
  const scaleFactor1 = (11.75 - 11.25) / (508733486 - 1668367727);
  const scaleFactor2 = (11.25 - 7.75) / (1668367727 - 257501017260);

  let zoomLevel;

  if (result <= 508733486) {
    zoomLevel = 11.75;
  } else if (result <= 1668367727) {
    zoomLevel = 11.75 - (result - 508733486) * scaleFactor1;
  } else {
    zoomLevel = 11.25 - (result - 1668367727) * scaleFactor2;
  }

  // Return the dynamic zoom factor
  return zoomLevel;
}

// this is the handleSubmit from the search form
// this function does:
// 1. resets message state (which when not falsey displays a red alert type message on top of homepage)
// 2. uses regex to validate the input as either a zip code or valid city (if else) (else displays enter valid input message(which looks like an alert))
// 3. sets the loading state which makes the search button turn into a loading icon
// 4. trys to calls the fast api
// 5. if fast api returns message(meaning error) it sets that error to the message state(which looks like an alert) and sets loading to be false
// 6. if fast api doesnt return message (no error) it flys to the location and then renders the geojson
// 7. catch from the fast api call try: displays a message saying error

export const handleSubmit = async (
  e,
  inputRef,
  setMessage,
  setLoading,
  setLocationData,
  map
) => {
  e.preventDefault();
  setMessage("");
  const zipRegex = /^\d{5}(-\d{4})?$/;
  const cityRegex = /^[a-zA-Z\s,.'-]{2,}$/;
  if (
    zipRegex.test(inputRef.current.value) ||
    cityRegex.test(inputRef.current.value)
  ) {
    setLoading(true);
    let url =
      process.env.NEXT_PUBLIC_BASE_URL +
      encodeURIComponent(inputRef.current.value);
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      if (apiData.hasOwnProperty("message")) {
        setMessage(apiData.message);
        setLoading(false);
        return;
      }
      if (apiData.expanded_search) {
        setLoading(false);
        setMessage(
          "No sensors found for the original location. Displaying nearby sensors from an expanded search."
        );
      }
      setLoading(false);
      // zoom setting is second argument to flyTo
      map.flyTo(
        [apiData.center_point[1], apiData.center_point[0]],
        handleZoom(apiData.bounds),
        {
          animate: true,
          duration: 5,
        }
      );
      setTimeout(() => {
        setLocationData(apiData);
      }, 5100);
    } catch (error) {
      // console.error(error);
      setLoading(false);
      setMessage("An error occurred while fetching data from the API");
    }
  } else {
    setLoading(false);
    setMessage("This is not a valid city name or zip code");
  }
};

// this is sets the default location when page loads
// the dependancy array is status and isMapLoaded which means that this will be retriggered if status changes(meaning they log out or log in) or if the map is loaded
// ismaploaded is included because this triggers immediately on page load and the map might not be rendered yet
// this function does:
// 1. calls functions according to 3 different condtions:
//         a. user allows location and is not logged in
//              calls BrowserDefaultLocation
//         b. user is logged in and has set their default location
//              calls UserDefaultLocation
//         c. user is logged in and has not set their default location
//              calls BrowserDefaultLocation
//      <<< if the user blocks location and does not set default location in the map will display its default location with no animation(seattle)>>>
export const useLocation = (
  status,
  session,
  isMapLoaded,
  map,
  setMessage,
  setLocationData,
  setDefaultMapLocation
) => {
  useEffect(() => {
    if (
      "geolocation" in navigator &&
      status === "unauthenticated" &&
      isMapLoaded
    ) {
      BrowserDefaultLocation(
        setMessage,
        setLocationData,
        map,
        setDefaultMapLocation
      );
    }
    if (
      status === "authenticated" &&
      session.auth_token.default_location &&
      isMapLoaded
    ) {
      UserDefaultLocation(session, setLocationData, map);
    }
    if (
      status === "authenticated" &&
      !session.auth_token.default_location &&
      "geolocation" in navigator &&
      isMapLoaded
    ) {
      BrowserDefaultLocation(
        setMessage,
        setLocationData,
        map,
        setDefaultMapLocation
      );
    }
  }, [status, isMapLoaded]);
};
