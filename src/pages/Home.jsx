// import { Link, useNavigate } from "react-router-dom";
import HeroSection from "../components/home-components/HeroSection";
import IntroSection from "../components/home-components/IntroSection";
import DiningDrinksSection from "../components/home-components/DiningDrinksSection";
import RoomSection from "../components/home-components/RoomSection";
import ExerciseRelaxationSection from "../components/home-components/ExerciseRelaxationSection";
import OtherAmenitiesSection from "../components/home-components/OtherAmenitiesSection";
import HotelExterior from "../components/home-components/HotelExterior";
import AtCordisSection from "../components/home-components/AtCordisSection";
import LocateUsSection from "../components/home-components/LocateUsSection";

function HomePage() {
  // const navigate = useNavigate(); // useNavigate is a hook that allows you to navigate to a different page (programmatically .ie. afer a timeout or something)

  return (
    <>
      <HeroSection />
      {/* <button onClick={() => navigate('/about')}>View Products</button> */}{" "}
      {/* This is a way to navigate to a different page (programmatically .ie. afer a timeout or something) */}
      <IntroSection />
      <RoomSection />
      <DiningDrinksSection />
      <ExerciseRelaxationSection />
      <OtherAmenitiesSection />
      <HotelExterior />
      <AtCordisSection />
      <LocateUsSection />
    </>
  );
}

export default HomePage;
