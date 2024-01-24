"use client";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Markdown from "react-markdown";
import Container from "../../components/Container";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { BlogPost, BlogService } from "../api/blog";
import * as React from "react";
import { useParams } from "next/navigation";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function DetailBlog() {
  const Blog = new BlogService();
  const params = useParams();
  const [blog, setBlog] = React.useState<BlogPost<string>>();

  const getDetailBlog = React.useCallback(async function () {
    try {
      const response = await Blog.getBlogDetail(params.slug as string);
      const data = response.data;
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  }, [Blog, params.slug]);

  React.useEffect(() => {
    getDetailBlog();

    return () => {};
  }, [getDetailBlog]);

  return (
    <div>
      {blog && (
        <>
          <Container className="my-20">
            <div className="w-full h-[250px] md:h-[500px] aspect-video">
              <img
                alt={blog.title}
                src={`https://api-blog.fahrikurniawan.com${blog.thumbnail}`}
                className="h-[250px] md:h-[500px] w-full object-cover"
              />
            </div>
            <h1 className="font-bold text-xl md:text-3xl tracking-tight text-zinc-700 mt-10">
              {blog.title}
            </h1>
            <p className="text-zinc-500 text tracking-tight leading-relaxed mt-2">
              {blog.description}
            </p>
            <div className="flex justify-between items-center mb-10">
              <div className="flex mt-8 gap-3 items-center">
                <div className="h-12 aspect-square bg-zinc-400 rounded-full"></div>
                <div className="">
                  <h1 className="font-bold text-blue-950 ">Fahri Kurniawan</h1>
                  <p className="tracking-tight text-zinc-500 -mt-1 text-sm">
                    Frontend Developer
                  </p>
                </div>
              </div>
              <span className="text-blue-600">
                {dayjs(blog.publishedAt).fromNow()}
              </span>
            </div>
            <Markdown
              className={"text-zinc-700"}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-bold text-lg md:text-2xl mb-3">
                    {children}
                  </h1>
                ),
                h3: ({ children }) => (
                  <h3 className="font-medium md:mt-5 mt-4">{children}</h3>
                ),
                p: ({ children }) => <p className="mt-1">{children}</p>,
                code: ({ children }) => (
                  <SyntaxHighlighter
                    customStyle={{ marginTop: 20 }}
                    language="javascript"
                    style={github}
                  >
                    {String(children)}
                  </SyntaxHighlighter>
                ),
              }}
            >
              {blog.content}
            </Markdown>
            <p className="text-center mt-32 text-zinc-500">
              Share this Article
            </p>
            <div className="justify-center flex mt-3 gap-4 ">
              <button className="h-12 rounded bg-green-600 aspect-square flex justify-center items-center">
                <FaWhatsapp className="text-white text-xl" />
              </button>
              <button className="h-12 rounded bg-blue-600 aspect-square flex justify-center items-center">
                <FaFacebook className="text-white text-xl" />
              </button>
              <button className="h-12 rounded bg-gray-400 to-blue-500 aspect-square flex justify-center items-center">
                <FaCopy className="text-white text-xl" />
              </button>
              <button className="h-12 rounded bg-blue-500 aspect-square flex justify-center items-center">
                <FaTwitter className="text-white text-xl" />
              </button>
            </div>
          </Container>
        </>
      )}
    </div>
  );
}
