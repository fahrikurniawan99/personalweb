import React from "react";
import Container from "../../components/Container";
import { FaGithub, FaLinkedinIn, FaTiktok, FaYoutube } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";

const CONTENT_ICON_CLASSNAME = "text-white text-xl";

const SocialMedia = [
  {
    bgColorClass: "bg-blue-600",
    contentIcon: <FaLinkedinIn className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.linkedin.com/in/mohamadfahrikurniawan/",
  },
  {
    bgColorClass: "bg-zinc-600",
    contentIcon: <FaGithub className={CONTENT_ICON_CLASSNAME} />,
    url: "https://github.com/fahrikurniawan99",
  },
  {
    bgColorClass: "bg-red-600",
    contentIcon: <FaYoutube className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.youtube.com/",
  },
  {
    bgColorClass: "bg-gray-900",
    contentIcon: <FaTiktok className={CONTENT_ICON_CLASSNAME} />,
    url: "https://www.tiktok.com/",
  },
];

export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-sky-100">
        <Container className="h-[calc(100vh-80px)] flex flex-col justify-center tracking-tight">
          <h1 className="text-2xl font-bold text-sky-900">Hello World 👋</h1>
          <h2 className="mt-1 font-bold text-4xl text-sky-900">
            Discover what awaits within
          </h2>
          <p className="text-2xl tracking-tight leading-relaxed mt-3 text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur cupiditate laboriosam maiores minima beatae totam
            reiciendis voluptas. Velit itaque dignissimos fuga nesciunt beatae?
            Sequi dolorum nemo voluptatem quas tempore!
          </p>
          <p className="text-xl mt-20 font-semibold text-zinc-500">
            Touch me in 👇
          </p>
          <div className="flex mt-3 gap-4">
            {SocialMedia.map((item) => {
              return (
                <Link
                  href={item.url}
                  target="_blank"
                  className={clsx(
                    "h-12 rounded  aspect-square flex justify-center items-center",
                    item.bgColorClass
                  )}
                >
                  {item.contentIcon}
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
}
