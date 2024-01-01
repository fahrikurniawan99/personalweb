import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function BlogListHeader({ description, title }: Props) {
  return (
    <>
      <h1 className="font-bold text-3xl text-zinc-700">{title}</h1>
      <p className="mt-2 text-zinc-500 text-lg leading-relaxed">
        {description}
      </p>
    </>
  );
}
