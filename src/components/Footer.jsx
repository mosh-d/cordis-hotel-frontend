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
  gap: 6rem;
  width: 100%;
`;

const StyledMainFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6rem;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.4rem;
`;

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledOffersContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 10vw;
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
  justify-content: space-between;
  width: 100%;
`;

const StyledNavigationHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 6rem;
`;

const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--cordis-accent);
  opacity: .3;
`;

const StyledNavigationLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

const StyledHotelsHeaderwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
`;

const StyledHotelsLinkWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 8rem;
`;

const StyledHotelLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;
const StyledHotelLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
`;

const StyledHeader = styled.div`
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
        <StyledNavigation>
          <StyledNavigationHeaderWrapper>
            <StyledLine />
            <Text $type="h3" $size="medium" $color="var(--cordis-accent)" $weight="regular">
              Navigation
            </Text>
            <StyledLine />
          </StyledNavigationHeaderWrapper>
          <StyledNavigationLinkWrapper>
            <Link $type="secondary">Home</Link>
            <Link $type="secondary">About</Link>
            <Link $type="secondary">Contact</Link>
            <Link $type="secondary">Blog</Link>
          </StyledNavigationLinkWrapper>
        </StyledNavigation>
        <StyledHotels>
          <StyledHotelsHeaderwrapper>
            <StyledLine />
              <Text $type="h3" $size="medium" $color="var(--cordis-accent)" $weight="regular">
                Hotels
              </Text>
            <StyledLine />
          </StyledHotelsHeaderwrapper>
          <StyledHotelsLinkWrapper>
            <StyledHotelLinks>
              <StyledHeader>
                <Text $typeFace="secondary" $size="large" $color="var(--cordis-accent)" $weight="regular">
                  Five Clover
                </Text>
              </StyledHeader>
              <StyledHotelLinkWrapper>
                <Link $type="secondary">Monastery Road</Link>
                <Link $type="secondary">Abijo, GRA</Link>
              </StyledHotelLinkWrapper>
            </StyledHotelLinks>
            <StyledHotelLinks>
              <StyledHeader>
                <Text $typeFace="secondary" $size="large" $color="var(--cordis-accent)" $weight="regular">
                  Caritas Inn
                </Text>
              </StyledHeader>
              <StyledHotelLinkWrapper>
                <Link $type="secondary">Igbobi</Link>
                <Link $type="secondary">Ilasan</Link>
                <Link $type="secondary">Lekki Phase 1</Link>
              </StyledHotelLinkWrapper>
            </StyledHotelLinks>
            <StyledHotelLinks>
              <StyledHeader>
                <Text $typeFace="secondary" $size="large" $color="var(--cordis-accent)" $weight="regular">
                  RingRuby
                </Text>
              </StyledHeader>
              <StyledHotelLinkWrapper>
                <Link $type="secondary">Sangotedo</Link>
                <Link $type="secondary">Eso close</Link>
                <Link $type="secondary">Oduduwa way</Link>
              </StyledHotelLinkWrapper>
            </StyledHotelLinks>
            <StyledHotelLinks>
              <StyledHeader>
                <Text $typeFace="secondary" $size="large" $color="var(--cordis-accent)" $weight="regular">
                  Cordis
                </Text>
              </StyledHeader>
              <StyledHotelLinkWrapper>
                <Link $type="secondary">Ikeja</Link>
              </StyledHotelLinkWrapper>
            </StyledHotelLinks>
          </StyledHotelsLinkWrapper>
        </StyledHotels>
      </StyledMainFooter>
      <StyledLine />
      <StyledFooterBottom>
        <Text
          $type="p"
          $color="var(--cordis-accent)"
          $weight="light"
          $typeFace="primary"
          $size="small"
        >
          Copyright © 2025 Cordis Hotel. All rights reserved.
        </Text>
        <Text
          $type="p"
          $color="var(--cordis-accent)"
          $weight="light"
          $typeFace="primary"
          $size="small"
        >
          Terms of Service
        </Text>
      </StyledFooterBottom>
    </StyledFooter>
  );
}
