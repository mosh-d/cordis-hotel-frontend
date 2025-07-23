import { styled } from "styled-components";
import { useState } from "react";
import Text from "../shared/Text";
import BlogPost from "../shared/BlogPost";
import MiniBlogPost from "../shared/MiniBlogPost";
import BLOGS from "../../util/blog-data";
import Ad from "../shared/Ad";

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
  box-shadow: var(--popup-xl);
  padding-bottom: 1.8rem;
`;

const StyledMainBlogContainer = styled.div``;

const StyledMiniBlogWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  width: 98%;
  overflow: auto;
  padding-bottom: 4.8rem;

  &::-webkit-scrollbar {
      width: .1rem;
      height: .5rem;
    }

  &::-webkit-scrollbar-track {
    background-color: var(--cordis-light-gray);
    height: .5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--cordis-black);
    height: .5rem;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const StyledAdContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120rem;
  width: 30%;
`;

export default function BlogSection() {
  const [activeBlog, setActiveBlog] = useState(0);

  return (
    <StyledBlogSection>
      <StyledBlogContainer>
        <StyledMainBlogContainer id="main">
          <BlogPost
            image={BLOGS[activeBlog].image}
            title={BLOGS[activeBlog].title}
            content={BLOGS[activeBlog].content}
          />
        </StyledMainBlogContainer>
        <StyledMiniBlogWrapper>
          <MiniBlogPost
            onSelect={() => setActiveBlog(0)}
            href="#main"
            image={BLOGS[0].image}
            title={BLOGS[0].title}
            caption={BLOGS[0].caption}
          />
          <MiniBlogPost
            onSelect={() => setActiveBlog(1)}
            href="#main"
            image={BLOGS[1].image}
            title={BLOGS[1].title}
            caption={BLOGS[1].caption}
          />
          <MiniBlogPost
            onSelect={() => setActiveBlog(2)}
            href="#main"
            image={BLOGS[2].image}
            title={BLOGS[2].title}
            caption={BLOGS[2].caption}
          />
        </StyledMiniBlogWrapper>
      </StyledBlogContainer>
      <StyledAdContainer>
        <Ad />
      </StyledAdContainer>
    </StyledBlogSection>
  );
}
