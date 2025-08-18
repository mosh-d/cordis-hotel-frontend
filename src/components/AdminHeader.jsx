import LOGO from "../assets/cordis-logo-2.png";
import { styled } from "styled-components";
import Text from "../components/shared/Text";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--cordis-emphasis);
`;

const StyledTextContainer = styled.div`
  position: absolute;
  right: 0;
  margin: 4rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`;

const StyledImageContainer = styled.div`
  width: 15rem;
  height: 15rem;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${LOGO});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default function AdminHeader() {
  return (
    <>
      <StyledHeader>
        <StyledImageContainer>
          <StyledImage></StyledImage>
        </StyledImageContainer>
        <StyledTextContainer>
          <Text $size="extra-large" $weight="regular" $color="var(--cordis-black)">Log out</Text>
        </StyledTextContainer>
      </StyledHeader>
    </>
  );
}
