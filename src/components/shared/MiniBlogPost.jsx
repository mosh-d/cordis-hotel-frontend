import { styled } from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";

const StyledMiniBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 40%;
  flex-shrink: 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      background-color: var(--cordis-text-color);

      h2,
      p {
        color: var(--cordis-white);
      }
    }
  }

  &:active {
    background-color: var(--cordis-black);
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ $image }) => $image && `background-image: url(${$image});`}
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.3s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    ${StyledMiniBlogPost}:hover &::before {
      transform: scale(1.1);
    }
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  gap: 1.8rem;

  ${media.tablet} {
    padding: 0 1.2rem;
  }

  ${media.mobile} {
    padding: 0;
  }
`;

const StyledContentText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* & > * {
    text-align: justify;
  } */
`;

const StyledTitleText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  /* & > * {
    text-align: justify;
  } */
`;

export default function MiniBlogPost({
  onSelect,
  href,
  image,
  title,
  caption,
}) {
  const handleClick = (e) => {
    if (onSelect) {
      onSelect();
    }
    if (href) {
      // Smooth scroll to the target element
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <StyledMiniBlogPost onClick={handleClick}>
      <StyledImageContainer $image={image}></StyledImageContainer>
      <StyledTextWrapper>
        <StyledTitleText>
          <Text
            $type="h2"
            $weight="bold"
            $size="small"
            $color="var(--cordis-black)"
          >
            {title}
          </Text>
        </StyledTitleText>
        <StyledContentText>
          <Text
            $typeFace="secondary"
            $spacing=".01em"
            $weight="bold"
            $size="large"
          >
            {caption}
          </Text>
        </StyledContentText>
      </StyledTextWrapper>
    </StyledMiniBlogPost>
  );
}
