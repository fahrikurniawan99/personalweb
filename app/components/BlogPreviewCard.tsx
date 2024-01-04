import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

type Props = {
  imageUrl: string;
  title: string;
  previewContent: string;
  publishDate: string;
  slug: string;
};

export default function BlogPreviewCard({
  imageUrl,
  previewContent,
  publishDate,
  slug,
  title,
}: Props) {
  console.log(imageUrl);

  return (
    <div className="h-[400px] w-full text-zinc-600 flex flex-col">
      <div className="h-[180px] w-full rounded-md relative overflow-hidden">
        <img
          alt={slug}
          className="object-cover w-full h-[200px]"
          src={`http://localhost:1337${imageUrl}`}
        />
      </div>
      <Link
        href={`/blog/${slug}`}
        className="mt-3 font-semibold text-lg underline"
      >
        {title}
      </Link>
      <p className="line-clamp-3">{previewContent}</p>
      <p className="mt-auto text-sm text-zinc-500 flex items-center gap-2">
        <FaCalendar /> {dayjs(publishDate).fromNow()}
      </p>
    </div>
  );
}
