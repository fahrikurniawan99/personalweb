"use client";
import Container from "../../components/Container";
import BlogListHeader from "../../components/BlogListHeader";
import { dummyPost } from "../constants/dummyPost";
import BlogPreviewCard from "../../components/BlogPreviewCard";
import * as React from "react";
import { BlogService } from "@/app/blog/api/blog";

type LatestPost = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  content: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  slug: string;
};

export default function LatestPost() {
  const Blog = new BlogService();
  const [latestPosts, setLatestPosts] = React.useState<LatestPost[]>([]);

  const getBlogs = React.useCallback(async () => {
    try {
      const response = await Blog.getBlogList();
      console.log(response.data);

      setLatestPosts(response.data as LatestPost[]);
    } catch (error) {
      console.log(error);
    }
  }, [Blog]);

  React.useEffect(() => {
    getBlogs();

    return () => {};
  }, [getBlogs]);
  return (
    <Container className="py-20 md:py-44 tracking-tight">
      <BlogListHeader
        title=" Unlock the Secrets of Web Development Excellence! 🚀"
        description="Dive into our latest blog for expert insights, tips, and trends that will elevate your online presence. Don't miss out – click here to explore the world of cutting-edge web development now! 💻✨ #WebDevRevolution #ExploreInnovation"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-20">
        {latestPosts.length > 0 &&
          latestPosts.map((post, index) => (
            <BlogPreviewCard
              key={index}
              imageUrl={post.thumbnail}
              previewContent={post.description}
              publishDate={post.publishedAt}
              slug={post.slug}
              title={post.title}
            />
          ))}
      </div>
    </Container>
  );
}
