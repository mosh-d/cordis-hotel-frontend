import { useOutletContext } from "react-router-dom";
import HeroSection from "../components/home-components/HeroSection";
import IntroSection from "../components/home-components/IntroSection";
import DiningDrinksSection from "../components/home-components/DiningDrinksSection";
import RoomSection from "../components/home-components/RoomSection";
import ExerciseRelaxationSection from "../components/home-components/ExerciseRelaxationSection";
import OtherAmenitiesSection from "../components/home-components/OtherAmenitiesSection";
import HotelExterior from "../components/home-components/HotelExterior";
import AtCordisSection from "../components/home-components/AtCordisSection";
import LocateUsSection from "../components/home-components/LocateUsSection";
import { useEffect, useRef } from "react";

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

  return (
    <>
      <HeroSection ref={heroSectionRef} />
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
