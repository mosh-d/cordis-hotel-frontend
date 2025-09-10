import { styled } from "styled-components";
import { useMemo } from "react";
import Text from "../../components/shared/Text";
import {
  RiArrowLeftLine,
  RiWifiLine,
  RiTv2Line,
  RiFridgeLine,
  RiSofaLine,
  RiCheckLine,
  RiLuggageDepositLine,
} from "react-icons/ri";
import { GiWaterFlask, GiDesk, GiSlippers, GiRobe } from "react-icons/gi";
import { MdOutlineHeatPump } from "react-icons/md";
import { LiaMugHotSolid } from "react-icons/lia";
import { PiTowel } from "react-icons/pi";
import { BiCloset, BiDrink  } from "react-icons/bi";
import Button from "../../components/shared/Button";
import { Link as RouterLink, useParams, useOutletContext } from "react-router-dom";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";
import { media } from "../../util/breakpoints";

const StyledRoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 15rem 12rem;
  width: 100%;

  ${media.tablet} {
    padding: 15rem 6rem;
  }

  ${media.mobile} {
    padding: 12rem 2rem;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

const StyledBackArrow = styled.div`
  padding: 1.3rem 0;
  width: 6rem;
  height: 6rem;
  transition: all 0.1s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      transform: translateX(-0.4rem) scale(1.1);
      opacity: 0.7;
    }
  }

  &:active {
    transform: translateX(-0.8rem) scale(1.1);
    opacity: 1;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  width: 100%;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: fit-content;
  border: 1px solid var(--cordis-black);
  padding: 2.4rem;

  ${media.mobile} {
    padding: 2.4rem 1rem;
  }
`;

const StyledDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const StyledDetailText1 = styled.div`
  width: 70%;

  ${media.mobile} {
    width: 60%;
  }
`;

const StyledDetailText2 = styled.div`
  width: fit-content;
  text-align: right;
  min-width: 0;
  word-wrap: break-word;

  & * {
    text-align: right !important;
    word-wrap: break-word;
  }
`;

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledFeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.6rem;
`;

const StyledFeature = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3.6rem;
`;

const StyledService = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function RoomDetailsPage() {
  const params = useParams();
  const context = useOutletContext();

  // Generate search parameters using context dates
  const searchParams = useMemo(() => {
    // Fallback dates if context doesn't have them
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      checkInDate: context?.checkIn || today.toISOString().split('T')[0],
      checkOutDate: context?.checkOut || tomorrow.toISOString().split('T')[0],
      adultNo: context?.noOfAdults || 2,
      childNo: context?.noOfChildren || 1,
      facilityTypeId: 1
    };
  }, [context?.checkIn, context?.checkOut, context?.noOfAdults, context?.noOfChildren]);

  // Get API room data
  const { ROOMS, loading, error, isFromApi } = useDynamicRoomData(searchParams);

  if (loading) {
    return (
      <StyledRoomDetails>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <Text $type="h2" $color="var(--cordis-black)">
            Loading room details...
          </Text>
        </div>
      </StyledRoomDetails>
    );
  }

  if (error || !ROOMS[params.roomIndex]) {
    return (
      <StyledRoomDetails>
        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
          <Text $type="h2">Error loading room details</Text>
          <RouterLink to="..">
            <Button $type="ghost">
              <Text>Go Back</Text>
            </Button>
          </RouterLink>
        </div>
      </StyledRoomDetails>
    );
  }

  const ICON = {
    FreeWiFi: <RiWifiLine color="var(--cordis-black)" size="3rem" />,
    Kettle: <GiWaterFlask color="var(--cordis-black)" size="3rem" />,
    SmartTV: <RiTv2Line color="var(--cordis-black)" size="3rem" />,
    Towel: <PiTowel color="var(--cordis-black)" size="3rem" />,
    Waterheater: <MdOutlineHeatPump color="var(--cordis-black)" size="3rem" />,
    Fridge: <RiFridgeLine color="var(--cordis-black)" size="3rem" />,
    Sofa: <RiSofaLine color="var(--cordis-black)" size="3rem" />,
    Desk: <GiDesk color="var(--cordis-black)" size="3rem" />,
    Wardrobe: <BiCloset color="var(--cordis-black)" size="3rem" />,
    Bathroomslippers: <GiSlippers  color="var(--cordis-black)" size="3rem" />,
    Teaamenities: <LiaMugHotSolid  color="var(--cordis-black)" size="3rem" />,
    Bathrobe: <GiRobe color="var(--cordis-black)" size="3rem" />,
    Luggagerack: <RiLuggageDepositLine color="var(--cordis-black)" size="3rem" />,
    MiniFridge: <RiFridgeLine color="var(--cordis-black)" size="3rem" />,
    MiniBar: <BiDrink color="var(--cordis-black)" size="3rem" />,
  };

  return (
    <>
      <StyledRoomDetails>
        <StyledHeaderWrapper>
          <RouterLink to="..">
            <StyledBackArrow>
              <RiArrowLeftLine color="var(--cordis-black)" size="3rem" />
            </StyledBackArrow>
          </RouterLink>
          <StyledTextWrapper>
            <Text $type="h2" $weight="bold" $color="var(--cordis-black)">
              Room Details
            </Text>
            <Text>Check rooms details</Text>
          </StyledTextWrapper>
        </StyledHeaderWrapper>

        <StyledDetailsWrapper>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Text $weight="bold" $size="extra-large">
              {ROOMS[params.roomIndex].name} Room
            </Text>
            {isFromApi && (
              <div style={{ 
                background: 'green', 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '12px' 
              }}>
                LIVE DATA
              </div>
            )}
          </div>
          <StyledDetails>
            <Text $type="h3" $weight="bold" $size="small">
              Details
            </Text>
            <StyledDetailsBox>
              <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">Price per room</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].price}
                  </Text>
                </StyledDetailText2>
              </StyledDetail>
              <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">Size</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].size}
                  </Text>
                </StyledDetailText2>
              </StyledDetail>
              <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">Bed</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].bed}
                  </Text>
                </StyledDetailText2>
              </StyledDetail>
              <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">Capacity</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].capacity}
                  </Text>
                </StyledDetailText2>
              </StyledDetail>
              {/* <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">View</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].view}
                  </Text>
                </StyledDetailText2>
              </StyledDetail> */}
            </StyledDetailsBox>
          </StyledDetails>
          <StyledFeatures>
            <Text $type="h3" $weight="bold" $size="small">
              Amenities
            </Text>
            <StyledFeatureWrapper>
              {ROOMS[params.roomIndex].amenities.map((amenity, index) => (
                <StyledFeature key={index}>
                  {ICON[amenity.replace(/\s+/g, "")]}
                  <Text style={{ paddingTop: ".5rem" }}>{amenity}</Text>
                </StyledFeature>
              ))}
            </StyledFeatureWrapper>
          </StyledFeatures>
          {/* <StyledServices>
            <Text $type="h3" $weight="bold" $size="small">
              Services
            </Text>
            <StyledServiceWrapper>
              {ROOMS[params.roomIndex].services.map((service, index) => (
                <StyledFeature key={index}>
                  <RiCheckLine color="var(--cordis-black)" size="3rem" />
                  <Text style={{ paddingTop: ".5rem" }}>{service}</Text>
                </StyledFeature>
              ))}
            </StyledServiceWrapper>
          </StyledServices> */}
          <StyledButtonContainer>
            <RouterLink to="..">
              <Button $type="ghost">
                <Text>Go Back</Text>
              </Button>
            </RouterLink>
          </StyledButtonContainer>
        </StyledDetailsWrapper>
      </StyledRoomDetails>
    </>
  );
}
