import { styled } from "styled-components";
import Text from "../shared/Text";

//blog image
import Blog1 from "../../assets/cordis-blog/CORDIS-BLOG-1.png";
import Blog2 from "../../assets/cordis-blog/CORDIS-BLOG-2.png";

const StyledMiniBlogPost = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const StyledImageContainer = styled.div`
`;

const StyledTextWrapper = styled.div`
`;

export default function MiniBlogPost() {
  return(
    <StyledMiniBlogPost>
      <StyledImageContainer></StyledImageContainer>
      <StyledTextWrapper>
        <Text
          $type="h1"
          $weight="bold"
          $size="extra-large"
          $color="var(--cordis-black)"
        >
          Elevate Your Stay: How to Make the Most of Cordis Dining        
        </Text>
        <Text
            $typeFace="secondary"
            $spacing=".01em"
            $weight="bold"
            $size="large"
          >
            Have any questions or need assistance? 
          </Text>
      </StyledTextWrapper>
    </StyledMiniBlogPost>
  )
}