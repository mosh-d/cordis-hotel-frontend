import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/home-components/HeroSection";
import IntroSection from "../components/home-components/IntroSection";
import RoomSection from "../components/home-components/RoomSection";
import ExerciseRelaxationSection from "../components/home-components/ExerciseRelaxationSection";
import OtherAmenitiesSection from "../components/home-components/OtherAmenitiesSection";
import HotelExterior from "../components/home-components/HotelExterior";
import AtCordisSection from "../components/home-components/AtCordisSection";
import LocateUsSection from "../components/home-components/LocateUsSection";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import FlavorsOfCordisSection from "../components/home-components/FlavorsOfCordisSection";
import PoolAndBarSection from "../components/home-components/PoolAndBarSection";

function HomePage() {
  const { setShowFixedReserve } = useOutletContext();
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowFixedReserve(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [setShowFixedReserve]);

  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    countryCode, setCountryCode,
    checkIn, setCheckIn,
    checkOut, setCheckOut,
    roomCategory, setRoomCategory,
    noOfRooms, setNoOfRooms,
  } = useOutletContext();

  return (
    <>
      <HeroSection
        ref={heroSectionRef}
        checkIn={checkIn}
        setCheckIn={setCheckIn}
        checkOut={checkOut}
        setCheckOut={setCheckOut}
        noOfRooms={noOfRooms}
        setNoOfRooms={setNoOfRooms}
      />
      {/* <button onClick={() => navigate('/about')}>View Products</button> */}{" "}
      {/* This is a way to navigate to a different page (programmatically .ie. afer a timeout or something) */}
      <IntroSection />
      <RoomSection />
      <FlavorsOfCordisSection />
      <ExerciseRelaxationSection />
      <PoolAndBarSection />
      <OtherAmenitiesSection />
      <HotelExterior />
      <AtCordisSection />
      <LocateUsSection />
      <Footer $type="default" />
    </>
  );
}

export default HomePage;
