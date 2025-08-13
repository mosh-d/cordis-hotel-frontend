import LOGO from "../assets/cordis-logo-2.png";
import { styled } from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--cordis-emphasis);
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
      </StyledHeader>
    </>
  );
}
