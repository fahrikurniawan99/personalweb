import React from "react";
import Container from "../../components/Container";
import BlogListHeader from "../../components/BlogListHeader";
import { dummyPost } from "../constants/dummyPost";
import BlogPreviewCard from "../../components/BlogPreviewCard";

export default function LatestPost() {
  return (
    <Container className="py-44 tracking-tight">
      <BlogListHeader
        title=" Unlock the Secrets of Web Development Excellence! 🚀"
        description="Dive into our latest blog for expert insights, tips, and trends that will elevate your online presence. Don't miss out – click here to explore the world of cutting-edge web development now! 💻✨ #WebDevRevolution #ExploreInnovation"
      />
      <div className="grid grid-cols-3 gap-5 mt-20">
        {dummyPost.map((post) => (
          <BlogPreviewCard
            imageUrl={post.imageUrl}
            previewContent={post.previewContent}
            publishDate={post.publishDate}
            slug={post.slug}
            title={post.title}
          />
        ))}
      </div>
    </Container>
  );
}
