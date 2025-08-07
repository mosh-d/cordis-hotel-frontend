import { styled } from "styled-components";
import Text from "../../components/shared/Text";
import {
  RiArrowLeftLine,
  RiWifiLine,
  RiTv2Line,
  RiFridgeLine,
  RiSofaLine,
  RiCheckLine,
} from "react-icons/ri";
import { GiWaterFlask, GiDesk } from "react-icons/gi";
import { MdOutlineHeatPump } from "react-icons/md";
import { PiTowel } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import Button from "../../components/shared/Button";
import { Link as RouterLink, useParams } from "react-router-dom";
import { ROOMS } from "../../util/room-data";
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
          <Text $weight="bold" $size="extra-large">
            {ROOMS[params.roomIndex].name} Room
          </Text>
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
              <StyledDetail>
                <StyledDetailText1>
                  <Text $color="var(--cordis-black)">View</Text>
                </StyledDetailText1>
                <StyledDetailText2>
                  <Text $color="var(--cordis-black)">
                    {ROOMS[params.roomIndex].view}
                  </Text>
                </StyledDetailText2>
              </StyledDetail>
            </StyledDetailsBox>
          </StyledDetails>
          <StyledFeatures>
            <Text $type="h3" $weight="bold" $size="small">
              Amenities
            </Text>
            <StyledFeatureWrapper>
              <StyledFeature>
                <RiWifiLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Free WiFi</Text>
              </StyledFeature>
              <StyledFeature>
                <GiWaterFlask color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Kettle</Text>
              </StyledFeature>
              <StyledFeature>
                <RiTv2Line color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Smart TV</Text>
              </StyledFeature>
              <StyledFeature>
                <PiTowel color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Towel</Text>
              </StyledFeature>
              <StyledFeature>
                <MdOutlineHeatPump color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Water heater</Text>
              </StyledFeature>
              <StyledFeature>
                <RiFridgeLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Fridge</Text>
              </StyledFeature>
              <StyledFeature>
                <RiSofaLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Sofa</Text>
              </StyledFeature>
              <StyledFeature>
                <GiDesk color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Desk</Text>
              </StyledFeature>
              <StyledFeature>
                <BiCloset color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Wooden Closet</Text>
              </StyledFeature>
            </StyledFeatureWrapper>
          </StyledFeatures>
          <StyledServices>
            <Text $type="h3" $weight="bold" $size="small">
              Services
            </Text>
            <StyledServiceWrapper>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Free WiFi</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Kettle</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Smart TV</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Towel</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Water heater</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Fridge</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Sofa</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Desk</Text>
              </StyledService>
              <StyledService>
                <RiCheckLine color="var(--cordis-black)" size="3rem" />
                <Text style={{ paddingTop: ".5rem" }}>Wooden Closet</Text>
              </StyledService>
            </StyledServiceWrapper>
          </StyledServices>
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
