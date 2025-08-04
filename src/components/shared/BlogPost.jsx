import { useState } from "react";
import { styled } from "styled-components";
import Text from "./Text";

const StyledBlog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const StyledButton = styled.button`
  margin: 2.4rem;
  transition: transform 0.1s ease-in;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.05);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const StyledImageContainer = styled.div`
  width: 100%;
  ${({ $image }) => $image && `background-image: url(${$image});`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 45rem;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  gap: 2.4rem;
`;

const StyledParagraphContainer = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: ${({ $isOpen }) => ($isOpen ? "none" : "2")};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  & > * {
    text-align: justify;
  }
`;

export default function BlogPost({ image, title, content }) {
  //state management
  const [textOpen, setTextOpen] = useState(false);

  const handleClick = () => {
    console.log("Read more button clicked");
    setTextOpen((textOpen) => !textOpen);
    console.log(textOpen);
  };

  return (
    <StyledBlog>
      <StyledImageContainer $image={image}></StyledImageContainer>
      <StyledTextWrapper>
        <Text
          $type="h1"
          $weight="bold"
          $size="extra-large"
          $color="var(--cordis-black)"
        >
          {title}
        </Text>
        <StyledParagraphContainer $isOpen={textOpen}>
          <Text
            $typeFace="secondary"
            $spacing=".01em"
            $weight="bold"
            $size="large"
          >
            {content}
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
