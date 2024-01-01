import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";

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
  return (
    <div className="h-[400px] w-full text-zinc-600 flex flex-col">
      <div className="bg-zinc-200 h-[200px] w-full rounded-md overflow-hidden">
        <Image alt="" sizes="100vw" src={imageUrl} />
      </div>
      <Link
        href={`/blog/${slug}`}
        className="mt-3 font-semibold text-lg underline"
      >
        {title}
      </Link>
      <p>{previewContent}</p>
      <p className="mt-auto text-sm text-zinc-500 flex items-center gap-2">
        <FaCalendar /> {publishDate}
      </p>
    </div>
  );
}
