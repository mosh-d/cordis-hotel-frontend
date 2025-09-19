import styled from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";

const StyledLocateUsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15rem 6rem;
  height: fit-content;
  gap: 4.8rem;

  ${media.mobile} {
    padding: 12rem 2rem;
  }
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

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledMap = styled.div`
  width: 35%;
  background-color: var(--cordis-gray);

  ${media.tablet} {
    width: 100%;
    height: 30rem;
  }
`;

const StyledNearbyLocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  height: fit-content;
  width: 65%;

  ${media.tablet} {
    width: 100%;
  }
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

  ${media.mobile} {
    padding: 1rem 0.5rem;
  }
`;

const StyledLocation = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8rem;
`;

const StyledLocationText1 = styled.div`
  width: 70%;
`;

const StyledLocationText2 = styled.div`
  width: fit-content;

  & * {
    text-align: right !important;
  }
`;

const StyledButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  ${media.tablet} {
    justify-content: center;
  }
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
              Locations within a 10km radius you might want to know about
            </Text>
            <StyledLocations>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    Johnson Jakande Tinubu (JJT) Park
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">2km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Ndubuisi Kanu Park</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">3km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    The New Afrika Shrine
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">5km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)"> Ikeja City Mall</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">1km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">Terra Kulture</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">8km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">NiteShift Coliseum</Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">4km away</Text>
                </StyledLocationText2>
              </StyledLocation>
              <StyledLocation>
                <StyledLocationText1>
                  <Text $color="var(--cordis-black)">
                    Kalakuta Republic Museum
                  </Text>
                </StyledLocationText1>
                <StyledLocationText2>
                  <Text $color="var(--cordis-black)">6km away</Text>
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
