import styled from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";

const StyledLocateUsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15rem 6rem;
  height: fit-content;
  gap: 4.8rem;
`;

const StyledLocateUsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledMapLocationWrapper = styled.div`
  display: flex;
  gap: 6rem;
  height: 100%;
  align-items: stretch;
`;

const StyledMap = styled.div`
  width: 35%;
  background-color: var(--cordis-gray);
`;

const StyledNearbyLocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  height: fit-content;
  width: 65%;
`;

const StyledNearbyLocationsTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledLocations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: fit-content;
  border: 1px solid var(--cordis-black);
  padding: 2.4rem;
`;

const StyledLocation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const StyledLocationText1 = styled.div`
  width: 70%;
`;

const StyledLocationText2 = styled.div`
  width: fit-content;
`;

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export default function LocateUsSection() {
  return (
    <StyledLocateUsSection>
      <StyledLocateUsTextWrapper>
        <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
          Locate Us
        </Text>
        <Text $color="var(--cordis-black)">Find us on Google Maps</Text>
      </StyledLocateUsTextWrapper>
      <StyledMapLocationWrapper>
        <StyledMap>
          <iframe
            title="Cordis Hotel Ikeja Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=The+Cordis+Hotel,+Ikeja&output=embed"
            allowFullScreen
          ></iframe>
        </StyledMap>
        <StyledNearbyLocationsWrapper>
          <StyledNearbyLocationsTextWrapper>
            <Text
              $color="var(--cordis-black)"
              $weight="bold"
              $size="extra-large"
            >
              Nearby Locations
            </Text>
            <Text $color="var(--cordis-black)">
              Locations in a 50km radius you might want to know about
            </Text>
            <StyledLocations>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Lufasi Nature Park</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">14km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Omu Resort</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">31km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    Upbeat Recreation Centre
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">37km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Bics Boat Club</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">39km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    Lekki Conservation Centre
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">28km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Novare Mall</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">18km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    Lakowe Lakes Golf & Country Estate
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">10km away</Text>
                </StyledLocationText2>
              </StyledLocation>
            </StyledLocations>
          </StyledNearbyLocationsTextWrapper>
          <StyledButton>
            <RouterLink to="/room-booking">
              <Button $type="emphasis2">
                <Text $weight="regular" $size="medium">
                  Reserve
                </Text>
              </Button>
            </RouterLink>
          </StyledButton>
        </StyledNearbyLocationsWrapper>
      </StyledMapLocationWrapper>
    </StyledLocateUsSection>
  );
}
