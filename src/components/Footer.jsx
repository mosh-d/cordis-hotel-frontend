import { NavLink, Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../assets/cordis-logo-1.png";
import Text from "./shared/Text";
import CustomInput2 from "./shared/CustomInput2";
import Button from "./shared/Button";
import {
  RiTiktokLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import Link from "./shared/Link";
import { media } from "../util/breakpoints";
import { useState } from "react";
import SuccessModal from "./shared/SuccessModal";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cordis-text-color);
  padding: 6rem 12rem;
  gap: 6rem;
  width: 100%;
  margin-bottom: ${({ $type }) => ($type === "default" ? "0" : "9rem")};
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

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledExclusiveOffers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;

  ${media.tablet} {
    align-items: center;

    & * {
      text-align: center;
    }
  }
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

  ${media.tablet} {
    align-items: center;
    text-align: center;

    & * {
      text-align: center;
    }
  }
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
`;

const StyledFooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${media.tablet} {
    flex-direction: column;
    gap: 1.2rem;
  }
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
  opacity: 0.3;

  ${media.tablet} {
    display: none;
  }
`;

const StyledLine1 = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--cordis-accent);
  opacity: 0.3;
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const StyledNavigationLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  ${media.tablet} {
    flex-direction: column;
    gap: 2.4rem;
  }
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

  ${media.tablet} {
    flex-direction: column;
    gap: 4rem;
    align-items: center;
  }
`;

const StyledHotelLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;

  ${media.tablet} {
    align-items: center;
  }
`;

const StyledHotelLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;

  ${media.tablet} {
    align-items: center;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer({ $type }) {
  // Subscription state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAlreadySubscribedModal, setShowAlreadySubscribedModal] =
    useState(false);

  // Email validation function
  const validateEmail = (email) => {
    if (!email) {
      return "Email address is required";
    }
    if (!email.includes("@") || !email.includes(".")) {
      return "Please enter a valid email address";
    }
    return "";
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Clear error when user starts typing
    if (emailError) {
      setEmailError("");
    }
  };

  // Handle subscription
  const handleSubscribe = async () => {
    // Validate email
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }

    setIsSubscribing(true);
    setEmailError("");

    try {
      console.log(
        "🚀 Making subscription API call to:",
        "https://secure.thecordishotelikeja.com/api/hotel/subscribe"
      );

      const response = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/subscribe",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify({ email }),
          redirect: "follow",
        }
      );

      console.log("📡 Subscription Response status:", response.status);

      // Check if response is actually JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await response.text();
        console.error("❌ Subscription Response is not JSON:", textResponse);
        throw new Error(
          `Expected JSON response but got ${contentType}. Response: ${textResponse.substring(
            0,
            200
          )}...`
        );
      }

      if (!response.ok) {
        // For 409 conflicts, try to parse the response to check if it's "already subscribed"
        if (response.status === 409) {
          try {
            const data = await response.json();
            console.log("📡 409 Response data:", data);

            if (
              data.status === false &&
              data.message === "Email already subscribed"
            ) {
              // This is the expected "already subscribed" case
              setShowAlreadySubscribedModal(true);
              setEmail("");
              setTimeout(() => {
                setShowAlreadySubscribedModal(false);
              }, 3000);
              setIsSubscribing(false);
              return;
            }
          } catch (jsonError) {
            console.error(
              "❌ Could not parse 409 response as JSON:",
              jsonError
            );
          }
        }

        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Subscription API Response:", data);

      if (data.status === true) {
        // Success - show success modal
        setShowSuccessModal(true);
        setEmail("");
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else if (
        data.status === false &&
        data.message === "Email already subscribed"
      ) {
        // Already subscribed - show specific modal
        setShowAlreadySubscribedModal(true);
        setEmail("");
        setTimeout(() => {
          setShowAlreadySubscribedModal(false);
        }, 3000);
      } else {
        // Other error
        setEmailError(data.message || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("❌ Subscription Error:", error);
      setEmailError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubscribing(false);
    }
  };

  // Handle form submission (prevent default)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubscribe();
  };

  return (
    <>
      <StyledFooter $type={$type}>
        <StyledMainFooter>
          <StyledOffersContact>
            <StyledLogoContainer>
              <StyledLogo>
                <img src={Logo} alt="logo" />
              </StyledLogo>
            </StyledLogoContainer>
            <StyledOffersContactWrapper>
              <StyledExclusiveOffers>
                <Text
                  $type="h3"
                  $spacing="0.3rem"
                  $size="small"
                  $typeFace="primary"
                  $color="var(--cordis-accent)"
                  $weight="bold"
                >
                  Exclusive Offers
                </Text>
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.5rem",
                    width: "100%",
                  }}
                >
                  <CustomInput2
                    $style="accent"
                    header="Email Address"
                    $placeholder="example@test.com"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    style={{
                      color: emailError ? "red" : "var(--cordis-black)",
                      textAlign: "left",
                    }}
                  />
                  {emailError && (
                    <Text
                      $type="p"
                      $color="var(--cordis-error)"
                      $weight="light"
                      $size="small"
                    >
                      {emailError}
                    </Text>
                  )}
                  <Button
                    $type="accent-ghost"
                    onClick={handleSubscribe}
                    disabled={isSubscribing}
                    type="submit"
                  >
                    <Text $weight="regular" $size="medium">
                      {isSubscribing ? "Subscribing..." : "Subscribe"}
                    </Text>
                  </Button>
                </form>
              </StyledExclusiveOffers>
              <StyledIcons>
                <a href="https://www.facebook.com/thecordishotels">
                  <RiFacebookLine color="var(--cordis-accent)" size="3rem" />
                </a>
                <a href="https://www.tiktok.com/@thecordishotelikeja">
                  <RiTiktokLine color="var(--cordis-accent)" size="3rem" />
                </a>
                <a href="https://www.instagram.com/thecordishotel/">
                  <RiInstagramLine color="var(--cordis-accent)" size="3rem" />
                </a>
                {/* <a href="https://twitter.com/thecordishotelikeja">
                <RiTwitterXLine color="var(--cordis-accent)" size="3rem" />
                </a> */}
              </StyledIcons>
              <StyledContactInfo>
                <Text
                  $type="h3"
                  $spacing="0.3rem"
                  $size="small"
                  $typeFace="primary"
                  $color="var(--cordis-accent)"
                  $weight="bold"
                >
                  Contact Information
                </Text>
                <StyledContactWrapper>
                  <StyledLinkWrapper>
                    <RiPhoneLine color="var(--cordis-accent)" size="3rem" />
                    <Link href="tel:+2349111846281">+234 911 184 6281</Link>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <RiWhatsappLine color="var(--cordis-accent)" size="3rem" />
                    <Link href="https://wa.me/2349111846280">
                      +234 911 184 6280
                    </Link>
                  </StyledLinkWrapper>
                  <StyledLinkWrapper>
                    <RiMailLine color="var(--cordis-accent)" size="3rem" />
                    <Link href="mailto:info@thecordishotelikeja.com">
                      info@thecordishotelikeja.com
                    </Link>
                  </StyledLinkWrapper>
                </StyledContactWrapper>
              </StyledContactInfo>
            </StyledOffersContactWrapper>
          </StyledOffersContact>
          <StyledLine1 />
          <StyledNavigation>
            <StyledNavigationHeaderWrapper>
              <StyledLine />
              <Text
                $type="h3"
                $size="medium"
                $color="var(--cordis-accent)"
                $weight="regular"
              >
                Navigation
              </Text>
              <StyledLine />
            </StyledNavigationHeaderWrapper>
            <StyledNavigationLinkWrapper>
              <NavLink to="/">
                <Text
                  $color="var(--cordis-accent)"
                  $weight="light"
                  $size="small"
                  style={{
                    lineHeight: ".7",
                    borderBottom: "1px solid var(--cordis-accent)",
                    opacity: 0.7,
                  }}
                >
                  Home
                </Text>
              </NavLink>
              <NavLink to="/about">
                <Text
                  $color="var(--cordis-accent)"
                  $weight="light"
                  $size="small"
                  style={{
                    lineHeight: ".7",
                    borderBottom: "1px solid var(--cordis-accent)",
                    opacity: 0.7,
                  }}
                >
                  About
                </Text>
              </NavLink>
              <NavLink to="/contact">
                <Text
                  $color="var(--cordis-accent)"
                  $weight="light"
                  $size="small"
                  style={{
                    lineHeight: ".7",
                    borderBottom: "1px solid var(--cordis-accent)",
                    opacity: 0.7,
                  }}
                >
                  Contact
                </Text>
              </NavLink>
              <NavLink to="/blog">
                <Text
                  $color="var(--cordis-accent)"
                  $weight="light"
                  $size="small"
                  style={{
                    lineHeight: ".7",
                    borderBottom: "1px solid var(--cordis-accent)",
                    opacity: 0.7,
                  }}
                >
                  Blog
                </Text>
              </NavLink>
            </StyledNavigationLinkWrapper>
          </StyledNavigation>
          <StyledLine1 />
          <StyledHotels>
            <StyledHotelsHeaderwrapper>
              <StyledLine />
              <Text
                $type="h3"
                $size="medium"
                $color="var(--cordis-accent)"
                $weight="regular"
              >
                Hotels
              </Text>
              <StyledLine />
            </StyledHotelsHeaderwrapper>
            <StyledHotelsLinkWrapper>
              <StyledHotelLinks>
                <StyledHeader>
                  <Text
                    $typeFace="secondary"
                    $size="large"
                    $color="var(--cordis-accent)"
                    $weight="regular"
                  >
                    Five Clover
                  </Text>
                </StyledHeader>
                <StyledHotelLinkWrapper>
                  <Link
                    href="https://fivecloverhotelmonastery.com/"
                    $type="secondary"
                  >
                    Monastery Road
                  </Link>
                  <Link
                    href="https://fivecloverhotelabijo.com/"
                    $type="secondary"
                  >
                    Abijo, GRA
                  </Link>
                </StyledHotelLinkWrapper>
              </StyledHotelLinks>
              <StyledHotelLinks>
                <StyledHeader>
                  <Text
                    $typeFace="secondary"
                    $size="large"
                    $color="var(--cordis-accent)"
                    $weight="regular"
                  >
                    Caritas Inn
                  </Text>
                </StyledHeader>
                <StyledHotelLinkWrapper>
                  <Link
                    href="https://www.caritasinnigbobihotel.com/"
                    $type="secondary"
                  >
                    Igbobi
                  </Link>
                  <Link
                    href="https://caritasinnilasanhotel.com/"
                    $type="secondary"
                  >
                    Ilasan
                  </Link>
                  <Link
                    href="https://caritasinnlekkihotel.com/"
                    $type="secondary"
                  >
                    Lekki Phase 1
                  </Link>
                  <Link
                    href="https://caritasinnyabahotel.com/"
                    $type="secondary"
                  >
                    Yaba
                  </Link>
                </StyledHotelLinkWrapper>
              </StyledHotelLinks>
              <StyledHotelLinks>
                <StyledHeader>
                  <Text
                    $typeFace="secondary"
                    $size="large"
                    $color="var(--cordis-accent)"
                    $weight="regular"
                  >
                    RingRuby
                  </Text>
                </StyledHeader>
                <StyledHotelLinkWrapper>
                  <Link
                    href="https://ringrubyhotelsangotedo.com/"
                    $type="secondary"
                  >
                    Sangotedo
                  </Link>
                  <Link
                    href="https://ringrubyhotelesoikejagra.com/"
                    $type="secondary"
                  >
                    Eso close
                  </Link>
                  <Link
                    href="https://ringrubyhoteloduduwaikejagra.com/"
                    $type="secondary"
                  >
                    Oduduwa way
                  </Link>
                </StyledHotelLinkWrapper>
              </StyledHotelLinks>
              <StyledHotelLinks>
                <StyledHeader>
                  <Text
                    $typeFace="secondary"
                    $size="large"
                    $color="var(--cordis-accent)"
                    $weight="regular"
                  >
                    Five Clover Cordis Hotel Ltd
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
            $align="center"
          >
            Copyright © 2025 Cordis Hotel. All rights reserved.
          </Text>
          <StyledLine1 />
          <Text
            $type="p"
            $color="var(--cordis-accent)"
            $weight="light"
            $typeFace="primary"
            $size="small"
            $align="center"
          >
            Terms of Service
          </Text>
        </StyledFooterBottom>
      </StyledFooter>
      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        message="Subscription successful!"
      />
      {/* Already Subscribed Modal */}
      <SuccessModal
        isOpen={showAlreadySubscribedModal}
        onClose={() => setShowAlreadySubscribedModal(false)}
        message="You are already subscribed"
      />
    </>
  );
}
