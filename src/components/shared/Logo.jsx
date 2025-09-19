import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import ghostLogo from "../../assets/cordis-logo-1.png";
import filledLogo from "../../assets/cordis-logo-2.png";
import { cloudinaryBg } from "../../config/cloudinary";

// ghost logo

// filled logo


const StyledLogo = styled.div`
  width: 16rem;
  height: 16rem;

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
      <NavLink to="/">
        <img src={logo} alt="cordis hotel logo" {...props} />
      </NavLink>
    </StyledLogo>
  );
}

export default Logo;
