import { useState } from "react";
import { useSession } from "next-auth/react";
import SearchForm from "./SearchForm";
import AboutFeaturesButtons from "./Buttons/AboutFeaturesButtons";
import SideBarTitle from "./SideBarTitle";
import About from "./About";
import Features from "./Features";
import HideSidebarButton from "./Buttons/HideSidebarButton";
import Login from "./Login";
import AlertModalButton from "./Buttons/AlertModalButton";
import LocationModalButton from "./Buttons/LocationModalButton";

export default function Sidebar(props) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [returnAnimation, setReturnAnimation] = useState(false);
  const { data: session, status } = useSession();

  const handleFeaturesClick = () => {
    setShowFeatures(true);
    setShowAbout(false);
  };

  const handleAboutClick = () => {
    setShowAbout(true);
    setShowFeatures(false);
  };

  const handleReturnClick = () => {
    setReturnAnimation(true);
    setTimeout(() => {
      setShowAbout(false);
      setShowFeatures(false);
      setReturnAnimation(false);
    }, 500); // Wait for the animation to complete
  };

  return (
    <>
      <div className="h-screen bg-black">
        <div
          className={
            showFeatures || showAbout
              ? "min-h-screen w-72 px-2 space-y-2.5 text-white bg-black inset-y-0 relative transition duration-200 ease-in-out"
              : "w-72 px-2 space-y-2.5 text-white inset-y-0 relative bg-black transition duration-200 ease-in-out"
          }
        >
          <SideBarTitle />
          {/* ShowSidebarButton opens the sidebar when it is collapsed */}
          <HideSidebarButton
            set_show={props.set_show}
            sidebar_show={props.sidebar_show}
          />
          <div className="flex flex-col">
            <nav
              className="space-y-1"
              style={{
                transform:
                  showFeatures || showAbout
                    ? "translateY(-100%)"
                    : "translateY(0%)",
                opacity: showFeatures || showAbout ? 0 : 1,
                height: showFeatures || showAbout ? 0 : "auto",
                overflow: "hidden",
                transition: "all 0.5s ease-in-out",
                transitionDelay: showFeatures || showAbout ? "0.5s" : "0s",
              }}
            >
              <SearchForm
                loading={props.loading}
                handleSubmit={props.handleSubmit}
                inputRef={props.inputRef}
                setMessage={props.setMessage}
                setLoading={props.setLoading}
                setLocationData={props.setLocationData}
                map={props.map}
              />
              {/* this shows the features and about buttons */}
              {!showFeatures && !showAbout && (
                <AboutFeaturesButtons
                  handleFeaturesClick={handleFeaturesClick}
                  handleAboutClick={handleAboutClick}
                  handleReturnClick={handleReturnClick}
                  toggleModal={props.toggleModal}
                />
              )}
            </nav>

            {/* this shows the features page in side bar if features button is clicked */}
            {showFeatures && (
              <Features
                handleReturnClick={handleReturnClick}
                returnAnimation={returnAnimation}
                showFeatures={showFeatures}
                showAbout={showAbout}
              />
            )}

            {/* this shows the about page in side bar if about button is clicked */}
            {showAbout && (
              <About
                handleReturnClick={handleReturnClick}
                returnAnimation={returnAnimation}
                showAbout={showAbout}
              />
            )}
            {/* this shows the alerts & locations button only if the user is logged in  */}
            {status === "authenticated" && (
              <>
                <AlertModalButton toggleAlertModal={props.toggleAlertModal} />
                <LocationModalButton
                  toggleLocationModal={props.toggleLocationModal}
                />
              </>
            )}
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}
