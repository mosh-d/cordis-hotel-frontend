import styled from "styled-components";
import Text from "../shared/Text";
import { useState } from "react";
// import { RiWifiLine, RiKettleLine, RiSmartTVLine, RiTowelLine, RiWaterHeaterLine, RiFridgeLine, RiSofaLine } from "react-icons/ri";
import {
  MdOutlineLocalLaundryService,
  MdRoomService,
  MdOutlinePool,
  MdOutlineBreakfastDining,
  MdOutlinePets,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LuConciergeBell, LuCircleParking } from "react-icons/lu";
import { IoBedOutline, IoCarOutline } from "react-icons/io5";
import {
  FaPersonWalkingLuggage,
  FaPeopleRoof,
  FaHandSparkles,
} from "react-icons/fa6";
import { PiBroomDuotone } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { RiLuggageDepositLine } from "react-icons/ri";
import { LiaCocktailSolid } from "react-icons/lia";
import { SiGooglecloudstorage } from "react-icons/si";
import { GiNewspaper } from "react-icons/gi";
import { BsBuildingCheck, BsBuildingX } from "react-icons/bs";

const StyledServicesAmenitiesPolicies = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 15rem 6rem;
`;

const StyledServicesAmenitiesPoliciesMenu = styled.menu`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  & li {
    cursor: pointer;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

export default function ServicesAmenitiesPolicies() {
  const [activeMenu, setActiveMenu] = useState("services");

  const services = [
    { icon: MdOutlineLocalLaundryService, text: "Valet Dry Cleaning" },
    { icon: TbTruckDelivery, text: "Local Restaurant Delivery" },
    { icon: LuConciergeBell, text: "Concierge Services" },
    { icon: IoBedOutline, text: "Turndown Service" },
    { icon: IoCarOutline, text: "Car Hire/Airport Shuttle" },
    { icon: FaPersonWalkingLuggage, text: "Butler Service" },
    { icon: MdRoomService, text: "Room Service" },
    { icon: PiBroomDuotone, text: "House Keeping Service" },
  ];
  const amenities = [
    { icon: FaPeopleRoof, text: "Meeting/Event Space" },
    { icon: MdOutlinePool, text: "Indoor Pool" },
    { icon: CgGym, text: "Fitness Center" },
    { icon: LuCircleParking, text: "Parking Space" },
    { icon: FaHandSparkles, text: "Spa" },
    { icon: MdOutlineBreakfastDining, text: "Buffet Breakfast (free)" },
    { icon: RiLuggageDepositLine, text: "Storage for Luggages" },
    { icon: LiaCocktailSolid, text: "Cocktail Lounge" },
    { icon: SiGooglecloudstorage, text: "Safe Deposit Boxes" },
    { icon: GiNewspaper, text: "Newspaper in Lobby" },
  ];
  const policies = [
    { icon: BsBuildingCheck, text: "Check-in: 2:00 PM" },
    { icon: BsBuildingX, text: "Check-out: 12:00 AM" },
    { icon: MdOutlinePets, text: "No Pets Allowed" },
  ];

  return (
    <>
      <StyledServicesAmenitiesPolicies>
        <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
          Hotel Services, Amenities & Policies
        </Text>
        <StyledServicesAmenitiesPoliciesMenu>
          <li onClick={() => setActiveMenu("services")}>
            <Text
              $type="p"
              $color="var(--cordis-black)"
              $weight={activeMenu === "services" ? "bold" : "regular"}
              style={{
                borderBottom:
                  activeMenu === "services"
                    ? "2px solid var(--cordis-emphasis)"
                    : "none",
              }}
            >
              Services
            </Text>
          </li>
          <li onClick={() => setActiveMenu("amenities")}>
            <Text
              $type="p"
              $color="var(--cordis-black)"
              $weight={activeMenu === "amenities" ? "bold" : "regular"}
              style={{
                borderBottom:
                  activeMenu === "amenities"
                    ? "2px solid var(--cordis-emphasis)"
                    : "none",
              }}
            >
              Amenities
            </Text>
          </li>
          <li onClick={() => setActiveMenu("policies")}>
            <Text
              $type="p"
              $color="var(--cordis-black)"
              $weight={activeMenu === "policies" ? "bold" : "regular"}
              style={{
                borderBottom:
                  activeMenu === "policies"
                    ? "2px solid var(--cordis-emphasis)"
                    : "none",
              }}
            >
              Policies
            </Text>
          </li>
        </StyledServicesAmenitiesPoliciesMenu>
        {activeMenu === "services" &&
          services.map((service, index) => {
            return (
              <StyledItem key={index}>
                <service.icon size="3rem" color="hsla(0, 0%, 54.7%, 1)" />
                <Text $size="small" $weight="bold" $color="hsla(0, 0%, 54.7%, 1)">{service.text}</Text>
              </StyledItem>
            );
          })}
        {activeMenu === "amenities" &&
          amenities.map((amenity, index) => {
            return (
              <StyledItem key={index}>
                <amenity.icon size="3rem" color="hsla(0, 0%, 54.7%, 1)" />
                <Text $size="small" $weight="bold" $color="hsla(0, 0%, 54.7%, 1)">{amenity.text}</Text>
              </StyledItem>
            );
          })}
        {activeMenu === "policies" &&
          policies.map((policy, index) => {
            return (
              <StyledItem key={index}>
                <policy.icon size="3rem" color="hsla(0, 0%, 54.7%, 1)" />
                <Text $size="small" $weight="bold" $color="hsla(0, 0%, 54.7%, 1)">{policy.text}</Text>
              </StyledItem>
            );
          })}
      </StyledServicesAmenitiesPolicies>
    </>
  );
}
