import { useState } from "react";
import { styled } from "styled-components";
import Text from "./Text";
import Button from "./Button";

//blog image
import Blog1 from "../../assets/cordis-blog/CORDIS-BLOG-1.png";

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledButton = styled.button`
  margin: 2.4rem;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  background-image: url(${Blog1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50rem;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  gap: 2.4rem;
`;

const StyledParagraphContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${({$isOpen}) => $isOpen ? 'none' : '2'};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  & > * {
    text-align: justify;
  }
`;

export default function BlogPost() {
  //state management
  const [textOpen, setTextOpen] = useState(false);

  const handleClick = () => {
    console.log("Read more button clicked");
    setTextOpen((textOpen) => !textOpen);
    console.log(textOpen);
  };

  return (
    <StyledBlog>
      <StyledImageContainer></StyledImageContainer>
      <StyledTextWrapper>
        <Text
          $type="h1"
          $weight="bold"
          $size="extra-large"
          $color="var(--cordis-black)"
        >
          Discover Lagos Like a Local: Five Hidden Gems Around Cordis
        </Text>
        <StyledParagraphContainer $isOpen={textOpen}>
          <Text
            $typeFace="secondary"
            $spacing=".01em"
            $weight="bold"
            $size="large"
          >
            When you stay at Cordis, you’re right in the heart of Lagos’s most
            vibrant neighborhoods—yet beyond the well-trodden paths lie so
            many local delights. Start your morning with freshly roasted beans
            at Bean & Brew on Awolowo Road, where the barista knows your name
            by day two. Pop into Artisan Alley for handcrafted souvenirs from
            young Nigerian makers—think hand-woven baskets or bespoke leather
            notebooks. For an alfresco lunch, wander to Green Market Square,
            where street-side jollof rice and pepper-soy-grilled tilapia taste
            even better under a canopy of bougainvillea. In the afternoon,
            catch a sunset cocktail at Skyline Vista, a rooftop bar just a
            10-minute walk from Cordis, with panoramic views of the lagoon.
            Finally, cap your evening at The Drum House, where live Afrobeat
            performances keep the energy high. These spots are where Lagos’s
            true soul shines—explore them, and you’ll leave knowing the city
            in a way most visitors never do.
          </Text>
        </StyledParagraphContainer>
      </StyledTextWrapper>
      <StyledButton onClick={handleClick} $type="emphasis-ghost">
        <Text $size="medium" $weight="regular">
          {textOpen ? "Read less" : "Read more"}
        </Text>
      </StyledButton>
    </StyledBlog>
  );
}
