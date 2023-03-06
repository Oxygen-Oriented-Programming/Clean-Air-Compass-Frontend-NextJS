import { useEffect } from "react";

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
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${data.address.city}`)
          .then((response) => response.json())
          .then((data) => {
            if (!data.message) {
              try {
                // zoom setting is second param of flyTo (10 as of right now)
                map.flyTo([data.center_point[1], data.center_point[0]], 10, {
                  animate: true,
                  duration: 5,
                });
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
      });
  });
};

export const UserDefaultLocation = (session, setLocationData, map) => {
  fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}${session.auth_token.default_location}`
  )
    .then((response) => response.json())
    .then((data) => {
      try {
        // zoom setting is second param of flyTo (10 as of right now)
        map.flyTo([data.center_point[1], data.center_point[0]], 10, {
          animate: true,
          duration: 5,
        });
      } catch (error) {}
      setTimeout(() => {
        setLocationData(data);
      }, 5100);
    });
};

export const handleSubmit = async (
  e,
  inputRef,
  setMessage,
  setLoading,
  fly_animation,
  setLocationData,
  map
) => {
  console.log(map);
  e.preventDefault();
  setMessage("");
  const zipRegex = /^\d{5}(-\d{4})?$/;
  const cityRegex = /^[a-zA-Z\s,.'-]{2,}$/;
  if (
    zipRegex.test(inputRef.current.value) ||
    cityRegex.test(inputRef.current.value)
  ) {
    setLoading(true);
    let path = process.env.NEXT_PUBLIC_BASE_URL;
    let url = path + inputRef.current.value;
    try {
      const response = await fetch(url);
      const apiData = await response.json();
      setMessage("");
      if (apiData.hasOwnProperty("message")) {
        setMessage(apiData.message);
        setLoading(false);
        return;
      }
      if (apiData.expanded_search) {
        setMessage(
          "No sensors found for the original location. Displaying nearby sensors from an expanded search."
        );
      }
      setLoading(false);

      map.flyTo([apiData.center_point[1], apiData.center_point[0]], 8, {
        animate: true,
        duration: 5,
      });
      setTimeout(() => {
        setLocationData(apiData);
      }, 5100);
    } catch (error) {
      // console.error(error);
      alert("An error occurred while fetching data from the API");
    }
  } else {
    alert("This is not a valid city name or zip code");
  }
};

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
      BrowserDefaultLocation(setMessage, setLocationData, map);
    }
  }, [status, isMapLoaded]);
};
