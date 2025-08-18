import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Text from "../shared/Text";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

export default function FullBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      const query = `
        query GetPost($slug: String!, $host: String!) {
          publication(host: $host) {
            post(slug: $slug) {
              title
              content {
                html
              }
              coverImage {
                url
              }
            }
          }
        }
      `;
  
      try {
        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query,
            variables: {
              slug,
              host: "test007.hashnode.dev", // 👈 make sure this matches your blog domain
            },
          }),
        });
  
        const json = await res.json();
        console.log("Hashnode response:", json);

        setBlog(json.data?.publication?.post || null);
      } catch (error) {
        console.error("Error fetching full blog:", error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchBlog();
  }, [slug]);
    

  if (loading) return <p>Loading full blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div style={{ padding: "4rem" }}>
      <RouterLink to="..">
        <RiArrowLeftLine color="var(--cordis-black)" size="3rem" />
      </RouterLink>
      <Text $type="h1">{blog.title}</Text>
      {blog.coverImage && (
        <img
          src={blog.coverImage.url}
          alt={blog.title}
          style={{ width: "100%", marginTop: "2rem", borderRadius: "12px" }}
        />
      )}
      <div
        style={{ marginTop: "2rem" }}
        dangerouslySetInnerHTML={{ __html: blog.content.html }}
      />
    </div>
  );
}
