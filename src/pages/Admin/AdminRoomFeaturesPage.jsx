import Text from "../../components/shared/Text";
import { styled } from "styled-components";
import { ROOMS } from "../../util/room-data";
import Button from "../../components/shared/Button";
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

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 6rem;
  margin-bottom: 6rem;
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

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function AdminRoomFeaturesPage() {
  return (
    <>
      <Text $type="h1" $weight="bold">
        Room Features
      </Text>
      {ROOMS.map((room, index) => (
        <div key={index}>
          <StyledFeatures>
            <Text $type="h3" $weight="bold" $size="medium">
              {room.name}
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
          <StyledButtonContainer>
            <Button $type="black">
              <Text>Add Feature</Text>
            </Button>
          </StyledButtonContainer>
        </div>
      ))}
    </>
  );
}
