import { styled } from "styled-components";
import Logo from "../assets/cordis-logo-1.png";
import Text from "./shared/Text";
import CustomInput2 from "./shared/CustomInput2";
import Button from "./shared/Button";
import { RiTiktokLine, RiFacebookLine, RiInstagramLine, RiTwitterXLine, RiPhoneLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import Link from "./shared/Link";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cordis-text-color);
  padding: 6rem 12rem;
`;

const StyledMainFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18rem;
`;

const StyledOffersContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6rem;
`;

const StyledHotels = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledOffersContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8rem;
  width: 100%;
`;

const StyledExclusiveOffers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
`;

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const StyledFooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledMainFooter>
        <StyledOffersContact>
          <StyledLogoContainer>
            <StyledLogo>
              <img src={Logo} alt="logo" />
            </StyledLogo>
          </StyledLogoContainer>
          <StyledOffersContactWrapper>
            <StyledExclusiveOffers>
              <Text $type="h3" $spacing="0.3rem" $size="small" $typeFace="primary" $color="var(--cordis-accent)" $weight="bold">
                Exclusive Offers
              </Text>
              <CustomInput2
                $style="accent"
                header="Email Address"
                $placeholder="example@test.com"
                type="email"
              />
              <Button $type="accent-ghost">
                <Text $weight="regular" $size="medium">
                  Subscribe
                </Text>
              </Button>
            </StyledExclusiveOffers>
            <StyledIcons>
              <RiFacebookLine color="var(--cordis-accent)" size="3rem" />
              <RiTiktokLine color="var(--cordis-accent)" size="3rem" />
              <RiInstagramLine color="var(--cordis-accent)" size="3rem" />
              <RiTwitterXLine color="var(--cordis-accent)" size="3rem" />
            </StyledIcons>
            <StyledContactInfo>
              <Text $type="h3" $spacing="0.3rem" $size="small" $typeFace="primary" $color="var(--cordis-accent)" $weight="bold">
                Contact Information
              </Text>
              <StyledContactWrapper>
                <StyledLinkWrapper>
                  <RiPhoneLine color="var(--cordis-accent)" size="3rem" />
                  <Link>
                    +234 911 563 8526
                  </Link>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <RiWhatsappLine color="var(--cordis-accent)" size="3rem" />
                  <Link>
                    +234 911 563 8526
                  </Link>
                </StyledLinkWrapper>
                <StyledLinkWrapper>
                  <RiMailLine color="var(--cordis-accent)" size="3rem" />
                  <Link>
                    info@fivecloverhotels.com
                  </Link>
                </StyledLinkWrapper>
              </StyledContactWrapper>
            </StyledContactInfo>
          </StyledOffersContactWrapper>
        </StyledOffersContact>
        <StyledNavigation></StyledNavigation>
        <StyledHotels></StyledHotels>
      </StyledMainFooter>
      <StyledFooterBottom>
        <Text
          $type="p"
          $color="var(--cordis-black)"
          $weight="regular"
          $typeFace="primary"
        >
          Copyright © 2025 Cordis Hotel. All rights reserved.
        </Text>
        <Text
          $type="p"
          $color="var(--cordis-black)"
          $weight="regular"
          $typeFace="primary"
        >
          Terms of Service
        </Text>
      </StyledFooterBottom>
    </StyledFooter>
  );
}
