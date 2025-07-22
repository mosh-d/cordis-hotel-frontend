import { styled } from "styled-components";
import Text from "../shared/Text";

//blog image
import Blog1 from "../../assets/cordis-blog/CORDIS-BLOG-1.png";
import Blog2 from "../../assets/cordis-blog/CORDIS-BLOG-2.png";

const StyledMiniBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 40%;
  flex-shrink: 0;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  ${({$image}) => $image && `background-image: url(${$image});`}
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 20rem;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  gap: 1.8rem;
`;

export default function MiniBlogPost({ id, image, title, caption }) {
  return(
    <StyledMiniBlogPost>
      <StyledImageContainer $image={image}></StyledImageContainer>
      <StyledTextWrapper>
        <Text
          $type="h2"
          $weight="bold"
          $size="medium"
          $color="var(--cordis-black)"
        >
          {title}      
        </Text>
        <Text
          $typeFace="secondary"
          $spacing=".01em"
          $weight="bold"
          $size="large"
        >
          {caption}
        </Text>
      </StyledTextWrapper>
    </StyledMiniBlogPost>
  )
}