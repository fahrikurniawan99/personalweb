import clsx from "clsx";
import * as React from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div
      className={clsx("w-[100%] mx-auto max-w-[1024px] px-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
