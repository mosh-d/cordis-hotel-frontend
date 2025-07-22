import { styled } from "styled-components";
import Text from "../shared/Text";
import BlogPost from "../shared/BlogPost";
import MiniBlogPost from "../shared/MiniBlogPost";
import BLOGS from "../../util/blog-data";

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
  width: 70%;
  align-items: center;
  gap: 4.8rem;
`;

const StyledMainBlogContainer = styled.div``;

const StyledMiniBlogWrapper = styled.div`
  // padding: 0 .8rem;
  display: flex;
  gap: 1.8rem;
  width: 98%;
  overflow: auto;
  padding-bottom: 4.8rem;
`;

const StyledCTAContainer = styled.div`
`

const StyledMainCTA = styled.div`
`

const StyledCTAText = styled.div`
`

export default function BlogSection() {
  return (
    <StyledBlogSection>
      <StyledBlogContainer>
        <StyledMainBlogContainer>
          <BlogPost
            image={BLOGS[0].image}
            title={BLOGS[0].title}
            content={BLOGS[0].content}
          />
        </StyledMainBlogContainer>
        <StyledMiniBlogWrapper>
          <MiniBlogPost
            id={0}
            image={BLOGS[0].image}
            title={BLOGS[0].title}
            caption={BLOGS[0].caption}
          />
          <MiniBlogPost
            id={1}
            image={BLOGS[1].image}
            title={BLOGS[1].title}
            caption={BLOGS[1].caption}
          />
          <MiniBlogPost
            id={2}
            image={BLOGS[2].image}
            title={BLOGS[2].title}
            caption={BLOGS[2].caption}
          />
        </StyledMiniBlogWrapper>
      </StyledBlogContainer>
      <StyledCTAContainer>
        <StyledMainCTA></StyledMainCTA>
        <StyledCTAText></StyledCTAText>
      </StyledCTAContainer>
      <Text $weight="bold" $size="large">
        Ad Section
      </Text>
    </StyledBlogSection>
  );
}
