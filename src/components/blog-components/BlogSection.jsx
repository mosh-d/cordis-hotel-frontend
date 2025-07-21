import { styled } from "styled-components";
import Text from "../shared/Text";
import BlogPost from "../shared/BlogPost";
import MiniBlogPost from "../shared/MiniBlogPost";

const StyledBlogSection = styled.div`
  display: flex;
  padding: 12rem;
  gap: 6rem;
  width: 100%;
  align-items: center;
  background-color: var(--cordis-emphasis);
`;

const StyledBlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cordis-white);
  width: 50%;
`;

const StyledMainBlogContainer = styled.div`
`;

const StyledMiniBlogWrapper = styled.div`
  display: flex;
`;

export default function BlogSection() {
  return (
    <StyledBlogSection>
      <StyledBlogContainer>
        <StyledMainBlogContainer>
          <BlogPost />
        </StyledMainBlogContainer>
        <StyledMiniBlogWrapper>
          <MiniBlogPost />
          <MiniBlogPost />
        </StyledMiniBlogWrapper>
      </StyledBlogContainer>
      <Text $weight="bold" $size="large">
        Ad Section
      </Text>
    </StyledBlogSection>
  );
}
