import { styled } from "styled-components";
import { useState, useEffect } from "react";
import BlogPost from "../shared/BlogPost";
import MiniBlogPost from "../shared/MiniBlogPost";
import Ad from "../shared/Ad";
import { media } from "../../util/breakpoints";
import { Link as RouterLink, useLocation} from "react-router-dom";

const StyledBlogSection = styled.div`
  display: flex;
  padding: 12rem;
  gap: 6rem;
  width: 100%;
  align-items: center;
  background-color: var(--cordis-emphasis);

  ${media.desktop} {
    gap: 2rem;
    padding: 12rem 6rem;
  }

  ${media.tablet} {
    flex-direction: column;
    padding: 12rem 4rem;
    gap: 12rem;
  }

  ${media.mobile} {
    padding: 12rem 2rem;
  }
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

  ${media.tablet} {
    width: 100%;
  }
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
    background-color: var(--cordis-text-color);
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

  ${media.tablet} {
    width: 70%;
  }

  ${media.mobile} {
    width: 90%;
  }
`;

export default function BlogSection() {
  const [activeBlog, setActiveBlog] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHashnodeBlogs() {
      const query = `
        query {
          publication(host: "test007.hashnode.dev") {
            posts(first: 10) {
              edges {
                node {
                  title
                  brief
                  slug
                  coverImage {
                    url
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        const json = await res.json();
        const fetchedBlogs = json.data.publication.posts.edges.map(({ node }) => ({
          title: node.title,
          caption: node.brief,
          image: node.coverImage?.url,
          slug: node.slug,
        }));

        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching Hashnode blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHashnodeBlogs();
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Loading blogs...</p>;
  if (blogs.length === 0) return <p style={{ padding: "2rem" }}>No blogs found.</p>;

  return (
    <StyledBlogSection>
      <StyledBlogContainer>
        <StyledMainBlogContainer id="main">
          <BlogPost
            image={blogs[activeBlog].image}
            title={blogs[activeBlog].title}
            content={blogs[activeBlog].caption}
          />
        </StyledMainBlogContainer>
        <StyledMiniBlogWrapper>
          {blogs.map((blog, index) => (
            <MiniBlogPost
              key={index}
              onSelect={() => setActiveBlog(index)}
              href="#main"
              image={blog.image}
              title={blog.title}
              caption={blog.caption}
            />
          ))}
        </StyledMiniBlogWrapper>
      </StyledBlogContainer>
      <StyledAdContainer>
        <Ad />
      </StyledAdContainer>
    </StyledBlogSection>
  );
}
