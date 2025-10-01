import { styled } from "styled-components";
import Text from "../../components/shared/Text";
import CustomInput2 from "../shared/CustomInput2";
import {
  RiTiktokLine,
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";
import Link from "../shared/Link";
import Button from "../shared/Button";
import { media } from "../../util/breakpoints";

const StyledContactSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6rem 12rem;
  gap: 12rem;

  ${media.tablet} {
    flex-direction: column;
    padding: 6rem;
  }

  ${media.mobile} {
    padding: 6rem 2rem;
  }
`;

const StyledContctInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1.8rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledUserInfo = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledUserInfoRow1 = styled.div`
  display: flex;
  width: 100%;
  gap: 8rem;

  ${media.desktop} {
    gap: 4rem;
  }
`;

const StyledUserInfoRow2 = styled.div`
  
`;

const StyledUserInfoRow3 = styled.div`
  
`;

const StyledUserInfoRow4 = styled.div`
  
  ${media.tablet} {
    display: flex;
    justify-content: center;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1.6rem;
  border: 1px solid var(--cordis-black);
  font-family: var(--font-family-primary);
  font-size: 1.4rem;
  resize: vertical;
  
  &::placeholder {
    font-size: 1.4rem;
    color: #999;
    font-family: var(--font-family-primary);
  }
  
  &:focus {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

export default function ContactSection() {
  return (
    <StyledContactSection>
      <StyledContctInfo>
        <Text
          $type="h1"
          $size="extra-large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Contact Information
        </Text>
        <Text
          $type="p"
          $typeFace="secondary"
          $size="extra-large"
          $weight="bold"
          $spacing="0.04em"
        >
          Get in touch with us through our contact details below and follow our
          social media pages
        </Text>

        <StyledLinkWrapper>
          <RiPhoneLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">+234 911 563 8526</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiWhatsappLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">+234 911 563 8526</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiMailLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">info@fivecloverhotels.com</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiFacebookLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">FiveCloverHotels</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiInstagramLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@fivecloverhotels</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiTiktokLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@fivecloverhotels</Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <RiTwitterXLine color="var(--cordis-text-color)" size="3rem" />
          <Link $type="default">@fivecloverhotels</Link>
        </StyledLinkWrapper>
      </StyledContctInfo>
      <StyledUserInfo>
        <StyledUserInfoRow1>
          <CustomInput2
            header="Your Name"
            $placeholder="eg. John Doe"
            type="text"
          />
          <CustomInput2
            header="Your Email"
            $placeholder="example@test.com"
            type="email"
          />
        </StyledUserInfoRow1>
        <StyledUserInfoRow2>
          <CustomInput2
            header="Subject"
            $placeholder="eg. Inquiry"
            type="text"
          />
        </StyledUserInfoRow2>
        <StyledUserInfoRow3>
          <Text $type="p" $color="var(--cordis-black)" $weight="light" $typeFace="primary">Message</Text>
          <StyledTextarea 
            placeholder="Write a message here"
          />
        </StyledUserInfoRow3>
        <StyledUserInfoRow4>
          <Button $type="ghost">
            <Text $weight="light" $size="medium">
              Send Message
            </Text>
          </Button>
        </StyledUserInfoRow4>
      </StyledUserInfo>
    </StyledContactSection>
  );
}
