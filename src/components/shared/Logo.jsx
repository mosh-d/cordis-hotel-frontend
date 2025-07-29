import { styled } from "styled-components";

import ghostLogo from "../../assets/cordis-logo-1.png";
import filledLogo from "../../assets/cordis-logo-2.png";

const StyledLogo = styled.div`
  width: 18rem;
  height: 18rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function Logo({$type, ...props}) {
  const logo = $type === "filled" ? filledLogo : ghostLogo;

  return (
    <StyledLogo>
      <img src={logo} alt="logo" {...props} />
    </StyledLogo>
  );
}

export default Logo;
