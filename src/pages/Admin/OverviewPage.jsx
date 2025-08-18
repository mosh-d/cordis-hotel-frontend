import Text from "../../components/shared/Text";
import { styled } from "styled-components";

const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(33rem, 1fr));
  grid-gap: 6rem;
`;

const StyledCard = styled.div`
  background-color: var(--cordis-white);
  box-shadow: var(--popup-lg);
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;
`;

const StyledCardText = styled.div`
  
`;

const StyledCardNumber = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export default function OverviewPage() {
  return (
    <>
      <StyledOverview>
        <Text $type="h1" $weight="bold">Overview</Text>
        <StyledCardWrapper>
          <StyledCard>
            <StyledCardText>
              <Text $size="extra-large" $weight="regular">Total Rooms</Text>
            </StyledCardText>
            <StyledCardNumber>
              <Text $type="h3" $typeFace="primary" $size="large" $weight="bold">2</Text>
            </StyledCardNumber>
          </StyledCard>
          <StyledCard>
            <StyledCardText>
              <Text $size="extra-large" $weight="regular">Total Available Rooms</Text>
            </StyledCardText>
            <StyledCardNumber>
              <Text $type="h3" $typeFace="primary" $size="large" $weight="bold">24</Text>
            </StyledCardNumber>
          </StyledCard>
          <StyledCard>
            <StyledCardText>
              <Text $size="extra-large" $weight="regular">Active Bookings (past 24 hours)</Text>
            </StyledCardText>
            <StyledCardNumber>
              <Text $type="h3" $typeFace="primary" $size="large" $weight="bold">2</Text>
            </StyledCardNumber>
          </StyledCard>
          <StyledCard>
            <StyledCardText>
              <Text $size="extra-large" $weight="regular">Expired Bookings (past 48 hours)</Text>
            </StyledCardText>
            <StyledCardNumber>
              <Text $type="h3" $typeFace="primary" $size="large" $weight="bold">24</Text>
            </StyledCardNumber>
          </StyledCard>
        </StyledCardWrapper>
      </StyledOverview>
    </>
  );
}